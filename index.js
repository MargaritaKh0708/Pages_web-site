

// Slider 

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
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        700: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1000: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }})
