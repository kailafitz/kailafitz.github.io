const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {
        smooth: true,
    }
});

// Scroll update all pages

document.addEventListener('DOMContentLoaded', function () {

    function ScrollUpdateDelay() {
        setTimeout(function () { scroll.update(); }, 500);
    }

    ScrollUpdateDelay();
});