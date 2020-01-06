// on document ready
(function($){
	"use strict";
// revolution slider

	if($('.r_slider').length){
	    var api = $('.r_slider').revolution({
	         delay:9000,
	         startwidth:1900,
	         startheight:600,
	         autoHeight:"off",
	         fullScreenAlignForce:"off",
	 
	         onHoverStop:"on",
	 
	         thumbWidth:100,
	         thumbHeight:50,
	         thumbAmount:3,
	 
	         hideThumbsOnMobile:"off",
	         hideBulletsOnMobile:"off",
	         hideArrowsOnMobile:"off",
	         hideThumbsUnderResoluition:0,

	 		 hideTimerBar:"on",
	         hideThumbs:0,
	 
	         navigationType:"bullet",
	         navigationArrows:"solo",
	         navigationStyle:"round",
	 
	         navigationHAlign:"center",
	         navigationVAlign:"bottom",
	         navigationHOffset:0,
	         navigationVOffset:15,
	 
	         soloArrowLeftHalign:"left",
	         soloArrowLeftValign:"center",
	         soloArrowLeftHOffset:40,
	         soloArrowLeftVOffset:0,
	 
	         soloArrowRightHalign:"right",
	         soloArrowRightValign:"center",
	         soloArrowRightHOffset:40,
	         soloArrowRightVOffset:0,
	 
	 
	         touchenabled:"on",
	 
	         stopAtSlide:-1,
	         stopAfterLoops:-1,
	         hideCaptionAtLimit:0,
	         hideAllCaptionAtLilmit:0,
	         hideSliderAtLimit:0,
	 
	         dottedOverlay:"none",
	 
	         fullWidth:"off",
	         forceFullWidth:"off",
	         fullScreen:"off",
	         fullScreenOffsetContainer:"#topheader-to-offset",
	 
	         shadow:0
	 
	    });
		api.bind("revolution.slide.onloaded",function (e,data) {
		    var container = $('.revolution_slider');
		    container.find('.tp-leftarrow').append('');
		    container.find('.tp-rightarrow').append('');
		    // $('.tp-leftarrow,.tp-rightarrow').fadeIn(1500);

		    // create custom thumbs

		   	(function(){
		   		var image = $('.r_slider [data-custom-thumb]'),
		   			len = image.length,
		   			bullet = $('.tp-bullets .bullet');
		   		for(var i = 0; i < len; i++){
		   			bullet.eq(i).append('<div class="custom_thumb tr_all_hover"><img src="' + image.eq(i).data('custom-thumb') + '" alt=""></div>');
		   		}
		   	})();

			$('.tp-bullets .bullet').each(function(){
				var curr = $(this);
				curr.on("mouseenter mouseleave",function(){
					curr.children('.custom_thumb').toggleClass('active')
				});
			});
		});

	}

})(jQuery);