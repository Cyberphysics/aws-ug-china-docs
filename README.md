# 亚马逊云科技 UG China 社区文档站点

这是亚马逊云科技 User Group China 社区的官方文档站点，基于 Docusaurus 构建，托管在 GitHub Pages 上。

## 🚀 功能特性

- ✅ 多语言支持（中文/英文）
- ✅ 响应式设计，支持移动端
- ✅ 自动化部署到 GitHub Pages
- ✅ 搜索功能
- ✅ 深色/浅色主题切换
- ✅ PDF 文档托管
- ✅ 博客功能

## 📚 文档内容

### 亚马逊云科技 Builder Cards
- 完整的中英文游戏手册
- 游戏规则详解
- 卡牌列表和说明
- 策略指南

### 社区手册
- 社区介绍和价值观
- 成员指南
- 活动组织指南
- 贡献指南

### 游戏与工具
- Console 使用手册
- Desktop 应用指南
- 安装和配置说明
- 故障排除

## 🛠️ 本地开发

### 环境要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖
```bash
cd ug-doc-website
npm install
```

### 启动开发服务器
```bash
npm start
```

### 构建生产版本
```bash
npm run build
```

### 本地预览构建结果
```bash
npm run serve
```

## 🌍 多语言支持

### 生成翻译文件
```bash
npm run write-translations -- --locale en
```

### 启动英文版本
```bash
npm run start -- --locale en
```

## 📝 内容贡献

### 添加新文档
1. 在 `docs/` 目录下创建 Markdown 文件
2. 更新 `sidebars.ts` 配置
3. 如需多语言支持，在 `i18n/en/docusaurus-plugin-content-docs/current/` 下添加对应文件

### 添加博客文章
1. 在 `blog/` 目录下创建 Markdown 文件
2. 文件名格式：`YYYY-MM-DD-title.md`
3. 添加 frontmatter 元数据

### 上传 PDF 文档
1. 将 PDF 文件放在 `static/pdfs/` 对应子目录
2. 在文档中使用 `/pdfs/path/to/file.pdf` 引用

## 🚀 部署

### 自动部署
- 推送到 `main` 分支会自动触发 GitHub Actions
- 构建完成后自动部署到 GitHub Pages

### 手动部署
```bash
npm run build
npm run deploy
```

## ⚙️ 配置

### 站点配置
主要配置文件：`docusaurus.config.ts`

### 侧边栏配置
侧边栏配置：`sidebars.ts`

### 多语言配置
语言配置在 `docusaurus.config.ts` 的 `i18n` 部分

## 📁 项目结构

```
ug-doc-website/
├── docs/                          # 文档源文件
│   ├── builder-cards/             # 亚马逊云科技 Builder Cards 文档
│   ├── community-handbook/        # 社区手册
│   └── games/                     # 游戏相关文档
├── blog/                          # 博客文章
├── src/                           # React 组件和页面
├── static/                        # 静态资源
│   ├── img/                       # 图片资源
│   └── pdfs/                      # PDF 文档
├── i18n/                          # 多语言翻译文件
├── .github/workflows/             # GitHub Actions 配置
├── docusaurus.config.ts           # 主配置文件
├── sidebars.ts                    # 侧边栏配置
└── package.json                   # 依赖配置
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -am 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 获取帮助

- [Docusaurus 官方文档](https://docusaurus.io/docs)
- [GitHub Issues](https://github.com/your-username/aws-ug-china-docs/issues)
- [亚马逊云科技 UG China 社区](https://cnusergroup.github.io/cnusergroup-website/)

---

由 ❤️ 和 ☕ 驱动，为亚马逊云科技 UG China 社区构建