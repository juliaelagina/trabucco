let leftBig = 0;

function sliderLeftBig() {
    let polosa = document.querySelector('.polosaBig');
    leftBig -=449;
    if (leftBig<-1347) {
        leftBig = 0
    }
    polosa.style.left = leftBig + 'px';
}
function sliderRightBig() {
    let polosa = document.querySelector('.polosaBig');
    leftBig +=449;
    if (leftBig<1347) {
        leftBig = 0
    }
    polosa.style.left = leftBig + 'px';
}

document.querySelector('.slider--leftBig').onclick = sliderLeftBig;
document.querySelector('.slider--rightBig').onclick = sliderRightBig;