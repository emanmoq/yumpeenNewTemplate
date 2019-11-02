jQuery(function ($) {

    $('.heroSlider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        dots:true,

    });
    $('.MemberSlider').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:4
            }
        }
    });

});

