$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // console.log(wScroll);

    // gallery
    if(wScroll >= 1300) {
		  $('.imgs2').css('opacity', '1');
	  } else {
      $('.imgs2').css('opacity', '0');
    }

    // course
    if(wScroll >= 2100) {
		  $('.desc').css('opacity', '1');
		  $('.imgs3').css('opacity', '1');
	  } else {
      $('.desc').css('opacity', '0');
      $('.imgs3').css('opacity', '0');
    }

    // social media
    if(wScroll >= 3000) {
		  $('.icon').css('opacity', '1');
	  } else {
      $('.icon').css('opacity', '0');
    }

    // skill
    if(wScroll >= 580) {
		  $('.jav').css('opacity', '1');
		  $('.html').css('opacity', '1');
		  $('.css').css('opacity', '1');
		  $('.js').css('opacity', '1');
	  } else {
      $('.jav').css('opacity', '0');
      $('.html').css('opacity', '0');
      $('.css').css('opacity', '0');
      $('.js').css('opacity', '0');
    }

})

// Gallery
for(let i = 1; i <= 7; i++) {
  $('#img').append(`
    <div class="cards">
      <div class="card"><img src="img/pap`+ i +`.jpg" width="100%"></div>
    </div>
  `);
}