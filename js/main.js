$(document).ready(function() {
    //Loader code
    $(window).on('load', function() {
        var setTime = setTimeout(function() {
            $("#loader-active").fadeOut('slow');
        }, 2000);
        return setTime;
        $("#loader-active").fadeOut('slow');
        $('body').css({
            'overflow': 'visible'
        });
    });
    //Sticky code
    window.onscroll = function() { myFunction() };

    var navbar = document.getElementById("mynav");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= 50) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
	//Return-top scroll code
	$(window).scroll(function(){
		var scrl = $(window).scrollTop();
		if(scrl > 300){
			$("#r-top").fadeIn();
		}else{
			$("#r-top").fadeOut();
		}	
	});
	$("#r-top").click(function(){
		$("html, body").animate({
			scrollTop : 0
		}, 1500);
	});
    //intoduce-selector scroll code
    $(window).scroll(function() {
        var scrl = $(window).scrollTop();
        if (scrl > 890) {
            $('#intoduce-selector').fadeIn();
        } else {
            $('#intoduce-selector').fadeOut();
        }
    });
	//service scroll code
	$(window).scroll(function() {
        var scrl = $(window).scrollTop();
        if (scrl > 1740) {
            $('.service-padding').fadeIn();
        } else {
            $('.service-padding').fadeOut();
        }
    });
	//skills scroll code
	$(window).scroll(function() {
        var scrl = $(window).scrollTop();
        if (scrl > 2580) {
            $('#skills').fadeIn();
        } else {
            $('#skills').fadeOut();
        }
    });
	//portfolio scroll code
	$(window).scroll(function() {
        var scrl = $(window).scrollTop();
        if (scrl > 3800) {
            $('#portf').fadeIn();
        } else {
            $('#portf').fadeOut();
        }
    });
    //Query Plugin
    $("#lightgallery1").lightGallery({
        loop: true,
        fourceAutoply: false,
        autoplay: false,
        thumbnail: false,
        speed: 1000,
        keypress: true,
        mode: 'lg-slide',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)'

    });
    $("#lightgallery2").lightGallery({
        loop: true,
        fourceAutoply: false,
        autoplay: false,
        thumbnail: false,
        speed: 1000,
        scale: 1,
        keypress: true,
        mode: 'lg-slide',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)'

    });
    $("#lightgallery3").lightGallery({
        loop: true,
        fourceAutoply: false,
        autoplay: false,
        thumbnail: false,
        speed: 1000,
        scale: 1,
        keypress: true,
        mode: 'lg-slide',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)'

    });
    $("#lightgallery4").lightGallery({
        loop: true,
        fourceAutoply: false,
        autoplay: false,
        thumbnail: false,
        speed: 1000,
        scale: 1,
        keypress: true,
        mode: 'lg-slide',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)'

    });
    $("#lightgallery5").lightGallery({
        loop: true,
        fourceAutoply: false,
        autoplay: false,
        thumbnail: false,
        speed: 1000,
        scale: 1,
        keypress: true,
        mode: 'lg-slide',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)'
    });
    //Smooth Scroling code
    $('.navbar ul li a').click(function(e) {
        $('.navbar ul li a:after').removeClass('active');
        $(this).addClass('active');
        thisAttrHref = $(this).attr('href');
        thisAttrHrefOffset = $(thisAttrHref).offset().top + 100;
        $('html, body').animate({
            scrollTop: thisAttrHrefOffset
        });
        e.preventDefault();
    });
	$(window).scroll(function() {
    $('.show-scroll').each(function() {
        offset = $(this).offset().top;
        if ($(document).scrollTop() > offset) {
            Id = $(this).attr('id');
            $('.show-scroll').removeClass('active');
            ActiveId = $(this).addClass('active').attr('id');
        }
    });
    $('.navbar ul li').each(function() {
        children = $(this).children('a');
        childrenHref = $(this).children('a').attr('href');
        if (childrenHref === '#' + ActiveId) {
            $('.navbar ul li a').removeClass('active');
            $(children).addClass('active');
        }
    });
});
	$(".feedback-padding").owlCarousel({
        loop: true,
        //margin: 50,
        items: 1,
		dots:false,
		responsiveClass:true,
        smartSpeed: 1500,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 2
            },
            768: {
                items: 1
            },
			360: {				
                items: 1,
            }
        }
    });
});
