/*------------------------
Menu Dynamic
------------------------*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120){
            $("header").css('background-color', 'white');
            $("header").css('height', '60px');
        }

        else {
            $("header").css('background-color', 'transparent');
            $("header").css('height', '100px');
        }
    });
});

/*------------------------
Home Carousel
------------------------*/
$('.banner__carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});