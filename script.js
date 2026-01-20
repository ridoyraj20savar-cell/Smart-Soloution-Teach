// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Hero Button Click Animation =====
const heroBtn = document.querySelector('.hero .btn');
if(heroBtn) {
    heroBtn.addEventListener('mouseover', () => {
        heroBtn.style.transform = "scale(1.05)";
    });
    heroBtn.addEventListener('mouseout', () => {
        heroBtn.style.transform = "scale(1)";
    });
}

// ===== Simple Form Alert (optional) =====
const contactForm = document.querySelector('.contact-form form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // optional: show alert before submit
        alert('Your message has been sent successfully!');
        // Formspree will handle actual submission
    });
}