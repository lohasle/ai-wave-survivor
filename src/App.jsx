import React, { useState, useEffect, useCallback, useRef } from 'react'
import { GamePhase, createNewGame, addStress, takeDamage, healPlayer, unlockSkill, Skills, saveGame, loadGame, hasSaveGame, soundManager } from './utils/gameState'
import { Chapter1Data, Chapter2Data, Chapter3Data, AllChapters, findSceneById } from './data/chapters'
import './App.css'

function App() {
  const [gameState, setGameState] = useState(() => ({
    phase: GamePhase.START,
    player: createNewGame(),
    currentScene: null,
    chapterId: null,
    battleResult: null
  }))

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

  // 查找场景
  const findScene = useCallback((sceneId, chapterId = gameState.chapterId) => {
    if (sceneId === 'back-to-menu') {
      return { id: 'menu', type: 'menu', title: '主菜单' }
    }
    if (sceneId === 'coming-soon') {
      return Chapter3Data.scenes.find(s => s.id === 'coming-soon')
    }

    if (chapterId) {
      const scene = findSceneById(chapterId, sceneId)
      if (scene) return scene
    }

    for (const chapter of Object.values(AllChapters)) {
      const scene = chapter.scenes.find(s => s.id === sceneId)
      if (scene) return scene
    }

    return null
  }, [gameState.chapterId])

  // 开始新游戏
  const startNewGame = () => {
    setGameState({
      phase: GamePhase.STORY,
      player: createNewGame(),
      currentScene: Chapter1Data.scenes[0],
      chapterId: 'chapter1',
      battleResult: null
    })
  }

  // 继续游戏
  const continueGame = () => {
    const saved = loadGame()
    if (saved) {
      setGameState(saved)
      soundManager.play('victory')
    } else {
      startNewGame()
    }
  }

  // 选择选项
  const makeChoice = (choice) => {
    const { nextScene, effect } = choice

    soundManager.play('click')

    if (effect) {
      let newPlayer = { ...gameState.player }

      if (effect.stress) newPlayer = addStress(newPlayer, effect.stress)
      if (effect.hpDamage) newPlayer = takeDamage(newPlayer, effect.hpDamage)
      if (effect.heal) newPlayer = healPlayer(newPlayer, effect.heal)
      if (effect.unlocksSkill) {
        newPlayer = unlockSkill(newPlayer, effect.unlocksSkill)
        soundManager.play('skill')
      }
      if (effect.reputation) newPlayer = { ...newPlayer, reputation: newPlayer.reputation + effect.reputation }

      if (newPlayer.isLaidOff) {
        soundManager.play('gameover')
        setGameState(prev => ({
          ...prev,
          phase: GamePhase.GAME_OVER,
          currentScene: {
            title: '被裁员',
            content: '你的压力值达到了100%。AI人力资源系统判定：你已经不适合这家公司。\n\n你收到了N+1赔偿通知：共计人民币0元（系统判定你的可替代性为100%）'
          }
        }))
        return
      }

      setGameState(prev => ({
        ...prev,
        player: newPlayer
      }))
    }

    const nextSceneData = findScene(nextScene)
    if (nextSceneData) {
      if (nextSceneData.type === 'battle') {
        setGameState(prev => ({
          ...prev,
          phase: GamePhase.BATTLE,
          currentScene: nextSceneData,
          battleResult: null
        }))
      } else {
        let newChapterId = gameState.chapterId
        if (nextScene === 'chapter2-intro') newChapterId = 'chapter2'
        if (nextScene === 'chapter3-intro') newChapterId = 'chapter3'

        setGameState(prev => ({
          ...prev,
          phase: GamePhase.STORY,
          currentScene: nextSceneData,
          chapterId: newChapterId
        }))
      }
    }
  }

  // 战斗逻辑
  const battleState = gameState.phase === GamePhase.BATTLE ? {
    playerHp: gameState.player.hp,
    enemyHp: gameState.currentScene.enemy?.hp || 0,
    playerAttack: (attackIndex) => {
      const attack = gameState.currentScene.playerAttacks[attackIndex]
      const enemy = gameState.currentScene.enemy
      const newEnemyHp = Math.max(0, enemy.hp - attack.damage)
      const enemyAttack = enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)]
      const newPlayerHp = Math.max(0, gameState.player.hp - enemyAttack.damage)

      soundManager.play('battle')

      setGameState(prev => ({
        ...prev,
        attackAnim: { player: attack.name, enemy: enemyAttack.name }
      }))

      setTimeout(() => {
        if (newEnemyHp <= 0) {
          soundManager.play('victory')
          saveGame(gameState)
          const nextSceneId = gameState.currentScene.winNext
          const nextScene = findScene(nextSceneId)
          if (nextScene) {
            setGameState(prev => ({
              ...prev,
              phase: GamePhase.STORY,
              currentScene: nextScene,
              chapterId: nextSceneId.startsWith('chapter2') ? 'chapter2' :
                         nextSceneId.startsWith('chapter3') ? 'chapter3' : prev.chapterId,
              attackAnim: null
            }))
          }
        } else if (newPlayerHp <= 0) {
          soundManager.play('damage')
          setGameState(prev => ({
            ...prev,
            phase: GamePhase.GAME_OVER,
            currentScene: {
              title: '战斗失败',
              content: '你被AI击败了。在这个世界里，失败就意味着...\n\n但别灰心，你可以重新开始！'
            },
            attackAnim: null
          }))
        } else {
          soundManager.play('damage')
          setGameState(prev => ({
            ...prev,
            player: { ...prev.player, hp: newPlayerHp },
            currentScene: {
              ...prev.currentScene,
              enemy: { ...prev.currentScene.enemy, hp: newEnemyHp }
            },
            attackAnim: null
          }))
        }
      }, 300)
    }
  } : null

  // 渲染不同阶段
  const renderContent = () => {
    switch (gameState.phase) {
      case GamePhase.START:
        return <StartScreen onNewGame={startNewGame} onContinue={continueGame} />

      case GamePhase.STORY:
      case GamePhase.RESULT:
      case GamePhase.GAME_OVER:
        return <StoryScreen
          scene={gameState.currentScene}
          player={gameState.player}
          onChoice={makeChoice}
          isGameOver={gameState.phase === GamePhase.GAME_OVER}
        />

      case GamePhase.BATTLE:
        return <BattleScreen
          scene={gameState.currentScene}
          playerHp={battleState.playerHp}
          enemyHp={battleState.enemyHp}
          onAttack={battleState.playerAttack}
          player={gameState.player}
          attackAnim={gameState.attackAnim}
        />

      default:
        return <div>未知状态</div>
    }
  }

  return (
    <div className="app">
      <Header player={gameState.player} phase={gameState.phase} />
      <main className="main-content">
        {renderContent()}
      </main>
      {gameState.phase === GamePhase.STORY && !isTyping && gameState.currentScene?.choices && (
        <ActionArea choices={gameState.currentScene.choices} onChoice={makeChoice} />
      )}
    </div>
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
      } catch (e) {
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

      <div className="version-badge">v0.2.0 - 第二章开放</div>

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
        <small className="text-secondary">已有 2 个章节可玩 • v0.2.0</small>
      </div>

      <div className="shortcuts-hint mt-2">
        <small className="text-muted">💡 快捷键: N 新游戏 | C 继续</small>
      </div>
    </div>
  )
}

// 故事界面 - 增强版
function StoryScreen({ scene }) {
  // 简化：只显示内容，打字效果由 action-area 控制
  return (
    <div className="story-screen">
      <h2 className="scene-title">{scene.title}</h2>
      <div className="story-content">
        <p>{scene.content}</p>
      </div>
    </div>
  )
}

// 战斗界面 - 简化版
function BattleScreen({ scene, playerHp, enemyHp, player }) {
  const maxPlayerHp = player.maxHp
  const maxEnemyHp = scene.enemy.maxHp

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

      {phase === GamePhase.STORY && (
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

  // 如果没有 choices，不显示
  if (!choices || choices.length === 0) return null

  return (
    <div className="action-area">
      <div className="choices">
        {choices.map((choice, index) => (
          <button
            key={index}
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
