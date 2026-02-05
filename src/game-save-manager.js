// 游戏进度管理系统
// Game Progress Management System

class GameSaveManager {
  constructor() {
    this.saveKey = 'aiWaveSurvivor_gameSave';
    this.maxSaveSlots = 5;
    this.autoSaveInterval = 300000; // 5分钟自动保存
    this.autoSaveTimer = null;
  }

  // 获取当前游戏状态
  getGameState() {
    try {
      // 从 localStorage 读取
      const saved = localStorage.getItem(this.saveKey);
      if (saved) {
        const gameState = JSON.parse(saved);
        console.log('[GameSaveManager] 游戏状态已加载');
        return gameState;
      }
      return null;
    } catch (error) {
      console.error('[GameSaveManager] 加载失败:', error);
      return null;
    }
  }

  // 保存游戏状态
  saveGameState(gameState) {
    try {
      // 添加保存时间戳
      const saveData = {
        ...gameState,
        savedAt: Date.now(),
        version: '1.0.0'
      };

      // 保存到 localStorage
      localStorage.setItem(this.saveKey, JSON.stringify(saveData));
      console.log('[GameSaveManager] 游戏状态已保存');

      // 触发保存成功事件
      this.notifySaveSuccess(true);

      // 更新自动存档时间
      this.restartAutoSave();

    } catch (error) {
      console.error('[GameSaveManager] 保存失败:', error);
      this.notifySaveSuccess(false);
    }
  }

  // 手动保存（立即）
  saveNow(gameState) {
    this.saveGameState(gameState);
  }

  // 快速保存（静默，不通知）
  quickSave(gameState) {
    try {
      const saveData = {
        ...gameState,
        savedAt: Date.now(),
        version: '1.0.0'
      };
      localStorage.setItem(this.saveKey, JSON.stringify(saveData));
    } catch (error) {
      console.error('[GameSaveManager] 快速保存失败:', error);
    }
  }

  // 创建存档槽位
  createSaveSlot(slotNumber, gameState) {
    const slotKey = `${this.saveKey}_slot${slotNumber}`;
    const slotData = {
      chapter: gameState.chapter,
      scene: gameState.scene,
      player: {
        level: gameState.player.level,
        skills: gameState.player.skills,
        hp: gameState.player.hp,
        maxHp: gameState.player.maxHp
      },
      savedAt: Date.now(),
      screenshot: gameState.screenshot || null
    };

    localStorage.setItem(slotKey, JSON.stringify(slotData));
    console.log(`[GameSaveManager] 存档槽位 ${slotNumber} 已创建`);
  }

  // 读取存档槽位
  loadSaveSlot(slotNumber) {
    const slotKey = `${this.saveKey}_slot${slotNumber}`;
    try {
      const slotData = localStorage.getItem(slotKey);
      if (slotData) {
        const save = JSON.parse(slotData);
        console.log(`[GameSaveManager] 读取存档槽位 ${slotNumber}`);
        return save;
      }
      return null;
    } catch (error) {
      console.error(`[GameSaveManager] 读取存档槽位 ${slotNumber} 失败:`, error);
      return null;
    }
  }

  // 删除存档槽位
  deleteSaveSlot(slotNumber) {
    const slotKey = `${this.saveKey}_slot${slotNumber}`;
    localStorage.removeItem(slotKey);
    console.log(`[GameSaveManager] 存档槽位 ${slotNumber} 已删除`);
  }

  // 获取所有存档槽位
  getAllSaveSlots() {
    const slots = [];
    for (let i = 0; i < this.maxSaveSlots; i++) {
      const slot = this.loadSaveSlot(i);
      slots.push({
        slotNumber: i,
        data: slot
      });
    }
    return slots;
  }

  // 自动存档
  startAutoSave(gameState) {
    this.stopAutoSave();
    this.autoSaveTimer = setInterval(() => {
      this.quickSave(gameState);
      console.log('[GameSaveManager] 自动存档已完成');
    }, this.autoSaveInterval);
    console.log('[GameSaveManager] 自动存档已启动');
  }

  // 停止自动存档
  stopAutoSave() {
    if (this.autoSaveTimer) {
      clearInterval(this.autoSaveTimer);
      this.autoSaveTimer = null;
      console.log('[GameSaveManager] 自动存档已停止');
    }
  }

  // 重启自动存档（更新游戏状态）
  restartAutoSave() {
    if (this.autoSaveTimer) {
      clearInterval(this.autoSaveTimer);
      this.autoSaveTimer = null;
    }
  }

  // 导出存档
  exportSave(slotNumber) {
    const slot = this.loadSaveSlot(slotNumber);
    if (!slot) {
      console.error(`[GameSaveManager] 存档槽位 ${slotNumber} 为空`);
      return null;
    }

    const exportData = JSON.stringify(slot, null, 2);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // 下载文件
    const link = document.createElement('a');
    link.href = url;
    link.download = `aiWaveSurvivor_save_slot${slotNumber}_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(`[GameSaveManager] 存档槽位 ${slotNumber} 已导出`);
    return slot;
  }

  // 导入存档
  importSave(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const gameState = JSON.parse(e.target.result);
          this.saveNow(gameState);
          resolve(gameState);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => {
        reject(new Error('无法读取文件'));
      };
      reader.readAsText(file);
    });
  }

  // 清空所有存档
  clearAllSaves() {
    // 清空主存档
    localStorage.removeItem(this.saveKey);
    this.stopAutoSave();

    // 清空所有存档槽位
    for (let i = 0; i < this.maxSaveSlots; i++) {
      this.deleteSaveSlot(i);
    }

    // 通知 UI 更新
    this.notifySaveCleared();
    console.log('[GameSaveManager] 所有存档已清空');
  }

  // 检查存档完整性
  validateSave(saveData) {
    const required = ['chapter', 'scene', 'player', 'savedAt'];
    const missing = required.filter(field => !saveData[field]);

    if (missing.length > 0) {
      console.warn('[GameSaveManager] 存档缺少字段:', missing);
      return false;
    }

    // 验证玩家数据
    if (!saveData.player || !saveData.player.level) {
      console.warn('[GameSaveManager] 玩家数据无效');
      return false;
    }

    console.log('[GameSaveManager] 存档验证通过');
    return true;
  }

  // 通知系统（与 UI 集成）
  notifySaveSuccess(success) {
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('game-save', {
        detail: { success, timestamp: Date.now() }
      }));
    }
  }

  notifySaveCleared() {
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('save-cleared', {
        detail: { timestamp: Date.now() }
      }));
    }
  }

  // 获取存档统计
  getSaveStats() {
    const mainSave = this.getGameState();
    const slots = this.getAllSaveSlots();

    return {
      hasMainSave: !!mainSave,
      mainSaveTimestamp: mainSave ? mainSave.savedAt : null,
      slotsUsed: slots.filter(s => s.data !== null).length,
      totalSlots: this.maxSaveSlots,
      oldestSave: this.getOldestSave(slots),
      newestSave: this.getNewestSave(slots)
    };
  }

  getOldestSave(slots) {
    const validSlots = slots.filter(s => s.data && s.data.savedAt);
    if (validSlots.length === 0) return null;
    return validSlots.reduce((oldest, current) => {
      return current.savedAt < oldest.savedAt ? current : oldest;
    });
  }

  getNewestSave(slots) {
    const validSlots = slots.filter(s => s.data && s.data.savedAt);
    if (validSlots.length === 0) return null;
    return validSlots.reduce((newest, current) => {
      return current.savedAt > newest.savedAt ? current : newest;
    });
  }
}

module.exports = GameSaveManager;
