$(function(){
	$('.category_cap').on('click', function(){
		$(this).next().stop().slideToggle(300);
		$(this).toggleClass("open");
	});
});


function modalResize(){
	var modal = $('.zoom_item');
	var w = $(window).width();
	var h = $(window).height();
	var x = (w - $(modal).outerWidth(true)) / 2;
	var y = (h - $(modal).outerHeight(true)) / 2;
	$(modal).css({
		'left': x + 'px',
		'top': y + 'px'
	});
}
$(function(){
	$('.item_thumb li').eq(0).addClass('thumb_active');
	var startImg = $('.thumb_active .thumb_bg img').eq(0).attr('src');
	setTimeout(function(){
		$('.mainImg_bg').append('<img src="' + startImg + '">');
	},200);
	$('.item_thumb li').on('click',function(){
		$('.mainImg_bg').fadeOut();
		setTimeout(function(){
			$('.mainImg_bg').empty();
		},150);
		$this = $(this);
		if($this.attr('class') != 'thumb_active'){
			$('.thumb_active').removeClass('thumb_active');
			$this.addClass('thumb_active');
			setTimeout(function(){
				var thumbSrc = $('.thumb_active .thumb_bg img').attr('src');
				$('.mainImg_bg').append('<img src="' + thumbSrc + '">');
				$('.mainImg_bg').css({'display':'none'});
			},200);
			setTimeout(function(){
				$('.mainImg_bg').fadeIn();
			},250);
		}
	});
	$(window).on('resize', function(){
		modalResize();
	});

	$('.item_detail_img').on('click',function(){
		var $this = $(this);
		var targetSrc = $('.thumb_active .thumb_bg img').attr('src');
		$('.zoom_item').append('<img src="' + targetSrc + '">');
		$('.zoom_bg,.zoom_item,.btn_close').fadeIn('300');
		modalResize();

	});
	$('.zoom_bg,.btn_close').on('click',function(){
		$('.zoom_item').empty('<img>');
		$('.zoom_bg,.btn_close').fadeOut();
	});
});
