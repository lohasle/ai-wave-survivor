// 游戏平衡系统
// Game Balance System

class GameBalancer {
  constructor() {
    this.difficultyLevels = {
      easy: {
        name: '简单',
        enemyDamageMultiplier: 0.7,
        playerDamageMultiplier: 1.3,
        healMultiplier: 1.2,
        bossHpMultiplier: 0.8
      },
      normal: {
        name: '普通',
        enemyDamageMultiplier: 1.0,
        playerDamageMultiplier: 1.0,
        healMultiplier: 1.0,
        bossHpMultiplier: 1.0
      },
      hard: {
        name: '困难',
        enemyDamageMultiplier: 1.2,
        playerDamageMultiplier: 0.9,
        healMultiplier: 0.8,
        bossHpMultiplier: 1.2
      },
      expert: {
        name: '专家',
        enemyDamageMultiplier: 1.5,
        playerDamageMultiplier: 0.8,
        healMultiplier: 0.7,
        bossHpMultiplier: 1.4
      }
    };
  }

  // 计算战斗难度分数（1-10）
  calculateBattleDifficulty(playerStats, enemyStats) {
    let score = 5; // 基础分

    // 考虑玩家属性
    const playerPower = (playerStats.level || 1) * 2;
    score += Math.min(2, (playerPower - 1) * 0.5);

    // 考虑敌人属性
    const enemyPower = enemyStats.maxHp || 100;
    score += Math.min(2, (enemyPower - 100) / 50);

    // 考虑敌人攻击模式
    if (enemyStats.aiEfficiency && enemyStats.aiEfficiency > 1.2) {
      score += 2; // AI 效率高，难度增加
    }

    // 考虑攻击数量
    const attackCount = enemyStats.attacks ? enemyStats.attacks.length : 3;
    if (attackCount > 5) {
      score += 1; // 攻击过多
    }

    // 考虑特殊能力
    if (enemyStats.specialAbilities && enemyStats.specialAbilities.length > 0) {
      score += 1; // 有特殊能力
    }

    return Math.min(10, Math.max(1, score));
  }

  // 平衡 Boss 战
  balanceBossBattle(bossData, playerStats, difficultyLevel = 'normal') {
    const difficulty = this.difficultyLevels[difficultyLevel] || this.difficultyLevels.normal;
    const playerLevel = playerStats.level || 1;
    const playerSkills = playerStats.skills || [];

    let balancedBoss = { ...bossData };

    // 调整 Boss HP
    balancedBoss.hp = Math.round(
      balancedBoss.hp * difficulty.bossHpMultiplier
    );
    balancedBoss.maxHp = balancedBoss.hp;

    // 调整 Boss 攻击伤害
    if (balancedBoss.attacks) {
      balancedBoss.attacks = balancedBoss.attacks.map(attack => {
        const baseDamage = attack.damage || 10;
        let adjustedDamage = Math.round(baseDamage * difficulty.enemyDamageMultiplier);

        // 玩家有技能时，调整伤害
        playerSkills.forEach(skill => {
          if (skill.name === '提示词大师') {
            adjustedDamage = Math.round(adjustedDamage * 0.8); // 降低 20% 伤害
          }
          if (skill.name === 'AI驯兽师') {
            adjustedDamage = Math.round(adjustedDamage * 0.85); // 降低 15% 伤害
          }
          if (skill.name === '魔法对抗') {
            adjustedDamage = Math.round(adjustedDamage * 0.9); // 降低 10% 伤害
          }
        });

        // 玩家等级加成
        adjustedDamage = Math.round(adjustedDamage * (1 + (playerLevel - 1) * 0.1));

        // 普通模式保持原样
        if (difficultyLevel === 'normal') {
          adjustedDamage = Math.max(8, adjustedDamage); // 最小伤害 8
        }

        return {
          ...attack,
          damage: adjustedDamage
        };
      }));
    }

    // 添加 Boss 弱点提示
    balancedBoss.hints = balancedBoss.hints || [];
    if (playerLevel < 3 && difficultyLevel === 'hard') {
      balancedBoss.hints.push('新手提示：优先使用技能攻击，可以造成额外伤害');
    }

    return balancedBoss;
  }

  // 根据玩家表现动态调整难度
  adjustDifficulty(playerStats, enemyStats, currentDifficulty, playerWinRate) {
    // 如果玩家胜率 > 70%，提升难度
    if (playerWinRate > 0.7 && currentDifficulty !== 'expert') {
      return this.getNextDifficulty(currentDifficulty);
    }
    // 如果玩家胜率 < 30%，降低难度
    if (playerWinRate < 0.3 && currentDifficulty !== 'easy') {
      return this.getPreviousDifficulty(currentDifficulty);
    }

    return currentDifficulty;
  }

  getNextDifficulty(current) {
    const levels = ['easy', 'normal', 'hard', 'expert'];
    const currentIndex = levels.indexOf(current);
    if (currentIndex < levels.length - 1) {
      return levels[currentIndex + 1];
    }
    return 'expert';
  }

  getPreviousDifficulty(current) {
    const levels = ['easy', 'normal', 'hard', 'expert'];
    const currentIndex = levels.indexOf(current);
    if (currentIndex > 0) {
      return levels[currentIndex - 1];
    }
    return 'easy';
  }

  // 计算推荐难度
  getRecommendedDifficulty(playerStats, enemyStats) {
    const difficulty = this.calculateBattleDifficulty(playerStats, enemyStats);

    if (difficulty <= 3) {
      return 'easy';
    } else if (difficulty <= 5) {
      return 'normal';
    } else if (difficulty <= 7) {
      return 'hard';
    } else {
      return 'expert';
    }
  }

  // 保存游戏进度
  saveGameProgress(gameState) {
    const progress = {
      chapter: gameState.chapter,
      scene: gameState.scene,
      player: {
        level: gameState.player.level,
        skills: gameState.player.skills,
        hp: gameState.player.hp,
        maxHp: gameState.player.maxHp
      },
      timestamp: Date.now()
    };

    try {
      localStorage.setItem('aiWaveSurvivor_save', JSON.stringify(progress));
      console.log('[GameBalancer] 游戏进度已保存');
    } catch (error) {
      console.error('[GameBalancer] 保存失败:', error);
    }
  }

  // 加载游戏进度
  loadGameProgress() {
    try {
      const saved = localStorage.getItem('aiWaveSurvivor_save');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('[GameBalancer] 加载失败:', error);
      return null;
    }
  }

  // 获取难度提示
  getDifficultyHint(difficulty) {
    const level = this.difficultyLevels[difficulty];
    return {
      name: level.name,
      enemyDamage: `${Math.round(level.enemyDamageMultiplier * 100)}%`,
      playerDamage: `${Math.round(level.playerDamageMultiplier * 100)}%`,
      bossHp: `${Math.round(level.bossHpMultiplier * 100)}%`
    };
  }
}

module.exports = GameBalancer;
