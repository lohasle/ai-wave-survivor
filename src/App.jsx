import React, { useState, useEffect, useCallback } from 'react'
import { GamePhase, createNewGame, addStress, takeDamage, healPlayer, unlockSkill, Skills } from './utils/gameState'
import { Chapter1Data } from './data/chapters'
import './App.css'

function App() {
  const [gameState, setGameState] = useState(() => ({
    phase: GamePhase.START,
    player: createNewGame(),
    currentScene: null,
    battleResult: null
  }))

  // 音效系统（预留）
  const playSound = useCallback((type) => {
    // TODO: 后续添加音效
  }, [])

  // 开始新游戏
  const startNewGame = () => {
    setGameState({
      phase: GamePhase.STORY,
      player: createNewGame(),
      currentScene: Chapter1Data.scenes[0],
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
        setGameState(prev => ({
          ...prev,
          phase: GamePhase.STORY,
          currentScene: nextSceneData
        }))
      }
    }
  }

  // 查找场景
  const findScene = (sceneId) => {
    if (sceneId === 'chapter1-complete') {
      return {
        id: 'chapter1-complete',
        title: '第一章完成',
        type: 'result',
        content: '第一章通关！更多内容开发中...'
      }
    }
    return Chapter1Data.scenes.find(s => s.id === sceneId)
  }

  // 战斗逻辑
  const battleState = gameState.phase === GamePhase.BATTLE ? {
    playerHp: gameState.player.hp,
    enemyHp: gameState.currentScene.enemy?.hp || 0,
    playerAttack: (attackIndex) => {
      const attack = gameState.currentScene.playerAttacks[attackIndex]
      const newEnemyHp = gameState.currentScene.enemy.hp - attack.damage
      const newPlayerHp = gameState.player.hp - (gameState.currentScene.enemy.attacks[Math.floor(Math.random() * 3)].damage)
      
      if (newEnemyHp <= 0) {
        setGameState(prev => ({
          ...prev,
          phase: GamePhase.RESULT,
          battleResult: { win: true }
        }))
      } else if (newPlayerHp <= 0) {
        setGameState(prev => ({
          ...prev,
          phase: GamePhase.GAME_OVER,
          currentScene: {
            title: '战斗失败',
            content: '你被AI击败了。在这个世界里，失败就意味着...'
          }
        }))
      } else {
        setGameState(prev => ({
          ...prev,
          player: { ...prev.player, hp: newPlayerHp },
          currentScene: {
            ...prev.currentScene,
            enemy: { ...prev.currentScene.enemy, hp: newEnemyHp }
          }
        }))
      }
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
        />
      
      default:
        return <div>未知状态</div>
    }
  }

  return (
    <div className="app">
      <Header player={gameState.player} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

// 开始界面
function StartScreen({ onNewGame, onContinue }) {
  return (
    <div className="start-screen flex-col flex-center gap-3">
      <h1 className="game-title">🤖 AI浪潮生存者 💼</h1>
      <p className="game-subtitle">在AI横行的世界里，找到你不可替代的价值</p>
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
      <button className="btn btn-primary" onClick={onNewGame}>
        🆕 新游戏
      </button>
      <button className="btn btn-secondary" onClick={onContinue}>
        📂 继续游戏
      </button>
    </div>
  )
}

// 故事界面
function StoryScreen({ scene, player, onChoice, isGameOver }) {
  return (
    <div className="story-screen">
      <h2 className="scene-title">{scene.title}</h2>
      <div className="card story-content">
        <p>{scene.content}</p>
      </div>
      <div className="choices mt-2">
        {scene.choices?.map((choice, index) => (
          <button 
            key={index}
            className="btn btn-secondary choice-btn"
            onClick={() => onChoice(choice)}
          >
            {choice.text}
          </button>
        ))}
      </div>
      {isGameOver && (
        <div className="game-over-overlay">
          <h2 className="text-accent">游戏结束</h2>
        </div>
      )}
    </div>
  )
}

// 战斗界面
function BattleScreen({ scene, playerHp, enemyHp, onAttack, player }) {
  const maxPlayerHp = player.maxHp
  const maxEnemyHp = scene.enemy.maxHp
  
  return (
    <div className="battle-screen">
      <h2 className="scene-title">⚔️ {scene.title}</h2>
      
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
            <span key={i} className="attack-badge">
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
          {scene.playerAttacks.map((attack, index) => (
            <button 
              key={index}
              className="btn btn-primary action-btn"
              onClick={() => onAttack(index)}
              disabled={playerHp <= 0}
            >
              <span className="action-name">{attack.name}</span>
              <span className="action-damage">💥 {attack.damage}</span>
              <span className="action-desc">{attack.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// 顶部状态栏
function Header({ player }) {
  return (
    <header className="game-header">
      <div className="stat">
        <span className="stat-icon">❤️</span>
        <span className="stat-value">{player.hp}/{player.maxHp}</span>
      </div>
      <div className="stat">
        <span className="stat-icon">😰</span>
        <span className="stat-value">{player.stress}/100</span>
      </div>
      <div className="stat">
        <span className="stat-icon">⭐</span>
        <span className="stat-value">{player.reputation}</span>
      </div>
      {player.skills.length > 0 && (
        <div className="stat skills">
          <span className="stat-icon">🎯</span>
          <span className="stat-value">{player.skills.length}</span>
        </div>
      )}
    </header>
  )
}

export default App
