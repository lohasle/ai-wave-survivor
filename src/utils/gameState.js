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
