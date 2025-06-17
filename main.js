const knowMoreBtn = document.querySelector('.about-us-btn');
const scrollUp = document.getElementById('scroll-up');


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
        scrollUp.style.display = 'block';
    else
        scrollUp.style.display = 'none';

});