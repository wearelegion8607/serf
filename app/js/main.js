$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade : true,
        asNavFor : '.slider-dots',
        prevArrow : '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow : '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">'
    });
    $('.slider-dots').slick({
        slidesToShow : 4,
        slidesToScroll : 4,
        asNavFor : '.header__slider'

    });
    $('.serf__slider').slick({
        slidesToShow : 4,
        slidesToScroll : 1,
        prevArrow : '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow : '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">'
    });

  
});