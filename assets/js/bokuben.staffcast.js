// コメントモーダル
var position = "position",name = "name",comment = "comment";
$('.staff_comment').click(function () {
  var $this = $(this);
  var st = $(window).scrollTop();
  var w = $(window).width();
  if (w <= 768) {
    $('.modal_content').css({
      top: st + 100 + 'px'
    }).stop();
  } else {
    $('.modal_content').css({
      top: st + 200 + 'px'
    }).stop();
  }
  $('.modal_content .content_comment').append('<ul class="deco_item"><li class="c-color_bg"></li><li class="c-color_bg"></li></ul><h3 class="comment_catch">COMMENT</h3><p class="comment_position">' + $this.data(position) + '</p><div class="comment_name">'+ $this.data(name) +'</div><p class="comment_text">' + $this.data(comment) + '</p>');
  var ua = window.navigator.userAgent.toLowerCase();
  if(w > 769) {
    if(ua.indexOf('safari')  !== -1 && ua.indexOf('chrome') === -1) {
      $('.l-modal.comment .modal_content .content_comment .comment_name p').css({
        'font-family': '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',
      });
    }
  }
  $('.l-modal.comment').fadeIn('400');
  $('.modal_bg,.modal_close').on('click', function () {
    $('.l-modal.comment').fadeOut('400', function () {
      $('.modal_content .content_comment').empty();
    });
  });
});