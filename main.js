$(window).scroll(function () {
    parallax();
})

function parallax() {
    let wScroll = $(window).scrollTop();

    $('.para').css('background-position',
        'center ' + (wScroll * 0.5) + 'px')
}