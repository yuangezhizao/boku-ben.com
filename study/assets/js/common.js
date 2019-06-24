var winh = $(window).height();
var winw = $(window).width();

$(function(){
	$('.page_top').on('click', function(){
		$('body,html').animate({scrollTop:0}, 700, 'swing');
	});

	$('.menu_btn').on('click', function(){
		$('.menu_back').fadeToggle(500);
		$('.g_nav').toggleClass('nav_open');
		$('.menu_btn').toggleClass('nav_open');
	});
	$('.menu_back').on('click', function(){
		$('.menu_btn').trigger('click');
	});

	$('.modal_btn').on('click', function(){
		$('body').addClass('modal_open_body');
		var $this = $(this);
		var st = $(window).scrollTop();
		if($this.attr('data-img')){
			var dataimg = $this.attr('data-img');
			$('.modal_wrap').html('<img src="'+dataimg+'" alt="">');
			$('.modal_wrap').attr({'data-modal':'img'});
		}else if($this.attr('data-youtube')){
			var dataid = $this.attr('data-youtube');
			$('.modal_wrap').append('<iframe width="900" height="506" src="https://www.youtube.com/embed/'+dataid+'?rel=0&autoplay=1" frameborder="0"></iframe>');
			$('.modal_wrap').attr({'data-modal':'youtube'});
		}
		$('.modal').stop().fadeIn(400);
		$('.modal_in').stop().delay(150).fadeIn(400);
	});
	$('.modal_back, .modal_close').on('click', function(){
		$('body').removeClass('modal_open_body');
		$('.modal').stop().fadeOut(400, function(){
			$('.modal_wrap').children().remove();
			$('.modal_wrap').attr({'data-modal':''});
		});
	});

	$('a[href^="#"]').on('click', function(){
		var target = $(this.hash);
		if (!target.length) return;
		var targetY = target.offset().top - 45;
		$('html,body').animate({scrollTop: targetY}, 700, 'swing');
		return false;
	});
	$('.g_nav a').on('click', function(){
		if($(this).attr('href').indexOf('#') > -1){
			var target = $(this).attr('href').split('#')[1];
			console.log(target);
			if ($('#'+target).length){
				var targetY = $('#'+target).offset().top - 45;
				$('html,body').animate({scrollTop: targetY}, 700, 'swing');
				$('.menu_btn').trigger('click');
				return false;
			}
		}
	});

	$('.wrapper').addClass('load');
});

$(window).on('load', function(){
	var hash = location.hash;
	if(hash){
		if(hash.indexOf('=') == -1){
			var hash = hash.split('#')[1];
			if($('.'+hash).length){
				var targetY = $('.'+hash).offset().top - 45;
				$('html,body').animate({scrollTop: targetY}, 500, 'swing');
			}
		}
	}
});


$(window).on('load scroll', function(){
	winh = $(window).height();
	var scroll = $(window).scrollTop();
	$('.anm_in').each(function(){
		var elemPos = $(this).offset().top;
		if (scroll > elemPos - winh/1.35){
			$(this).addClass('in');
		}
	});
});
