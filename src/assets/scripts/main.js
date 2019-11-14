function smoothScroll(toTarget, toHome, duration) {
    if (window.location.hash != '#/' && toHome) {
        window.location.hash = '#/';
        setTimeout(function () {
            $('body, html').animate({ scrollTop: $(toTarget).offset().top }, duration, 'easeOutQuad');
        }, 500);
    }
    else {
        $('body, html').animate({ scrollTop: $(toTarget).offset().top }, duration, 'easeOutQuad');
    }
};