// 游戏状态管理
export const GamePhase = {
  START: 'start',
  CHAPTER_SELECT: 'chapter_select',
  STORY: 'story',
  BATTLE: 'battle',
  DIALOGUE: 'dialogue',
  EVENT: 'event',
  RESULT: 'result',
  GAME_OVER: 'game_over',
  VICTORY: 'victory'
}

export const ChapterType = {
  MAIN: 'main',
  SIDE: 'side',
  BOSS: 'boss'
}

// 存档键名
const SAVE_KEY = 'ai-wave-survivor-save'

// 初始玩家状态
export const initialPlayerState = {
  hp: 100,
  maxHp: 100,
  stress: 0,        // 压力值，满100被裁员
  skills: [],       // 已解锁技能
  inventory: [],    // 道具
  reputation: 0,    // 职场声望
  promptLevel: 1,   // 提示词等级
  aiPartner: null,  // 驯服的AI伙伴
  storyProgress: {
    chapter1: false,
    chapter2: false,
    chapter3: false,
    chapter4: false
  },
  endings: [],      // 已达成的结局
  currentChapter: null
}

// 创建新游戏
export function createNewGame() {
  return {
    ...initialPlayerState,
    id: Date.now()
  }
}

/**
 * 保存游戏存档
 * @param {object} gameState - 游戏状态
 * @returns {boolean} 是否保存成功
 */
export function saveGame(gameState) {
  try {
    const saveData = {
      ...gameState,
      savedAt: Date.now()
    }
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData))
    console.log('[Game] Game saved successfully')
    return true
  } catch (err) {
    console.error('[Game] Failed to save game:', err)
    return false
  }
}

/**
 * 加载游戏存档
 * @returns {object|null} 游戏状态或null
 */
export function loadGame() {
  try {
    const saved = localStorage.getItem(SAVE_KEY)
    if (!saved) {
      console.log('[Game] No save data found')
      return null
    }
    const data = JSON.parse(saved)
    // 验证存档是否过期（超过7天）
    const maxAge = 7 * 24 * 60 * 60 * 1000
    if (Date.now() - data.savedAt > maxAge) {
      console.log('[Game] Save data expired')
      localStorage.removeItem(SAVE_KEY)
      return null
    }
    console.log('[Game] Game loaded successfully')
    return data
  } catch (err) {
    console.error('[Game] Failed to load game:', err)
    return null
  }
}

/**
 * 删除存档
 */
export function deleteSave() {
  localStorage.removeItem(SAVE_KEY)
  console.log('[Game] Save deleted')
}

/**
 * 检查是否有可继续的存档
 * @returns {boolean}
 */
export function hasSaveGame() {
  try {
    const saved = localStorage.getItem(SAVE_KEY)
    if (!saved) return false
    const data = JSON.parse(saved)
    // 验证存档是否过期
    const maxAge = 7 * 24 * 60 * 60 * 1000
    return (Date.now() - data.savedAt) <= maxAge
  } catch {
    return false
  }
}

// 压力管理
export function addStress(player, amount) {
  const newStress = Math.min(100, Math.max(0, player.stress + amount))
  return {
    ...player,
    stress: newStress,
    isLaidOff: newStress >= 100
  }
}

// HP管理
export function takeDamage(player, amount) {
  const newHp = Math.max(0, player.hp - amount)
  return {
    ...player,
    hp: newHp,
    isDead: newHp <= 0
  }
}

export function healPlayer(player, amount) {
  return {
    ...player,
    hp: Math.min(player.maxHp, player.hp + amount)
  }
}

// 技能系统
export function unlockSkill(player, skillId) {
  if (player.skills.includes(skillId)) return player
  return {
    ...player,
    skills: [...player.skills, skillId]
  }
}

export const Skills = {
  PROMPT_MASTER: {
    id: 'prompt_master',
    name: '提示词大师',
    description: '对AI使用时，伤害+50%',
    icon: '🎯'
  },
  EVIDENCE_KEEPER: {
    id: 'evidence_keeper',
    name: '证据管家',
    description: '被AI抢功时，自动保留证据',
    icon: '📜'
  },
  EFFECTIVE_SPEECH: {
    id: 'effective_speech',
    name: '有效发言',
    description: '开会发言必被采纳',
    icon: '🎤'
  },
  AI_TAMER: {
    id: 'ai_tamer',
    name: 'AI驯兽师',
    description: '可驯服野生AI作为伙伴',
    icon: '🤖'
  },
  EMOTIONAL_MASSAGE: {
    id: 'emotional_massage',
    name: '情感按摩师',
    description: '对人类NPC时，说服率+30%',
    icon: '🧠'
  },
  SCAPEGOAT: {
    id: 'scapegoat',
    name: '背锅侠',
    description: '被裁员时，获得额外赔偿',
    icon: '🔧'
  }
}

/**
 * 音效管理器
 */
class SoundManager {
  constructor() {
    this.enabled = true
    this.audioContext = null
    this.buffers = new Map()
  }

  init() {
    if (this.audioContext) return
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      console.log('[Sound] Audio context initialized')
    } catch (err) {
      console.warn('[Sound] AudioContext not supported:', err)
    }
  }

  setEnabled(enabled) {
    this.enabled = Boolean(enabled)
    console.log(`[Sound] Sound ${this.enabled ? 'enabled' : 'disabled'}`)
  }

  /**
   * 播放简单音效
   * @param {string} type - 音效类型
   */
  play(type) {
    if (!this.enabled || !this.audioContext) return

    const ctx = this.audioContext
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    const now = ctx.currentTime

    switch (type) {
      case 'select':
        // 选择音效 - 高音短促
        oscillator.frequency.setValueAtTime(800, now)
        oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.1)
        gainNode.gain.setValueAtTime(0.1, now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1)
        oscillator.start(now)
        oscillator.stop(now + 0.1)
        break

      case 'click':
        // 点击音效 - 中音
        oscillator.frequency.setValueAtTime(600, now)
        gainNode.gain.setValueAtTime(0.15, now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08)
        oscillator.start(now)
        oscillator.stop(now + 0.08)
        break

      case 'battle':
        // 战斗音效 - 低音冲击
        oscillator.type = 'square'
        oscillator.frequency.setValueAtTime(200, now)
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.15)
        gainNode.gain.setValueAtTime(0.2, now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15)
        oscillator.start(now)
        oscillator.stop(now + 0.15)
        break

      case 'damage':
        // 受伤音效 - 下降音
        oscillator.type = 'sawtooth'
        oscillator.frequency.setValueAtTime(400, now)
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.2)
        gainNode.gain.setValueAtTime(0.15, now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2)
        oscillator.start(now)
        oscillator.stop(now + 0.2)
        break

      case 'victory':
        // 胜利音效 - 上升和弦
        this.playTone(523.25, now, 0.2)      // C5
        this.playTone(659.25, now + 0.1, 0.2) // E5
        this.playTone(783.99, now + 0.2, 0.3) // G5
        break

      case 'gameover':
        // 游戏结束音效 - 下降
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(400, now)
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.5)
        gainNode.gain.setValueAtTime(0.2, now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5)
        oscillator.start(now)
        oscillator.stop(now + 0.5)
        break

      case 'skill':
        // 技能解锁音效 - 魔法音
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(800, now)
        oscillator.frequency.exponentialRampToValueAtTime(1600, now + 0.3)
        gainNode.gain.setValueAtTime(0.1, now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3)
        oscillator.start(now)
        oscillator.stop(now + 0.3)
        break

      default:
        console.warn('[Sound] Unknown sound type:', type)
    }
  }

  playTone(frequency, startTime, duration) {
    if (!this.enabled || !this.audioContext) return
    const ctx = this.audioContext
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.setValueAtTime(frequency, startTime)
    gain.gain.setValueAtTime(0.1, startTime)
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration)
    osc.start(startTime)
    osc.stop(startTime + duration)
  }

  /**
   * 播放背景音乐（占位，未来可扩展）
   */
  playBGM() {
    console.log('[Sound] BGM not implemented yet')
  }

  stopBGM() {
    console.log('[Sound] BGM not implemented yet')
  }
}

// 导出单例
export const soundManager = new SoundManager()
