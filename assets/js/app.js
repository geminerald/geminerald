const aboutLink = document.getElementById('about-link');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');

aboutLink.addEventListener('click',()=>{
    homeSection.classList.add('to-back');
    aboutSection.classList.add('to-front');
});