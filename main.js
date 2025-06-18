const knowMoreBtn = document.querySelector('.about-us-btn');

// Scroll Up Variables
const scrollUp = document.getElementById('scroll-up');

// Our Client Variables
const allOurClientTitle = document.querySelectorAll('.our-clientele-section-title ul li');
const allOurClientsLogos = document.querySelectorAll('.our-clientele-section-logos');


// Our Client Functions
const clientsRigon = (event) => {

    const selectedTitle = event.target;
    const selectedClientsList = document.querySelector(`.our-clientele-section-logos.${selectedTitle.className}`);

    if (selectedTitle && selectedClientsList){
        allOurClientTitle.forEach(title => title.classList.remove('active-option'));
        allOurClientsLogos.forEach(listOfLogo => listOfLogo.classList.remove('active-clients-list'));

        selectedTitle.classList.add('active-option');
        selectedClientsList.classList.add('active-clients-list');
    }

};


// Scroll Up Functions
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
        scrollUp.style.display = 'block';
    else
        scrollUp.style.display = 'none';

});