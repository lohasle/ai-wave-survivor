// 用户引导系统
// User Onboarding System

class UserGuide {
  constructor() {
    this.tutorialSteps = [
      {
        id: 'welcome',
        title: '欢迎来到AI浪潮生存者！',
        content: `👋 你好！准备好在AI时代求生了吗？

这是你的第一份工作，也是你的第一场战斗。
我们的目标很简单：在AI面试官的刁钻下，活下去。`,
        actions: [
          {
            type: 'highlight',
            target: 'app-root',
            message: '点击这里开始第一个任务'
          }
        ]
      },
      {
        id: 'character-creation',
        title: '创建你的角色',
        content: `给自己起个名字，设定初始属性。

每个选择都很重要——它们会影响你与AI同事、面试官的交互。

💡 提示：别太完美了，有点缺陷反而更真实。`,
        actions: [
          {
            type: 'input',
            target: 'character-name',
            placeholder: '输入你的名字...',
            validation: 'min: 2, max: 10'
          },
          {
            type: 'select',
            target: 'character-attribute',
            options: [
              { label: '逻辑思维', value: 'logic', description: '擅长分析问题' },
              { label: '创造性', value: 'creative', description: '擅长创新方案' },
              { label: '执行力', value: 'execution', description: '擅长落地实施' }
            ]
          }
        ]
      },
      {
        id: 'first-battle-tutorial',
        title: '你的第一场战斗',
        content: `🎮 了解了！现在来教你如何战斗。

## 战斗界面

**敌人头像**：显示当前面对的敌人（AI面试官/Boss）
**你的状态**：HP、技能、压力值
**技能列表**：点击技能图标使用

## 战斗机制

**回合制**：你出一次，敌人出一次
**伤害计算**：
- 基础伤害：根据你的属性计算
- 技能加成：使用技能可以增加伤害
- 敌人护甲：某些敌人有防御属性
- 暴击：随机触发，造成 1.5 倍伤害

**回复选择**：
- 真诚回答：伤害 +20%，压力 -5%
- 幽默回应：伤害 +10%，压力 0%
- 幽默拷问：伤害 +15%，压力 +10%
- 反客为主：伤害 +25%，压力 -15%

**获胜条件**：将敌人 HP 降为 0
**失败条件**：你的 HP 降为 0

## 💡 战斗技巧

1. **观察敌人类型**：不同敌人对攻击方式有不同响应
2. **合理使用技能**：技能有冷却时间，不要浪费
3. **管理压力值**：压力过高会影响你的表现
4. **选择最佳回应**：根据敌人性格选择

准备好开始你的第一场战斗了吗？`,
        actions: [
          {
            type: 'button',
            text: '开始战斗！',
            action: 'start-first-battle'
          },
          {
            type: 'highlight',
            target: 'skills-section',
            message: '先看看你的技能'
          }
        ]
      },
      {
        id: 'saving-progress',
        title: '保存你的进度',
        content: `📂 游戏会自动保存你的进度。

**自动保存时机**：
- 完成每个场景后
- 战斗结束后
- 升级时

**手动保存**：点击右上角的保存按钮

**存档位置**：浏览器本地存储

⚠️ 注意：清除浏览器数据会导致存档丢失！`,
        actions: [
          {
            type: 'button',
            text: '立即保存',
            action: 'save-now'
          },
          {
            type: 'info',
            text: '如何找回存档？',
            content: '如果丢失，可以通过"继续游戏"功能恢复最后的自动存档'
          }
        ]
      }
    ];

    this.currentStep = 0;
    this.showTutorial = true;
  }

  // 开始教程
  startTutorial() {
    this.currentStep = 0;
    this.showTutorial = true;
    this.showCurrentStep();
  }

  // 显示当前步骤
  showCurrentStep() {
    if (this.currentStep < this.tutorialSteps.length) {
      const step = this.tutorialSteps[this.currentStep];
      this.displayStep(step);
    } else {
      this.completeTutorial();
    }
  }

  // 显示单个教程步骤
  displayStep(step) {
    console.log(`[UserGuide] 显示教程步骤 ${step.id}: ${step.title}`);
    // 这里会触发 UI 显示教程模态框
    this.showTutorialModal(step);
  }

  // 下一步
  nextStep() {
    this.currentStep++;
    this.showCurrentStep();
  }

  // 上一步
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.showCurrentStep();
    }
  }

  // 完成教程
  completeTutorial() {
    this.showTutorial = false;
    console.log('[UserGuide] 教程完成');
    this.hideTutorialModal();
  }

  // 显示教程模态框
  showTutorialModal(step) {
    // 这里会触发 UI 显示模态框
    const modalData = {
      visible: true,
      title: step.title,
      content: step.content,
      actions: step.actions,
      currentStep: this.currentStep,
      totalSteps: this.tutorialSteps.length,
      progress: ((this.currentStep + 1) / this.tutorialSteps.length) * 100
    };

    // 通知 React 组件更新
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('tutorial-update', {
        detail: modalData
      }));
    }
  }

  // 隐藏教程模态框
  hideTutorialModal() {
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('tutorial-update', {
        detail: { visible: false }
      }));
    }
  }

  // 检查是否应该显示教程
  shouldShowTutorial() {
    const savedProgress = localStorage.getItem('aiWaveSurvivor_seenTutorial');
    if (savedProgress === 'true') {
      return false;
    }
    return this.showTutorial;
  }

  // 标记教程为已读
  markTutorialAsSeen() {
    localStorage.setItem('aiWaveSurvivor_seenTutorial', 'true');
  }

  // 获取下一步可执行动作
  getAvailableActions(stepId) {
    const step = this.tutorialSteps.find(s => s.id === stepId);
    return step ? step.actions : [];
  }
}

module.exports = UserGuide;
