# Cloudflare 部署配置指南

## 部署选项

### 选项1：Cloudflare Pages（推荐）
适用于静态网站，免费套餐包含：
- 无限请求
- 无限带宽
- 自动SSL证书
- 全球CDN
- 自定义域名

### 选项2：Cloudflare Workers
适用于需要动态功能的网站，免费套餐包含：
- 每天100,000次请求
- 10ms CPU时间/请求

## 部署步骤

### 1. 准备部署文件
```bash
# 构建静态文件
npm run build  # 如果使用构建工具
# 或直接复制文件到dist目录
cp -r src/* public/
```

### 2. 部署到Cloudflare Pages
```bash
# 安装Wrangler CLI
npm install -g wrangler

# 登录Cloudflare
wrangler login

# 创建新项目
wrangler pages project create ridgesun-website

# 部署
wrangler pages deploy ./public --project-name=ridgesun-website
```

### 3. 配置自定义域名
1. 在Cloudflare Pages控制台选择项目
2. 进入"自定义域名"设置
3. 添加 `www.ridgesun.com`
4. 按照提示配置DNS记录

## DNS配置示例

### Cloudflare DNS记录
```
类型    名称                内容                    TTL  代理状态
A       ridgesun.com        [服务器IP]             自动  已代理
CNAME   www                 ridgesun.com          自动  已代理
```

### 如果使用其他DNS服务商
```
类型    名称                内容                    TTL
A       ridgesun.com        [Cloudflare提供的IP]   自动
CNAME   www                 ridgesun.com          自动
```

## 环境配置

### `wrangler.toml` 示例
```toml
name = "ridgesun-website"
type = "webpack"
account_id = "your-account-id"
workers_dev = true
route = "www.ridgesun.com/*"
zone_id = "your-zone-id"

[site]
bucket = "./public"
entry-point = "workers-site"

[env.production]
zone_id = "your-zone-id"
routes = [
    "www.ridgesun.com/*"
]
```

### `package.json` 构建脚本示例
```json
{
  "scripts": {
    "build": "npm run clean && npm run copy && npm run minify",
    "clean": "rm -rf public/*",
    "copy": "cp -r src/* public/",
    "minify": "npm run minify:css && npm run minify:js",
    "minify:css": "cleancss -o public/styles/main.min.css src/styles/*.css",
    "minify:js": "uglifyjs src/scripts/*.js -o public/scripts/main.min.js",
    "deploy": "wrangler pages deploy ./public --project-name=ridgesun-website"
  }
}
```

## 性能优化

### 1. 缓存策略
在 `_headers` 文件中配置：
```
/*
  Cache-Control: public, max-age=3600
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
```

### 2. 图片优化
- 使用WebP格式图片
- 实现响应式图片
- 启用懒加载

### 3. 代码分割
- 按需加载JavaScript
- 分离关键CSS
- 使用预加载

## 监控和分析

### 1. Cloudflare Analytics
- 免费提供基本流量分析
- 实时攻击防护统计
- 性能指标监控

### 2. 集成Google Analytics
在HTML中添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. 错误监控
考虑使用：
- Sentry（错误跟踪）
- Logflare（日志管理）
- Cloudflare Workers日志

## 安全配置

### 1. SSL/TLS
- 启用"Full" SSL模式
- 始终使用HTTPS
- 启用HSTS

### 2. 防火墙规则
```javascript
// Cloudflare Workers防火墙示例
addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  
  // 阻止恶意User-Agent
  const userAgent = request.headers.get('User-Agent') || '';
  if (userAgent.includes('bad-bot')) {
    return new Response('Access denied', { status: 403 });
  }
  
  event.respondWith(handleRequest(request));
});
```

### 3. 速率限制
在Cloudflare控制台配置：
- 每个IP请求频率限制
- 防止暴力破解
- DDoS防护

## 备份和恢复

### 1. 代码备份
```bash
# 备份到GitHub
git add .
git commit -m "Deploy to Cloudflare"
git push origin main
```

### 2. 内容备份
- 定期导出表单数据
- 备份媒体文件到云存储
- 数据库备份（如有）

## 故障排除

### 常见问题
1. **DNS传播延迟**：等待24-48小时
2. **SSL证书问题**：检查域名验证状态
3. **缓存问题**：清除Cloudflare缓存
4. **CORS错误**：配置正确的CORS头

### 调试工具
```bash
# 检查DNS
dig www.ridgesun.com
nslookup www.ridgesun.com

# 检查SSL
openssl s_client -connect www.ridgesun.com:443

# 检查HTTP头
curl -I https://www.ridgesun.com
```

## 更新和维护

### 定期任务
- [ ] 更新依赖包
- [ ] 检查SSL证书有效期
- [ ] 审查访问日志
- [ ] 测试所有功能
- [ ] 备份数据

### 监控指标
- 网站可用性 > 99.9%
- 页面加载时间 < 3秒
- 错误率 < 0.1%
- 安全扫描通过率 100%