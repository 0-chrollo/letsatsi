function toggleMenu() {
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.burger');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}





//Dynamic Banner 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.indicators');
let autoSlideInterval;

// indicators
slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => showSlide(index));
    indicatorsContainer.appendChild(indicator);
});

// Navigation buttons
document.querySelector('.prev').addEventListener('click', () => prevSlide());
document.querySelector('.next').addEventListener('click', () => nextSlide());

function showSlide(n) {
    clearInterval(autoSlideInterval);
    slides.forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.indicator').forEach(ind => ind.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.indicator')[currentSlide].classList.add('active');
    
    startAutoSlide();
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

// Initialize
showSlide(0);


let currentlide = 0;
const bannerWrapper = document.querySelector('.banner-wrapper');
const dots = document.querySelectorAll('.indicator-dots');

function updateSlide(index) {
    currentlide = (index + 3) % 3;
    bannerWrapper.style.transform = `translateX(-${currentlide * 100}%)`;
    dots.forEach(dots => dots.classList.remove('active'));
    dots[currentlide].classList.add('active');
}

document.querySelector('.next-btn').addEventListener('click', () => updateSlide(currentlide + 1));
document.querySelector('.prev-btn').addEventListener('click', () => updateSlide(currentlide - 1));

setInterval(() => updateSlide(currentlide + 1), 5000);