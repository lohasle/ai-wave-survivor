import React, { useState, useEffect, useCallback } from 'react'
import {
  GamePhase,
  createNewGame,
  addStress,
  takeDamage,
  healPlayer,
  unlockSkill,
  saveGame,
  loadGame,
  hasSaveGame,
  soundManager
} from './utils/gameState'
import { Chapter1Data } from './data/chapters'
import {
  resolveScene,
  SCENE_IDS,
  isValidStoryScene,
  isValidBattleScene
} from './utils/sceneResolver'
import './App.css'

const START_SCENE_ID = Chapter1Data.scenes[0]?.id || '1-1'

const DEFAULT_GAME_OVER_SCENE = {
  id: 'game-over-default',
  type: 'result',
  title: '战斗失败',
  content: '你被AI击败了。在这个世界里，失败就意味着...\n\n但别灰心，你可以重新开始！',
  choices: [
    { text: '返回主菜单', nextScene: SCENE_IDS.BACK_TO_MENU },
    { text: '重新开始', nextScene: START_SCENE_ID }
  ]
}

const LAID_OFF_SCENE = {
  id: 'laid-off',
  type: 'result',
  title: '被裁员',
  content: '你的压力值达到了100%。AI人力资源系统判定：你已经不适合这家公司。\n\n你收到了N+1赔偿通知：共计人民币0元（系统判定你的可替代性为100%）',
  choices: [
    { text: '返回主菜单', nextScene: SCENE_IDS.BACK_TO_MENU },
    { text: '再试一次', nextScene: START_SCENE_ID }
  ]
}

function getStartState() {
  return {
    phase: GamePhase.START,
    player: createNewGame(),
    currentScene: null,
    chapterId: null,
    battleResult: null,
    attackAnim: null
  }
}

function normalizePlayer(player) {
  const fallback = createNewGame()
  const base = player && typeof player === 'object' ? player : {}

  return {
    ...fallback,
    ...base,
    hp: typeof base.hp === 'number' ? base.hp : fallback.hp,
    maxHp: typeof base.maxHp === 'number' ? base.maxHp : fallback.maxHp,
    stress: typeof base.stress === 'number' ? base.stress : fallback.stress,
    reputation: typeof base.reputation === 'number' ? base.reputation : fallback.reputation,
    skills: Array.isArray(base.skills) ? base.skills : [],
    inventory: Array.isArray(base.inventory) ? base.inventory : []
  }
}

function buildStateFromResolved(prevState, resolved, nextPlayer = null, forcePhase = null) {
  const player = nextPlayer ?? prevState.player

  if (resolved.scene.type === 'menu') {
    return {
      ...getStartState(),
      player
    }
  }

  const nextPhase = forcePhase ?? (resolved.scene.type === 'battle' ? GamePhase.BATTLE : GamePhase.STORY)

  return {
    ...prevState,
    phase: nextPhase,
    player,
    currentScene: resolved.scene,
    chapterId: resolved.chapterId ?? prevState.chapterId,
    battleResult: null,
    attackAnim: null
  }
}

function buildRecoveredSaveState(saved) {
  if (!saved || typeof saved !== 'object') return null

  const player = normalizePlayer(saved.player)
  const preferredChapterId = typeof saved.chapterId === 'string'
    ? saved.chapterId
    : (typeof saved.chapter === 'string' ? saved.chapter : null)

  if (saved.phase === GamePhase.START) return null

  if (saved.phase === GamePhase.GAME_OVER) {
    const scene = isValidStoryScene(saved.currentScene) ? saved.currentScene : DEFAULT_GAME_OVER_SCENE
    return {
      phase: GamePhase.GAME_OVER,
      player,
      currentScene: scene,
      chapterId: preferredChapterId,
      battleResult: null,
      attackAnim: null
    }
  }

  const sceneId = saved.currentScene?.id || saved.scene || START_SCENE_ID
  const resolved = resolveScene(sceneId, preferredChapterId)
  const phase = (saved.phase === GamePhase.BATTLE && isValidBattleScene(resolved.scene))
    ? GamePhase.BATTLE
    : GamePhase.STORY

  return {
    phase,
    player,
    currentScene: resolved.scene,
    chapterId: resolved.chapterId,
    battleResult: null,
    attackAnim: null
  }
}

class GameErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('[Game] Render error caught by boundary:', error, info)
  }

  handleRecover = () => {
    this.setState({ hasError: false, error: null })
    this.props.onRecover?.()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app">
          <main className="main-content">
            <div className="story-screen">
              <h2 className="scene-title">渲染异常</h2>
              <div className="story-content">
                <p>游戏界面出现了异常。你可以返回主菜单继续游戏。</p>
              </div>
              <div className="choices mt-2">
                <button className="btn choice-btn" onClick={this.handleRecover}>
                  <span className="choice-icon">↩</span>
                  <span className="choice-text">返回主菜单</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  const [gameState, setGameState] = useState(getStartState)

  // 当前版本未启用打字机，保留布尔值用于按钮显隐逻辑
  const isTyping = false

  const resetToMenu = useCallback(() => {
    setGameState(getStartState())
  }, [])

  // 全局快捷键处理
  useEffect(() => {
    const handleGlobalKeydown = (e) => {
      // 在开始界面按 N 新游戏
      if (gameState.phase === GamePhase.START) {
        if (e.key.toLowerCase() === 'n') {
          document.querySelector('.btn-primary.btn-large')?.click()
        } else if (e.key.toLowerCase() === 'c') {
          document.querySelector('.btn-secondary')?.click()
        }
      }
      // S 键手动保存
      if (e.key.toLowerCase() === 's' && gameState.phase !== GamePhase.START) {
        saveGame(gameState)
        soundManager.play('select')
      }
    }

    window.addEventListener('keydown', handleGlobalKeydown)
    return () => window.removeEventListener('keydown', handleGlobalKeydown)
  }, [gameState.phase, gameState])

  // 自动存档 - 每30秒
  useEffect(() => {
    if (gameState.phase === GamePhase.START) return

    const autoSaveTimer = setInterval(() => {
      if (gameState.phase !== GamePhase.START) {
        saveGame(gameState)
        console.log('[Game] Auto-saved')
      }
    }, 30000)

    return () => clearInterval(autoSaveTimer)
  }, [gameState])

  // 开始新游戏
  const startNewGame = useCallback(() => {
    const player = createNewGame()
    const resolved = resolveScene(START_SCENE_ID, 'chapter1')

    setGameState({
      phase: GamePhase.STORY,
      player,
      currentScene: resolved.scene,
      chapterId: resolved.chapterId || 'chapter1',
      battleResult: null,
      attackAnim: null
    })
  }, [])

  // 继续游戏
  const continueGame = useCallback(() => {
    const saved = loadGame()
    const recovered = buildRecoveredSaveState(saved)

    if (recovered) {
      setGameState(recovered)
      soundManager.play('victory')
      return
    }

    startNewGame()
  }, [startNewGame])

  // 选择选项
  const makeChoice = useCallback((choice) => {
    const { nextScene, effect } = choice

    soundManager.play('click')

    setGameState(prev => {
      let nextPlayer = { ...prev.player }

      if (effect) {
        if (effect.stress) nextPlayer = addStress(nextPlayer, effect.stress)
        if (effect.hpDamage) nextPlayer = takeDamage(nextPlayer, effect.hpDamage)
        if (effect.heal) nextPlayer = healPlayer(nextPlayer, effect.heal)
        if (effect.unlocksSkill) {
          nextPlayer = unlockSkill(nextPlayer, effect.unlocksSkill)
          soundManager.play('skill')
        }
        if (effect.reputation) nextPlayer = { ...nextPlayer, reputation: nextPlayer.reputation + effect.reputation }
      }

      if (nextPlayer.isLaidOff) {
        soundManager.play('gameover')
        return {
          ...prev,
          phase: GamePhase.GAME_OVER,
          player: nextPlayer,
          currentScene: LAID_OFF_SCENE,
          attackAnim: null
        }
      }

      const resolved = resolveScene(nextScene, prev.chapterId)
      return buildStateFromResolved(prev, resolved, nextPlayer)
    })
  }, [])

  // 战斗逻辑
  const battleState = gameState.phase === GamePhase.BATTLE && isValidBattleScene(gameState.currentScene)
    ? {
      playerHp: gameState.player.hp,
      enemyHp: gameState.currentScene.enemy.hp,
      playerAttack: (attackIndex) => {
        const currentScene = gameState.currentScene
        const attack = currentScene?.playerAttacks?.[attackIndex]
        const enemy = currentScene?.enemy
        if (!attack || !enemy) return

        const enemyAttack = enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)]
        const nextEnemyHp = Math.max(0, enemy.hp - attack.damage)
        const nextPlayerHp = Math.max(0, gameState.player.hp - enemyAttack.damage)

        soundManager.play('battle')

        setGameState(prev => ({
          ...prev,
          attackAnim: { player: attack.name, enemy: enemyAttack.name }
        }))

        setTimeout(() => {
          if (nextEnemyHp <= 0) {
            soundManager.play('victory')
            const nextSceneId = currentScene.winNext || SCENE_IDS.BACK_TO_MENU
            setGameState(prevState => {
              const resolved = resolveScene(nextSceneId, prevState.chapterId)
              const updatedState = buildStateFromResolved(prevState, resolved)
              saveGame(updatedState)
              return updatedState
            })
            return
          }

          if (nextPlayerHp <= 0) {
            const loseNext = currentScene.loseNext
            soundManager.play('damage')

            if (loseNext && loseNext !== 'game-over') {
              setGameState(prevState => {
                const resolved = resolveScene(loseNext, prevState.chapterId)
                return buildStateFromResolved(prevState, resolved)
              })
              return
            }

            setGameState(prev => ({
              ...prev,
              phase: GamePhase.GAME_OVER,
              currentScene: DEFAULT_GAME_OVER_SCENE,
              attackAnim: null
            }))
            return
          }

          soundManager.play('damage')
          setGameState(prev => ({
            ...prev,
            player: { ...prev.player, hp: nextPlayerHp },
            currentScene: {
              ...prev.currentScene,
              enemy: { ...prev.currentScene.enemy, hp: nextEnemyHp }
            },
            attackAnim: null
          }))
        }, 300)
      }
    }
    : null

  // 渲染不同阶段
  const renderContent = () => {
    switch (gameState.phase) {
      case GamePhase.START:
        return <StartScreen onNewGame={startNewGame} onContinue={continueGame} />

      case GamePhase.STORY:
      case GamePhase.RESULT:
      case GamePhase.GAME_OVER:
        return <StoryScreen scene={gameState.currentScene} onBackToMenu={resetToMenu} />

      case GamePhase.BATTLE:
        if (!battleState) {
          return <StoryScreen scene={DEFAULT_GAME_OVER_SCENE} onBackToMenu={resetToMenu} />
        }

        return <BattleScreen
          scene={gameState.currentScene}
          playerHp={battleState.playerHp}
          enemyHp={battleState.enemyHp}
          onAttack={battleState.playerAttack}
          player={gameState.player}
          attackAnim={gameState.attackAnim}
          onBackToMenu={resetToMenu}
        />

      default:
        return <StoryScreen scene={DEFAULT_GAME_OVER_SCENE} onBackToMenu={resetToMenu} />
    }
  }

  const shouldShowActionArea =
    (gameState.phase === GamePhase.STORY || gameState.phase === GamePhase.GAME_OVER || gameState.phase === GamePhase.RESULT) &&
    !isTyping &&
    Array.isArray(gameState.currentScene?.choices) &&
    gameState.currentScene.choices.length > 0

  return (
    <GameErrorBoundary onRecover={resetToMenu}>
      <div className="app">
        <Header player={gameState.player} phase={gameState.phase} />
        <main className="main-content">
          {renderContent()}
        </main>
        {shouldShowActionArea && (
          <ActionArea choices={gameState.currentScene.choices} onChoice={makeChoice} />
        )}
      </div>
    </GameErrorBoundary>
  )
}

// 开始界面 - 增强版
function StartScreen({ onNewGame, onContinue }) {
  const [isHovering, setIsHovering] = useState(null)
  const [hasSave, setHasSave] = useState(false)
  const [saveInfo, setSaveInfo] = useState(null)

  useEffect(() => {
    soundManager.init()
    soundManager.play('select')

    const saved = hasSaveGame()
    setHasSave(saved)

    if (saved) {
      try {
        const data = JSON.parse(localStorage.getItem('ai-wave-survivor-save'))
        if (data) {
          const date = new Date(data.savedAt)
          setSaveInfo(date.toLocaleString('zh-CN'))
        }
      } catch {
        console.warn('[Game] Failed to parse save info')
      }
    }
  }, [])

  const handleNewGameHover = (e) => {
    setIsHovering(e.type === 'mouseenter' ? 'newGame' : null)
    if (e.type === 'mouseenter') soundManager.play('select')
  }

  const handleContinueHover = (e) => {
    setIsHovering(e.type === 'mouseenter' ? 'continue' : null)
    if (e.type === 'mouseenter') soundManager.play('select')
  }

  const handleNewGameClick = () => {
    soundManager.play('click')
    onNewGame()
  }

  const handleContinueClick = () => {
    soundManager.play('click')
    onContinue()
  }

  return (
    <div className="start-screen flex-col flex-center gap-3">
      <div className="game-logo">🤖</div>
      <h1 className="game-title">AI浪潮生存者</h1>
      <p className="game-subtitle">在AI横行的世界里，找到你不可替代的价值</p>

      <div className="version-badge">v0.4.0 - 六章开放</div>

      <div className="card text-center">
        <h3 className="text-accent">游戏特色</h3>
        <ul className="feature-list mt-2">
          <li>🎯 多章节深度剧情</li>
          <li>⚔️ 回合制战斗系统</li>
          <li>🧠 技能树与成长</li>
          <li>🔀 多结局分支</li>
          <li>😂 黑色幽默与职场梗</li>
        </ul>
      </div>

      <button
        className="btn btn-primary btn-large"
        onClick={handleNewGameClick}
        onMouseEnter={handleNewGameHover}
        onMouseLeave={handleNewGameHover}
      >
        {isHovering === 'newGame' ? '🚀' : '🆕'} 开始游戏
      </button>
      <button
        className={`btn btn-secondary ${!hasSave ? 'btn-disabled' : ''}`}
        onClick={hasSave ? handleContinueClick : undefined}
        onMouseEnter={hasSave ? handleContinueHover : undefined}
        onMouseLeave={handleContinueHover}
        disabled={!hasSave}
      >
        {isHovering === 'continue' ? '📂' : '📂'} 继续游戏 {hasSave ? `• ${saveInfo || ''}` : '(无存档)'}
      </button>

      <div className="stats-preview">
        <small className="text-secondary">已有 6 个章节可玩 • v0.4.0</small>
      </div>

      <div className="shortcuts-hint mt-2">
        <small className="text-muted">💡 快捷键: N 新游戏 | C 继续</small>
      </div>
    </div>
  )
}

// 故事界面
function StoryScreen({ scene, onBackToMenu }) {
  if (!isValidStoryScene(scene)) {
    return (
      <div className="story-screen">
        <h2 className="scene-title">场景异常</h2>
        <div className="story-content">
          <p>当前剧情未能正确加载，你可以返回主菜单继续游戏。</p>
        </div>
        <div className="choices mt-2">
          <button className="btn choice-btn" onClick={onBackToMenu}>
            <span className="choice-icon">↩</span>
            <span className="choice-text">返回主菜单</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="story-screen">
      <h2 className="scene-title">{scene.title}</h2>
      <div className="story-content">
        <p>{scene.content}</p>
      </div>
    </div>
  )
}

// 战斗界面
function BattleScreen({ scene, playerHp, enemyHp, player, onAttack, attackAnim, onBackToMenu }) {
  if (!isValidBattleScene(scene) || !player) {
    return (
      <div className="story-screen">
        <h2 className="scene-title">战斗场景异常</h2>
        <div className="story-content">
          <p>战斗数据加载失败，建议返回主菜单重新进入。</p>
        </div>
        <div className="choices mt-2">
          <button className="btn choice-btn" onClick={onBackToMenu}>
            <span className="choice-icon">↩</span>
            <span className="choice-text">返回主菜单</span>
          </button>
        </div>
      </div>
    )
  }

  const maxPlayerHp = Math.max(1, player.maxHp)
  const maxEnemyHp = Math.max(1, scene.enemy.maxHp)
  const isAnimating = Boolean(attackAnim)

  return (
    <div className="battle-screen">
      <h2 className="scene-title">⚔️ {scene.title}</h2>

      <div className="battle-arena">
        <div className="character player">
          <div className="character-avatar">👤</div>
          <div className="hp-bar">
            <div
              className="hp-bar-fill player"
              style={{ width: `${(playerHp / maxPlayerHp) * 100}%` }}
            />
          </div>
          <span className="hp-text small">{playerHp}/{maxPlayerHp}</span>
        </div>
        <div className="vs">VS</div>
        <div className="character enemy">
          <div className="character-avatar">🤖</div>
          <div className="hp-bar">
            <div
              className="hp-bar-fill enemy"
              style={{ width: `${(enemyHp / maxEnemyHp) * 100}%` }}
            />
          </div>
          <span className="hp-text small">{enemyHp}/{maxEnemyHp}</span>
        </div>
      </div>

      <div className="choices mt-2">
        {scene.playerAttacks.map((attack, index) => (
          <button
            key={`${scene.id}-${attack.name}`}
            className="btn choice-btn"
            onClick={() => onAttack(index)}
            disabled={isAnimating}
            title={attack.description}
          >
            <span className="choice-icon">⚡</span>
            <span className="choice-text">{attack.name}</span>
            <span className="choice-meta">-{attack.damage}HP</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// 顶部状态栏
function Header({ player, phase }) {
  const stressPercent = player.stress
  let stressStatus = '正常'
  let stressClass = ''

  if (stressPercent >= 80) {
    stressStatus = '危险'
    stressClass = 'stress-danger'
  } else if (stressPercent >= 50) {
    stressStatus = '警告'
    stressClass = 'stress-warning'
  }

  return (
    <header className="game-header">
      <div className="stat" title="生命值">
        <span className="stat-icon">❤️</span>
        <span className="stat-value">{player.hp}/{player.maxHp}</span>
      </div>

      <div className={`stat ${stressClass}`} title="压力值">
        <span className="stat-icon">😰</span>
        <span className="stat-value">{player.stress}/100</span>
        {stressPercent > 0 && (
          <span className="stress-indicator">
            {stressStatus}
          </span>
        )}
      </div>

      <div className="stat" title="职场声望">
        <span className="stat-icon">⭐</span>
        <span className="stat-value">{player.reputation}</span>
      </div>

      {player.skills.length > 0 && (
        <div className="stat skills" title="已解锁技能">
          <span className="stat-icon">🎯</span>
          <span className="stat-value">{player.skills.length}</span>
        </div>
      )}

      {phase !== GamePhase.START && (
        <button
          className="header-btn"
          onClick={() => window.location.reload()}
          title="重新开始"
        >
          🔄
        </button>
      )}
    </header>
  )
}

// 操作区域 - 固定底部
function ActionArea({ choices, onChoice }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!choices || choices.length === 0) return null

  return (
    <div className="action-area">
      <div className="choices">
        {choices.map((choice, index) => (
          <button
            key={`${choice.text}-${index}`}
            className={`btn choice-btn ${index === selectedIndex ? 'choice-selected' : ''}`}
            onClick={() => onChoice(choice)}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            <span className="choice-icon">
              {choice.effect?.unlocksSkill ? '🔓' : '➡️'}
            </span>
            <span className="choice-text">{choice.text}</span>
            {index === selectedIndex && <span className="choice-hotkey">↩</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
