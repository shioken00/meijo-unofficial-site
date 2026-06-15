$(function () {
    $('.toggle-menu-button').append('<span></span>');

    $('.toggle-menu-button').on('click', function () {
        $('body').toggleClass('menu-open');
    });

    $('.site-menu a').on('click', function () {
        $('body').removeClass('menu-open');
    });
});
