// 主JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
    // 移动菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            mobileMenuBtn.classList.toggle('active');
        });
        
        // 响应式调整
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
                mobileMenuBtn.classList.remove('active');
            } else {
                navMenu.style.display = 'none';
                mobileMenuBtn.classList.remove('active');
            }
        });
        
        // 初始状态
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 移动端关闭菜单
                if (window.innerWidth <= 768 && navMenu) {
                    navMenu.style.display = 'none';
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // 功能卡片动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // 观察功能卡片
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
    
    // 二维码模拟交互
    const qrPlaceholder = document.querySelector('.qr-placeholder');
    if (qrPlaceholder) {
        qrPlaceholder.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
            
            // 显示扫码提示
            alert('请使用手机扫描产品上的二维码访问专属页面');
        });
    }
    
    // 表单验证示例（用于质保注册页面）
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff4444';
                    isValid = false;
                    
                    // 添加错误提示
                    let errorMsg = field.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = '#ff4444';
                        errorMsg.style.fontSize = '0.875rem';
                        errorMsg.style.marginTop = '0.25rem';
                        field.parentNode.insertBefore(errorMsg, field.nextSibling);
                    }
                    errorMsg.textContent = '此字段为必填项';
                } else {
                    field.style.borderColor = '';
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
    
    // 亚马逊链接跟踪（示例）
    const amazonLinks = document.querySelectorAll('a[href*="amazon"]');
    amazonLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 这里可以添加分析代码
            console.log('Amazon link clicked:', this.href);
            
            // 示例：打开新窗口
            this.target = '_blank';
            this.rel = 'noopener noreferrer';
        });
    });
    
    // 视频播放器控制（示例）
    const videoPlayers = document.querySelectorAll('video');
    videoPlayers.forEach(video => {
        video.addEventListener('play', function() {
            console.log('Video started playing:', this.src);
        });
        
        video.addEventListener('ended', function() {
            console.log('Video ended:', this.src);
        });
    });
    
    // 性能优化：延迟加载图片
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});