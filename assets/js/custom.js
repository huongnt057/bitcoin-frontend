!function ($) {

  $(function(){

  	/**
  	 *
  	 * SET ACTIVE NAVBAR MENU
  	 *
  	 */
  	var checkActive = $('body').attr('data-active');
  	$('.navbar-nav > li[active = '+ checkActive +']').addClass('active');
  	/**
  	 *
  	 * Stop vimeo video when close modal
  	 *
  	 */
	$('#video-modal').on('hidden.bs.modal', function (e) {
	    $("#video-modal iframe").attr("src", $("#video-modal iframe").attr("src"));
	});
  	/**
	 *
	 * Calculator wrap video height
	 *
	 */
  	wrapVideoHeight();
	$(window).resize(function() {
		wrapVideoHeight();
	});

	/**
	 *
	 * Define Counter Animation
	 *
	 */
	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});

	/**
	 *
	 * Define Scroll Animation
	 *
	 */
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 600);
				return false;
			}
		}
	});

	/*============================================
	=            Config Siwper Plugin            =
	============================================*/
	/**
	 *
	 * Our Project Section
	 *
	 */
	var swiper_project = new Swiper('#swiper-projects', {
		pagination: '.project-pagination',
		loop: true,
		//autoplay: 5000,
		slidesPerView: 3,
		spaceBetween: 30,
		paginationHide: true,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,

		// Navigation arrows
		nextButton: '.next-project',
		prevButton: '.prev-project',
		// RESPONSIVE
		breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }

	});

	/**
	 *
	 * Client Section
	 *
	 */
	var swiper_client = new Swiper('#swiper-client', {
		loop: true,
		autoplay: 3000,
		slidesPerView: 7,
		spaceBetween: 30,
		paginationHide: true,
		paginationClickable: true,
		pagination: '.client-pagination',
		autoplayDisableOnInteraction: false,
		breakpoints: {
			1600: {
				slidesPerView: 6,
			},
			1400: {
				slidesPerView: 5,
			},
			1199: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
			480: {
				slidesPerView: 1,
			}
		}
	});

	/**
	 *
	 * Jobs Section
	 *
	 */
    var swiper_jobs = new Swiper('#swiper-jobs', {
    	pagination: '.job-pagination',
    	slidesPerView: 2,
    	slidesPerColumn: 4,
    	paginationClickable: true,
    	spaceBetween: 30,
    	paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
         breakpoints: {
         	767: {
         		slidesPerView: 1,
         	}
         }
    });
    /**
     *
     * Talk us Section
     *
     */
    var swipe_talkus = new Swiper('#talk-us-swiper', {
    	loop: true,
		autoplay: 8000,
        pagination: '.talk-us-pagination',
        paginationClickable: true
    });
    /**
     *
     * Our history
     *
     */
    var lengthHistory = $('.swiper-wrapper .swiper-slide').length;
    var swiper_history = new Swiper('#our-history', {
        paginationClickable: true,
        slidesPerView: 'auto',
        slidesPerView: 8,
        freeMode: true,
        //mousewheelControl: true,
        initialSlide: lengthHistory,
        breakpoints: {
        	1199: {
        		slidesPerView: 6,
        	},
        	991: {
        		slidesPerView: 4,
        	},
        	767: {
        		slidesPerView: 3,
        	},
        	479:  {
        		freeMode: false,
        		slidesPerView: 1,
        	}

        }
    });
	/*=====  End of Config Siwper Plugin  ======*/

	/**
	 *
	 * Intantiate MixItUp
	 *
	 */
	$('#team-members').mixItUp({
		animation: {
			effects: 'fade rotateY(-10deg)'
		},
		load: {
			filter: '.malaysia-team'
		},
	});
	/**
	 *
	 * Gallery Project Images
	 *
	 */
	$('#lightgallery').lightGallery();

  });
}(window.jQuery)

/**
 *
 * DEFINE FUNCUTION SET HEIGHT FOR VIDEO AND IMAGE SECTION
 *
 */

function wrapVideoHeight() {
  	$height = $(window).height()
  	$('.wrap-video').height($height);
}

function wrapImageHeight() {
  	$('.wrap-image').height($height);
}

function changeBodyBackground(e) {
	var location = $(e).attr('data-location');
	$('body').attr('location', location);
}

/**
 *
 * Function Init Runway
 *
 */
 function runway(){
	$(window).load(function() {

		var lastScrollTop = 0;
		$(window).scroll(function(event){
			var st = $(this).scrollTop();
			if (st > lastScrollTop){
			// downscroll code
				$('.plane').removeClass('flight-up');
			} else {
			// upscroll code
				$('.plane').addClass('flight-up');
			}
			lastScrollTop = st;
		});

		var bannerHeight = $('.banner-subpage.has-canvas').height();
		var plfTopDescHeight = $('.plf-top-desc').height();
		var topHeight = bannerHeight + plfTopDescHeight;
		var startLine = topHeight / 2.5;

		$(window).scroll(function(){
			var bodyScrollPos = $(window).scrollTop();
			var runwayHeight = bodyScrollPos - startLine;
			// Set height for runway
			if(bodyScrollPos > startLine ){
				$('.runway').height(runwayHeight);
			}

			// Check Active Node
			var offsetTopPlane = $('.plane').offset().top;
			var modules = $('.list-plf-module .modules .module-item');
			modules.each(function(index, element){
				var moduleIcons = $(element).find('.circle-icon');
				var elementTop = $(element).offset().top;
				if(offsetTopPlane > elementTop + 30){
					 $(moduleIcons).addClass('active');
				}
				else {
					 $(moduleIcons).removeClass('active');
				}
			});
		});
	});
 }