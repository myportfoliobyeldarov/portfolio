(function($) {
'use strict';
var hunter = $(window);
    /*-- jqury video popup -- */
    jQuery("a.bla-1").YouTubePopUp();
    /*-- jqury video popup -- */
    jQuery("a.video_2").YouTubePopUp();
    /*--------------------------
	counter active
	---------------------------- */
    $('.count_number').counterUp({
	  delay: 10,
	  time: 3000
	})
    /*--------------------------
	 galary active
	---------------------------- */
    $('#work').imagesLoaded( function() {
    $(".galary_item").isotope({
        itemSelector: '.singal_item',
        layoutMode: 'fitRows',
    });
    // Add isotope click function
    $('.portfolio-filter li').on('click', function(){
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".galary_item").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: 1,
            }
        });
        return false;
    });
    })
    /*--------------------------
	 fast food slide left active
	---------------------------- */
    $('.testmonial_active').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	autoplay:false,
	mouseDrag:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
    })
    /*--------------------------
	 brand slide active
	---------------------------- */
    $('.brand_slide_active').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	autoplay:true,
	mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
    })
    /*--------------------------
	acroll to top active
	---------------------------- */
	$("#scroll_top").on('click', function(){
		$("html,body").animate({
			scrollTop:0
		}, 2000)
    });
    /*--------------------------
	 scroll spy active
	---------------------------- */
  	$('body').scrollspy({target: ".navbar", offset: 100});   
  	$("#scroll_spy_nav li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 890, function(){
        window.location.hash = hash;
      });
    }
    });
    /*--------------------------
	 preloader js active
	---------------------------- */
	hunter.on("load", function() {
        $(".loader").addClass('out');
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})(jQuery);