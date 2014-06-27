$(document).ready(function(){

	$('.navigationContainer a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top,
			}, 1500, 'easeInOutCubic');
		}
	});
	

	if($(window).scrollTop() <= 940 ){
		$('.navigationContainer .home').addClass('active');
		$('.navigationContainer a').not('.home').removeClass('active');
	} else if($(window).scrollTop() > 940 && $(window).scrollTop() < 1880){
		$('.navigationContainer .design').addClass('active');
		$('.navigationContainer a').not('.design').removeClass('active');
	} else if($(window).scrollTop() > 1880 && $(window).scrollTop() < 2820){
		$('.navigationContainer .dev').addClass('active');
		$('.navigationContainer a').not('.dev').removeClass('active');
	}

	$(window).on('scroll',function(){
		if($(window).scrollTop() <= 940 ){
			$('.navigationContainer .home').addClass('active');
			$('.navigationContainer a').not('.home').removeClass('active');
		} else if($(window).scrollTop() > 940 && $(window).scrollTop() < 1880){
			$('.navigationContainer .design').addClass('active');
			$('.navigationContainer a').not('.design').removeClass('active');
		} else if($(window).scrollTop() > 1880 && $(window).scrollTop() < 2820){
			$('.navigationContainer .dev').addClass('active');
			$('.navigationContainer a').not('.dev').removeClass('active');
		}
	});

	$('.intro').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	$('#design,#dev').children().addClass('hidden');
	setTimeout(function(){
		$('#design,#dev').children().viewportChecker({
			classToAdd: 'visible animated fadeInDown',
			offset: 200
		});
	},3000);


});