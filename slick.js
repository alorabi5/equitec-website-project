$(".our-clientele-section-logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
            slidesToShow: 4,

            }
        },
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
    ]
});

// $(".slide-section").slick({
//     slidesToScroll: 1,
//     slidesToShow: 1,
//     arrows: false
// });