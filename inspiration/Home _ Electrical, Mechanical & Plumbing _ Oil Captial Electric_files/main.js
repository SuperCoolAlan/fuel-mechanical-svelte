$(document).ready(function(){

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top + (-116)
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	});
	
	//FOCUS RING STUFF
	function handleFirstTab(e) {
	    if (e.keyCode === 9) { // the "I am a keyboard user" key
	        document.body.classList.add('user-is-tabbing');
	        window.removeEventListener('keydown', handleFirstTab);
	    }
	}
	window.addEventListener('keydown', handleFirstTab);
	
	//STICKY HEADER 
	if ($( window ).width() > 868) {	
		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();
		
		    if (scroll >= 200) {
		        $("header").addClass("sticky");
			} else {
		        $("header").removeClass("sticky");
		    }
		    if (scroll >= 300) {
		        $("header").addClass("visi");
			} else {
		        $("header").removeClass("visi");
		    }
		    
		});	
	}

	// HOMEPAGE BANNER THINGIES 
	function showlefthalf(){
		$('.lefthalf').css({'filter': 'grayscale(0)'});
		$('.lefthalf video').css({'filter': 'grayscale(0)'});
		$('.lefthalf video').get(0).play();
		$('#menu-item-136').css({"background": '#fff'});
		$('#menu-item-136 a').css({"color": '#b8232f'});
		$('.righthalf').css({'filter': 'grayscale(100%)'});
		$('.righthalf video').css({'filter': 'grayscale(100%)'});
		$('.righthalf video').get(0).pause();	
		$('#menu-item-135').css({"background": '#000'});
		$('#menu-item-135 a').css({"color": '#fff'});		
	}

	function showrighthalf(){
		$('.righthalf').css({'filter': 'grayscale(0)'});
		$('.righthalf video').css({'filter': 'grayscale(0)'});
		$('.righthalf video').get(0).play();
		$('#menu-item-135').css({"background": '#fff'});
		$('#menu-item-135 a').css({"color": '#b8232f'});
		$('.lefthalf').css({'filter': 'grayscale(100%)'});
		$('.lefthalf video').css({'filter': 'grayscale(100%)'});
		$('.lefthalf video').get(0).pause();
		$('#menu-item-136').css({"background": '#000'});
		$('#menu-item-136 a').css({"color": '#fff'});	
	}

	
    $('.home .intro').on('inview', function(event, isInView) {
	    
	    if (isInView) {
		    $('.lefthalfhover').hover(
				function(){
					showlefthalf();
				}
			);
			$('.righthalfhover').hover(
				function(){
					showrighthalf();
				}
			);    
		} else {
		    $('#menu-item-135').css({"background": '#000'});
			$('#menu-item-135 a').css({"color": '#fff'});	
			$('#menu-item-136').css({"background": '#000'});
			$('#menu-item-136 a').css({"color": '#fff'});
		}
	});
	

	
	// ADDING LINES
	$('.lined').prepend('<div class="line_half"/>');
	$('.lined').prepend('<div class="line_left"/>');
	$('.lined').prepend('<div class="line_right"/>');
	
	
		
	// ADDING CLASS TO THE VISIBLE ELEMENTS	
	$('section').on('inview', function(event, isInView) {
	  if (isInView) {
	    $(this).addClass('in-view');
	    
	  } /*else {
	    $(this).removeClass('in-view');

	  }*/
	});
	
	//TYPEWRITER EFFECT
		  var i = 0;
		  var txt = $('#type').html();
		  var speed = 20;
		  var typewidth = $('#type').outerWidth();
		  $('.subhead').width(typewidth + 50);	
		
		function typeWriter() {			  
				
		  if (i < txt.length) {
			 
		    document.getElementById("typed").innerHTML += txt.charAt(i);
		    i++;
		    setTimeout(typeWriter, speed);
		  
		  }
		}
		
		if(window.location.pathname == '/') {
	    	setTimeout(function() { typeWriter(); }, 4500);
	    } else {
		    setTimeout(function() { typeWriter(); }, 2500);
	    }
	
	
	
	// SCROLL DOWN BUTTON
	$('.scrolldown').on('click', function(){
		wh = $(window).height();
		$('html, body').animate({scrollTop: wh}, 700);
	});
	$('.message').on('click', function(){
		wh = $(window).height();
		$('html, body').animate({scrollTop: wh}, 700);
	});
	
	// PREVIOUS-NEXT BUTTONS FOR THE INDUSTRIES SLIDER
	dayNavigation = function (direction) {
		var index = $('#filter').find($('input:checked')).parent().index();
	    var curr = $('#filter input:checked');
		
	    if(direction == 'prev'){
	        if(index > 0){
	            $('input').eq(index-1).prop("checked", true);
	            curr.prop("checked", false);
	            $('.industries_slider').addClass('out-of-view');
				setTimeout(ajaxcall, 500);
	            var selected = $('#filter').find($('input:checked')).parent().index();
	            index = selected;          
	        }
	    } else {
	        if(index < $('input').length - 1){
		        
	            $('input').eq(index+1).prop("checked", true);
	            curr.prop("checked", false);
	            $('.industries_slider').addClass('out-of-view');
				setTimeout(ajaxcall, 500);
	            var selected = $('#filter').find($('input:checked')).parent().index();
	            index = selected;
	        }
	    }
	};
	
	
	//PREVIOUS-NEXT BUTTONS FOR PROJECTS SLIDER
	$('.projects_slider .next').on('click', function(){
		$(".response_scroll").animate({
	          scrollTop: $(".response_scroll")[0].scrollHeight
	        }, 500);
	});
	
	$('.projects_slider .previous').on('click', function(){
		$(".response_scroll").animate({
	          scrollTop: $(".response_scroll")
	        }, 500);
	});
	
	// FIXING THE HEIGHT OF CAREERS SECTION
	var maxHeight = -1;
	$('.careers .carousel-item').each(function() {
    	maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('.careers .carousel-item').each(function() {
    	$(this).height(maxHeight);
   	});
   	
   	// FIXING THE HEIGHT OF CAPABILITY SLIDER SECTION
  	
	if($(window).width() > 768){
		var maxHeightcap = 1;
		$('#capability_slider .carousel-item').each(function() {
	    	maxHeightcap = maxHeightcap > $(this).outerHeight() ? maxHeightcap : $(this).outerHeight();
	    });	
	    $('#capability_slider .carousel-item').each(function() {
	    	$(this).height(maxHeightcap + 100);	   
	   	});
	}
   	
   	// FIXING THE WIDTH OF DIFFERENTIATORS SECTION ON THE HOMEPAGE
   	if($(window).width() > 768){
	   	var maxWidth = -1;
		$('#snap_slider .carousel-item').each(function() {
	    	maxWidth = maxWidth > $(this).width() ? maxWidth : $(this).width();
	    });
	
	    $('#snap_slider .carousel-item').each(function() {
	    	$(this).width(maxWidth);
	   	});
	}
	
	// BURGER CLICKS
	if($(window).width() > 1024){
		$('#menu-utility-menu').prepend('<div class="burgerclose"><div></div><div></div></div>'); 
		$('.burger').on('click', function(){
			$('.menu-utility-menu-container').css({'transform': 'translate3d(-100%,0,0)'});
		}); 
		$('.burgerclose').on('click', function(){
			$('.menu-utility-menu-container').css({'transform': 'translate3d(0,0,0)'});
		});
	}
	if($(window).width() <= 1024){
	 	$('.burger').on('click', function(){
			$('.menu-mobile-menu-container').toggleClass('mobilemenuopen');;
			$('body').toggleClass('menulocked');
			$(this).toggleClass('menuopen');
		}); 
	}
	
	//MOBILE FILTER CLICKS
		$('.mobile_filter').on('click', function(){
			$(this).toggleClass('clicked');
		});
	
	// ADDING ACTIVE PROJECT INFO TO THE HIGHLIGHTED PROJECT SECTION
	 	
	$('.project_image').on('click', function(){
		$('.project_image').removeClass('active');
		$(this).addClass('active');
		activeproject(); 
	});
	
	function activeproject(){
		imagesource = $('#project_response .active .prj_image_url').html();
		projectname = $('#project_response .active .prj_name').html();
		projectcopy = $('#project_response .active .prj_copy').html();
		$('#active_project img').animate({left: "-70%"}, 500, function(){
			$('#active_project img').attr('src', imagesource);
		});
		$('#active_project img').animate({left: "50%"}, 500);
		
		$('#active_project .project_overlay').animate({left: "-110%"}, 500, function(){
			$('#active_project .project_name').html(projectname);
			$('#active_project .project_content').html(projectcopy);
		});
		$('#active_project .project_overlay').animate({left: "0"}, 500);
		//$('.project_overlay').removeClass('clicked');
		//$('.project_information_button').removeClass('clicked');
	}
	
	activeproject(); 
	
});

// ADJUSTING INDUSTRIES SLIDER IMAGE DIMENSIONS

		w1 = $('#industries_response .project_image:first-child').width();
		w2 = $('#industries_response .project_image:nth-child(2)').width();
		w3 = $('#industries_response .project_image:nth-child(3)').width();
		if($(window).width() > 1200){
			h1 = $('#industries_response .project_image:first-child').height(w1*0.75);
		} else {
			h1 = $('#industries_response .project_image:first-child').height(w1);
		}		
		h2 = $('#industries_response .project_image:nth-child(2)').height(w2);
		h3 = $('#industries_response .project_image:nth-child(3)').height(w3);
		
		if($(window).width() > 1200){
			$('.industries_slider .col-md-3').height(w1*0.75);
		}
		if($(window).width() > 767){		
			$('#industries_response').css('margin-bottom', w3);
		}
	



//----------MAP TOGGLE
		window.onload = function() {	
			$('.contact_map').first().addClass('active');
		};
		$('.mechanical_maps').on('click', function(){
			$('.contact_map').first().removeClass('active');
			$('.contact_map').last().addClass('active');
			$('.map_toggle div').removeClass('selected');
			$('.mechanical_maps').addClass('selected');
		});
		$('.electrical_maps').on('click', function(){
			$('.contact_map').last().removeClass('active');
			$('.contact_map').first().addClass('active');
			$('.map_toggle div').removeClass('selected');
			$('.electrical_maps').addClass('selected');
		});

//---------PROJECT INFORMATION BUTTON

		$('.project_information_button').on('click', function(){
			$('.project_overlay').removeClass('clicked');
			$(this).removeClass('clicked');
		});
		$('.project_information_close_button').on('click', function(){
			$('.project_overlay').addClass('clicked');
			$('.project_information_button').addClass('clicked');
		});


//----------AJAX CALLS

	$('#filter input:radio').on('change', function(){
		//$('.in-view #industries_response .project_image img').css({"transform", "translate3d(-100%,0,0)"});
		$('.industries_slider').addClass('out-of-view');
		setTimeout(ajaxcall, 500);
		var selected = $('#filter').find($('input:checked')).parent().index();
	    index = selected;
	});
		
	function ajaxcall(){				
		var filter = $('#filter');
		function imagesizer(){
			w1 = $('#industries_response .project_image:first-child').width();
			w2 = $('#industries_response .project_image:nth-child(2)').width();
			w3 = $('#industries_response .project_image:nth-child(3)').width();
			if($(window).width() > 1200){
				h1 = $('#industries_response .project_image:first-child').height(w1*0.75);
			} else {
				h1 = $('#industries_response .project_image:first-child').height(w1);
			}
			h2 = $('#industries_response .project_image:nth-child(2)').height(w2);
			h3 = $('#industries_response .project_image:nth-child(3)').height(w3);
		}
		function activeproject(){
			imagesource = $('#project_response .active .prj_image_url').html();
			projectname = $('#project_response .active .prj_name').html();
			projectcopy = $('#project_response .active .prj_copy').html();
			$('#active_project img').animate({left: "-70%"}, 500, function(){
				$('#active_project img').attr('src', imagesource);
			});
			$('#active_project img').animate({left: "50%"}, 500);
			
			$('#active_project .project_overlay').animate({left: "-110%"}, 500, function(){
				$('#active_project .project_name').html(projectname);
				$('#active_project .project_content').html(projectcopy);
			});
			$('#active_project .project_overlay').animate({left: "0"}, 500);
			$('.project_overlay').removeClass('clicked');
			$('.project_information_button').removeClass('clicked');
		}
		function activeprojectclick(){
			$('.project_image').on('click', function(){
				$('.project_image').removeClass('active');
				$(this).addClass('active');
				activeproject(); 
			});
		}
		$.post({
			url:filter.attr('action'),
			data:filter.serialize(), // form data
			type:filter.attr('method'), // POST
			
			success:function(data){

				$('#industries_response').html(data); // insert data
				$('#project_response .response_scroll').html(data); // insert data
				
				activeproject(); 
				activeprojectclick();
				imagesizer();
				$('.industries_slider').removeClass('out-of-view');

			}
		});
		return false;
	}
		
	


