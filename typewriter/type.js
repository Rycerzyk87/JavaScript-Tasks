const typeText = document.querySelector('.type');
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos tempore rem excepturi eius earum necessitatibus, maiores cum harum nam facilis quidem vitae quae itaque, at beatae. Exercitationem est minima non debitis saepe distinctio quo veritatis laudantium aperiam vitae aliquid accusantium incidunt accusamus nisi porro, totam doloribus obcaecati deserunt! Itaque voluptas quisquam aspernatur soluta.";

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

