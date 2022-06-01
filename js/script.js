$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // console.log(wScroll);

    if(wScroll >= 440) {
		$('.imgs2').css('opacity', '1');
	} else {
        $('.imgs2').css('opacity', '0');
    }

    if(wScroll >= 1140) {
		$('.desc').css('opacity', '1');
		$('.imgs3').css('opacity', '1');
	} else {
        $('.desc').css('opacity', '0');
        $('.imgs3').css('opacity', '0');
    }

    if(wScroll >= 2050) {
		$('.icon').css('opacity', '1');
	} else {
        $('.icon').css('opacity', '0');
    }
})