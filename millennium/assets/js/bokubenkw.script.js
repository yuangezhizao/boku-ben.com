'use strict';

(function () {
  var PMB = new PLAYER_MODULE_BRIGHTCOVE({
    id: 'videoplayer',
    ui_controls: true,
    ui_default: true,
    videoid: '6113265488001',
    account: '4929511769001'
  });
  var a = 'cmVpamk=';
  function folderOpen() {
    var b = $('#passwordArea').val();
    var c = Base64.encode(b);
    if (a == c) {
      var folder = $('.m-modal--folder');
      $('.m-modal').removeClass('is-open');
      $(folder).addClass('is-open');
    } else {
      var failed = $('.m-modal--failed');
      $('.m-modal').removeClass('is-open');
      $(failed).addClass('is-open');
    }
  }
  $('input').on('keydown', function (e) {
    if (13 == e.which) {
      folderOpen();
    }
  });
  $('#passwordBtn').on('click', function (e) {
    folderOpen();
  });
  $('.js-modal').on('click', function () {
    var target = $(this).attr('data-modal');
    $('.m-modal').removeClass('is-open');
    $(target).addClass('is-open');
    if (target == '.m-modal--video') {
      setTimeout(function () {
        PMB.Play();
      }, 400);
    } else {
      if ($('.video-js').hasClass('vjs-playing')) {
        PMB.Stop();
      }
    }
  });
  $('.js-modal_close').on('click', function () {
    var closeTarget = $(this).parents('.m-modal');
    $(closeTarget).removeClass('is-open');
    if ($('.video-js').hasClass('vjs-playing')) {
      PMB.Stop();
    }
  });
  $('.js-click').on('click', function () {
    $(this).addClass('is-active').delay(250).queue(function (next) {
      $(this).removeClass('is-active');
      next();
    });
  });
  $(window).on('load', function () {
    $('.l-wrapper').addClass('is-load');
  });
  $(window).on('load resize', function () {
    var wW = $(window).width();
    var wH = Math.min(screen.height, screen.width);
    if (wW <= 860) {
      $('html,body').css({
        'min-height': wH + 'px'
      });
      $('.l-main_in').css({
        'width': wH * 1.7786 + 'px',
        'min-width': wH * 1.7786 + 'px'
      });
    } else {
      $('html,body').css({
        'min-height': '100%'
      });
      $('.l-main_in').css({
        'width': '233.33vh',
        'min-width': '0'
      });
    }
  });
})();