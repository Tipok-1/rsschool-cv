let s1 = new Swiper('.sw1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el:'.swiper-pagination',
        clickable:true
    },
    preloadImages:false,
    lazy:{
        loadOnTransitionStart:false,
        loadPrevNext:true
    },
    watchSlidesProgress:true,
    watchSlidesVisibility:true,
});