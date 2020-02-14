jQuery.extend( jQuery.easing,{
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
});

$(window).on('load', function() {

  // var quer = location.search;
  // if(quer){
  //   quer = quer.replace('?','.');
  //   var targetY = $(quer).offset().top;
  //   $('html, body').animate({
  //     scrollTop: targetY - 20
  //   }, { duration: 1500, easing: 'easeOutQuart'});
  // }

  // loaded
  $('body').animate({"opacity": "1"}, "800", "easeOutQuart");
  $('html, .bg, .toparea_visual').queue(function() { $(this).addClass('load').dequeue(); });
  $('.toparea').delay(500).queue(function() { $(this).addClass('load').dequeue(); });
});



$(function(){
  $(".btn_top").click(function(){
    $("html,body").stop().animate({scrollTop:0}, { duration: 1500, easing: 'easeOutQuart'})
  })


  var winw = $(window).width();
  var winh = $(window).height();
  $(".about").css({'margin-top': winh + 'px'});

  $(window).scroll(function () {
    if ($(this).scrollTop() < 100) {
       $(".toparea").fadeIn();
    } else {
        $(".toparea").fadeOut();
    }
  });

  if (winw < 768) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".bg_cont").fadeIn();
      } else {
        $(".bg_cont").fadeOut();
      }
    });

  }


});


// $(window).on('load resize', function () {
//   var w = $(window).width();
//   $('.nav_list li').on('click', function () {
//     var target = $(this).attr('data-link');
//     var position = $(target).offset().top;
//     $('html, body').stop(true).animate({
//       scrollTop: position - 20
//     }, { duration: 1000, easing: 'easeOutQuart'})

//     var href = $(this).attr('data-link');
//     var href02 = href.replace('.','');
//     var path = location.pathname;
//     window.history.pushState(null, null, path + '?' + href02);
//   });
// });

var SEM_fadein = new SCROLL_EFFECT_MODULE({
  elem               : '.effect_item',
  displayRatio       : 0.8,
  displayReverse     : true,
  firstElem          : '.effect_item--first',
  firstElemDelayTime : 300,
  firstDelayTime     : 300,
  loadDelayTime      : 0,
  addClassNameActive : 'active'
});


if(navigator.userAgent.match(/(msie|MSIE) 10/i) || navigator.userAgent.match(/(T|t)rident\/7\./) || navigator.userAgent.match(/Edge\/\d+\.\d+/)) {
  $('body').on("mousewheel", function () {
    event.preventDefault();
    var wd = event.wheelDelta;
    var csp = window.pageYOffset;
    window.scrollTo(0, csp - wd);
  });
}