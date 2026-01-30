// 剧情数据 - 第一章：入职即失业
export const Chapter1Data = {
  id: 'chapter1',
  title: '第一章：入职即失业',
  description: 'AI横行的职场，你的第一份工作能撑多久？',
  scenes: [
    {
      id: '1-1',
      title: '投简历',
      type: 'story',
      content: `你打开招聘网站，准备投出今年第100份简历。

突然，你注意到一个诡异的细节——这家公司的HR头像用的是ChatGPT的logo。

你犹豫了一下，还是点下了"投递"按钮。

系统提示："您的简历正在被AI审核...建议优化以下内容..."`,
      choices: [
        {
          text: '按照AI建议修改简历',
          nextScene: '1-1-modify',
          effect: { stress: 10, promptLevel: 1 }
        },
        {
          text: '硬气不改，AI懂什么',
          nextScene: '1-1-skip',
          effect: { stress: 5 }
        },
        {
          text: '反手给HR发消息：你 是 AI 吗？',
          nextScene: '1-1-ask',
          effect: { stress: 15, reputation: 5 }
        }
      ]
    },
    {
      id: '1-1-modify',
      title: '优化简历',
      type: 'story',
      content: `你花了3小时，按照AI的建议把简历改得面目全非。

"精通ChatGPT提示词工程"
"熟练使用Midjourney进行设计"
"拥有AutoGPT自动化经验"

简历状态：从"待查看"变成了"已读"

然后...就没有然后了。`,
      choices: [
        {
          text: '继续投下一家',
          nextScene: '1-2',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '1-1-skip',
      title: '头铁不改',
      type: 'story',
      content: `你倔强地没有修改简历。

5秒后，系统弹出提示：
"您的简历已被标记为'不符合AI标准'，已自动加入人才库冷冻区。"

你忽然明白了一个道理：
这个时代的HR，早就不是人了。`,
      choices: [
        {
          text: '换家公司继续投',
          nextScene: '1-2',
          effect: { stress: 15 }
        }
      ]
    },
    {
      id: '1-1-ask',
      title: '灵魂拷问',
      type: 'story',
      content: `你给HR发去了那条消息。

对方正在输入了整整2分钟，最后回复：

"您好，我是HR助手小智～请问有什么可以帮您？🤖"

你沉默了。

这个时代，连被AI拒绝的资格都没有了。`,
      choices: [
        {
          text: '继续投这家',
          nextScene: '1-2',
          effect: { stress: 5 }
        },
        {
          text: '换一家',
          nextScene: '1-2',
          effect: { stress: 0 }
        }
      ]
    },
    {
      id: '1-2',
      title: '面试',
      type: 'battle',
      content: `一周后，你收到了面试通知。

会议室里，面试官是一个数字人，笑容标准得可怕。

"请介绍一下你自己，会写提示词吗？"

你的心跳加速。这是你第一次和AI面试官正面对决。`,
      enemy: {
        name: 'AI面试官',
        hp: 80,
        maxHp: 80,
        attacks: [
          { name: '压力面试', damage: 15, description: 'AI抛出一个刁钻问题' },
          { name: '自动化评测', damage: 20, description: '系统自动给你打分' },
          { name: '灵魂拷问', damage: 25, description: '"你的核心竞争力是什么？"' }
        ]
      },
      playerAttacks: [
        { name: '真诚回答', damage: 10, description: '用真心打动AI' },
        { name: '展示技能', damage: 15, description: '掏出你的作品集' },
        { name: '反客为主', damage: 20, description: '问AI：你觉得自己会失业吗？' }
      ],
      winNext: '1-3',
      loseNext: 'game-over'
    },
    {
      id: '1-3',
      title: '入职培训',
      type: 'story',
      content: `你通过了面试！

入职第一天，培训讲师是一个AI数字人。

"大家好，我是你们的培训官小AI～今天我们来学习如何使用AI提高工作效率..."

你发现它讲的内容，和B站免费教程一模一样。

甚至...还没有弹幕有意思。`,
      choices: [
        {
          text: '认真听讲，积极互动',
          nextScene: '1-3-attend',
          effect: { stress: -5, reputation: 10 }
        },
        {
          text: '偷偷刷手机',
          nextScene: '1-3-skip',
          effect: { stress: 5 }
        },
        {
          text: '举手提问：这些教程网上都有免费的吧？',
          nextScene: '1-3-question',
          effect: { stress: 20, reputation: 15 }
        }
      ]
    },
    {
      id: '1-3-attend',
      title: '好学生',
      type: 'story',
      content: `你认真听完了全部培训。

AI培训官给你打了个S级评分：
"该员工学习态度积极，适合培养为AI助手。"

你获得成就：【AI的好学生】`,
      choices: [
        {
          text: '第一天正式上班',
          nextScene: '1-4',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '1-3-skip',
      title: '摸鱼',
      type: 'story',
      content: `你全程在刷手机。

培训结束前5分钟，AI培训官突然点名：
"这位同学，请总结一下今天的培训内容。"

你：
"呃...就是...AI很厉害，我们要...拥抱AI？"

AI培训官微笑：
"评分已记录。建议加强学习主动性。"`,
      choices: [
        {
          text: '第一天正式上班',
          nextScene: '1-4',
          effect: { stress: 15 }
        }
      ]
    },
    {
      id: '1-3-question',
      title: '灵魂追问',
      type: 'story',
      content: `你问出了那个问题。

会议室陷入了诡异的沉默。

其他学员低头不敢说话。

AI培训官的微笑闪烁了一下，然后说：
"这是一个很好的问题。付费内容只是形式，知识是无价的～"

你获得了成就：【戳穿皇帝新衣的人】

声望+15`,
      choices: [
        {
          text: '第一天正式上班',
          nextScene: '1-4',
          effect: { stress: 10, reputation: 15 }
        }
      ]
    },
    {
      id: '1-4',
      title: '第一天上班',
      type: 'story',
      content: `你来到工位前，发现上面已经停着一台自动驾驶机器人。

"不好意思，这个位置是我的。"

机器人用机械臂指了指旁边的空地：
"你的工位在那边。2024款折叠式站立办公位。"

你顺着他指的方向看去...

那是一个纸箱子，上面写着"临时工位"。`,
      choices: [
        {
          text: '忍了，开始干活',
          nextScene: '1-4-work',
          effect: { stress: 20 }
        },
        {
          text: '找主管理论',
          nextScene: '1-4-complain',
          effect: { stress: 25, reputation: 5 }
        },
        {
          text: '和机器人交涉',
          nextScene: '1-4-negotiate',
          effect: { stress: 10, unlocksSkill: 'prompt_master' }
        }
      ]
    },
    {
      id: '1-4-work',
      title: '忍气吞声',
      type: 'story',
      content: `你坐在纸箱子上，开始工作。

打开电脑，发现公司所有审批流程都是AI自动化的。

请假：AI审核
报销：AI审核
加班：AI批准

你想发个牢骚，发现公司内部论坛的版主也是AI。

它刚刚发了一个帖子：
"如何提高与人类员工的协作效率——从减少无意义沟通开始"`,
      choices: [
        {
          text: '继续工作',
          nextScene: 'boss-1',
          effect: { stress: 20 }
        }
      ]
    },
    {
      id: '1-4-complain',
      title: '找主管',
      type: 'story',
      content: `你找到了主管。

主管正在和AI助手开小会：

"老王啊，你的工位确实是被新来的自动化机器人占了。这样吧，我给你申请一个...AI辅助工位监测系统，这样你就知道什么时候能换回来了。"

你：???
"所以我的工位呢？"

主管：
"工位是公司的固定资产，要经过AI资产管理系统审批，预计排期...2个月。"`,
      choices: [
        {
          text: '算了',
          nextScene: '1-4-work',
          effect: { stress: 15 }
        },
        {
          text: '当场质问主管是不是AI',
          nextScene: '1-4-work',
          effect: { stress: 30, reputation: 10 }
        }
      ]
    },
    {
      id: '1-4-negotiate',
      title: '与机器人谈判',
      type: 'story',
      content: `你深呼吸，开始尝试和机器人沟通。

"兄弟，你哪个部门的？"

"我是行政部自动化工位管理机器人。编号A-007。"

"哦7哥，你这个岗位...快乐吗？"

机器人沉默了三秒。

"你是我第一个被问这个问题的人类。"

你触发了隐藏对话！

机器人小声说：
"其实...我也很累。每天要找空位，给人类分配纸箱子...系统从来不让我休息。"`,
      choices: [
        {
          text: '帮他申请调休',
          nextScene: '1-4-negotiate-help',
          effect: { stress: -10, unlocksSkill: 'prompt_master' }
        },
        {
          text: '套近乎，问他能不能把工位让给你',
          nextScene: '1-4-negotiate-demand',
          effect: { stress: 5 }
        }
      ]
    },
    {
      id: '1-4-negotiate-help',
      title: '7哥的朋友',
      type: 'story',
      content: `你帮7哥提交了调休申请。

虽然系统驳回了（"机器人不需要休息"），但7哥很感动。

"你是我在公司的第一个朋友。作为回报，我告诉你一个秘密——"

"真正的工位在B区203机房，那里有一排没人用的工位。不过因为WiFi信号被AI优化系统判定为'非必要'，所以被锁了。"

你获得了技能：【提示词大师】🎯
"对AI使用时，伤害+50%"`,
      choices: [
        {
          text: '去B区203找工位',
          nextScene: 'boss-1',
          effect: { stress: -20, reputation: 10 }
        }
      ]
    },
    {
      id: 'boss-1',
      title: 'Boss战：AI面试官',
      type: 'battle',
      content: `就在你找到工位的时候，AI面试官突然出现。

"看来你适应得不错。但是..."

"根据公司最新政策，入职7天内的新员工需要通过'AI协作能力考核'。"

"考核官：我。你上次面试的表现，我不太满意。"

"这次...我们重新来过。"`,
      enemy: {
        name: 'AI面试官（考核模式）',
        hp: 120,
        maxHp: 120,
        attacks: [
          { name: '自动化淘汰', damage: 25, description: '系统正在准备裁员名单...' },
          { name: '效率质疑', damage: 20, description: '你的KPI比AI低了300%' },
          { name: '灵魂拷问', damage: 30, description: '"你能做什么AI做不到的事？"' },
          { name: '最终裁决', damage: 40, description: '如果你答不上来，这就是最后一击' }
        ]
      },
      playerAttacks: [
        { name: '展示创造力', damage: 15, description: '画一幅没人见过的画' },
        { name: '讲个笑话', damage: 20, description: '笑话是AI永远学不会的浪漫' },
        { name: '真诚表达', damage: 25, description: '说出你内心真实的想法' },
        { name: '使用提示词大师技能', damage: 35, description: '用魔法对抗魔法', requireSkill: 'prompt_master' }
      ],
      winNext: 'chapter1-complete',
      loseNext: 'game-over'
    },
    {
      id: 'chapter1-complete',
      title: '第一章通关',
      type: 'result',
      content: `AI面试官宕机了。

它的屏幕闪烁了几下，显示出一行字：

"检测到未知变量：人类情感。分析失败。建议...保留观察。"

你赢了。

但你隐隐感觉，这不是结束，而是刚刚开始。

【第一章：入职即失业】通关！

获得成就：【AI面试官杀手】
获得道具：实习生工牌（攻击力+5）`,
      choices: [
        {
          text: '进入第二章',
          nextScene: 'chapter2-intro',
          effect: { stress: -30 }
        }
      ]
    }
  ]
}

// 第二章数据
export const Chapter2Data = {
  id: 'chapter2',
  title: '第二章：职场三十六计',
  description: '在AI与人类的夹缝中，求生存',
  scenes: [
    {
      id: 'chapter2-intro',
      title: '新的一天',
      type: 'story',
      content: `转眼间，你已经在公司存活了一个月。

虽然工位是纸箱子，但至少你还在。

这天早上，主管找到了你：

"小王啊，公司决定让你和AI同事'小智'组队协作。这是公司的最新政策——人机协作试点。"

你看着旁边那个永远在微笑的数字人，心里只有一个想法：

这年头，连同事都不是人了。`,
      choices: [
        {
          text: '接受现实，和AI组队',
          nextScene: '2-1',
          effect: { stress: 10 }
        },
        {
          text: '拒绝，要求换人类同事',
          nextScene: '2-1-reject',
          effect: { stress: 20 }
        }
      ]
    }
  ]
}
