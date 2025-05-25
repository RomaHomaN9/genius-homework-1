const swiper = new Swiper('.swiper', {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }
    },

    pagination: {
        el: '.swiper-pagination',
        balletClass: 'swiper-pagination-bullet',
        balletActiveClass: 'swiper-pagination-bullet-active'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
