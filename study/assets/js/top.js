var winh = $(window).height();
var winw = $(window).width();

$(function(){
    $('.top_banner_slide').slick({
        variableWidth: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 751,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            disableOnInteraction: true,
            effect: 'fade',
            speed: 800,
            autoplay: {
              delay: 8000,
              disableOnInteraction: true
            },
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
            },
            fadeEffect: {
                crossFade: true,
            },
        });
        var swiper;
    $('.main_area').addClass('load').delay(5000).queue(function() {  });

});