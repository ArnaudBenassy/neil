$(function(){
    $('[class$=-slider]').hide();
});

$(window).load(function() {

    $(".slider-loader").hide();

    $('.facade-slider').show().slick({
        infinite: true,
        lazyload: 'progressive',
        slidesToShow: 6,
        slidesToScroll: 1
    });
    $('.revetement-slider').show().slick({
        infinite: true,
        lazyload: 'progressive',
        slidesToShow: 6,
        slidesToScroll: 1
    });
    $('.peinture-slider').show().slick({
        infinite: true,
        lazyload: 'progressive',
        slidesToShow: 6,
        slidesToScroll: 1
    });
    $('.cloison-slider').show().slick({
        infinite: true,
        lazyload: 'progressive',
        slidesToShow: 6,
        slidesToScroll: 1
    });
});