
	jQuery(document).ready(function(){

			$('#anima1').css({opacity:0});
			$('#anima2').css({opacity:0});
			$('#anima3').css({opacity:0});
			$('#anima4').css({opacity:0});
			$('#anima5').css({opacity:0});
			$('#listado_servicios').css({opacity:0});
			$('#anima6').css({opacity:0});
			$('#anima7').css({opacity:0});
			$('.item_galeria').css({opacity:0});
			$('#anima8').css({opacity:0});
			$('#anima9').css({opacity:0});
			$('#anima10').css({opacity:0});
			$('#anima11').css({opacity:0});
			$('#anima12').css({opacity:0});
			$('#map').css({opacity:0});



			$('#anima1').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima2').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima3').waypoint(function() {
				$(this).toggleClass( 'fadeIn animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima4').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima5').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#listado_servicios').waypoint(function() {
				$(this).toggleClass( 'fadeIn animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});
			$('#anima6').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima7').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#galeria').waypoint(function() {
				$(".item_galeria").sort(function(a,b){return Math.round(Math.random())-0.5}).each(function(i) {
					$(this).delay(i*200).animate({ opacity: 1.0 }, 200);
				});
				}, {
				offset: '30%',
				triggerOnce: true
			});

			$('#anima8').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima9').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima10').waypoint(function() {
				$(this).toggleClass( 'fadeIn animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});
			
			$('#anima11').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#anima12').waypoint(function() {
				$(this).toggleClass( 'fadeInUp animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});

			$('#map').waypoint(function() {
				$(this).toggleClass( 'fadeIn animated' ); 
				}, {
				offset: '70%',
				triggerOnce: true
			});



	});
