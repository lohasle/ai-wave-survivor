// 排行榜系统
// Leaderboard System

class Leaderboard {
  constructor(config = {}) {
    this.config = {
      maxEntries: config.maxEntries || 100,
      updateInterval: config.updateInterval || 30000, // 30秒
      ...config
    };
    this.entries = new Map(); // playerId -> { rank, score, lastUpdate }
  }

  // 提交分数
  submitScore(playerId, score, metadata = {}) {
    const entry = {
      playerId,
      score,
      rank: 0,
      lastUpdate: Date.now(),
      ...metadata
    };

    // 更新或插入
    this.entries.set(playerId, entry);
    this.rerank();

    return entry;
  }

  // 重新排名
  rerank() {
    // 按分数排序
    const sorted = Array.from(this.entries.values())
      .sort((a, b) => b.score - a.score);

    // 分配排名
    sorted.forEach((entry, index) => {
      const oldEntry = this.entries.get(entry.playerId);
      oldEntry.rank = index + 1;
    });

    // 裁剪到最大条目数
    const trimmed = sorted.slice(0, this.config.maxEntries);

    // 重建 Map
    this.entries = new Map(
      trimmed.map(entry => [entry.playerId, entry])
    );
  }

  // 获取排行榜
  getLeaderboard(options = {}) {
    const {
      category = 'global',
      limit = 10,
      offset = 0
    } = options;

    let entries = Array.from(this.entries.values());

    // 分类筛选
    if (category === 'global') {
      // 全球排名（默认）
    } else if (category === 'friends') {
      // 好友排名
      entries = entries.filter(e => e.isFriend);
    } else if (category === 'company') {
      // 公司排名
      entries = entries.filter(e => e.companyId === options.companyId);
    }

    return entries.slice(offset, offset + limit);
  }

  // 获取玩家排名
  getPlayerRank(playerId) {
    const entry = this.entries.get(playerId);
    return entry ? {
      rank: entry.rank,
      score: entry.score,
      totalPlayers: this.entries.size
    } : null;
  }

  // 获取前10名
  getTop10() {
    return this.getLeaderboard({ limit: 10 });
  }

  // 计算玩家分数
  calculateScore(stats) {
    return {
      combat: stats.wins * 10,
      story: stats.chapterProgress * 50,
      achievements: stats.totalPoints * 0.5,
      total: (stats.wins * 10) + (stats.chapterProgress * 50) + (stats.totalPoints * 0.5)
    };
  }

  // 格式化排名列表
  formatLeaderboardHtml(entries) {
    return `
      <div class="leaderboard">
        <table>
          <thead>
            <tr>
              <th>排名</th>
              <th>玩家</th>
              <th>分数</th>
              <th>职业</th>
            </tr>
          </thead>
          <tbody>
            ${entries.map((entry, index) => `
              <tr class="${index < 3 ? 'top-3' : ''}">
                <td>#${entry.rank}</td>
                <td>${entry.nickname || entry.playerId}</td>
                <td>${entry.score}</td>
                <td>${entry.jobTitle || '职场新人'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 清理过期条目
  cleanup(expiryMs = 86400000) { // 24小时
    const now = Date.now();
    for (const [playerId, entry] of this.entries.entries()) {
      if (now - entry.lastUpdate > expiryMs) {
        this.entries.delete(playerId);
      }
    }
  }
}

module.exports = Leaderboard;
