// ===================================
// TEXSAUCE - JAVASCRIPT INTERACTIONS
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initCustomCursor();
    initMouseCoordinates();
    initSearch();
    initScrollAnimations();
    initCTAButton();
    initThemeToggle();
    initCardInteractions();
});

// ===================================
// CUSTOM CURSOR
// ===================================
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let ringX = 0;
    let ringY = 0;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animate cursor with smoothing
    function animateCursor() {
        // Smooth follow for dot
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;

        // Slower follow for ring
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Expand cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .category-card');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-expand');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-expand');
        });
    });
}

// ===================================
// MOUSE COORDINATES DISPLAY
// ===================================
function initMouseCoordinates() {
    const coordsDisplay = document.getElementById('mouseCoords');

    document.addEventListener('mousemove', (e) => {
        const x = Math.round(e.clientX);
        const y = Math.round(e.clientY);
        coordsDisplay.textContent = `${x}, ${y}`;
    });
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const categoryCards = document.querySelectorAll('.category-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        categoryCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });

        // If search is empty, show all cards
        if (searchTerm === '') {
            categoryCards.forEach(card => {
                card.style.display = 'block';
            });
        }
    });

    // Add search icon click functionality
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', () => {
        searchInput.focus();
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for cards
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        observer.observe(card);
    });
}

// ===================================
// CTA BUTTON INTERACTION
// ===================================
function initCTAButton() {
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Smooth scroll to categories
            const categoriesSection = document.getElementById('categories');
            categoriesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Add pulse effect
            ctaButton.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                ctaButton.style.animation = '';
            }, 500);
        });
    }
}

// ===================================
// THEME TOGGLE
// ===================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyLightTheme();
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.style.getPropertyValue('--color-bg');

        if (currentTheme === '#000000' || currentTheme === '') {
            applyLightTheme();
            localStorage.setItem('theme', 'light');
        } else {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    });

    function applyLightTheme() {
        root.style.setProperty('--color-bg', '#f0f0f0');
        root.style.setProperty('--color-bg-secondary', '#e0e0e0');
        root.style.setProperty('--color-text', '#000000');
        root.style.setProperty('--color-text-dim', '#555555');
        root.style.setProperty('--color-primary', '#0099ff');
        root.style.setProperty('--color-secondary', '#00ffff');
    }

    function applyDarkTheme() {
        root.style.setProperty('--color-bg', '#000000');
        root.style.setProperty('--color-bg-secondary', '#0a0a0a');
        root.style.setProperty('--color-text', '#ffffff');
        root.style.setProperty('--color-text-dim', '#888888');
        root.style.setProperty('--color-primary', '#00ffff');
        root.style.setProperty('--color-secondary', '#0099ff');
    }
}

// ===================================
// CARD INTERACTIONS
// ===================================
function initCardInteractions() {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        const cardButton = card.querySelector('.card-button');

        // Add click handler for cards
        cardButton.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            handleCategoryClick(category, card);
        });

        // Add hover sound effect (optional - can be enabled with audio files)
        card.addEventListener('mouseenter', () => {
            playHoverSound();
        });
    });
}

function handleCategoryClick(category, cardElement) {
    // Add visual feedback
    cardElement.style.transform = 'scale(0.98)';
    setTimeout(() => {
        cardElement.style.transform = '';
    }, 200);

    // In a real implementation, this would navigate to a category page
    // For now, we'll show an alert with category info
    console.log(`Navigating to category: ${category}`);

    // You can replace this with actual navigation logic
    // window.location.href = `/category/${category}`;

    // Or use a modal/overlay to show category details
    showCategoryModal(category, cardElement);
}

function showCategoryModal(category, cardElement) {
    const title = cardElement.querySelector('.card-title').textContent;
    const description = cardElement.querySelector('.card-description').textContent;

    // Create simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.95);
        border: 2px solid var(--color-primary);
        padding: 2rem;
        z-index: 1000;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
    `;

    notification.innerHTML = `
        <h2 style="color: var(--color-primary); font-family: var(--font-heading); margin-bottom: 1rem;">
            ${title}
        </h2>
        <p style="color: var(--color-text-dim); margin-bottom: 1.5rem;">
            ${description}
        </p>
        <p style="color: var(--color-warning); font-size: 0.9rem; margin-bottom: 1.5rem;">
            Category pages are under construction. Check back soon!
        </p>
        <button style="
            background: var(--color-primary);
            color: var(--color-bg);
            border: none;
            padding: 0.75rem 2rem;
            font-family: var(--font-heading);
            font-weight: 700;
            cursor: none;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        ">
            Close
        </button>
    `;

    document.body.appendChild(notification);

    // Close button functionality
    const closeButton = notification.querySelector('button');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });

    // Close on outside click
    setTimeout(() => {
        document.addEventListener('click', function closeModal(e) {
            if (!notification.contains(e.target) && e.target !== cardElement) {
                notification.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
                document.removeEventListener('click', closeModal);
            }
        });
    }, 100);
}

// ===================================
// SOUND EFFECTS (Optional)
// ===================================
function playHoverSound() {
    // Placeholder for sound effect
    // You can add actual audio files and play them here
    // const audio = new Audio('path/to/hover-sound.mp3');
    // audio.volume = 0.2;
    // audio.play().catch(() => {}); // Catch errors if autoplay is blocked
}

// ===================================
// KEYBOARD SHORTCUTS
// ===================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        searchInput.focus();
    }

    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
    }
});

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
let ticking = false;
document.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Add scroll-based effects here if needed
            ticking = false;
        });
        ticking = true;
    }
});

// ===================================
// CONSOLE EASTER EGG
// ===================================
console.log('%c\n' +
    '╔════════════════════════════════════════╗\n' +
    '║                                        ║\n' +
    '║           TEXSAUCE v1.0                ║\n' +
    '║     FREE MEDIA HUB & RESOURCE DIR      ║\n' +
    '║                                        ║\n' +
    '║  Built with: HTML, CSS, JavaScript     ║\n' +
    '║  Designed by: Community                ║\n' +
    '║  License: Open Source                  ║\n' +
    '║                                        ║\n' +
    '║  🔗 GitHub: github.com/gagankishoreint-glitch/TexSauce  ║\n' +
    '║                                        ║\n' +
    '╚════════════════════════════════════════╝',
    'color: #00ffff; font-family: monospace; font-size: 12px;');

console.log('%cInterested in contributing? Check out our GitHub!',
    'color: #0099ff; font-size: 14px; font-weight: bold;');
