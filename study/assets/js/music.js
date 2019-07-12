var winw = $(window).width();
var winh = $(window).height();

$(function(){

	$('[data-scbtn]').on('click', function(){
		var target = $('[data-sc='+$(this).attr('data-scbtn')+']');
		if (!target.length) return ;
		var targetY = target.offset().top;
		$('html,body').animate({scrollTop: targetY - 20}, 800, 'swing');
	});

});

$(function () {
	$('.store_tgl_ttl').on('click', function () {
	  $(this).toggleClass("open").next().slideToggle();
	});
});