$(function(){

    $('[class$=-slider]').hide();

    setTimeout(function(){
        $('.facade-slider').show().slick({
            infinite: true,
            lazyload: 'progressive',
            slidesToShow: 6,
            slidesToScroll: 1
        });
    }, 100);
    setTimeout(function(){
        $('.revetement-slider').show().slick({
            infinite: true,
            lazyload: 'progressive',
            slidesToShow: 6,
            slidesToScroll: 1
        });
    }, 100);
    setTimeout(function(){
        $('.peinture-slider').show().slick({
            infinite: true,
            lazyload: 'progressive',
            slidesToShow: 6,
            slidesToScroll: 1
        });
    }, 100);
    setTimeout(function(){
        $('.cloison-slider').show().slick({
            infinite: true,
            lazyload: 'progressive',
            slidesToShow: 6,
            slidesToScroll: 1
        });
    }, 100);
});