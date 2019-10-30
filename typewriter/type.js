const typeText = document.querySelector('.type');
const text = "Wow it's look like some kind of typewriter. It's look amazing. How it is even posible? Some kind of magic or what?! Wow it's look like some kind of typewriter. It's look amazing. How it is even posible? Some kind of magic or what?! ";

let indexText = 0;
const typewriter = () => {
    typeText.textContent += text[indexText];
    indexText++;
    (indexText === text.length) ? clearInterval(typeInterval) : null;
}
// const typewriter = () => {
//     typeText.textContent += [indexText];
//     indexText++;
//     (indexText === text.length) ? clearInterval(typeInterval) : null;
// }

const typeInterval = setInterval(typewriter, 100);

