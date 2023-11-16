(function ($) {

    'use strict';

    // Navbar
    function initNavbar() {
  		$('.navbar-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    // Sticky Header
    function initSticky() {
        $(".sticky").sticky({
            topSpacing: 0
        });
    }
    
    //Scrollspy
	function initScrollspy() {
		$("#navbarCollapse").scrollspy({
		    offset:20
		});
	}

    function init() {
        initNavbar();
        initSticky();
        initScrollspy();
        Waves.init();
    }

    init();

})(jQuery)