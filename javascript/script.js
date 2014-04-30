$(document).ready(function(){

	$(window).on('resize',function(){
		if($(window).width() < 640){
			$('i').attr('class','fa fa-mobile-phone');
			$('.experience').text("You are viewing the mobile experience");
		} else if($(window).width() < 960){
			$('i').attr('class','fa fa-tablet');
			$('.experience').text("You are viewing the tablet experience");
		} else if($(window).width() < 1280){
			$('i').attr('class','fa fa-laptop');
			$('.experience').text("You are viewing the laptop experience");
		} else {
			$('i').attr('class','fa fa-desktop');
			$('.experience').text("You are viewing the desktop experience");
		}
	});

	if($(window).width() < 640){
		$('i').attr('class','fa fa-mobile-phone');
		$('.experience').text("You are viewing the mobile experience");
	} else if($(window).width() < 960){
		$('i').attr('class','fa fa-tablet');
		$('.experience').text("You are viewing the tablet experience");
	} else if($(window).width() < 1280){
		$('i').attr('class','fa fa-laptop');
		$('.experience').text("You are viewing the laptop experience");
	} else {
		$('i').attr('class','fa fa-desktop');
		$('.experience').text("You are viewing the desktop experience");
	}


});