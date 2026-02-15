document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Glow Effect
    const cursorGlow = document.querySelector('.cursor-glow');

    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Using transform is more performant than updating top/left
            cursorGlow.style.left = `${x}px`;
            cursorGlow.style.top = `${y}px`;
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple reveal animation on scroll (Optional)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section'); // Add CSS class for initial opacity
        observer.observe(section);
    });
});
