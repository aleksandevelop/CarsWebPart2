
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
const slider = document.querySelector('.noUiSlider2');

// 3. Инициализируешь
noUiSlider.create(slider, {
    start: [1950, 2015],
    connect: true,
    range: {
        min: 1950,
        max: 2025
    },
    step: 1
});

// 4. Вешаешь обработчик
slider.noUiSlider.on('update', function(values) {
    console.log('Выбрано:', values[0], '-', values[1]);
    // Делаешь что нужно с годами
});