# Cloudflare Pages 部署指南

## 📋 部署前提

1. **Cloudflare账户** - 注册并登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **域名配置** - 确保 `ridgesun.com` 已添加到Cloudflare
3. **Wrangler CLI** - 安装 `npm install -g wrangler`

## 🚀 快速部署

### 方法1：通过GitHub仓库自动部署（推荐）

1. **连接GitHub仓库**
   - 在Cloudflare Pages控制台点击"创建项目"
   - 选择"连接到Git"
   - 授权并选择 `sharpsun0824/ridgesun-website` 仓库
   - 选择 `main` 分支

2. **配置构建设置**
   ```
   项目名称: ridgesun-website
   生产分支: main
   构建设置: 
     - 构建命令: (留空，因为是静态HTML)
     - 构建输出目录: ridgesun-website/src
   环境变量: (无需配置)
   ```

3. **点击"保存并部署"**

### 方法2：通过Wrangler CLI手动部署

```bash
# 1. 安装Wrangler
npm install -g wrangler

# 2. 登录Cloudflare
wrangler login

# 3. 创建Pages项目
wrangler pages project create ridgesun-website

# 4. 部署
wrangler pages deploy ridgesun-website/src --project-name=ridgesun-website
```

## 🌐 自定义域名配置

### 1. 添加自定义域名
- 在Pages项目设置中点击"自定义域名"
- 添加 `www.ridgesun.com`
- Cloudflare会自动配置DNS记录

### 2. 配置重定向（可选）
- 设置 `ridgesun.com` 重定向到 `www.ridgesun.com`
- 在Cloudflare DNS中添加重定向规则

## ⚙️ 项目配置说明

### 文件结构
```
ridgesun-website/
├── src/                    # 网站源文件（部署目录）
│   ├── index.html         # 首页 (原 index-homepage.html)
│   ├── go.html           # QR枢纽页 (原 go-new.html)
│   ├── products-1000-series.html
│   ├── support-center.html
│   ├── 404.html          # 404错误页面
│   ├── styles/           # CSS样式
│   ├── scripts/          # JavaScript
│   ├── assets/           # 图片等资源
│   ├── _headers          # 自定义HTTP头
│   └── _redirects        # 重定向规则
├── wrangler.toml         # Cloudflare配置
├── package.json          # 项目配置
└── *.md                  # 文档文件
```

### 路由映射
- `/` → `index.html`
- `/go` → `go.html`
- `/products` → `products-1000-series.html`
- `/support` → `support-center.html`
- 其他路径 → `404.html`

## 🔧 环境配置

### 生产环境变量
在Cloudflare Pages设置中添加：
```
NODE_ENV = production
SITE_URL = https://www.ridgesun.com
```

### 构建钩子（如果需要）
在 `package.json` 中配置：
```json
{
  "scripts": {
    "build": "echo 'Building static site'",
    "deploy": "wrangler pages deploy src --project-name=ridgesun-website"
  }
}
```

## 📊 监控和日志

### 1. 访问日志
- Cloudflare Analytics 提供基本流量统计
- 在Pages控制台查看部署日志

### 2. 错误监控
- 配置自定义404页面
- 查看浏览器控制台错误
- 使用Cloudflare Workers进行错误追踪

### 3. 性能监控
- Pages提供部署性能指标
- 使用Google PageSpeed Insights测试
- Cloudflare Speed Test工具

## 🔄 持续部署

### GitHub Actions工作流（可选）
创建 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ridgesun-website
          directory: ridgesun-website/src
```

## 🛠️ 故障排除

### 常见问题

1. **部署失败**
   - 检查 `wrangler.toml` 配置
   - 验证输出目录路径
   - 查看部署日志中的错误信息

2. **404错误**
   - 确保 `_redirects` 文件配置正确
   - 检查文件路径和大小写
   - 验证自定义域名DNS配置

3. **SSL证书问题**
   - 等待DNS传播（最长48小时）
   - 检查域名验证状态
   - 联系Cloudflare支持

4. **缓存问题**
   - 清除Cloudflare缓存
   - 检查 `_headers` 中的缓存控制
   - 使用无缓存URL参数

### 调试命令
```bash
# 检查文件结构
ls -la ridgesun-website/src/

# 测试本地服务器
npx live-server ridgesun-website/src --port=3000

# 检查HTTP头
curl -I https://www.ridgesun.com

# 验证部署
wrangler pages deployment list --project-name=ridgesun-website
```

## 📈 优化建议

### 1. 性能优化
- 启用Cloudflare Auto Minify
- 配置Brotli压缩
- 使用Argo Smart Routing

### 2. 安全增强
- 启用WAF规则
- 配置速率限制
- 设置安全头

### 3. SEO优化
- 验证Google Search Console
- 提交Sitemap
- 配置结构化数据

## 📞 支持

- Cloudflare文档: https://developers.cloudflare.com/pages/
- GitHub Issues: 报告代码问题
- Cloudflare支持: 账户和技术问题

---

**部署状态**: ✅ 配置完成，可立即部署  
**预计部署时间**: 2-5分钟  
**首次访问**: DNS传播可能需要24-48小时