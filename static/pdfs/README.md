# PDF 文档存放目录

这个目录用于存放各种 PDF 文档资源。

## 目录结构

```
pdfs/
├── builder-cards/          # AWS Builder Cards 相关 PDF
│   ├── aws-builder-cards-zh.pdf
│   ├── aws-builder-cards-en.pdf
│   └── quick-reference.pdf
├── community/              # 社区手册 PDF
│   ├── community-handbook-zh.pdf
│   ├── membership-guide.pdf
│   └── event-guidelines.pdf
└── games/                  # 游戏相关 PDF
    ├── console-manual.pdf
    ├── desktop-player-guide.pdf
    └── troubleshooting.pdf
```

## 使用说明

1. 将 PDF 文件放在对应的子目录中
2. 在文档中使用相对路径引用：`/pdfs/builder-cards/aws-builder-cards-zh.pdf`
3. 文件会自动部署到 GitHub Pages

## 注意事项

- 请确保 PDF 文件大小合理（建议小于 10MB）
- 使用有意义的文件名
- 定期检查链接的有效性