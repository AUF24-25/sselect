// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Enhanced Navbar scroll effect with smooth color transitions
const navbar = document.getElementById('navbar');
let lastScrollY = 0;
let ticking = false;

function updateNavbar() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.transform = scrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = scrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Smooth scroll for anchor links with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Advanced Intersection Observer for staggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const staggeredObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.classList.add('animated');
            }, index * 100);
        }
    });
}, observerOptions);

// Enhanced scroll animations with staggered delays
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate with staggered timing
    const animateElements = document.querySelectorAll(
        '.project-card, .project-item, .reflection-card, .highlight-item, .about-description'
    );

    // Set initial styles for animations
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.transitionDelay = `${index * 0.1}s`;
        staggeredObserver.observe(el);
    });

    // Special animation for hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.3}s`;
    });
});

// Enhanced page transition with loading animation
let isTransitioning = false;

document.addEventListener('DOMContentLoaded', () => {
    // Create enhanced loading overlay
    const loader = document.createElement('div');
    loader.className = 'enhanced-loader';
    loader.innerHTML = `
        <div class="loader-container">
            <div class="loader-ring">
                <div class="loader-circle"></div>
                <div class="loader-circle"></div>
                <div class="loader-circle"></div>
                <div class="loader-circle"></div>
            </div>
            <div class="loader-text">
                <span class="loader-letter">R</span>
                <span class="loader-letter">E</span>
                <span class="loader-letter">V</span>
                <span class="loader-letter">E</span>
                <span class="loader-letter">L</span>
                <span class="loader-letter">A</span>
                <span class="loader-letter">R</span>
                <span class="loader-letter">E</span>
            </div>
        </div>
    `;
    
    // Add loader styles
    const loaderStyles = `
        .enhanced-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(250, 250, 250, 0.98), rgba(230, 230, 250, 0.95));
            backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        
        .loader-container {
            text-align: center;
        }
        
        .loader-ring {
            width: 80px;
            height: 80px;
            margin: 0 auto 2rem;
            position: relative;
        }
        
        .loader-circle {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-top: 3px solid #8A2BE2;
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
        }
        
        .loader-circle:nth-child(2) {
            border-top-color: #DDA0DD;
            animation-delay: 0.3s;
            transform: scale(0.8);
        }
        
        .loader-circle:nth-child(3) {
            border-top-color: #E6E6FA;
            animation-delay: 0.6s;
            transform: scale(0.6);
        }
        
        .loader-circle:nth-child(4) {
            border-top-color: #8A2BE2;
            animation-delay: 0.9s;
            transform: scale(0.4);
        }
        
        .loader-text {
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 0.2em;
        }
        
        .loader-letter {
            display: inline-block;
            color: #8A2BE2;
            animation: wave 1.5s ease-in-out infinite;
            animation-fill-mode: both;
        }
        
        .loader-letter:nth-child(1) { animation-delay: 0.1s; }
        .loader-letter:nth-child(2) { animation-delay: 0.2s; }
        .loader-letter:nth-child(3) { animation-delay: 0.3s; }
        .loader-letter:nth-child(4) { animation-delay: 0.4s; }
        .loader-letter:nth-child(5) { animation-delay: 0.5s; }
        .loader-letter:nth-child(6) { animation-delay: 0.6s; }
        .loader-letter:nth-child(7) { animation-delay: 0.7s; }
        .loader-letter:nth-child(8) { animation-delay: 0.8s; }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = loaderStyles;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
    
    // Page fade-in effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in-out';
    
    // Hide loader and fade in page
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            document.body.style.opacity = '1';
            
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 800);
        }, 1000);
    });
});

// Enhanced page navigation with smooth transitions
document.querySelectorAll('a[href$=".html"], .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's the current page or an external link
        if (!href || href.startsWith('#') || href.startsWith('http') || isTransitioning) {
            return;
        }
        
        e.preventDefault();
        isTransitioning = true;
        
        // Create transition overlay
        const overlay = document.createElement('div');
        overlay.className = 'page-transition';
        overlay.innerHTML = '<div class="transition-circle"></div>';
        
        const transitionStyles = `
            .page-transition {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #8A2BE2, #DDA0DD, #E6E6FA);
                z-index: 10001;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            
            .transition-circle {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
        `;
        
        if (!document.querySelector('#transition-style')) {
            const style = document.createElement('style');
            style.id = 'transition-style';
            style.textContent = transitionStyles;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(overlay);
        
        // Trigger transition
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Navigate after transition
        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
});

// Advanced parallax effect for hero section
let rafId = null;

function updateParallax() {
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-bg-image');
    
    if (hero && heroBackground) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        const scale = 1 + scrolled * 0.0003;
        
        heroBackground.style.transform = `translateY(${rate}px) scale(${scale})`;
        
        // Add depth to hero overlay
        const overlay = document.querySelector('.hero-overlay');
        if (overlay) {
            const opacity = Math.max(0.6, 1 - scrolled * 0.001);
            overlay.style.opacity = opacity;
        }
    }
}

window.addEventListener('scroll', () => {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(updateParallax);
});

// Enhanced typing effect for hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid #8A2BE2';
        heroTitle.style.minHeight = '1.2em';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Blinking cursor effect
                setTimeout(() => {
                    let blinkCount = 0;
                    const blinkCursor = setInterval(() => {
                        heroTitle.style.borderRight = 
                            heroTitle.style.borderRight === 'none' ? 
                            '3px solid #8A2BE2' : 'none';
                        
                        blinkCount++;
                        if (blinkCount >= 6) {
                            clearInterval(blinkCursor);
                            heroTitle.style.borderRight = 'none';
                        }
                    }, 500);
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1500);
    }
});

// Floating particles animation
function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    // Create particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * window.innerWidth;
        const animationDuration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(138, 43, 226, 0.4), rgba(221, 160, 221, 0.2));
            border-radius: 50%;
            left: ${startX}px;
            top: 100vh;
            animation: floatUp ${animationDuration}s linear infinite;
            animation-delay: ${delay}s;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
    
    // Add floating animation
    const particleStyles = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) translateX(0) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
                transform: scale(1);
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) scale(0);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = particleStyles;
        document.head.appendChild(style);
    }
}

// Enhanced scroll to top functionality
const createScrollToTop = () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'enhanced-scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: linear-gradient(135deg, #E6E6FA, #DDA0DD, #8A2BE2);
        background-size: 300% 300%;
        border: none;
        color: #2C2C2C;
        font-size: 18px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 25px rgba(138, 43, 226, 0.3);
        z-index: 1000;
        backdrop-filter: blur(10px);
        animation: gradientShift 3s ease-in-out infinite;
    `;
    
    const gradientShiftStyle = `
        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
    `;
    
    if (!document.querySelector('#scroll-gradient-style')) {
        const style = document.createElement('style');
        style.id = 'scroll-gradient-style';
        style.textContent = gradientShiftStyle;
        document.head.appendChild(style);
    }
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollButton);
    
    // Show/hide with smooth animation
    let showButton = false;
    window.addEventListener('scroll', () => {
        const shouldShow = window.pageYOffset > 300;
        
        if (shouldShow !== showButton) {
            showButton = shouldShow;
            if (shouldShow) {
                scrollButton.style.opacity = '1';
                scrollButton.style.visibility = 'visible';
                scrollButton.style.transform = 'scale(1)';
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.visibility = 'hidden';
                scrollButton.style.transform = 'scale(0.8)';
            }
        }
    });
    
    // Enhanced hover effects
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.15)';
        scrollButton.style.boxShadow = '0 12px 35px rgba(138, 43, 226, 0.5)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = showButton ? 'scale(1)' : 'scale(0.8)';
        scrollButton.style.boxShadow = '0 8px 25px rgba(138, 43, 226, 0.3)';
    });
};

// Enhanced project card interactions with magnetic effect
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card, .project-item');
    
    projectCards.forEach(card => {
        let isHovering = false;
        
        card.addEventListener('mouseenter', () => {
            isHovering = true;
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.boxShadow = '0 25px 60px rgba(138, 43, 226, 0.25)';
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mousemove', (e) => {
            if (!isHovering) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 5;
            const rotateY = (centerX - x) / centerX * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            isHovering = false;
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
            card.style.boxShadow = '';
            card.style.zIndex = '';
        });
    });
});

// Enhanced cursor trail effect
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
    const trail = [];
    const trailLength = 12;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'enhanced-cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: ${6 - i * 0.3}px;
            height: ${6 - i * 0.3}px;
            background: rgba(138, 43, 226, ${0.9 - (i * 0.07)});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: opacity 0.3s ease;
            box-shadow: 0 0 ${10 - i}px rgba(138, 43, 226, ${0.5 - (i * 0.04)});
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let trailX = [];
    let trailY = [];
    
    for (let i = 0; i < trailLength; i++) {
        trailX[i] = 0;
        trailY[i] = 0;
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animateTrail = () => {
        trailX[0] = mouseX;
        trailY[0] = mouseY;
        
        for (let i = 1; i < trailLength; i++) {
            trailX[i] += (trailX[i - 1] - trailX[i]) * 0.25;
            trailY[i] += (trailY[i - 1] - trailY[i]) * 0.25;
            
            trail[i].style.left = trailX[i] + 'px';
            trail[i].style.top = trailY[i] + 'px';
        }
        
        requestAnimationFrame(animateTrail);
    };
    
    animateTrail();
});

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', () => {
    createFloatingParticles();
    
    if (document.body.scrollHeight > window.innerHeight * 2) {
        createScrollToTop();
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .project-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `;
            
            if (!document.querySelector('#ripple-style')) {
                const style = document.createElement('style');
                style.id = 'ripple-style';
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Enhanced Easter egg with particle explosion
let logoClickCount = 0;
let lastClickTime = 0;

document.addEventListener('click', (e) => {
    const currentTime = Date.now();
    
    if (e.target.classList.contains('nav-logo') || e.target.closest('.nav-logo')) {
        if (currentTime - lastClickTime < 1000) { // Clicks within 1 second
            logoClickCount++;
        } else {
            logoClickCount = 1;
        }
        lastClickTime = currentTime;
        
        if (logoClickCount === 7) {
            // Create magical particle explosion
            const explosionCenter = {
                x: e.clientX,
                y: e.clientY
            };
            
            for (let i = 0; i < 100; i++) {
                const particle = document.createElement('div');
                const hue = Math.random() * 360;
                const size = Math.random() * 8 + 4;
                const velocity = Math.random() * 15 + 5;
                const angle = Math.random() * Math.PI * 2;
                
                particle.style.cssText = `
                    position: fixed;
                    width: ${size}px;
                    height: ${size}px;
                    background: hsl(${hue}, 70%, 60%);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10000;
                    left: ${explosionCenter.x}px;
                    top: ${explosionCenter.y}px;
                    box-shadow: 0 0 ${size * 2}px hsl(${hue}, 70%, 60%);
                `;
                
                document.body.appendChild(particle);
                
                // Animate particle
                const startTime = Date.now();
                const animate = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = elapsed / 2000; // 2 seconds
                    
                    if (progress < 1) {
                        const x = explosionCenter.x + Math.cos(angle) * velocity * elapsed * 0.01;
                        const y = explosionCenter.y + Math.sin(angle) * velocity * elapsed * 0.01 + (elapsed * elapsed * 0.0001);
                        const opacity = 1 - progress;
                        const scale = 1 - progress * 0.5;
                        
                        particle.style.left = x + 'px';
                        particle.style.top = y + 'px';
                        particle.style.opacity = opacity;
                        particle.style.transform = `scale(${scale})`;
                        
                        requestAnimationFrame(animate);
                    } else {
                        particle.remove();
                    }
                };
                
                animate();
            }
            
            // Success message
            const message = document.createElement('div');
            message.innerHTML = '✨ MAGICAL! ✨';
            message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 2rem;
                font-weight: bold;
                color: #8A2BE2;
                text-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
                z-index: 10001;
                pointer-events: none;
                animation: magicalText 3s ease-in-out forwards;
            `;
            
            if (!document.querySelector('#magical-style')) {
                const style = document.createElement('style');
                style.id = 'magical-style';
                style.textContent = `
                    @keyframes magicalText {
                        0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
                        20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
                        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(message);
            setTimeout(() => message.remove(), 3000);
            
            logoClickCount = 0;
        }
    } else {
        logoClickCount = 0;
    }
});

// Performance optimization: Throttle resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate any size-dependent elements
        if (window.innerWidth <= 768) {
            // Hide cursor trail on mobile
            document.querySelectorAll('.enhanced-cursor-trail').forEach(dot => {
                dot.style.display = 'none';
            });
        } else {
            // Show cursor trail on desktop
            document.querySelectorAll('.enhanced-cursor-trail').forEach(dot => {
                dot.style.display = 'block';
            });
        }
    }, 250);
});

// Accessibility: Respect prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01s');
    document.documentElement.style.setProperty('--transition-duration', '0.01s');
}