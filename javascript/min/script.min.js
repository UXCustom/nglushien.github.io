$(function(){
	Portfolio.Iteration1.init();
});

Portfolio = window.Portfolio || {};

Portfolio.Iteration1 = {

	init:function(){
		var winHeight = $(window).height();
		var winWidth = $(window).width();
		this.bindEventHandlers();
		this.backgroundImage(winWidth,winHeight);
		this.navigationFunction();
		this.hightlightNavItem();
	},

	bindEventHandlers:function(){
		$(window).on('scroll',function(){
			Portfolio.Iteration1.hightlightNavItem();
			Portfolio.Iteration1.animateElements();
		});
		$(window).on('resize',function(){
			var winHeight = $(window).height();
			var winWidth = $(window).width();
			Portfolio.Iteration1.backgroundImage(winWidth,winHeight);
		});
	},

	backgroundImage:function(winWidth,winHeight){
		$('.section1,.section2,.section3').css({'width':winWidth,'height':winHeight});
	},

	navigationFunction:function(){
		$('.navigationContainer a[href^="#"],.cta').on('click', function(event) {
			var target = $( $(this).attr('href') );
			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
				scrollTop: target.offset().top,
				}, 1500, 'easeInOutCubic');
			}
		});
	},

	hightlightNavItem:function(){

		if($(window).scrollTop() <= 955 ){
			$('.navigationContainer .home').addClass('active');
			$('.navigationContainer a').not('.home').removeClass('active');
		} else if($(window).scrollTop() > 955 && $(window).scrollTop() < 1960){
			$('.navigationContainer .design').addClass('active');
			$('.navigationContainer a').not('.design').removeClass('active');
		} else if($(window).scrollTop() > 1960 && $(window).scrollTop() < 2940){
			$('.navigationContainer .dev').addClass('active');
			$('.navigationContainer a').not('.dev').removeClass('active');
		}
	},

	animateElements:function(){
	
		$('#design i').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated fadeInRight',
			offset: 100
		});
		$('#design p').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated fadeInRight',
			offset: 100
		});
		$('#dev').children().addClass('hidden').viewportChecker({
			classToAdd: 'visible animated fadeInRight',
			offset: 100
		});
	}
  
};