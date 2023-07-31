const swiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,

  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
    },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 32,
      slidesPerView: 3,
    },
  },

});