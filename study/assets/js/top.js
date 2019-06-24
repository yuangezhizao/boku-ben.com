var winh = $(window).height();
var winw = $(window).width();

$(function(){
	$('.top_banner_slide').slick({
		variableWidth: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 751,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	$('.main_area').addClass('load');
});
