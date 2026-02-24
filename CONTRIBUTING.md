# 贡献指南 / Contributing Guide

感谢您考虑为 AI浪潮生存者 (AI Wave Survivor) 做出贡献！

---

## 📋 目录

- [行为准则](#行为准则)
- [如何贡献](#如何贡献)
- [开发环境设置](#开发环境设置)
- [项目结构](#项目结构)
- [代码规范](#代码规范)
- [提交规范](#提交规范)
- [Pull Request 流程](#pull-request-流程)
- [贡献类型](#贡献类型)

---

## 行为准则

本项目采用贡献者公约作为行为准则。参与此项目即表示您同意遵守其条款。请阅读 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 了解详情。

---

## 如何贡献

### 报告 Bug

如果您发现了 bug，请通过 [GitHub Issues](https://github.com/lohasle/ai-wave-survivor/issues) 提交报告。

提交 Bug 报告时，请包含：
- 简洁明了的标题
- 复现步骤
- 预期行为 vs 实际行为
- 截图（如果适用）
- 浏览器/设备信息

### 建议新功能

我们非常欢迎新功能的建议！请使用 Issue 模板提交功能请求。

### 提交剧情创意

职场梗和剧情创意是本游戏的灵魂！您可以：
- 提交新的职场段子
- 建议新的章节剧情
- 分享您的职场故事（我们会改编成游戏内容）

---

## 开发环境设置

### 前置要求

- Node.js 18+
- npm 或 yarn

### 安装步骤

```bash
# 1. Fork 并克隆项目
git clone https://github.com/YOUR_USERNAME/ai-wave-survivor.git
cd ai-wave-survivor

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 在浏览器中打开 http://localhost:5173
```

### 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run lint` | 代码检查 |
| `npm run lint:fix` | 自动修复代码问题 |
| `npm run test` | 运行测试 |
| `npm run test:watch` | 监听模式运行测试 |
| `npm run test:coverage` | 运行测试并生成覆盖率报告 |

---

## 项目结构

```
ai-wave-survivor/
├── src/
│   ├── data/
│   │   └── chapters.js       # 剧情数据（所有章节）
│   ├── utils/
│   │   └── gameState.js      # 游戏状态管理
│   ├── App.jsx               # 主组件
│   ├── App.css               # 组件样式
│   ├── App.cyber.css         # 赛博朋克特效
│   └── index.css             # 全局样式
├── .github/
│   ├── workflows/            # GitHub Actions CI/CD
│   └── ISSUE_TEMPLATE/       # Issue 模板
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 代码规范

### JavaScript/JSX

- 使用 2 空格缩进
- 使用单引号字符串
- 组件名使用 PascalCase
- 函数名使用 camelCase
- 常量使用 UPPER_SNAKE_CASE

### CSS

- 使用 BEM 命名规范
- 移动端优先的响应式设计
- 保持与赛博朋克主题一致的视觉风格

### 注释

- 复杂逻辑需要添加注释
- 使用中文注释（本项目主要面向中文用户）

---

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 代码重构 |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具相关 |
| `content` | 剧情内容更新 |

### 示例

```
feat(combat): 添加新的Boss战斗技能

fix(save): 修复存档无法加载的问题

content(chapter3): 添加新的职场梗对话
```

---

## Pull Request 流程

1. **Fork 项目** 并创建您的分支
   ```bash
   git checkout -b feature/AmazingFeature
   ```

2. **进行更改** 并确保通过所有检查
   ```bash
   npm run lint
   npm run test
   npm run build
   ```

3. **提交更改**
   ```bash
   git commit -m 'feat: 添加某个新功能'
   ```

4. **推送到分支**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **创建 Pull Request**
   - 填写 PR 模板
   - 关联相关 Issue
   - 等待代码审查

### PR 检查清单

- [ ] 代码通过 lint 检查
- [ ] 新功能有对应的测试
- [ ] 文档已更新（如需要）
- [ ] 提交信息符合规范
- [ ] 不引入新的 console 错误

---

## 贡献类型

### 🎮 游戏内容

- 新的剧情章节
- 职场梗和对话
- Boss 设计
- 成就创意

### 🐛 Bug 修复

- 修复已知问题
- 兼容性改进

### ✨ 新功能

- 新的游戏机制
- UI/UX 改进
- 性能优化

### 📝 文档

- README 改进
- 代码注释
- 翻译

### 🧪 测试

- 单元测试
- 集成测试

---

## 联系方式

- **Issues**: https://github.com/lohasle/ai-wave-survivor/issues
- **Discussions**: https://github.com/lohasle/ai-wave-survivor/discussions

---

再次感谢您的贡献！🎉

---

*最后更新: 2026-02-25*
