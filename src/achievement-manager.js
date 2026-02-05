// 成就系统核心模块
// Achievements System Core Module

const AchievementManager = {
  // 成就定义
  achievements: {
    // 战斗类
    'first_win': {
      id: 'first_win',
      name: '初出茅庐',
      description: '在任意战斗中获得首次胜利',
      icon: '⚔️',
      category: 'combat',
      points: 100,
      unlockCondition: (stats) => stats.wins >= 1
    },
    'combo_king': {
      id: 'combo_king',
      name: '连击之王',
      description: '单次战斗达成10连击',
      icon: '🔥',
      category: 'combat',
      points: 300,
      unlockCondition: (stats) => stats.maxCombo >= 10
    },
    'boss_killer': {
      id: 'boss_killer',
      name: 'Boss猎手',
      description: '击败任意Boss',
      icon: '👑',
      category: 'combat',
      points: 500,
      unlockCondition: (stats) => stats.bossWins >= 1
    },

    // 剧情类
    'chapter_1_complete': {
      id: 'chapter_1_complete',
      name: '第一章毕业',
      description: '完成第一章「入职即失业」',
      icon: '📖',
      category: 'story',
      points: 200,
      unlockCondition: (stats) => stats.chapterProgress >= 1
    },
    'all_endings': {
      id: 'all_endings',
      name: '结局收藏家',
      description: '解锁所有7种结局',
      icon: '🏆',
      category: 'story',
      points: 1000,
      unlockCondition: (stats) => stats.endingsUnlocked >= 7
    },

    // 成长类
    'level_10': {
      id: 'level_10',
      name: '职场新秀',
      description: '角色达到10级',
      icon: '⭐',
      category: 'growth',
      points: 150,
      unlockCondition: (stats) => stats.level >= 10
    },
    'max_skill': {
      id: 'max_skill',
      name: '技能满级',
      description: '任意技能升级到最高级',
      icon: '💪',
      category: 'growth',
      points: 400,
      unlockCondition: (stats) => Object.values(stats.skillLevels).some(lvl => lvl === 5)
    },

    // 隐藏类
    'easter_egg': {
      id: 'easter_egg',
      name: '彩蛋猎人',
      description: '发现游戏中的隐藏彩蛋',
      icon: '🥚',
      category: 'hidden',
      points: 800,
      unlockCondition: (stats) => stats.easterEggsFound >= 1,
      hidden: true
    }
  },

  // 检查并解锁成就
  checkUnlocks(stats) {
    const newlyUnlocked = [];

    for (const [id, achievement] of Object.entries(this.achievements)) {
      if (!stats.unlockedAchievements.includes(id) && achievement.unlockCondition(stats)) {
        newlyUnlocked.push({
          id,
          ...achievement,
          unlockedAt: Date.now()
        });
        stats.unlockedAchievements.push(id);
        stats.totalPoints += achievement.points;
      }
    }

    return newlyUnlocked;
  },

  // 生成成就卡分享图
  generateShareCard(achievementId) {
    const achievement = this.achievements[achievementId];
    return {
      template: 'achievement_card',
      data: {
        icon: achievement.icon,
        name: achievement.name,
        description: achievement.description,
        points: achievement.points,
        unlockedAt: new Date().toLocaleDateString('zh-CN')
      }
    };
  },

  // 获取成就进度
  getProgress(achievementId, stats) {
    const achievement = this.achievements[achievementId];

    if (achievement.category === 'combat') {
      return {
        current: stats.wins,
        target: 10,
        percentage: Math.min(100, (stats.wins / 10) * 100)
      };
    } else if (achievement.category === 'story') {
      return {
        current: stats.chapterProgress,
        target: 4,
        percentage: Math.min(100, (stats.chapterProgress / 4) * 100)
      };
    }

    return { current: 0, target: 100, percentage: 0 };
  },

  // 获取分类成就
  getByCategory(category) {
    return Object.entries(this.achievements)
      .filter(([id, a]) => a.category === category)
      .map(([id, a]) => ({ id, ...a }));
  },

  // 获取成就统计
  getStats(stats) {
    return {
      totalUnlocked: stats.unlockedAchievements.length,
      totalAvailable: Object.keys(this.achievements).length,
      totalPoints: stats.totalPoints,
      percentage: (stats.unlockedAchievements.length / Object.keys(this.achievements).length) * 100
    };
  }
};

module.exports = AchievementManager;
