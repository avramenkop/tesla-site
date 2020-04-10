$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true,
    });

    $('.header-btn').on('click', function() {
        $('.nav').addClass('active');
    })

    $('.nav-btn').on('click', function() {
        $('.nav').removeClass('active');
    })

});