const verticalSwiper2 = new Swiper('.swiper-vertical2', {
  // Уникальные настройки для вертикального слайдера
  direction: 'vertical',
  slidesPerView: 4, // показывать 4 слайдов
  spaceBetween: 0,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  allowTouchMove: false, // запрещает любое перемещение (касания и мышь)
  // Отключаем свайп если не нужен
  simulateTouch: false, // или false если только авто-прокрутка


  slideClass: 'swiper-slide',
  wrapperClass: 'swiper-wrapper'

});