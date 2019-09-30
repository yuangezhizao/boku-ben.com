var winh = $(window).height();
var winw = $(window).width();

$(function(){
  $('.goods_item').find('img').click(function(){
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
