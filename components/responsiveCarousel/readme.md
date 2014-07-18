#Responsive Carousel
##Built on top of bxSlider

###Why Should I Use It?
* Fully responsive - will adapt to any device
* Swaps images instead of resizing them (great for slides with text on them)
* Based on HTML5 data tags yet very browser friendly
* Small amount of Jade, Sass and jQuery needed to get up and running
* Browser support: Firefox, Chrome, Safari, iOS, Android, IE7+

##Installation

###Step 1: Link required files

First and most important, the jQuery library needs to be included (no need to download - link directly from Google). If you're using Sass (.scss) make sure you check out the file structure from the demo site.

###Step 2: Create HTML markup (using Jade)

Copy the markup from the carousel.jade file and paste it in your file. It can be inserted directly into a page or on it's own separate page. 


	ul.bxslider
		li
			a(href="http://www.google.com",target="_blank")
				img(src="images/slide1-320.jpg", data-phone="images/slide1-320.jpg",data-tablet="images/slide1-640.jpg",data-laptop="images/slide1-960.jpg", data-desktop="images/slide1-1280.jpg", class="resp")
		li
			a(href="http://www.techtarget.com",target="_blank")
				img(src="images/slide1-320.jpg", data-phone="images/slide1-320.jpg",data-tablet="images/slide1-640.jpg",data-laptop="images/slide1-960.jpg", data-desktop="images/slide1-1280.jpg", class="resp")


###Step 3: Call the bxSlider

Call .bxslider() on `<ul class="bxslider">`. Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

	$(document).ready(function(){
  		$('.bxslider').bxSlider();
	});

###Step 4: Insert the jQuery responsive function

Call .bxslider() on `<ul class="bxslider">`. Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

	$(window, document).on('load resize', function(){
    	var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
    	$('img.resp').each(function(index) {
      		var desktop = $(this).data('desktop');
      		var laptop = $(this).data('laptop');
      		var tablet = $(this).data('tablet');
      		var phone = $(this).data('phone');
      		if (size.indexOf("desktop") != -1) {
        		$(this).attr('src',desktop);
      		} else if (size.indexOf("laptop") != -1) {
         		$(this).attr('src',laptop);
      		} else if (size.indexOf("tablet") != -1) {
         		$(this).attr('src',tablet);
      		} else {
         		$(this).attr('src',phone);
      		}
    	});
  	});


##How it works

###The image tag

The main source (src) that the image tags use references the smallest version of the image. The tags also use HTML5 data attributes that reference all of the image files including the image defined in the source. You can name the data attribute anything you want after the <code>data-</code>. I named mine after the devices I am planning on targeting. A better way to define them might be by media query breakpoints.

	data-phone="images/slide1-320.jpg",
	data-tablet="images/slide1-640.jpg",
	data-laptop="images/slide1-960.jpg",
	data-desktop="images/slide1-1280.jpg",

###The css (.scss)

Inside each of your media queries you need to add the following CSS. It adds a 'hook' to the body's after pseudo class so the jQuery can reference the page at the correct breakpoint. The string being defined by content should match the HTML5 data attribute you defined in the HTML (jade). If you have 4 data attributes you should have 3 media queries with each one defining the CSS as below.

	body:after {
		content: 'tablet';
		display: none;
	}

###The jQuery

The script that you inserted into your javascript file gets the computed style of the body tag. With the CSS you added to each media query, the body's after pseudo class changes it's content value, which the script is looking for. The script then loops through each image with a class of "resp". It then checks the indexOf which ever body pseudo class content is found. Depending on the value of content, the script will tell the image tag which data attribute to use as the image source.


#####Thank you to bxSlider (www.bxslider.com) for supplying the carousel and Frido Verweij for coming up with the responsive swap technique.
