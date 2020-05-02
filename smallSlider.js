let left = 0;

function sliderLeft() {
    let polosa = document.querySelector('.polosa');
    left -=200;
    if (left<-600) {
        left = 0
    }
    polosa.style.left = left + 'px';
}
function sliderRight() {
    let polosa = document.querySelector('.polosa');
    left +=200;
    if (left<600) {
        left = 0
    }
    polosa.style.left = left + 'px';
}

document.querySelector('.slider--left').onclick = sliderLeft;
document.querySelector('.slider--right').onclick = sliderRight;