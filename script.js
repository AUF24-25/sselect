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

// Optimized Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScrollY = 0;
let ticking = false;

function updateNavbar() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
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

// Smooth scroll for anchor links
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

// Optimized Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
            fadeInObserver.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Simplified scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.project-card, .project-item, .reflection-card, .highlight-item'
    );

    // Set initial styles for animations
    animateElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
});

// Simplified page transition
let isTransitioning = false;

document.addEventListener('DOMContentLoaded', () => {
    // Simple loading effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Optimized page navigation
document.querySelectorAll('a[href$=".html"], .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (!href || href.startsWith('#') || href.startsWith('http') || isTransitioning) {
            return;
        }
        
        e.preventDefault();
        isTransitioning = true;
        
        // Simple fade transition
        document.body.style.opacity = '0.3';
        
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    });
});

// Simplified parallax effect for hero section
let rafId = null;

function updateParallax() {
    const heroBackground = document.querySelector('.hero-bg-image');
    
    if (heroBackground && window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
}

window.addEventListener('scroll', () => {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(updateParallax);
});

// Optimized typing effect for hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && window.innerWidth > 768) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.minHeight = '1.2em';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 60);
            }
        };
        
        setTimeout(typeWriter, 800);
    }
});

// Lightweight floating particles (reduced count)
function createFloatingParticles() {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
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
    
    // Reduced to 6 particles for better performance
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        const size = Math.random() * 3 + 2;
        const startX = Math.random() * window.innerWidth;
        const animationDuration = Math.random() * 15 + 10;
        const delay = Math.random() * 3;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(138, 43, 226, 0.3);
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
                transform: translateY(0) scale(0);
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
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) scale(0);
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

// Optimized scroll to top functionality
const createScrollToTop = () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #E6E6FA, #8A2BE2);
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
        z-index: 1000;
    `;
    
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
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.visibility = 'hidden';
            }
        }
    });
    
    // Hover effects
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
    });
};

// Simplified project card interactions
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card, .project-item');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                card.style.transition = 'all 0.3s ease';
                card.style.zIndex = '10';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                card.style.transition = 'all 0.3s ease';
                card.style.zIndex = '';
            }
        });
    });
});

// Simplified ripple effect for buttons
document.addEventListener('DOMContentLoaded', () => {
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
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.4s linear;
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
            }, 400);
        });
    });
});

// Simplified Easter egg
let logoClickCount = 0;
let lastClickTime = 0;

document.addEventListener('click', (e) => {
    const currentTime = Date.now();
    
    if (e.target.classList.contains('nav-logo') || e.target.closest('.nav-logo')) {
        if (currentTime - lastClickTime < 1000) {
            logoClickCount++;
        } else {
            logoClickCount = 1;
        }
        lastClickTime = currentTime;
        
        if (logoClickCount === 7) {
            // Simple celebration effect
            const celebration = document.createElement('div');
            celebration.innerHTML = '🎉 MAGICAL! 🎉';
            celebration.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 2rem;
                font-weight: bold;
                color: #8A2BE2;
                z-index: 10001;
                pointer-events: none;
                animation: celebrate 2s ease-in-out forwards;
            `;
            
            if (!document.querySelector('#celebrate-style')) {
                const style = document.createElement('style');
                style.id = 'celebrate-style';
                style.textContent = `
                    @keyframes celebrate {
                        0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
                        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
                        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(celebration);
            setTimeout(() => celebration.remove(), 2000);
            
            logoClickCount = 0;
        }
    } else {
        logoClickCount = 0;
    }
});

// Initialize optimized features
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        createFloatingParticles();
    }
    
    if (document.body.scrollHeight > window.innerHeight * 2) {
        createScrollToTop();
    }
});

// Performance optimization: Throttle resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recreate particles if switching to desktop
        if (window.innerWidth > 768 && !document.querySelector('.particle-container')) {
            createFloatingParticles();
        }
        // Remove particles on mobile
        else if (window.innerWidth <= 768) {
            const particleContainer = document.querySelector('.particle-container');
            if (particleContainer) {
                particleContainer.remove();
            }
        }
    }, 250);
});

// Accessibility: Respect prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01s');
    
    // Remove particles for users who prefer reduced motion
    const particleContainer = document.querySelector('.particle-container');
    if (particleContainer) {
        particleContainer.remove();
    }
}