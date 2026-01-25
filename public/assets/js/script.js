/*Observador de elementos Fades*/

const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});
    
fades.forEach(el => observer.observe(el));