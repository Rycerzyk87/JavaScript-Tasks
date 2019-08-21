const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const score = document.querySelector('.time div');
// console.log(btnReset, btnTime);

let time = 0;
active = false;
let idI;

const start = () => {
    time++;
    score.textContent = (time / 100).toFixed(2);
}
const timer = () => {
    if (!active) {
        active = !active
        btnTime.textContent = "PAUZA";
        idI = setInterval(start, 10);
    } else {
        active = !active
        btnTime.textContent = "START";
        clearInterval(idI);
    };
}
const reset = () => {
    time = 0;
    score.textContent = '---';
}
btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);