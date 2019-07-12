jQuery.extend( jQuery.easing,{
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
});

var winw = $(window).width();
var winh = $(window).height();
$(window).on('load', function() {
  $('body').animate({'opacity': '1'}, '100', 'easeOutQuart');
});

$(function(){
  $('.shop_list input').click(function () {
      $('.form_main').fadeIn(2000, 'easeOutQuart');

      var form_top = $('.form_main').offset().top;
      $('html,body').animate({ scrollTop : form_top }, { duration: '2000', easing: 'easeOutQuart' });
  });


  $('.shop_list').find('li .thumb').click(function(){
    var img = $(this).attr('data-image')
    
    $('#floatImage').show();
    $('#floatImage').find('.images').css({backgroundImage:'url('+ img +')'});
    $('#floatImage').velocity({opacity:1},300)
  })
  $('#floatImage').find('.wrap').click(function(){
    $('#floatImage').velocity({opacity:0},{
      duration:300,
      complete:function(){
        $('#floatImage').hide();
      }
    })
  })
});