const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Código interactivo para añadir animaciones o efectos a futuro, si fuera necesario.
document.addEventListener("DOMContentLoaded", function() {
    const objectivesList = document.querySelectorAll('ul li');
    
    objectivesList.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('highlight');
        });
    });
});
