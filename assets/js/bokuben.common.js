'use strict';

(function(){

  var w = $(window).width();
  // メニューカレント表示
  var menuName = $('body').attr('data-menu');
  $(menuName).addClass('active');
  // ページ表示
  $(window).on('load',function(){
    $('body').animate({
      'opacity': 1
    }, 600, 'easeOutSine');
  });
  // SPメニュー
  if(w < 769) {
    $('.header_btn').on('click',function(){
      var spMenu = $('.c-header_menu');
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(spMenu).fadeOut('400');
        $('.c-header_menu .menu_list li').removeClass('open');
      }else {
        $(this).addClass('open');
        $(spMenu).fadeIn('400');
        $('.c-header_menu .menu_list li').each(function (i) {
        setTimeout(function () {
          $('.c-header_menu .menu_list li').eq(i).addClass('open');
        }, 100 * i);
      });
      }
    });
  }
  // ページトップボタン
  $('.footer_pagetop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000, 'easeInOutQuad');
    return false;
  });
  // フッターキャラ
  var footChara = ['img_footer_0.png', 'img_footer_1.png', 'img_footer_2.png', 'img_footer_3.png', 'img_footer_4.png'];
  var charaNum = Math.floor(Math.random() * footChara.length);
  $('.c-footer .footer_chara img').attr('src', '/assets/img/common/footer/img_footer_' + charaNum + '.png');
  // 背景パララックス
  $(window).on('load', function () {
    if(w < 769) {
      var wh = screen.height;
      $('.l-bg').css({
        'height': wh + 'px',
      });
    }
  });
  $(window).on('scroll', function () {
    var scr = $(window).scrollTop();
    if(w < 769) {
      var parallaxnum = Math.floor(scr * 0.03);
    }else {
      var parallaxnum = Math.floor(scr * 0.05);
    }
    $('.l-bg .parallax_up').each(function () {
      $(this).css({
        'transform': 'translateY(' + -parallaxnum + 'px)',
        '-webkit-transform': 'translateY(' + -parallaxnum + 'px)',
      });
    });
    $('.l-bg .parallax_down').each(function () {
      $(this).css({
        'transform': 'translateY(' + parallaxnum + 'px)',
        '-webkit-transform': 'translateY(' + parallaxnum + 'px)',
      });
    });
  });
  // ieでスムーズスクロールを切る
  if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
    $('body').on("mousewheel", function () {
      event.preventDefault();
      var wd = event.wheelDelta;
      var csp = window.pageYOffset;
      window.scrollTo(0, csp - wd);
    });
  }
  // 動画モーダル
  if(('.l-modal.music').length) {
    $('.movie_btn').on('click', function(){
      var movieId = $(this).attr('data-movie');
      $('.modal_content .content_movie').append('<iframe width="900" height="506" src="https://www.youtube.com/embed/' + movieId + '?rel=0&autoplay=1" frameborder="0"></iframe>');
      $('.l-modal.music').stop().delay(150).fadeIn(400);
      return false;
    });
    $('.modal_bg,.modal_close').on('click', function () {
      $('.l-modal.music').stop().fadeOut(400, function () {
        $('.modal_content .content_movie').children().remove();
      });
    });
  }
  // スクロールアニメーション
  var ScrollEffectModule = new SCROLL_EFFECT_MODULE({
    elem               : '.effect_item',
    displayRatio       : 0.85,
    displayReverse     : false,
    firstElem          : '.effect_item--first',
    firstElemDelayTime : 300,
    firstDelayTime     : 500,
    loadDelayTime      : 0,
    addClassNameActive : 'active',
  });
  // PCのsafariでnotosansをきる
  var ua = window.navigator.userAgent.toLowerCase();
  if(w > 769) {
    if(ua.indexOf('safari')  !== -1 && ua.indexOf('chrome') === -1) {
      $('.l-wrapper').css({
        'font-family': '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',
      });
      if($('.content_inner.staffcast').length) {
        $('.content_inner.staffcast .staffcast_box .staff_list li .staff_name p').css({
          'font-family': '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',
        });
      }
    }
  }
}());
