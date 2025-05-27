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

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.project-card, .project-item, .insight-card, .timeline-item, .about-content'
    );

    // Set initial styles for animation
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Staggered animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Staggered animation for insight cards
    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
});

// Page transition effect
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    // Fade in after DOM is loaded
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page navigation with transition
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Fade out current page
        document.body.style.opacity = '0';
        
        // Navigate to new page after fade out
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Dynamic text animation for hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Add typing effect
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #8A2BE2';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is done
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
});

// Scroll to top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Add scroll to top button if page is long enough
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.scrollHeight > window.innerHeight * 2) {
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollButton.className = 'scroll-to-top';
        scrollButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #E6E6FA, #DDA0DD);
            border: none;
            color: #2C2C2C;
            font-size: 18px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
        `;
        
        scrollButton.addEventListener('click', scrollToTop);
        document.body.appendChild(scrollButton);
        
        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.style.opacity = '1';
                scrollButton.style.visibility = 'visible';
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.visibility = 'hidden';
            }
        });
        
        // Hover effect for scroll button
        scrollButton.addEventListener('mouseenter', () => {
            scrollButton.style.transform = 'scale(1.1)';
        });
        
        scrollButton.addEventListener('mouseleave', () => {
            scrollButton.style.transform = 'scale(1)';
        });
    }
});

// Enhanced project card interactions
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card, .project-item');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add glow effect
            card.style.boxShadow = '0 20px 40px rgba(138, 43, 226, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            // Remove glow effect
            card.style.boxShadow = '';
        });
    });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    // Create loading overlay
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(250, 250, 250, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: #2C2C2C;
    `;
    
    const spinner = loader.querySelector('.loader-spinner');
    spinner.style.cssText = `
        width: 40px;
        height: 40px;
        border: 3px solid rgba(230, 230, 250, 0.3);
        border-top: 3px solid #8A2BE2;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    `;
    
    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 500);
        }, 500);
    });
});

// Add cursor trail effect
document.addEventListener('DOMContentLoaded', () => {
    const trail = [];
    const trailLength = 10;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(138, 43, 226, ${0.8 - (i * 0.08)});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: opacity 0.3s ease;
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
        
        for (let i = 0; i < trailLength; i++) {
            if (i > 0) {
                trailX[i] += (trailX[i - 1] - trailX[i]) * 0.3;
                trailY[i] += (trailY[i - 1] - trailY[i]) * 0.3;
            }
            
            trail[i].style.left = trailX[i] + 'px';
            trail[i].style.top = trailY[i] + 'px';
        }
        
        requestAnimationFrame(animateTrail);
    };
    
    animateTrail();
    
    // Hide trail on mobile devices
    if (window.innerWidth <= 768) {
        trail.forEach(dot => dot.style.display = 'none');
    }
});

// Add Easter egg
let clickCount = 0;
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-logo') || e.target.closest('.nav-logo')) {
        clickCount++;
        if (clickCount === 5) {
            // Create confetti effect
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: hsl(${Math.random() * 360}, 50%, 50%);
                    top: -10px;
                    left: ${Math.random() * 100}%;
                    animation: confetti-fall 3s linear forwards;
                    z-index: 10000;
                `;
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 3000);
            }
            
            // Add confetti animation
            if (!document.querySelector('#confetti-style')) {
                const style = document.createElement('style');
                style.id = 'confetti-style';
                style.textContent = `
                    @keyframes confetti-fall {
                        to {
                            transform: translateY(100vh) rotate(360deg);
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            clickCount = 0;
        }
    } else {
        clickCount = 0;
    }
});