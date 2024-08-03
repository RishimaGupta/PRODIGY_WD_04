document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            if (targetId === 'home') {
                window.scrollTo({
                    top: 10, 
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetPosition - 0, 
                    behavior: 'smooth'
                });
            }
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
