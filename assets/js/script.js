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


/*Slide de vagas - Animação contínua via CSS*/
const slideVagasTrack = document.querySelector('#slide-vagas-track');
const vagas = Array.from(slideVagasTrack.children);

// Duplicar as vagas para efeito seamless
vagas.forEach(vaga => {
    const clonoVaga = vaga.cloneNode(true);
    slideVagasTrack.appendChild(clonoVaga);
});
   