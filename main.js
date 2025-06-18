const knowMoreBtn = document.querySelector('.about-us-btn');

// Scroll Up Variables
const scrollUp = document.getElementById('scroll-up');

// Our Client Variables
const allOurClientTitle = document.querySelectorAll('.our-clientele-section-title ul li');
const allOurClientsLogos = document.querySelectorAll('.our-clientele-section-logos');

// Mobile Nav
const mobileNav = document.getElementById("mobile-burger-nav");
const burgerMenu = document.getElementById("burger-menu-icon");

// Modal Variables
const modal = document.getElementById("know-more");
const btn = document.getElementById("about-btn");
const closeModal = document.querySelectorAll(".close");



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

// Mobile Functions
burgerMenu.onclick = () => {
    mobileNav.style.display = "block";
}

closeModal[0].onclick = () => {
    mobileNav.style.display = "none";
}


// Modal Functions
btn.onclick = () => {
    modal.style.display = "block";
}

closeModal[1].onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}