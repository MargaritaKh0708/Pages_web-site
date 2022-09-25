

//* Article Slider 

let articleSlider = new Swiper('.article-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,

    //Lazy loader

    preloadImages: false,

    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlideProgress: true,
    watchSlideVisibility: true,

    // Hash navigation 
    hashNavigation: {
        watchState: true
    },

    // Keyboard navigation 
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    // Adaptive

    breakpoints: {
        // when window width is >= 320px
       0: {
            slidesPerView: 1,
        },
        // when window width is >= 700px
        600: {
            slidesPerView: 2,
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})


//* Trusted-block Slider 

let trustedSlider = new Swiper('.trusted-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,

    // Keyboard navigation 
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    // Adaptive
    breakpoints: {
        // when window width is >= 320px
        400: {
            slidesPerView: 1,
        },
        // when window width is >= 700px
        500: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})


// //* Vision-block Slider 

let visionSlider = new Swiper('.vision-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,

    // Keyboard navigation 
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})


