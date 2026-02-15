// Custom Cursor Glow Effect
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-glow');

    // Only active on desktop
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Hover effect for links and buttons
        const interactables = document.querySelectorAll('a, button, .project-card');

        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.background = 'radial-gradient(circle, rgba(0, 255, 240, 0.25), transparent 70%)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.background = 'radial-gradient(circle, rgba(68, 138, 255, 0.15), transparent 70%)';
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
