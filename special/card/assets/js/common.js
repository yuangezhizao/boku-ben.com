(function () {

  $(window).on('load', function () {
    $('body').addClass("is-active");
    $('.l-main').addClass("is-active");
    $(".js-op-item").addClass("is-active");
  });

  // 動画モーダル
  if ('.l-modal.music'.length) {
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
})();