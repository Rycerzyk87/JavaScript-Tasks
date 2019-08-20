const gameResult = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0

}
const game = {
    playerChoice: "",
    computerChoice: "",
    playerChoiceHTML: ""
}
const selections = [...document.querySelectorAll('.select img')];


function playerSelect() {
    game.playerChoice = this.dataset.option
    // console.log(game.playerChoice);
    selections.forEach(select => select.style.boxShadow = '');
    this.style.boxShadow = '0 0 2px 4px brown';

}
function randomization() {
    return selections[Math.floor(Math.random() * 3)].dataset.option;
}
function checkResult(player, computer) {
    if (player === computer) {
        return "draw";
    } else if ((player === "papier" && computer === "kamień") || (player === "kamień" && computer === "nożyczki") || (player === "nożyczki" && computer === "papier")) {
        return "win"
    } else { return "loss" }
}
function startGame() {
    if (!game.playerChoice) return alert('Wybierz: Kamień, Papier lub Nożyce')
    game.computerChoice = randomization()
    // console.log(game.computerChoice);
    const gameResult = checkResult(game.playerChoice, game.computerChoice);
    console.log(gameResult);

}

selections.forEach(select => select.addEventListener('click', playerSelect))

document.querySelector('.start').addEventListener('click', startGame);