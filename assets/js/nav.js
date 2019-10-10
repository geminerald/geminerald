// Nav Elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

/**
 * a Function to make the nav bar slide in or out when the burger
 * menu is clicked
 */

const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
            };
        });
        burger.classList.toggle('toggle');
    });
};

navSlide();