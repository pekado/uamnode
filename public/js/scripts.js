		var visible = 1;

		function intercambia() {
				
			if(visible) { visible = 0; $('#loader').css({opacity:0}); }
			else { visible = 1; $('#loader').css({opacity:1}); }
		}
			
		var intervalID = setInterval(intercambia, 200);

		jQuery(document).ready(function() {			
			
			jQuery(".menu").click(function(e) { e.preventDefault(); jQuery(".nav_main").fadeIn(200); });		

			jQuery(".close").click(function(e) { e.preventDefault(); jQuery(".nav_main").fadeOut(200); });		

		    jQuery(window).scroll(function(){ 
			    
				position = $(window).scrollTop();
				
				if(position>100) { jQuery('.header').addClass('bg_gray'); } else { jQuery('.header').removeClass('bg_gray'); }
			
		    });

		});

		jQuery(window).load(function(){ 

			$(".pre-load-web").fadeOut(300,function() { $(this).remove(); });
			$(".header").toggleClass( 'fadeInDown animated' ); 
			$(".social").toggleClass( 'fadeInUp animated' ); 
			$(".slick-dots").toggleClass( 'fadeInUp animated' ); 
			$(".down").toggleClass( 'fadeIn animated' ); 
		
		})	

		