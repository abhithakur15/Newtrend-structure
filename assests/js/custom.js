$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});