$(function () {
    $(".toggle").on('click', function () {
        if ($(this).hasClass('close')) {
            $(this).removeClass('close');
            $(".info").animate({
                width: '400px'
            });
            $(".map").animate({marginRight:"400px"})
        } else {
            $(this).addClass('close');
            $(".info").animate({
                width: '0px'
            });
            $(".map").animate({marginRight:"0"})
        }
    });

});