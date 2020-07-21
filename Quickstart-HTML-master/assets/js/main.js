(function ($) {
    "use strict";
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ["Back", "Next"],
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

//  Nav Tabs Js
    $('.product-active').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        navText: ["Back", "Next"],
        autoplay: true,
        responsive: {
            0: {
                items: 1,
				nav: false,
				navText: false,
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })


//  Brand area Js
$('.brand-active').owlCarousel({
    loop: true,
    nav: false,
    margin: 30,
    navText: ["Back", "Next"],
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
})




})(jQuery);