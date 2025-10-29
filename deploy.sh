#!/bin/bash

# 部署脚本 - 用于推送更改到 GitHub 并触发自动部署

echo "🚀 开始部署 AWS UG China 文档站点..."

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📝 发现未提交的更改，正在提交..."
    
    # 添加所有更改
    git add .
    
    # 提交更改
    echo "请输入提交信息 (按 Enter 使用默认信息):"
    read commit_message
    
    if [[ -z "$commit_message" ]]; then
        commit_message="Update documentation - $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    git commit -m "$commit_message"
    echo "✅ 更改已提交: $commit_message"
else
    echo "ℹ️  没有发现未提交的更改"
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin main

if [[ $? -eq 0 ]]; then
    echo "✅ 成功推送到 GitHub!"
    echo "🔄 GitHub Actions 将自动构建和部署网站"
    echo "📍 网站地址: https://cyberphysics.github.io/aws-ug-china-docs/"
    echo "⏱️  部署通常需要 2-5 分钟完成"
    echo ""
    echo "💡 你可以在以下地址查看部署状态:"
    echo "   https://github.com/cyberphysics/aws-ug-china-docs/actions"
else
    echo "❌ 推送失败，请检查网络连接和 Git 配置"
    exit 1
fi