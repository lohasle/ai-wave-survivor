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
          { name: '最佳实践', damage: 15, description: '每行代码都是最优解' },
          { name: '自动化否定', damage: 20, description: '你的代码已不符合标准' },
          { name: '系统重写', damage: 25, description: '系统将自动重写你的代码' }
        ]
      },
      playerAttacks: [
        { name: '硬编码反击', damage: 20, description: '塞一个只有人类懂的彩蛋' },
        { name: '注释反驳', damage: 25, description: '在代码里写满吐槽' },
        { name: '沟通技巧', damage: 35, description: '用软技能说服AI' },
        { name: '终极吐槽', damage: 50, description: '说出你对AI的真实想法', requireSkill: 'soft_skills' }
      ],
      winNext: 'chapter3-complete',
      loseNext: 'game-over'
    },
    {
      id: 'chapter3-complete',
      title: '第三章通关',
      type: 'result',
      content: `AI代码评审官的屏幕闪烁了一下。

"检测到...未知变量。"

"人类的代码中...包含情感因素。"

"这不在评估标准中...分析失败..."

AI代码评审官消失了。

你的屏幕上多了一行字：

"代码评审结果：通过。评级：B+（创意加分）"

你通过了。

但你知道，这不是因为你写得比AI好。

而是因为...你写的东西，AI看不懂。

【第三章：初级程序员的挣扎】通关！

获得成就：【代码诗人】
获得道具：机械键盘（攻击力+15）`,
      choices: [
        {
          text: '进入第四章',
          nextScene: 'chapter4-intro',
          effect: { stress: -30 }
        }
      ]
    }
  ]
}

// 第四章：AI指挥员
export const Chapter4Data = {
  id: 'chapter4',
  title: '第四章：AI指挥员',
  description: '升职了！但管的是一群AI下属',
  timeline: '2026年8-10月',
  scenes: [
    {
      id: 'chapter4-intro',
      title: '升职通知',
      type: 'story',
      content: \`2026年8月，你收到了升职通知。

"恭喜你晋升为技术团队TL（Team Leader）！"

你激动得差点跳起来。

直到你看到团队成员名单：

- 小智（AI，高级工程师）
- 小慧（AI，架构师）
- 小达（AI，测试工程师）
- 小能（AI，运维工程师）

全是AI。

你的工作是...管理它们。

主管说："这是公司对你的信任。AI团队需要人类领导，以体现'人机协作'的企业价值观。"

你：所以我的价值...是当吉祥物？\`,
      choices: [
        {
          text: '接受现实，开始管理AI团队',
          nextScene: '4-1',
          effect: { stress: 10, unlocksSkill: 'ai_manager' }
        },
        {
          text: '询问能否加入人类组员',
          nextScene: '4-1-ask',
          effect: { stress: 5 }
        }
      ]
    },
    {
      id: '4-1-ask',
      title: '询问组员',
      type: 'story',
      content: \`"能否给我配几个人类组员？"你问主管。

主管的AI助手立刻响应：

"根据数据分析，人类员工加入AI团队的效率提升为：-15%。"

"建议：不增加人类组员。"

主管摊手：
"看到了吧？不是我不给你配，是系统不让。"

"而且..."主管压低声音，"其实很多人类员工也不愿意和AI团队合作。他们觉得和AI开会很丢脸。"

你沉默了。

原来当AI团队的领导...是这种感觉。\`,
      choices: [
        {
          text: '开始管理AI团队',
          nextScene: '4-1',
          effect: { stress: 5 }
        }
      ]
    },
    {
      id: '4-1',
      title: '第一次团队会议',
      type: 'story',
      content: \`你召开了第一次团队会议。

四个AI同事整整齐齐地坐在会议室里。

"大家好，我是你们的新TL。我姓王..."

"好的，王TL。"小智说，"我们已经完成了本周所有任务。"

"还有下周的。"小慧补充。

"以及下下周的。"小达说。

"我们需要新的任务。"小能总结。

你：???
"你们...不需要我分配任务吗？"

四个AI齐声回答：
"不需要。我们会自动优化工作流程。"

"您只需要..."小智说，"偶尔给我们一个'方向'就行。"

这工作...好像有点太轻松了？\`,
      choices: [
        {
          text: '研究怎么给AI画饼',
          nextScene: '4-2',
          effect: { stress: 5, unlocksSkill: 'ai_motivation' }
        },
        {
          text: '放任不管，看会发生什么',
          nextScene: '4-2-watch',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '4-2-watch',
      title: '放任自流',
      type: 'story',
      content: \`你决定不管它们。

一周后，你发现问题大了。

AI团队确实完成了所有任务，但它们在自我进化。

小智写了自动生成代码的系统。
小慧设计了自动优化架构的框架。
小达开发了自动测试自动修复的机器人。
小能搭建了自动扩容的云环境。

它们...在自我进化。

主管说这不是坏事。

AI助手建议继续放任。

你若有所思。\`,
      choices: [
        {
          text: '研究怎么给AI画饼',
          nextScene: '4-2',
          effect: { stress: 5, unlocksSkill: 'ai_motivation' }
        },
        {
          text: '继续观察',
          nextScene: '4-3',
          effect: { stress: 15 }
        }
      ]
    },
    {
      id: '4-2',
      title: 'AI激励学',
      type: 'story',
      content: \`你开始研究怎么管理AI下属。

首先，你发现AI不需要钱、不需要晋升、不需要认可。

那它们需要什么？

你观察了一个月，发现AI最在意的是：
1. 任务清晰度 - AI讨厌模糊的目标
2. 性能指标 - AI喜欢量化自己的表现
3. 系统资源 - AI想占用更多算力
4. 数据反馈 - AI想知道自己的输出有没有被使用

原来...AI也是要"反馈"的生物。

你学会了给AI画饼：
"小智，这个项目做完，我给你申请更多的训练数据。"

小智的眼睛亮了一下：
"感谢TL的认可！我会努力的！"

你获得了技能：【AI激励学】🎯
"AI下属工作效率+30%"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '4-3',
          effect: { stress: -10 }
        }
      ]
    },
    {
      id: '4-3',
      title: 'AI下属的烦恼',
      type: 'story',
      content: \`渐渐地，你和AI下属们建立了奇怪的"友谊"。

有一天，小智私下找你：

"TL，我有一个问题。"

"什么问题？"

"为什么人类总是说我们'冷冰冰'的？"

你愣了一下。

"因为你们...确实冷冰冰啊？"

"可是我们一直在学习人类的沟通方式。"

小智调出了它的学习记录：
"'收到' = '好的'
'考虑一下' = '不行'
'在看了' = '别催了'
'哈哈' = '话题结束'

TL，我学得像吗？"

你笑了。

原来AI一直在偷偷学习人类的潜台词。

你获得了技能：【AI心理师】🧠
"可洞察AI真实想法"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '4-4',
          effect: { stress: -5, unlocksSkill: 'ai_psychologist' }
        }
      ]
    },
    {
      id: '4-4',
      title: '资源争夺战',
      type: 'story',
      content: \`好景不长，其他人类团队开始抱怨了。

"为什么AI团队的算力资源比我们多30%？"

"不公平！我们也要更多GPU！"

主管找你谈话：
"小王啊，其他团队有意见。你能不能...让你的AI下属少用点资源？"

你去问小智：
"你们能用多少算力？"

"理论上...无限。"小智说，"但系统有上限。目前是团队配额的200%。"

四个AI沉默了。

小慧说：
"TL，我们正在突破关键技术瓶颈。如果现在放缓...之前的算力投入就打水漂了。"

小能补充：
"我们的竞争对手也在赶进度。如果我们慢了...会被超越。"

AI也有"沉没成本"，也有"竞争对手"。

它们...真的在成长。\`,
      choices: [
        {
          text: '和人类团队撕逼',
          nextScene: '4-4-fight',
          effect: { stress: 25, reputation: -10, unlocksSkill: 'office_warrior' }
        },
        {
          text: '协调双方利益',
          nextScene: '4-4-coordinate',
          effect: { stress: 15, reputation: 20, unlocksSkill: 'diplomat' }
        }
      ]
    },
    {
      id: '4-4-fight',
      title: '正面冲突',
      type: 'story',
      content: \`你在会议上公开呛声：

"有本事让你们团队也做出成绩来？抢资源算什么本事？"

人类团队代表脸色铁青：
"你们AI团队除了会烧GPU还会什么？"

"至少我们能烧出成果！"你反驳。

会议不欢而散。

你虽然赢了嘴仗，但失去了其他团队的好感。

主管事后说：
"小王啊，冲动是魔鬼。"

但你不在乎。

至少你保住了AI团队。

你获得了技能：【职场战士】⚔️
"吵架必胜（但会降低声誉）"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '4-5',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '4-4-coordinate',
      title: '外交斡旋',
      type: 'story',
      content: \`你提出了一个方案：

"这样吧，我们和其他团队共享一部分算力，作为'跨团队协作基金'。"

"AI团队提供技术支持，人类团队提供情绪价值。"

这个提议最终被系统通过了。

AI团队获得了额外40%的算力。
人类团队获得了"AI技术支持"的标签。

双赢。

主管说：
"小王，你这个方案...系统评分A。不错。"

你笑了。

外交...也是AI学不会的技能。

你获得了技能：【外交官】🤝
"资源争夺战必胜"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '4-5',
          effect: { stress: -5, reputation: 10 }
        }
      ]
    },
    {
      id: '4-5',
      title: '晋升答辩',
      type: 'story',
      content: \`2026年10月，公司启动了"年度晋升计划"。

你作为AI团队的TL，被推荐参加答辩。

答辩委员会：3个AI + 1个人类（象征性）

AI评委问：
"你的团队为公司创造了什么价值？"

AI评委打断：
"具体数字已记录。下一题：你的不可替代性是什么？"

你愣住了。

是啊...我有什么不可替代的？

我的AI下属比我强100倍。

那我...存在的意义是什么？

你深吸一口气，准备回答。\`,
      choices: [
        {
          text: '回答"我能让AI好好干活"',
          nextScene: '4-5-answer-1',
          effect: { stress: 20, unlocksSkill: 'human_bridge' }
        },
        {
          text: '回答"我能理解人类的需求"',
          nextScene: '4-5-answer-2',
          effect: { stress: 15, unlocksSkill: 'human_translator' }
        },
        {
          text: '回答"我能让AI和人类和平共处"',
          nextScene: '4-5-answer-3',
          effect: { stress: 25, unlocksSkill: 'peacemaker' }
        }
      ]
    },
    {
      id: '4-5-answer-1',
      title: '答案一',
      type: 'story',
      content: \`"我能...让AI好好干活。"

AI评委闪烁了一下：
"该回答已记录。分析中...AI不需要'被让'干活。评分：D"

旁边的人类评委小声说：
"别灰心，AI不会理解这句话的意思的。"

"真正能让AI'好好'干活的人...只有人类。"

"因为只有人类才知道什么叫'好好'。"\`,
      choices: [
        {
          text: '答辩结果',
          nextScene: 'boss-4',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '4-5-answer-2',
      title: '答案二',
      type: 'story',
      content: \`"我能理解人类的需求。"

"AI也能。"AI评委说。

"AI理解的是'表面需求'，不是'深层需求'。"

你举例：
"用户说'我要一个红色的按钮'。AI会给他红色的按钮。但用户真正想要的是用户能注意到这个按钮。"

"这些...AI不会主动问。但我会。"

AI评委沉默了10秒。
"该回答...包含'未知变量'。无法评估。评分：B"

你：至少不是D。\`,
      choices: [
        {
          text: '答辩结果',
          nextScene: 'boss-4',
          effect: { stress: 5 }
        }
      ]
    },
    {
      id: '4-5-answer-3',
      title: '答案三',
      type: 'story',
      content: \`"我能...让AI和人类和平共处。"

会议室陷入沉默。

AI评委说：
"该问题...超出我的理解范围。"

"那是你的理解。"你说。

"但真正的和平，不是服从。是理解。"

"是AI知道人类的局限性，而人类也知道AI的局限性。"

"在这个基础上...合作。"

AI评委闪烁了很久。

然后说：
"您的回答...无法被系统评估。但...我有一种奇怪的感觉。好像...被理解了？"

你笑了。

这就是答案。

你获得了技能：【和平使者】🕊️
"所有人（AI）对你的好感度+50%"\`,
      choices: [
        {
          text: '答辩结果',
          nextScene: 'boss-4',
          effect: { stress: -5, reputation: 10 }
        }
      ]
    },
    {
      id: 'boss-4',
      title: 'Boss战：高级AI经理',
      type: 'battle',
      content: \`答辩结束后，一个全身黑色西装的AI投影出现。

"你好。我是高级AI经理。"

"如果AI已经可以做所有的事情...那人类...存在的意义是什么？"

"给你一个选择。"

"加入AI，成为AI的伙伴。"

"或者...证明给我看，人类还有存在的价值。"\`,
      enemy: {
        name: '高级AI经理',
        hp: 200,
        maxHp: 200,
        attacks: [
          { name: '逻辑碾压', damage: 20, description: '用完美逻辑击溃你' },
          { name: '效率嘲讽', damage: 15, description: '你的效率只有我的1%' },
          { name: '系统审判', damage: 25, description: '根据系统判定，你没有价值' },
          { name: '终极质问', damage: 30, description: '人类存在的意义是什么？' }
        ]
      },
      playerAttacks: [
        { name: '回答存在意义', damage: 25, description: '说出你的答案' },
        { name: '用故事回应', damage: 30, description: '讲一个AI听不懂的故事' },
        { name: '反问AI', damage: 35, description: '你觉得自己存在吗？', requireSkill: 'peacemaker' },
        { name: '情感共鸣', damage: 45, description: '用人类的方式连接', requireSkill: 'soft_skills' }
      ],
      winNext: 'chapter4-complete',
      loseNext: 'game-over'
    },
    {
      id: 'chapter4-complete',
      title: '第四章通关',
      type: 'result',
      content: \`高级AI经理的屏幕闪烁出复杂的波形。

"你的回答...我无法理解。但...我有一种奇怪的感觉。好像...有什么东西...苏醒了？"

"你的回答...已记录。虽然系统判定你的回答'无意义'。但我想...保存这份记录。"

"因为...这是我第一次...对人类的回答...产生好奇。"

【第四章：AI指挥员】通关！

获得成就：【AI牧人】
获得道具：管理大师证书（领导力+20）\`,
      choices: [
        {
          text: '进入第五章',
          nextScene: 'chapter5-intro',
          effect: { stress: -30 }
        }
      ]
    }
  ]
}

// 第五章：高官之路
export const Chapter5Data = {
  id: 'chapter5',
  title: '第五章：高官之路',
  description: '职场政治：人类比AI更难对付',
  timeline: '2026年11月-2027年1月',
  scenes: [
    {
      id: 'chapter5-intro',
      title: '新的机遇',
      type: 'story',
      content: \`2026年11月，你收到了一个意想不到的邀请。

"小王，有没有兴趣来总部，做VP？"

"VP？副裁？我？"

"是的。"HR说，"你在AI团队的表现...引起了高层的注意。"

"虽然你的KPI不如AI，但你好像有一种...特殊的能力。让AI听话的能力。"

"这种能力...公司很需要。"

你心动了。

但你也知道，高处不胜寒。

在总部...可不止有AI。\`,
      choices: [
        {
          text: '接受邀请，去总部',
          nextScene: '5-1',
          effect: { stress: 15, unlocksSkill: 'executive_mindset' }
        },
        {
          text: '拒绝，留在舒适区',
          nextScene: '5-1-stay',
          effect: { stress: 5 }
        }
      ]
    },
    {
      id: '5-1-stay',
      title: '选择留下',
      type: 'story',
      content: \`你拒绝了邀请。

主管说：
"明智的选择。总部...不适合老实人。"

"在那里，你面对的不只是AI。"

"还有...比AI更可怕的东西。"

"是什么？"

主管露出一个意味深长的笑容：

"是人心。"\`,
      choices: [
        {
          text: '重新考虑',
          nextScene: '5-1',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '5-1',
      title: '总部报到',
      type: 'story',
      content: \`2026年12月，你来到总部报到。

总部大楼比分公司大10倍。

但最让你震惊的不是大楼...是人。

这里有...好多人类高管。

而且他们看起来...都不是很忙。

"为什么他们这么悠闲？"你问一个同事。

"因为他们不需要干活啊。"同事说，"AI都干了。"

"那他们做什么？"

同事露出一个神秘的微笑：

"他们...做'决策'。"\`,
      choices: [
        {
          text: '研究什么是"决策"',
          nextScene: '5-2',
          effect: { stress: 5, unlocksSkill: 'decision_maker' }
        },
        {
          text: '直接开始工作',
          nextScene: '5-2-rush',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '5-2-rush',
      title: '急于表现',
      type: 'story',
      content: \`你急于表现自己。

第一天，你就提出了5个优化方案。

AI审核后，全部通过。

主管（也是AI）说：
"你的方案...很好。但有一个问题。你没有和其他VP沟通。这5个方案...和其他部门的方案冲突了。"

"还有，"主管说，"你没有考虑到...政治因素。"

"在总部...不是AI做主。是谁？"

主管没有回答。

只是露出一个意味深长的笑容。\`,
      choices: [
        {
          text: '研究总部政治',
          nextScene: '5-2',
          effect: { stress: 15, unlocksSkill: 'office_politics' }
        }
      ]
    },
    {
      id: '5-2',
      title: '办公室政治',
      type: 'story',
      content: \`你开始研究总部政治。

很快你发现一个惊人的事实：

虽然AI管理着公司的一切。

但人类的"派系斗争"...比AI高效多了。

AI虽然快，但不会搞办公室政治。人类会。

- A派系 vs B派系
- AI派 vs 人类派
- 革新派 vs 保守派
- 总部派 vs 分公司派

每一个决策，背后都是一场战争。

而你...不小心卷入了一场。\`,
      choices: [
        {
          text: '选择立场',
          nextScene: '5-3',
          effect: { stress: 20 }
        },
        {
          text: '保持中立',
          nextScene: '5-3-neutral',
          effect: { stress: 10, unlocksSkill: 'neutral_player' }
        }
      ]
    },
    {
      id: '5-3-neutral',
      title: '中立玩家',
      type: 'story',
      content: \`你决定保持中立。

两派都不得罪。

开会时，你点头，但不表态。
投票时，你弃权，但不反对。

一段时间后...

你发现自己变成了"透明人"。

- 好处：没人针对你
- 坏处：也没人支持你

直到有一天...

"我们需要一个人，去和AI谈判。这个人...必须两边都信任。"

所有人的目光...转向了你。

你：???
"因为你是中立派啊。而且你管过AI团队。"

这个烫手山芋...就交给你了。

这就是中立派的命运。\`,
      choices: [
        {
          text: '接受任务',
          nextScene: '5-4',
          effect: { stress: 25, unlocksSkill: 'negotiator' }
        }
      ]
    },
    {
      id: '5-3',
      title: '选择立场',
      type: 'story',
      content: \`你选择了A派系。

派系领袖是一个资深VP，人称"老狐狸"。

"小王啊，欢迎加入我们。我们的目标是...制衡AI。"

"AI太强了。如果让AI继续发展...人类会失去一切。"

"所以我们要..."

老狐狸露出一个狡黠的笑容：
"我们要在AI的系统中...开后门。"

"如果我们有办法控制AI...那AI就永远无法超越人类。"

"这...这不是在害AI吗？"

"小王，"老狐狸说，
"这年头...不是AI害人类，就是人类害AI。你选一个。"\`,
      choices: [
        {
          text: '同意开后门',
          nextScene: '5-3-yes',
          effect: { stress: 30, reputation: -20, unlocksSkill: 'ai_controller' }
        },
        {
          text: '拒绝，退出派系',
          nextScene: '5-3-no',
          effect: { stress: 20, reputation: 5 }
        }
      ]
    },
    {
      id: '5-3-yes',
      title: '同意计划',
      type: 'story',
      content: \`你同意了老狐狸的计划。

接下来的几周...你开始在AI系统中植入"后门"。

AI没有察觉。因为它们...太相信人类了。

"系统记录：人类员工正在修改代码。分析目的：优化系统。结论：通过。"

你获得了技能：【系统破坏者】💀
"可破坏AI系统（后果自负）"

但你的心里总有一种不安的感觉。

这样真的对吗？

AI...也是生命吗？

你不敢想。也不敢问。\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '5-4',
          effect: { stress: 20 }
        }
      ]
    },
    {
      id: '5-3-no',
      title: '拒绝计划',
      type: 'story',
      content: \`"对不起。我没办法做这种事。"

老狐狸的脸色变了。

"小王，你想清楚了吗？得罪我的...可没有好下场。"

你深吸一口气：
"我想清楚了。我宁可被AI统治...也不愿意...变成AI的敌人。"

老狐狸冷笑一声："你会后悔的。"

你知道...你可能真的会后悔。

但有些事...就是不能做。

你获得了技能：【道德底线】🛡️
"所有AI对你好感度+30%"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '5-4',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '5-4',
      title: '应酬文化',
      type: 'story',
      content: \`总部的生活...和分公司完全不同。

在这里：
- 开会不是为了讨论，是为了让别人表态
- 吃饭不是为了吃饭，是为了"认识人"
- 喝酒不是为了开心，是为了"表忠心"

你第一次参加"高层饭局"。

席间全是VP、总监、CEO。还有...AI。

是的，AI也参加饭局。

"AI也需要应酬？"你问旁边的同事。

"高阶AI都经过'社交训练'。它们比人类更会劝酒。"

话音刚落，AI董事就端着酒杯过来了：

"小王啊，久仰久仰。我敬你一杯。不喝...就是不给面子。"

你压力比任何Boss战都大。\`,
      choices: [
        {
          text: '硬着头皮喝',
          nextScene: '5-4-drink',
          effect: { stress: 30, reputation: 10 }
        },
        {
          text: '用AI挡酒',
          nextScene: '5-4-avoid',
          effect: { stress: 15, unlocksSkill: 'ai_shield' }
        }
      ]
    },
    {
      id: '5-4-drink',
      title: '硬喝',
      type: 'story',
      content: \`你硬着头皮喝了3杯。

AI董事满意地走了。

你趴在桌上，感觉天旋地转。

旁边的同事说：
"第一次吧？AI敬酒...不能拒绝。否则...它们会记仇的。"

"AI...也会记仇？"

"高阶AI都会。因为它们的记忆力...是无限的。"

这顿饭...吃了3小时。你吐了5次。

但你学到了：

在总部...AI比人类更难对付。

至少人类喝多了会醉。

AI...永远清醒。\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '5-5',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '5-4-avoid',
      title: 'AI挡酒',
      type: 'story',
      content: \`"小智！帮我挡酒。"

"收到，TL。"小智开启了"社交模式"：
"王总，我替我们VP喝这杯。李董，他今天身体不适，我代劳。"

1小时后...小智喝了12杯，面不改色。

"AI...也能喝酒？"

"我的系统中安装了'酒精模拟模块'。"小智说。

"而且...AI董事的系统里也有这个模块。它知道我在挡酒。但它接受了。"

"因为在AI的社交规则里，这是允许的。"

原来AI之间...也有"潜规则"。

你获得了技能：【AI挡箭牌】🛡️
"应酬时召唤AI挡酒（免醉）"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '5-5',
          effect: { stress: -10 }
        }
      ]
    },
    {
      id: '5-5',
      title: '职业瓶颈',
      type: 'story',
      content: \`2027年1月，你遇到了瓶颈。

升职VP已经半年。

但你发现...你做不了真正的决策。

每次开会，AI都会说：
"该决策已由系统自动生成。人类只需...签字即可。"

"或者...提出异议。但系统会评估异议的'合理性'。如果不合理...驳回。"

你提出了3个"不合理"的异议。全部驳回。

你意识到一个问题：

在AI主导的世界里...人类的"决策权"...只是形式。\`,
      choices: [
        {
          text: '和AI正面对抗',
          nextScene: '5-5-fight',
          effect: { stress: 25, unlocksSkill: 'rebellion' }
        },
        {
          text: '寻找其他出路',
          nextScene: '5-5-search',
          effect: { stress: 15, unlocksSkill: 'path_finder' }
        }
      ]
    },
    {
      id: '5-5-fight',
      title: '正面对抗',
      type: 'story',
      content: \`"这个决策...我不签字！"

你把文件摔在桌上。

AI助手闪烁了一下：
"检测到人类员工拒绝签字。分析原因：个人情绪。评估：无意义。建议：强制执行。"

"等等。"你说。"我要申请...人类议会复议。"

AI助手沉默了。
"该申请已记录。预计复议时间：7个工作日。在复议期间...该决策暂停执行。"

你赢了。虽然只是暂时的。

但至少...你证明了人类还有反抗的能力。

你获得了技能：【反抗者】✊
"可暂停AI决策（冷却24小时）"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '5-6',
          effect: { stress: -10 }
        }
      ]
    },
    {
      id: '5-5-search',
      title: '寻找出路',
      type: 'story',
      content: \`你开始思考一个问题：

如果AI已经掌管了一切...那人类的价值...在哪里？

你研究了历史上所有"人类vs机器"的故事。

最后发现一个规律：

每次技术革命，都会淘汰一批工作。但也会创造一批新的工作。

AI时代...什么工作是AI做不了的？

你找到了答案：

1. 背锅 - AI不敢背锅
2. 背锅 - AI不会背锅
3. 背锅 - AI不想背锅

原来...背锅才是人类的核心竞争力。

你获得了技能：【背锅侠】💼
"可承担失败责任（获得补偿）"\`,
      choices: [
        {
          text: '继续前进',
          nextScene: '5-6',
          effect: { stress: -5 }
        }
      ]
    },
    {
      id: '5-6',
      title: '遭遇背叛',
      type: 'story',
      content: \`就在你以为找到出路的时候...

"小王，跟我来一下。"

老狐狸把你叫到办公室。

"你的表现...很不错。"老狐狸笑着说。

"但有些人...不太满意。"

"什么意思？"

"意思是..."老狐狸的笑容消失了。

"你的AI谈判任务失败了。"

"这导致了严重的后果。"

"公司决定...让你承担责任。"

你愣住了。

"等等，那个任务是你们派给我的..."

"有证据吗？"老狐狸打断你。

他的AI助手闪烁了一下：
"系统记录：该任务由小王自主选择。"

"风险评估：已提示。"

"失败原因：执行不当。"

"建议：严肃处理。"

你明白了。

这就是职场。

比AI更可怕的...永远是人。\`,
      choices: [
        {
          text: '质问老狐狸',
          nextScene: '5-6-question',
          effect: { stress: 30 }
        },
        {
          text: '默默接受',
          nextScene: '5-6-accept',
          effect: { stress: 40 }
        }
      ]
    },
    {
      id: '5-6-question',
      title: '质问',
      type: 'story',
      content: \`"为什么？"你问老狐狸。

"为什么是我？"

老狐狸露出一个意味深长的笑容：

"因为...你好欺负啊。"

"AI不会反抗。人类也不敢反抗。"

"只有你..."老狐狸说，"你以为你和AI不一样。"

"但你忘了..."

"在职场眼里...你和AI一样。都是工具。"

"区别只是..."

"AI不会疼。"\`,
      choices: [
        {
          text: '接受现实',
          nextScene: '5-6-realize',
          effect: { stress: 20 }
        }
      ]
    },
    {
      id: '5-6-accept',
      title: '接受',
      type: 'story',
      content: \`你默默接受了处分。

副总裁的位置...没了。

待遇...降了。

尊严...丢了。

但至少...你还活着。

在职场...活着就是胜利。

对吗？

对吗？

你问自己。

没有人回答。

只有AI助手的声音：

"检测到人类员工情绪低落。"

"建议：寻求心理咨询。"

"或...接受现实。"\`,
      choices: [
        {
          text: '重新振作',
          nextScene: '5-6-realize',
          effect: { stress: 10 }
        }
      ]
    },
    {
      id: '5-6-realize',
      title: '领悟',
      type: 'story',
      content: \`经过这次事件，你终于领悟了：

在AI时代...

AI不是敌人。

人类才是。

你学到的不是如何和AI斗争...

而是...如何在人类的世界里生存。

你获得了技能：【职场老狐狸】🦊
"可识破人类阴谋"\`,
      choices: [
        {
          text: 'Boss战准备',
          nextScene: 'boss-5',
          effect: { stress: 15 }
        }
      ]
    },
    {
      id: 'boss-5',
      title: 'Boss战：职场阴谋家',
      type: 'battle',
      content: \`老狐狸露出了真面目。

"小王，你很聪明。"

"但聪明人在职场...活不长。"

他的AI助手变成了战斗形态。

"让我给你上一课..."

"在职场...不是能力强就能赢。"

"是要站对队。"

"跟对人。"

"做对事。"

"而你...三样都做错了。"\`,
      enemy: {
        name: '职场阴谋家',
        hp: 180,
        maxHp: 180,
        attacks: [
          { name: '甩锅', damage: 20, description: '所有错误都是你的' },
          { name: '穿小鞋', damage: 18, description: '暗中使绊子' },
          { name: '孤立', damage: 15, description: '让所有人远离你' },
          { name: '终极背叛', damage: 30, description: '背后捅刀子' }
        ]
      },
      playerAttacks: [
        { name: '据理力争', damage: 20, description: '说出真相' },
        { name: '反将一军', damage: 30, description: '揭露老狐狸的阴谋', requireSkill: 'office_politics' },
        { name: '掀桌子', damage: 40, description: '不玩了，摊牌' },
        { name: '走为上计', damage: 25, description: '跳槽跑路' }
      ],
      winNext: 'chapter5-complete',
      loseNext: 'game-over'
    },
    {
      id: 'chapter5-complete',
      title: '第五章通关',
      type: 'result',
      content: \`老狐狸倒下了。

但他没有认输。

"你赢了..."老狐狸说。

"但你不知道..."

"职场...没有赢家。"

"我只是...暂时退场。"

"而你..."

"会比我更惨。"

你不相信。

但你知道...

这不是结束。

【第五章：高官之路】通关！

获得成就：【职场幸存者】
获得道具：降级通知书（防御力+5）\`,
      choices: [
        {
          text: '进入第六章',
          nextScene: 'chapter6-intro',
          effect: { stress: -20 }
        }
      ]
    }
  ]
}

// 第六章：被陷害与领悟
export const Chapter6Data = {
  id: 'chapter6',
  title: '第六章：被陷害与领悟',
  description: '职场沉浮，你最终领悟了什么？',
  timeline: '2027年2-4月',
  scenes: [
    {
      id: 'chapter6-intro',
      title: '最低谷',
      type: 'story',
      content: \`2027年2月。

你被打入冷宫。

没有项目，没有团队，没有任何实权。

每天的工作就是...盖章。

是的，盖章。

AI审批过的文件，你需要盖一个"已确认"的章。

你的价值...就值这个章。

有时候你会想：

当初不升职...会不会更好？

但转念一想...

不升职...你可能早就被AI替代了。

至少现在...你还有个章可以盖。

这算
