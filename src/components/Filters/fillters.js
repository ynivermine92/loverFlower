const lowerSlider = document.querySelector('#lower');
const upperSlider = document.querySelector('#upper');
const sliderTrack = document.querySelector('.slider-track');

const min = parseInt(lowerSlider.min);
const max = parseInt(upperSlider.max);

function updateTrack() {
    const lower = parseInt(lowerSlider.value);
    const upper = parseInt(upperSlider.value);
    
    const range = max - min;

    const left = ((lower - min) / range) * 100;
    const right = ((upper - min) / range) * 100;

    sliderTrack.style.left = left + '%';
    sliderTrack.style.width = (right - left) + '%';

    document.querySelector('#one').value = lower;
    document.querySelector('#two').value = upper;
}


 /* что бы ползунки наежяли друг на друга  заменить 4 на 0 */
lowerSlider.addEventListener('input', () => {
    if (parseInt(lowerSlider.value) > parseInt(upperSlider.value) - 4) {
        lowerSlider.value = parseInt(upperSlider.value) - 4;
    }
    updateTrack();
});

upperSlider.addEventListener('input', () => {
    if (parseInt(upperSlider.value) < parseInt(lowerSlider.value) + 4) {
        upperSlider.value = parseInt(lowerSlider.value) + 4;
    }
    updateTrack();
});

updateTrack();
