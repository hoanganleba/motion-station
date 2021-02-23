if ($(window).width() <= 960) {
    $('main').removeClass('main-active');
    $('.sidebar').removeClass('sidebar-active');
};
$('#sidebar-button').click(function (e) {
    e.stopPropagation();
    $('main').css("transition", "0.5s ease-in-out");
    $('.sidebar').css("transition", "0.5s ease-in-out");
    if ($('main').hasClass('main-active') && $('.sidebar').hasClass('sidebar-active')) {
        $('main').removeClass('main-active');
        $('.sidebar').removeClass('sidebar-active');
    } else {
        $('main').addClass('main-active');
        $('.sidebar').addClass('sidebar-active');
    }
})
$('.sidebar').click(function (e) {
    e.stopPropagation();
});
$('.showmore-btn').click(function () {
    $('.showmore').toggleClass('d-none');
})
$('.btn-close').click(function (e) {
    e.stopPropagation();
    $('main').css("transition", "0.5s ease-in-out");
    $('.sidebar').css("transition", "0.5s ease-in-out");
    if ($('main').hasClass('main-active') && $('.sidebar').hasClass('sidebar-active')) {
        $('main').removeClass('main-active');
        $('.sidebar').removeClass('sidebar-active');
        $('#sidebar-button').removeClass('d-none');
    } else { return };
})
$(window).resize(function () {
    if ($(window).width() <= 960) {
        $('main').removeClass('main-active');
        $('.sidebar').removeClass('sidebar-active');
        $('main').css("transition", "0.5s ease-in-out");
        $('.sidebar').css("transition", "0.5s ease-in-out");
    };
});
$('.owl-carousel').owlCarousel({
    autoPlay: 1000,
    loop: true,
    mouseDrag: false,
    items: 1,
    animateOut: 'fadeOut'
});

