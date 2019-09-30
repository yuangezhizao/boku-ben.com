'use strict';

(function () {

  var w = $(window).width();
  // メニューカレント表示
  var menuName = $('body').attr('data-menu');
  $(menuName).addClass('active');
  // ページ表示
  $(window).on('load', function () {
    $('body').animate({
      'opacity': 1
    }, 600, 'easeOutSine');
  });
  // SPメニュー
  if (w < 769) {
    $('.header_btn').on('click', function () {
      var spMenu = $('.c-header_menu');
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(spMenu).fadeOut('400');
        $('.c-header_menu .menu_list li').removeClass('open');
      } else {
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
  if (('.l-modal.music').length) {
    $('.movie_btn').on('click', function () {
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
    elem: '.effect_item',
    displayRatio: 0.85,
    displayReverse: false,
    firstElem: '.effect_item--first',
    firstElemDelayTime: 300,
    firstDelayTime: 500,
    loadDelayTime: 0,
    addClassNameActive: 'active',
  });
  // PCのsafariでnotosansをきる
  var ua = window.navigator.userAgent.toLowerCase();
  if (w > 769) {
    if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
      $('.l-wrapper').css({
        'font-family': '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',
      });
      if ($('.content_inner.staffcast').length) {
        $('.content_inner.staffcast .staffcast_box .staff_list li .staff_name p').css({
          'font-family': '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',
        });
      }
    }
  }
  var particle_color = $('#bgCanvas').attr('data-color');
  var stage = new createjs.Stage("bgCanvas");
  var particleSystem = new particlejs.ParticleSystem();
  stage.addChild(particleSystem.container);
  particleSystem.importFromJson(
    {
      "bgColor": "#ffffff",
      "width": 2000,
      "height": 2000,
      "emitFrequency": 7,
      "startX": 1017,
      "startXVariance": 2000,
      "startY": 2050,
      "startYVariance": 0,
      "initialDirection": 270,
      "initialDirectionVariance": 20,
      "initialSpeed": 4,
      "initialSpeedVariance": 20,
      "friction": 0.02,
      "accelerationSpeed": 0.06,
      "accelerationDirection": 270,
      "startScale": 0.25,
      "startScaleVariance": 1,
      "finishScale": 0.2,
      "finishScaleVariance": 1,
      "lifeSpan": 500,
      "lifeSpanVariance": 0,
      "startAlpha": 0.8,
      "startAlphaVariance": "1",
      "finishAlpha": 0,
      "finishAlphaVariance": 0,
      "shapeIdList": [
        "circle"
      ],
      "startColor": {
        "hue": particle_color,
        "hueVariance": "0",
        "saturation": 75,
        "saturationVariance": 0,
        "luminance": 90,
        "luminanceVariance": 0
      },
      "blendMode": false,
      "alphaCurveType": "0",
      "VERSION": "1.0.0"
    }
  );
  createjs.Ticker.framerate = 60;
  createjs.Ticker.on("tick", handleTick);
  function handleTick() {
    particleSystem.update();
    stage.update();
  }
}());
