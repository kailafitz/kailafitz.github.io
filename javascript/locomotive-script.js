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

const imagesLoaded = require("imagesloaded"); // import the library or can use cdn

/* update scroll (height) when all images are loaded */

imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});