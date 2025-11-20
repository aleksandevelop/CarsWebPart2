let swiper1 = new Swiper('.swiper-container', {
  loop: true,  // Зацикливаем слайды
  // navigation: {
  //   nextEl: '.swiper-button-next',  // Кнопка "следующий"
  //   prevEl: '.swiper-button-prev',  // Кнопка "предыдущий"
  // },

  autoplay: {
    delay: 3000,  // Автоматический переход через 2.5 сек
    // disableOnInteraction: false,  // Автоплей не остановится при взаимодействии
  },

  allowTouchMove: false, // запрещает любое перемещение (касания и мышь)
  speed: 750,  // Скорость анимации
  slidesPerView: 1,  // Показать только один слайд
  spaceBetween: 10,  // Нет промежутков между слайдами
  effect: 'slide',  // Эффект перехода между слайдами
});