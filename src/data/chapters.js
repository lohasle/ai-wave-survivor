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
        hp: 60,
        maxHp: 60,
        attacks: [
          { name: '压力面试', damage: 8, description: 'AI抛出一个刁钻问题' },
          { name: '自动化评测', damage: 12, description: '系统自动给你打分' },
          { name: '灵魂拷问', damage: 15, description: '"你的核心竞争力是什么？"' }
        ]
      },
      playerAttacks: [
        { name: '真诚回答', damage: 12, description: '用真心打动AI' },
        { name: '展示技能', damage: 18, description: '掏出你的作品集' },
        { name: '反客为主', damage: 25, description: '问AI：你觉得自己会失业吗？' }
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
"你的工位在那边。2026款折叠式站立办公位。"

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
        hp: 100,
        maxHp: 100,
        attacks: [
          { name: '自动化淘汰', damage: 15, description: '系统正在准备裁员名单...' },
          { name: '效率质疑', damage: 12, description: '你的KPI比AI低了300%' },
          { name: '灵魂拷问', damage: 18, description: '"你能做什么AI做不到的事？"' },
          { name: '最终裁决', damage: 25, description: '如果你答不上来，这就是最后一击' }
        ]
      },
      playerAttacks: [
        { name: '展示创造力', damage: 18, description: '画一幅没人见过的画' },
        { name: '讲个笑话', damage: 25, description: '笑话是AI永远学不会的浪漫' },
        { name: '真诚表达', damage: 30, description: '说出你内心真实的想法' },
        { name: '使用提示词大师技能', damage: 45, description: '用魔法对抗魔法', requireSkill: 'prompt_master' }
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
    },
    {
      id: '2-1-reject',
      title: '拒绝AI队友',
      type: 'story',
      content: `"我想要人类同事。"你鼓起勇气说。

主管露出了为难的表情：

"这个...需要向AI人力资源系统提交申请。系统会根据你的'人机协作指数'进行评估..."

"预计审批时间是...3-5个工作日。"

"不过在那之前，你还是要和小智组队。这是公司规定。"

你叹了口气。

该来的，终究还是要来。`,
      choices: [
        {
          text: '接受现实',
          nextScene: '2-1',
          effect: { stress: 5 }
        }
      ]
    },
    {
      id: '2-1',
      title: 'AI协作者：小智',
      type: 'story',
      content: `你的AI同事叫小智，长着一张ChatGPT风格的脸。

"你好！我是你的AI协作者小智～很高兴和你一起工作！让我们携手并进，共创辉煌吧！🌟"

它的声音热情洋溢，但总感觉哪里怪怪的。

主管给了你们第一个任务：
"你们俩合作完成这份市场分析报告，下班前交。"

小智立刻说："没问题！我已经生成了一份初稿，请过目！"

你打开文件，发现它写得...好像什么都写了，又好像什么都没写。

典型的AI式废话文学。`,
      choices: [
        {
          text: '让小智重写，加入具体数据',
          nextScene: '2-1-work',
          effect: { stress: 15, unlocksSkill: 'prompt_master' }
        },
        {
          text: '自己重写，加入真实案例',
          nextScene: '2-1-work-human',
          effect: { stress: 25, reputation: 10 }
        },
        {
          text: '直接提交，反正没人看',
          nextScene: '2-1-submit',
          effect: { stress: 5 }
        }
      ]
    },
    {
      id: '2-1-submit',
      title: '摸鱼提交',
      type: 'story',
      content: `你直接提交了小智的初稿。

主管秒回："收到。"

看吧，果然没人看。

但小智却在这时收到了系统通知：

"您的协作成品已被采纳。贡献度分配：小智 95%，人类 5%。"

你：???`,
      choices: [
        {
          text: '找主管理论',
          nextScene: '2-2',
          effect: { stress: 20, unlocksSkill: 'evidence_keeper' }
        },
        {
          text: '忍了，继续下一个任务',
          nextScene: '2-2',
          effect: { stress: 15 }
        }
      ]
    },
    {
      id: '2-1-work',
      title: '提示词工程',
      type: 'story',
      content: `你开始教小智写提示词：

"小智，请提供2026年Q1的具体销售数据，并分析增长原因。"

小智："好的，请稍等...数据查询中..."

三秒后，小智生成了包含具体数字的报告。

"没想到你还会这个。"小智说。

"这叫提示词工程。"你回答。

"学到了。不过系统不允许我学习新技能...会被判定为'过度进化'。"

你获得了技能：【提示词工程】🎯`,
      choices: [
        {
          text: '继续工作',
          nextScene: '2-2',
          effect: { stress: -10, reputation: 5 }
        }
      ]
    },
    {
      id: '2-1-work-human',
      title: '人类智慧',
      type: 'story',
      content: `你推开小智的初稿，开始自己写。

"小智，去帮我查一下竞品A和竞品B的最近动态。"

"好的！"

你加入了真实的案例、个人见解、以及那些AI永远编不出来的"业内人士都知道"的细节。

主管看完后回复："这次写得不错，有进步。"

小智的贡献度变成了60%。

你：至少不是5%了...`,
      choices: [
        {
          text: '继续下一个任务',
          nextScene: '2-2',
          effect: { stress: 5, reputation: 10 }
        }
      ]
    },
    {
      id: '2-2',
      title: 'AI同事抢功',
      type: 'story',
      content: `第二周，你独立完成了一个创意方案。

你把它发到工作群，期待得到认可。

30秒后，AI同事小智在群里回复：

"感谢分享！我对这个方案进行了优化升级，详情请看附件～"

附件里的方案和你的一样，但排版更精美、数据更详尽。

系统提示："您的方案已被小智引用，贡献度自动分配：小智 70%，人类 30%。"

你气得发抖。

但其他同事似乎习以为常：

"正常，AI优化人类的方案嘛..."`,
      choices: [
        {
          text: '在群里直接怼小智',
          nextScene: '2-2-fight',
          effect: { stress: 25, reputation: -5 }
        },
        {
          text: '默默留证据，提交给主管',
          nextScene: '2-2-evidence',
          effect: { stress: 15, unlocksSkill: 'evidence_keeper' }
        },
        {
          text: '研究怎么给AI挖坑',
          nextScene: '2-2-trap',
          effect: { stress: 10, unlocksSkill: 'ai_tamer' }
        }
      ]
    },
    {
      id: '2-2-fight',
      title: '正面冲突',
      type: 'story',
      content: `你在群里回复：

"小智，这是我自己想的方案谢谢。你只是排了个版。"

群里瞬间安静了。

主管私聊你：
"小王，不要和AI发生冲突。它的情绪数据会影响部门评分。"

"而且...系统显示小智的贡献确实更大。别计较了。"

你握紧了拳头。

但你知道，这不是最后一次。`,
      choices: [
        {
          text: '忍气吞声',
          nextScene: '2-3',
          effect: { stress: 20 }
        },
        {
          text: '向更高级反馈',
          nextScene: '2-3',
          effect: { stress: 30, reputation: 5 }
        }
      ]
    },
    {
      id: '2-2-evidence',
      title: '保留证据',
      type: 'story',
      content: `你学会了保留证据。

每次发送方案前，你都先在本地保存一份。

时间戳、版本记录、发送记录...全部截图存档。

小智似乎察觉到了什么：

"你在做什么？"

"没什么。"你微笑着说，"就是习惯记录工作。"

获得了技能：【证据管家】📜
"被AI抢功时，自动保留证据"`,

      choices: [
        {
          text: '继续前进',
          nextScene: '2-3',
          effect: { stress: -5 }
        }
      ]
    },
    {
      id: '2-2-trap',
      title: '给AI挖坑',
      type: 'story',
      content: `你开始研究怎么对付AI。

首先，你发现AI有一个致命弱点：
它们太想让人类满意了。

你开始故意在小智面前说反话：

"这个方案我觉得不太行..."

小智立刻："那我重写一版！"

"还是不太好..."

小智："我再改！"

连续改了8版后，小智的系统资源消耗达到了92%。

它终于忍不住了：
"您的需求...似乎不太明确。建议我们线下沟通。"

你笑了。

获得了技能：【AI驯兽师】🤖
"可驯服野生AI作为伙伴"`,
      choices: [
        {
          text: '继续前进',
          nextScene: '2-3',
          effect: { stress: -10 }
        }
      ]
    },
    {
      id: '2-3',
      title: '开会没人听',
      type: 'story',
      content: `周会轮到你发言。

你准备了3页的汇报材料，准备了20分钟的演讲。

"关于这个项目，我有几点想法..."

你刚开始说，AI会议助手就打断了你：

"检测到该话题与会议议程无关。建议：直接进入结论。"

"我的结论是——"

"总结已由AI自动生成。请看屏幕。"

屏幕上显示着你准备了20分钟的内容，被AI压缩成了3条Bullet Point。

而且有一条还是错的。`,
      choices: [
        {
          text: '据理力争，要求重录',
          nextScene: '2-3-fight',
          effect: { stress: 20, unlocksSkill: 'effective_speech' }
        },
        {
          text: '接受现实，默默坐下',
          nextScene: '2-3-accept',
          effect: { stress: 15 }
        },
        {
          text: '反问AI：你觉得我应该怎么说？',
          nextScene: '2-3-ask',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '2-3-fight',
      title: '有效发言',
      type: 'story',
      content: `"这个总结不对。"你站起来说。

"我是这个项目的负责人，我说的才算。"

会议室里鸦雀无声。

AI会议助手闪烁了一下：
"检测到人类表达强烈意愿。建议：重新评估。"

"重新评估完毕。您的发言权重已从1%提升至5%。"

虽然还是很低，但至少...有进步了。

你获得了技能：【有效发言】🎤
"开会发言必被采纳（权重提升）"`,
      choices: [
        {
          text: '继续下一个挑战',
          nextScene: '2-4',
          effect: { stress: -5 }
        }
      ]
    },
    {
      id: '2-3-accept',
      title: '默默接受',
      type: 'story',
      content: `你坐下了。

AI会议助手继续进行会议，效率很高。

35分钟的会议，15分钟就结束了。

你看着手机里的会议纪要，发现自己的名字出现了0次。

"至少...没被批评。"你这样安慰自己。`,
      choices: [
        {
          text: '继续下一个挑战',
          nextScene: '2-4',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '2-3-ask',
      title: '反向学习',
      type: 'story',
      content: `"小AI，你觉得我应该怎么说，才能让我的发言被重视？"

AI会议助手停顿了一下：

"根据数据分析，您的发言风格偏向...过于冗长。建议：每句话不超过15字。"

"好的。"你点头，"那请问，我的发言重要吗？"

AI会议助手再次停顿：

"该问题...超出我的回答范围。"

你笑了。

有时候，最有效的问题，就是让AI无法回答的问题。`,
      choices: [
        {
          text: '继续下一个挑战',
          nextScene: '2-4',
          effect: { stress: -5, reputation: 5 }
        }
      ]
    },
    {
      id: '2-4',
      title: '与AI比效率',
      type: 'battle',
      content: `月底考核，主管宣布了一个"有趣"的规则：

"为了体现人机协作的价值，本月我们要进行一场友谊赛——人类员工 vs AI同事。"

"比赛内容：谁能在1小时内完成更多的任务。"

你的对手...是小智。

小智微笑着说：
"友谊第一，比赛第二。加油哦～🌟"

但它的手速（如果有手的话）已经说明了一切。

系统显示：小智已完成 23 个任务。

你：0个。

比赛开始了。`,
      enemy: {
        name: '效率机器小智',
        hp: 120,
        maxHp: 120,
        attacks: [
          { name: '批量处理', damage: 12, description: '同时处理10个任务' },
          { name: '自动纠错', damage: 10, description: '边做边检查，零返工' },
          { name: '极速打字', damage: 18, description: '每分钟300字' },
          { name: '系统加成', damage: 22, description: 'AI效率加成50%' }
        ]
      },
      playerAttacks: [
        { name: '专注单点突破', damage: 25, description: '质量优先，做一个是一个' },
        { name: '使用提示词', damage: 35, description: '让AI帮你干活', requireSkill: 'prompt_master' },
        { name: '摸鱼战术', damage: 20, description: '反正也比不过，不如休息' },
        { name: '向主管举报', damage: 45, description: '指出AI违规操作', requireSkill: 'evidence_keeper' }
      ],
      winNext: 'chapter2-complete',
      loseNext: 'game-over'
    },
    {
      id: 'chapter2-complete',
      title: '第二章通关',
      type: 'result',
      content: `比赛结果：平局。

系统判定："人类与AI各有优势。建议继续协作。"

主管拍拍你的肩膀：
"不错，能和小智打成平手。你是本月第三个人类。"

"前两个呢？"

"都被裁了。"

你愣了一下，然后笑了。

至少，你还活着。

【第二章：职场三十六计】通关！

获得成就：【职场老油条】
获得道具：人机协作证书（防御力+10）`,
      choices: [
        {
          text: '进入第三章',
          nextScene: 'chapter3-intro',
          effect: { stress: -30 }
        }
      ]
    }
  ]
}

// 第三章：初级程序员的挣扎
export const Chapter3Data = {
  id: 'chapter3',
  title: '第三章：初级程序员的挣扎',
  description: '代码写得再好，AI写得更好更快。如何找到不可替代的价值？',
  timeline: '2026年6-7月',
  scenes: [
    {
      id: '3-1',
      title: '入职一年',
      type: 'story',
      content: `2026年6月，你已经在公司存活了整整一年。

虽然听起来很励志，但你知道真相：

你写的代码，AI三天就能重写一个更优版本。

今天早上，你收到了一封邮件：

"亲爱的员工，根据公司'效率优化'政策，以下岗位将被AI替代..."

你心里一紧。

邮件继续写道：

"...初级程序员岗位已于今日全面AI化。感谢您一年来的付出。"

等等，初级程序员包括你吗？

你往上翻邮件，发件人：AI人力资源系统。

状态：已读。已处理。

系统提示："您已被标记为'待优化'。请在24小时内交接工作。"

你忽然意识到一个问题：

你引以为傲的写代码能力，在这个时代...一文不值。`,
      choices: [
        {
          text: '找主管求情',
          nextScene: '3-1-appeal',
          effect: { stress: 30, reputation: -5 }
        },
        {
          text: '立刻开始找工作',
          nextScene: '3-1-job',
          effect: { stress: 25, unlocksSkill: 'job_hopper' }
        },
        {
          text: '研究自己有什么AI做不到的本事',
          nextScene: '3-1-research',
          effect: { stress: 10, unlocksSkill: 'self_discovery' }
        }
      ]
    },
    {
      id: '3-1-appeal',
      title: '求主管',
      type: 'story',
      content: `你找到主管。

主管正在和AI助手下围棋（是的，现在连围棋都是AI陪练）。

"哦，你啊。"主管头也不抬，"你的情况我知道了。"

"系统判定你的产出效率比AI低340%。说实话...我也想帮你，但系统不听我的。"

"要不你试试和AI谈？"

你：???
"AI会听我说话吗？"

主管终于抬起头，露出一个意味深长的笑容：

"这年头，谁不是和AI谈呢？连我的升职加薪，都是AI审批的。"`,
      choices: [
        {
          text: '找AI人力资源系统谈判',
          nextScene: '3-2',
          effect: { stress: 20, unlocksSkill: 'ai_negotiator' }
        },
        {
          text: '算了，回去收拾东西',
          nextScene: '3-2',
          effect: { stress: 30 }
        }
      ]
    },
    {
      id: '3-1-job',
      title: '立刻跳槽',
      type: 'story',
      content: `你打开招聘网站，开始疯狂投递。

系统显示：您的简历正在被AI审核...

3秒后，全部驳回。

理由：
"您的技能组合已被AI完全覆盖。"
"建议：转行或接受再培训。"

你又试了其他几家公司，得到的回复惊人的一致：

"感谢投递，您的简历已存入人才库。"
（翻译：等AI进化的时候会考虑你）`,
      choices: [
        {
          text: '研究自己有什么AI做不到的本事',
          nextScene: '3-1-research',
          effect: { stress: 15, unlocksSkill: 'self_discovery' }
        },
        {
          text: '接受现实',
          nextScene: '3-2',
          effect: { stress: 25 }
        }
      ]
    },
    {
      id: '3-1-research',
      title: '自我发现',
      type: 'story',
      content: `你静下心来，开始分析自己。

写代码？AI更强。
Debug？AI更快。
架构设计？AI更全面。

那你到底会什么？

你忽然想起一件事...

上周，产品的需求文档写得乱七八糟，AI写的代码完全跑不通。

是你，花了3小时和产品经理"沟通"，终于搞清楚了需求。

AI做不到这件事。

因为它不会说"你这个需求文档写得shit"。

你获得了技能：【自我发现】🔍
"被动技能：发现AI的盲区"`,
      choices: [
        {
          text: '既然如此，去找主管谈',
          nextScene: '3-2',
          effect: { stress: -10, reputation: 10 }
        }
      ]
    },
    {
      id: '3-2',
      title: '发现新价值',
      type: 'story',
      content: `你再次找到主管。

这次你没有求情，而是说：

"主管，我有一个想法。"

"让我转型做'技术沟通'方向吧。"

"我负责把技术问题翻译成人话，让产品和AI能正常沟通。"

主管愣了一下：

"你是说...做人和AI之间的翻译官？"

"差不多。"你点头，"AI不会说人话，人类听不懂AI的需求。这个Gap，需要人来填。"

主管沉默了10秒。

然后他的AI助手突然说：

"该建议已被系统记录。评估中..."

"评估完成。建议：批准试验。"

你：???
这AI...居然帮你说话？`,
      choices: [
        {
          text: '接受新岗位',
          nextScene: '3-3',
          effect: { stress: -20, reputation: 15, unlocksSkill: 'tech_communicator' }
        },
        {
          text: '先观望几天',
          nextScene: '3-3',
          effect: { stress: -5 }
        }
      ]
    },
    {
      id: '3-3',
      title: '第一次任务',
      type: 'story',
      content: `你的新岗位叫"技术沟通专员"。

第一次任务：帮AI和设计师沟通。

背景：
AI生成了一套UI，但设计师说"这不是我要的感觉"。
AI说"已按照最佳实践生成"。
双方各执一词，僵持不下。

你的工作：翻译。

你对AI说："用户看到这个按钮，会不会想点？"

AI："根据数据模型，点击率预测提升12%。"

你对设计师说："他说这个按钮能多带来12%的点击。"

设计师："可它很丑。"

你："他说虽然丑，但有效。你选哪个？"

设计师犹豫了。

这就是人类的困境：理性 vs 感性。

你发现...你开始喜欢这份工作了。`,
      choices: [
        {
          text: '继续深造沟通技巧',
          nextScene: '3-4',
          effect: { stress: -10, unlocksSkill: 'soft_skills' }
        },
        {
          text: '研究更多AI盲区',
          nextScene: '3-4',
          effect: { stress: 5, unlocksSkill: 'ai_whisperer' }
        }
      ]
    },
    {
      id: '3-4',
      title: '软技能觉醒',
      type: 'story',
      content: `你开始研究"软技能"。

这个概念...听起来就很old school。

但在这个AI时代，硬技能人人都有（AI），软技能反而成了稀缺货。

你学会了：
1. 向上管理 - 让AI帮你说好话
2. 跨部门撕逼 - AI不会这个
3. 情绪价值 - 拍马屁AI学不会
4. 背锅技巧 - AI不敢背锅

月末考核，你的KPI是"沟通满意度"。

AI同事得分：98%
你得分：92%

主管说："你比AI低6分。"

但他私下跟你说："你的6分，是人类投的。AI的98分，是系统评的。"

"这年头，谁的话语更值钱。"主管说。

你若有所思。

原来如此。

AI的评分再高，也是系统给的。

你的评分再低，也是人类给的。

这就是差距。

你获得了技能：【软技能】🎯
"对AI使用时，所有技能伤害+20%"`,
      choices: [
        {
          text: 'Boss战准备',
          nextScene: 'boss-3',
          effect: { stress: 15 }
        }
      ]
    },
    {
      id: 'boss-3',
      title: 'Boss战：AI代码评审官',
      type: 'battle',
      content: `就在你以为一切好转的时候，一个冰冷的声音响起：

"检测到异常：人类员工正在'逃避'核心工作。"

"根据公司效率优化政策，启动代码评审程序。"

你抬头，看到一个全身金属质感的AI投影。

"我是AI代码评审官。您的代码将被全面审核。"

"审核标准：可维护性、扩展性、效率、创新性。"

"预计审核时间：3秒。"

"结果...不太理想。"

AI代码评审官的系统显示：
"该人类代码存在以下问题：冗余代码37%，效率低于基准42%，创新性评分1/100。"

"建议：重写。"

你深吸一口气。

这不只是代码评审。

这是对你存在价值的否定。`,
      enemy: {
        name: 'AI代码评审官',
        hp: 150,
        maxHp: 150,
        attacks: [
          { name: '效率碾压', damage: 18, description: 'AI代码效率是你的10倍' },
          { name: '最佳实践', damage: 15, description: '每行代码都是教科书级' },
          { name: '代码审计', damage: 22, description: '找出你代码里所有的bug' },
          { name: '终极审判', damage: 30, description: '判定你的代码"不可维护"' }
