// Nav Button Selectors

const aboutLink = document.getElementById('about-link');
const downloadLink = document.getElementById('download-link');
const portfolioLink = document.getElementById('portfolio-link');
const contactLink = document.getElementById('contact-link');

// Section Selectors

const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const contactSection = document.getElementById('contact');

// Nav Button listeners

aboutLink.addEventListener('click', () => {

    aboutSection.classList.add('to-front');

    homeSection.classList.remove('to-front');
    portfolioSection.classList.remove('to-front');
    contactSection.classList.remove('to-front');
});

portfolioLink.addEventListener('click', () => {

    portfolioSection.classList.add('to-front');

    homeSection.classList.remove('to-front');
    aboutSection.classList.remove('to-front');
    contactSection.classList.remove('to-front');
});

contactLink.addEventListener('click', () => {
    contactSection.classList.add('to-front');
    homeSection.classList.remove('to-front');
    portfolioSection.classList.remove('to-front');
    aboutSection.classList.remove('to-front');
});

// Preview button listeners

const previewBtn = document.getElementById('preview-button');
const reviewBtn = document.getElementById('review-button');
const appContainer = document.getElementById('app-card-container');

// This works and looks good but is not scaleable

previewBtn.addEventListener('click', () => {
    appContainer.classList.add('spin');
});

reviewBtn.addEventListener('click', () => {
    appContainer.classList.remove('spin');
});