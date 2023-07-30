const swiper = new Swiper('.yachts-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    },

  // Navigation arrows
  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    nextEl: '.yachts-next-btn',
    prevEl: '.yachts-prev-btn',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

});