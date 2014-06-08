$(document).ready(function(){

	$('#nav-toggle').on('click',function(){
		$('.container').toggleClass('shiftContainer');
		$('.mobileMenu').toggleClass('shiftMenu');
		$(this).toggleClass('active position');
	});

	var menuPosition = function() {

		var winHeight = $(window).height();
		$('#nav-toggle').css({'position':'fixed','left':'-111px','top':winHeight / 2});

	};

	menuPosition();


});