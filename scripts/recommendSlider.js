const verticalSwiper = new Swiper('.swiper-vertical', {
  // Уникальные настройки для вертикального слайдера
  direction: 'vertical',
  slidesPerView: 5, // показывать 5 слайдов
  spaceBetween: 0,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
  },

  allowTouchMove: false, // запрещает любое перемещение (касания и мышь)


  slideClass: 'swiper-slide',
  wrapperClass: 'swiper-wrapper'

});