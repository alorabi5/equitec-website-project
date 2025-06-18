const knowMoreBtn = document.querySelector('.about-us-btn');
const scrollUp = document.getElementById('scroll-up');
const allOurClientsOptions = document.querySelectorAll('.our-clientele-section-logos');


// document.querySelector('.india-clients').style.display='';

const clientsRigon = (event) => {
    const selectedClassName = event.target.className;
    const selected = document.querySelector(`.our-clientele-section-logos ${selectedClassName}`);

    console.log(selected);

    allOurClientsOptions.forEach(selectedList => {
            selectedList.classList.add('hide-clients-list');
    });

    // selected.classList.remove('hide-clients-list');


};

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
        scrollUp.style.display = 'block';
    else
        scrollUp.style.display = 'none';

});