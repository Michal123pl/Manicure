$(document).ready(function(){
//menu icon click effect
	$("#menu-icon").click(function(){
		$('div').toggleClass('change');
		$('.a1').slideToggle(1000);
	});

//hover on logo
	$('#logo').mouseenter(function(){
		$('strong').addClass('logo');
	})
	$('#logo').mouseleave(function(){
		$('strong').removeClass('logo');
	})

//Intro photo animation
	$('.intro-photo-table').delay(1000).fadeIn(1200);

	$('#intro-photo-word').delay(3000).fadeIn(1600).fadeOut(1200, function(){
		$('#intro-photo-word').html('Coffee..');
		$('#intro-photo-word').fadeIn(1200, function(){
			$('#intro-photo-word').fadeOut(1200, function(){
				$('#intro-photo-word').html('Pizza.');
				$('#intro-photo-word').fadeIn(1200, function(){
					$('#intro-photo-word').fadeOut(1200, function(){
						$('#intro-photo-word').html('.Manicure');
						$('#intro-photo-word').fadeIn(1200);
					});
				});
			});
		});
	});
//Pricing header animation
	$('.pricing-background').mouseenter(function(){
		$('.pricing-header').addClass('animaton-letters');
	})
	$('.pricing-background').mouseleave(function(){
		$('.pricing-header').removeClass('animaton-letters');
	})

//About animation 
	$('#about').mouseenter(function(){
		$('#about-header').addClass('animaton-letters');
	})
	$('#about').mouseleave(function(){
		$('#about-header').removeClass('animaton-letters');
	})
//Gallery animation

	$('.gallery').mouseenter(function(){
		$('#gallery-header').addClass('animaton-letters');
	})
	$('.gallery').mouseleave(function(){
		$('#gallery-header').removeClass('animaton-letters');
	})
	
//Modal img
	$('.img').click(function(){
		let alt = $(this).children('img').attr('alt');
		let src = $(this).children('img').attr('src');
		$('.modal-content').attr('src', src);
		$('.modal').css('display', 'block');
		$('#caption').html(alt);
		$('header').css('display', 'none');
	})
	$('.close').click(function(){
		$('.modal').css('display', 'none');
		$('header').css('display', 'block');
	})

});
