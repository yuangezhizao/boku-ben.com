var Name = [];
var Img = [];
$('.swiper-wrapper .swiper-slide').each(function (i) {
  var thumbName = $(this).attr('data-name')
  Name.push(thumbName);
  var thumbImg = $(this).attr('data-chara')
  Img.push(thumbImg);
});
var CharaSlide = new Swiper('.swiper-container', {
  spaceBetween: 0,
  autoHeight: true,
  slidesPerView: 1,
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    bulletClass: 'swiper-pagination-thumb',
    bulletActiveClass: 'swiper-pagination-thumb-active',
    el: '.slide_pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="hover_bounce ' + className + '"><p class="thumb_img"><img src="../assets/img/chara/img_tmb_' + Img[index] + '.png" alt="' + Name[index] + '"></p><p class="thumb_name c-color_shadow">' + Name[index] + '</p></div>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$(window).on('load', function () {
  var target = location.hash.replace('#', '.');
  var slideNum = $('.swiper-wrapper').find(target).attr('data-slide');
  if (location.hash.length) {
    CharaSlide.slideTo(slideNum);
  }
});
$('.swiper-pagination-thumb').on('click',function(){
  $('html,body').animate({
    scrollTop:$('.swiper-container').offset().top
  }, 750, 'easeInOutSine');
});
