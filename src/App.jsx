import React, { useState, useEffect, useCallback, useRef } from 'react'
import { GamePhase, createNewGame, addStress, takeDamage, healPlayer, unlockSkill, Skills } from './utils/gameState'
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
          // 模拟点击新游戏按钮
          document.querySelector('.btn-primary.btn-large')?.click()
        } else if (e.key.toLowerCase() === 'c') {
          // 模拟点击继续按钮
          document.querySelector('.btn-secondary')?.click()
        }
      }
    }

    window.addEventListener('keydown', handleGlobalKeydown)
    return () => window.removeEventListener('keydown', handleGlobalKeydown)
  }, [gameState.phase])

  // 查找场景
  const findScene = useCallback((sceneId, chapterId = gameState.chapterId) => {
    if (sceneId === 'back-to-menu') {
      return { id: 'menu', type: 'menu', title: '主菜单' }
    }
    if (sceneId === 'coming-soon') {
      return Chapter3Data.scenes.find(s => s.id === 'coming-soon')
    }
    
    // 优先从当前章节找
    if (chapterId) {
      const scene = findSceneById(chapterId, sceneId)
      if (scene) return scene
    }
    
    // 从所有章节找
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
    // TODO: 从存档继续
    startNewGame()
  }

  // 选择选项
  const makeChoice = (choice) => {
    const { nextScene, effect } = choice
    
    // 应用效果
    if (effect) {
      let newPlayer = { ...gameState.player }
      
      if (effect.stress) newPlayer = addStress(newPlayer, effect.stress)
      if (effect.hpDamage) newPlayer = takeDamage(newPlayer, effect.hpDamage)
      if (effect.heal) newPlayer = healPlayer(newPlayer, effect.heal)
      if (effect.unlocksSkill) newPlayer = unlockSkill(newPlayer, effect.unlocksSkill)
      if (effect.reputation) newPlayer = { ...newPlayer, reputation: newPlayer.reputation + effect.reputation }
      
      // 检查是否被裁员
      if (newPlayer.isLaidOff) {
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

    // 查找下一个场景
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
        // 更新章节ID
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
      
      // 播放攻击动画（通过状态更新触发）
      setGameState(prev => ({
        ...prev,
        attackAnim: { player: attack.name, enemy: enemyAttack.name }
      }))
      
      setTimeout(() => {
        if (newEnemyHp <= 0) {
          // 战斗胜利，跳转到下一个场景
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
    </div>
  )
}

// 开始界面 - 增强版
function StartScreen({ onNewGame, onContinue }) {
  const [isHovering, setIsHovering] = useState(null)

  const handleNewGameHover = (e) => {
    setIsHovering(e.type === 'mouseenter' ? 'newGame' : null)
  }

  const handleContinueHover = (e) => {
    setIsHovering(e.type === 'mouseenter' ? 'continue' : null)
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
        onClick={onNewGame}
        onMouseEnter={handleNewGameHover}
        onMouseLeave={handleNewGameHover}
      >
        {isHovering === 'newGame' ? '🚀' : '🆕'} 开始游戏
      </button>
      <button
        className="btn btn-secondary"
        onClick={onContinue}
        onMouseEnter={handleContinueHover}
        onMouseLeave={handleContinueHover}
      >
        {isHovering === 'continue' ? '📂' : '📂'} 继续游戏
      </button>

      <div className="stats-preview">
        <small className="text-secondary">已有 2 个章节可玩 • v0.2.0</small>
      </div>

      {/* 快捷键提示 */}
      <div className="shortcuts-hint mt-2">
        <small className="text-muted">💡 快捷键: N 新游戏 | C 继续</small>
      </div>
    </div>
  )
}

// 故事界面 - 增强版（打字机效果+键盘导航）
function StoryScreen({ scene, player, onChoice, isGameOver }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [selectedChoice, setSelectedChoice] = useState(0)
  const typingRef = useRef(null)
  const choicesRef = useRef(null)

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)
    setSelectedChoice(0)

    let index = 0
    const text = scene.content
    const speed = 30 // 打字速度 ms

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1))
        index++
        typingRef.current = setTimeout(type, speed)
      } else {
        setIsTyping(false)
      }
    }

    type()

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current)
    }
  }, [scene.content])

  // 键盘导航
  useEffect(() => {
    if (isGameOver || isTyping || !scene.choices) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        setSelectedChoice(prev => Math.min(prev + 1, scene.choices.length - 1))
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        setSelectedChoice(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onChoice(scene.choices[selectedChoice])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isTyping, isGameOver, scene.choices, selectedChoice, onChoice])

  const skipTyping = () => {
    if (typingRef.current) clearTimeout(typingRef.current)
    setDisplayedText(scene.content)
    setIsTyping(false)
  }

  return (
    <div className="story-screen">
      <h2 className="scene-title">
        {scene.title}
        {isTyping && <span className="typing-cursor">|</span>}
      </h2>

      <div className="card story-content" onClick={skipTyping}>
        <p>{displayedText}</p>
        {isTyping && (
          <div className="skip-hint">
            <small>点击或按空格跳过...</small>
          </div>
        )}
      </div>

      {!isTyping && scene.choices && (
        <div className="choices mt-2" ref={choicesRef} style={{ animation: 'slideIn 0.3s ease' }}>
          {scene.choices.map((choice, index) => (
            <button
              key={index}
              className={`btn choice-btn ${index === selectedChoice ? 'choice-selected' : ''}`}
              onClick={() => {
                setSelectedChoice(index)
                onChoice(choice)
              }}
              onMouseEnter={() => setSelectedChoice(index)}
            >
              <span className="choice-icon">
                {choice.effect?.unlocksSkill ? '🔓' : '➡️'}
              </span>
              {choice.text}
              {index === selectedChoice && <span className="choice-hotkey">↩</span>}
            </button>
          ))}
        </div>
      )}

      {isGameOver && (
        <div className="game-over-overlay">
          <h2 className="text-accent">游戏结束</h2>
          <p className="text-secondary mt-1">可以重新开始，尝试不同的选择</p>
          <button className="btn btn-primary mt-2" onClick={() => window.location.reload()}>
            🔄 重新开始
          </button>
        </div>
      )}
    </div>
  )
}

// 战斗界面 - 增强版（键盘操作+伤害数字动画）
function BattleScreen({ scene, playerHp, enemyHp, onAttack, player, attackAnim }) {
  const [selectedAction, setSelectedAction] = useState(0)
  const [damageNumbers, setDamageNumbers] = useState([])
  const maxPlayerHp = player.maxHp
  const maxEnemyHp = scene.enemy.maxHp

  // 键盘控制战斗
  useEffect(() => {
    if (!scene.playerAttacks) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        setSelectedAction(prev => Math.min(prev + 1, scene.playerAttacks.length - 1))
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        setSelectedAction(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        const attack = scene.playerAttacks[selectedAction]
        const isLocked = attack.requireSkill && !player.skills.includes(attack.requireSkill)
        if (!isLocked && playerHp > 0) {
          onAttack(selectedAction)
          // 显示伤害数字
          setDamageNumbers(prev => [...prev, {
            id: Date.now(),
            value: attack.damage,
            isPlayer: true,
            timestamp: Date.now()
          }])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scene.playerAttacks, selectedAction, player.skills, playerHp, onAttack])

  // 清理伤害数字
  useEffect(() => {
    if (damageNumbers.length === 0) return
    const timer = setTimeout(() => {
      setDamageNumbers(prev => prev.filter(d => Date.now() - d.timestamp < 1000))
    }, 1000)
    return () => clearTimeout(timer)
  }, [damageNumbers])

  return (
    <div className="battle-screen">
      <h2 className="scene-title">⚔️ {scene.title}</h2>

      {/* 战斗动画反馈 */}
      {attackAnim && (
        <div className="battle-feedback">
          <span className="attack-text player">{attackAnim.player}</span>
          <span className="vs-small">↔️</span>
          <span className="attack-text enemy">{attackAnim.enemy}</span>
        </div>
      )}

      {/* 伤害数字动画 */}
      {damageNumbers.map(d => (
        <div key={d.id} className={`damage-number ${d.isPlayer ? 'player-damage' : 'enemy-damage'}`}>
          -{d.value}
        </div>
      ))}

      {/* 敌人信息 */}
      <div className="card enemy-card mt-2">
        <div className="enemy-header">
          <span className="enemy-name">👹 {scene.enemy.name}</span>
          <span className="hp-text">{enemyHp}/{maxEnemyHp}</span>
        </div>
        <div className="hp-bar">
          <div
            className="hp-bar-fill enemy"
            style={{ width: `${(enemyHp / maxEnemyHp) * 100}%` }}
          />
        </div>
        <div className="enemy-attacks mt-1">
          <small className="text-secondary">技能：</small>
          {scene.enemy.attacks.map((attack, i) => (
            <span key={i} className="attack-badge" title={attack.description}>
              {attack.name}
            </span>
          ))}
        </div>
      </div>

      {/* 战斗区域 */}
      <div className="battle-arena flex-center mt-3">
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
        </div>
      </div>

      {/* 玩家行动 */}
      <div className="card player-actions mt-2">
        <h3 className="text-accent">你的行动</h3>
        <div className="actions-list mt-1">
          {scene.playerAttacks.map((attack, index) => {
            const isLocked = attack.requireSkill && !player.skills.includes(attack.requireSkill)
            return (
              <button
                key={index}
                className={`btn action-btn ${index === selectedAction ? 'action-selected' : ''} ${isLocked ? 'btn-locked' : 'btn-primary'}`}
                onClick={() => {
                  setSelectedAction(index)
                  if (!isLocked && playerHp > 0) onAttack(index)
                }}
                onMouseEnter={() => setSelectedAction(index)}
                disabled={playerHp <= 0 || isLocked}
              >
                <span className="action-name">
                  {attack.name}
                  {isLocked && <span className="lock-badge">🔒</span>}
                </span>
                <span className="action-damage">💥 {attack.damage}</span>
                <span className="action-desc">{attack.description}</span>
                {index === selectedAction && <span className="action-hotkey">↩</span>}
              </button>
            )
          })}
        </div>
        <div className="action-hints mt-1">
          <small className="text-muted">↑↓ 切换 | Enter 确认</small>
        </div>
      </div>

      {/* 技能提示 */}
      {player.skills.length > 0 && (
        <div className="skills-reminder mt-2">
          <small className="text-secondary">已装备技能：</small>
          <div className="skill-tags">
            {player.skills.map(skillId => {
              const skill = Object.values(Skills).find(s => s.id === skillId)
              return skill ? (
                <span key={skillId} className="skill-tag">
                  {skill.icon} {skill.name}
                </span>
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// 顶部状态栏 - 改进版
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

export default App
