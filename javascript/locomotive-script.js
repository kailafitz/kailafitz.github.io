
let scrollContainer = document.querySelector("[data-scroll-container]");

const scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    tablet: {
        breakpoint: 768,
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

/* update scroll (height) when all images are loaded */

imagesLoaded(scrollContainer, { background: true }, function () {
    scroll.update();
});