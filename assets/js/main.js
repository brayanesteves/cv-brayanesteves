jQuery(document).ready(function(){
    /**
     * -----------------------------------------------------
     *                  Custom Functions
     * -----------------------------------------------------
     */
    // Logo
    var $logo = $('logo');
    if(location.href.indexOf("#") != -1){
        $logo.show();
    }
    // Show logo
    $('.menu .tabs a').click(function(){
        $logo.fadeIn('slow');
    });
    // Hide logo
    $('.tab-profile').click(function(){
        $logo.fadeOut('slow');
    });

    /**
     * -----------------------------------------
     *                 Options Box
     * ----------------------------------------
     */
    
    // Blue
    $('#blue-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "blue");
    });

    $(".setting-icon").click(function(){
        $(".option-box").toggleClass("main");
    });

    /**
     * -------------------------------------------------
     *                     Menu
     * -------------------------------------------------
     */
    $(".pulse-button").click(function(){
        $(".socialicons").toggleClass("main");
    });
    // Needed variables
    var $content = $("#content");
    // Run easytabs
    $content.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabs: ".tmenu",
        tabActiveClass: 'active'
    });
    // Hover menu effect
    $content.find('.tabs li a').hover(
        function(){
            $(this).stop().animate({ marginTop: "-7px" }, 200);
        }, function(){
            $(this).stop().animate({ marginTop: "0px" }, 300);
        }
    );
    /* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 
    var $catsfilter = $('.cats-filter');
    $catsfilter.find('a').click(function(){
        var currentOption = $(this).attr('data-filter');
        $(this).parent().parent().find('a').removeClass('current');
        $(this).addClass('current');
    });
    var $plist = $('#portfolio-list');
    var $pfilter = $('#portfolio-filter');

	// Needed variables		
	// Run Isotope  
	$plist.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$pfilter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$plist.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	 
});