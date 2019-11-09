/* =============================================
|   |   |   | Preloader
============================================== */
$(window).on('load', function () { // Ensures entire site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =============================================
|   |   |   | Team
============================================== */
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });
});

/* =============================================
|   |   |   | Progress Bars
============================================== */
$(function() {
    $("#progress-elements").waypoint(function() {
            $(".progress-bar").each(function() {
                $(this).animate({
                    width: $(this).attr('aria-valuenow') + "%"
            }, 1000);
        });
        
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


/* =============================================
|   |   |   | Responsive Tabs
============================================== */
$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/* =============================================
|   |   |   | Portfolio 
============================================== */
$(window).on('load', function() {
    
    // Initialize Isotope
    $("#isotope-container").isotope({
    });
    
    $("#isotope-filters").on("click", "button", function() {
        // Filter items on button click
        var filterValue = $(this).attr('data-filter');

        // Filter portfolio 
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // Active button
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

/* =============================================
|   |   |   | Magnific Popup
============================================== */
$(function() {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
})


/* =============================================
|   |   |   | Testimonials
============================================== */
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });
});

/* =============================================
|   |   |   | Stats
============================================== */
$(function() {                 $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* =============================================
|   |   |   | Clients
============================================== */
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });
});





