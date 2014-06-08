$(document).ready(function(){

document.querySelector( "#nav-toggle" )
	.addEventListener( "click", function() {
		this.classList.toggle( "active" );
	});

	$('#nav-toggle').on('click',function(){
		$('.container').toggleClass('shifted');
		$(this).toggleClass('position');
	});

	var menuPosition = function() {

		var winHeight = $(window).height();
		$('#nav-toggle').css({'position':'fixed','left':'20px','top':winHeight / 2});

	};

	menuPosition();


});