jQuery.extend( jQuery.easing,{
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
});

$(window).on('load', function() {
  // loaded
  $('body').animate({"opacity": "1"}, "2000", "easeOutQuart");
});

$(function(){

  // main_area size
  var winh = $(window).height();
  $('.main_area').css({height:winh});

  // modal
  $('.btn_star').on('click', function () {
    var target = $(this).attr('data-modal');
    var modalName = $(this).attr('data-modalname');
    $('.detail_wrap' + modalName).fadeIn(800);
    $(target).fadeIn(800);
  });

  $('.modal_close, .modal_back').on('click', function () {
    var openedModal = $(this).parents('.modal');
    $(openedModal).fadeOut(500);
    $('.detail_wrap').fadeOut(500);
    $('body,html').animate({
      scrollTop: 0
    }, 1000, 'easeOutQuart');
  });

  // opening
  $('.btn_start').on('click', function () {
    $('.opening, .comment_opening').fadeOut(100);
    $('.star_area, .comment_in').delay(100).fadeIn(1000);
  });

  // shootingStar
  var w_min = 0;
  var w_max = 110;
  var y_min = 0;
  var y_max = 50;
  setInterval(function(){
    var star_x = Math.floor( Math.random() * (w_max + 1 - w_min) ) + w_min ;
    var star_y = Math.floor( Math.random() * (y_max + 1 - y_min) ) + y_min ;
    $('.star_01').css({'top': star_y + '%' ,'left': star_x + '%'});
  },4900);

});