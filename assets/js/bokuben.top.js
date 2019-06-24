$(function() {
  if ($('.top_schedule .swiper-container').length) {
    // var swiperBanner = new Swiper('.top_banner .swiper-container', {
    //   slidesPerView: 3,
    //   loop: true,
    //   speed: 1000,
    //   spaceBetween: 10,
    //   centeredSlides: true,
    //   pagination: {
    //     el: '.top_banner .banner_pagination',
    //     clickable: true
    //   },
    //   breakpoints: {
    //     768: {
    //       slidesPerView: 2,
    //       centeredSlides: false,
    //       spaceBetween: 5
    //     },
    //   }
    // });

    var swiperCalender = new Swiper('.top_schedule .swiper-container', {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      spaceBetween: 10,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      centeredSlides: true,
      pagination: {
        el: '.top_schedule .img_pagination',
        clickable: true
      },
    });
    swiperCalender.on('click', function () {
      var st = $(window).scrollTop();
      var w = $(window).width();
      var slideImg = $('.schedule_img .swiper-slide-active').find('.img_item').css('background-image').replace(/(url\(|\)|'|")/gi, '');
      $('.l-modal.schedule .content_img').append('<img src="'+ slideImg +'" alt="">');
      $('.l-modal.schedule').delay(150).fadeIn(400);
      $('.l-close').delay(150).addClass('on');
      return false;
    });
    $('.modal_bg,.l-close').on('click', function () {
      $('.l-close').removeClass('on');
      $('.l-modal.schedule').fadeOut(400);
      $('.l-modal.schedule .content_img').empty();
    });
  }
});
var w = $(window).width();
// メインキャラパララックス
// if(w > 768) {
//   var scene = document.getElementById('parallax');
//   var parallax = new Parallax(scene, {
//     scalarX: -2,
//     scalarY: 0.5,
//     frictionX: 0.2,
//     frictionY: 0.2,
//     invertX: false,
//     invertY: false
//   });
// }

// ローディング
$(window).on('load', function () {
  var from = location.search;
  var hash = location.hash;
  if (from === "" && hash === "") {
    setTimeout(function () {
      $('.l-loading').addClass('active');
      $('.l-loading .loading_logo').addClass('active');
    }, 750);
    setTimeout(function () {
      $('.l-loading .loading_chara li').each(function (i) {
        setTimeout(function () {
          $('.l-loading .loading_chara li').eq(i).addClass('active');
        }, 110 * i);
      });
    }, 1750);
     setTimeout(function () {
       $('html, body').animate({
         scrollTop: 0
       }, 1000, 'easeInOutQuart');
       $('.l-loading').fadeOut(750, 'easeInOutQuad');
     }, 3500);
     setTimeout(function () {
      $('.mv_catch').addClass('active');
     }, 4000);
     setTimeout(function () {
      $('.mv_logo').addClass('active');
     }, 4100);
     setTimeout(function () {
      $('.mv_date').addClass('active');
     }, 4200);
     setTimeout(function () {
      $('.mv_onair').addClass('active');
     }, 4300);
     setTimeout(function () {
      $('.mv_banner, .comic_banner').addClass('active');
     }, 4400);

      $content = $('.top_banner'),
      $window = $(window);
      var contentTop = 0;
      var winW = $(window).width();
      if(winW >768){
        updatePosition();
        // update();
        var kv_H = $('.top_main').innerHeight();
          $('html,body').animate({scrollTop : kv_H/2},{duration:1000,easing:'easeInOutCubic'});
          setTimeout(function(){
            $('html,body').delay(3800).animate({scrollTop : 0},{duration:2000,easing:'easeInOutCubic'});
          });
      }

  } else {
    $('.l-loading').hide();
    setTimeout(function () {
      $('.mv_catch').addClass('active');
     }, 500);
     setTimeout(function () {
      $('.mv_logo').addClass('active');
     }, 600);
     setTimeout(function () {
      $('.mv_date').addClass('active');
     }, 700);
     setTimeout(function () {
      $('.mv_onair').addClass('active');
     }, 800);
     setTimeout(function () {
      $('.mv_banner, .comic_banner').addClass('active');
     }, 900);
  }
});
// ユニット情報モーダル
$('.mv_banner').on('click',function(){
  var st = $(window).scrollTop();
  var w = $(window).width();
  if (w <= 768) {
    $('.l-modal.img .modal_content').css({
      top: st + 150 + 'px'
    }).stop();
  } else {
    $('.l-modal.img .modal_content').css({
      top: st + 227 + 'px'
    }).stop();
  }
  $('.l-modal.img').delay(150).fadeIn(400);
  $('.l-close').delay(150).addClass('on');
  return false;
});
$('.modal_bg,.l-close').on('click', function () {
  $('.l-close').removeClass('on');
  $('.l-modal.img').fadeOut(400);
});

function updatePosition(){
  contentTop = $content.offset().top;
}