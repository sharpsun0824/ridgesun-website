# 空气过滤器网站项目 - www.ridgesun.com

## 项目概述
为空气过滤器产品创建官方网站，使用Cloudflare作为服务器。

## 目标用户
- 已购买空气过滤器的客户
- 潜在客户

## 核心功能
1. **扫码进入** - 客户通过产品上的二维码访问网站
2. **安装视频** - 观看产品安装教程视频
3. **质保注册** - 在线注册产品质保
4. **购买滤网** - 跳转到亚马逊页面购买替换滤网

## 技术栈建议
- **前端**: HTML5, CSS3, JavaScript (React/Vue可选)
- **部署**: Cloudflare Pages/Workers
- **域名**: www.ridgesun.com
- **视频托管**: Cloudflare Stream 或 YouTube/Vimeo
- **表单处理**: Cloudflare Forms 或第三方服务

## 项目结构
```
ridgesun-website/
├── src/           # 源代码
├── public/        # 静态资源
├── assets/        # 图片、视频等素材
├── docs/          # 文档
└── PROJECT.md     # 项目说明
```

## 下一步行动
1. 设计网站信息架构
2. 创建线框图和设计稿
3. 开发前端页面
4. 集成视频播放功能
5. 实现质保注册表单
6. 配置亚马逊跳转链接
7. 部署到Cloudflare
8. 设置域名解析