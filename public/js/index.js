var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) { return };
    if (st > lastScrollTop && st > navbarHeight) {
        $('nav').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up');
        }
    }
    lastScrollTop = st;
}

$("#letsride").click(function() {
    $('html').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#home-btn").click(function() {
    $('html').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

$("#about-btn").click(function() {
    $('html').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#experience-btn").click(function() {
    $('html').animate({
        scrollTop: $("#experience").offset().top},
        'slow');
});

$("#projects-btn").click(function() {
    $('html').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
});

$("#contact-btn").click(function() {
    $('html').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});