jQuery(function ($) {

    $('.heroSlider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: true,
    });
    $('.MemberSlider').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 4
            }
        }
    });
    $('.testimonialSlider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            600: {
                items: 2,
                dots: false,
            },
            1000: {
                items: 2
            }
        }
    });
    $("#menuIcon").click(function () {
        $("#sideMenu").toggle("slow");
    });
});

