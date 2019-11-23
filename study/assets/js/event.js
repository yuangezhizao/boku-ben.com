var winh = $(window).height();
var winw = $(window).width();
jQuery.extend( jQuery.easing,{
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
});
$(function(){
  $('.scrBtn').on('click',function(){
    var target = $(this).attr('data-scr');
    $('html,body').animate({
      scrollTop:$(target).offset().top
    }, 1000, 'easeOutQuart');

    var path = location.pathname;
    var targetPath = target.replace('.','?');
    window.history.pushState(null, null, path + targetPath);
  });
      var quer = location.search;
  if(quer){
    quer = quer.replace('?','.');
    var targetY = $(quer).offset().top;
    if($(window).width()>768){
      $('html,body').animate({scrollTop: targetY - 30}, 500, 'easeOutQuart');
    }else{
      $('html,body').animate({scrollTop: targetY}, 500, 'easeOutQuart');
    }
  }
});