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
const modalAbout = document.getElementById("about-modal");
const modalProductDreem = document.getElementById("product-dreem-modal");
const productDreemBtn = document.getElementById("produce-dreem-btn");

const modalEquibase = document.getElementById("product-equibase-modal");
const equibaseBtn = document.getElementById("product-equibase-btn");

const modalEquityMonitor = document.getElementById("prodcut-equity-monitor-modal");
const equityMonitorBtn = document.getElementById("prodcut-equity-monitor-btn");

const modal = document.querySelectorAll(".modal");
const aboutBtn = document.getElementById("about-btn");
const closeModal = document.querySelectorAll(".close");



// Our Client Functions
const clientsRigon = (event) => {

    const selectedTitle = event.target;
    const selectedClientsList = document.querySelector(`.our-clientele-section-logos.${selectedTitle.className}`);
    
    if (selectedTitle && selectedClientsList){
        allOurClientTitle.forEach(title => title.classList.remove('active-option'));
        allOurClientsLogos.forEach(listOfLogo => {listOfLogo.classList.add('hide-clients-list')
        });

        selectedTitle.classList.add('active-option');
        selectedClientsList.classList.remove('hide-clients-list');
        
    }

};


// Scroll Up Functions
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
        scrollUp.style.display = 'block';
    else
        scrollUp.style.display = 'none';

});


// Show / Hide Element Fucntions
const showHideElement = (btn, el, status="none") => btn.onclick = () => el.style.display = status;

const outClickHideModal = (modalEl) => window.onclick = (event) => {
    if (event.target == modalEl) {
        modalEl.style.display = "none";
    }
}

// Mobile Functions
showHideElement(burgerMenu, mobileNav, "block");

showHideElement(closeModal[0], mobileNav);

// Modal About Functions
showHideElement(aboutBtn, modalAbout, "block");

showHideElement(closeModal[1], modal[0]);

// Products Functions

// Dreem Products
showHideElement(productDreemBtn, modalProductDreem, "block");
showHideElement(closeModal[2], modal[1]);

// Equibase Products
showHideElement(equibaseBtn, modalEquibase, "block");
showHideElement(closeModal[3], modal[2]);

// Equity Monitor
showHideElement(equityMonitorBtn, modalEquityMonitor, "block");
showHideElement(closeModal[4], modal[3]);