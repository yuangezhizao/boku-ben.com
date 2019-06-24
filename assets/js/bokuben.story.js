var winh = $(window).height();
var winw = $(window).width();

$(function(){
	$('.story_slide').slick({
		variableWidth: false,
		autoplay: true,
		dots: false,
		prevArrow: $('.slide_left'),
		nextArrow: $('.slide_right')
	});
});