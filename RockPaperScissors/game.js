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
    // console.log(player);
    // console.log(computer);

    if (player === computer) {
        return "draw";
    } else if ((player === "papier" && computer === "kamień") || (player === "kamień" && computer === "nożyczki") || (player === "nożyczki" && computer === "papier")) {
        return "win"
    } else { return "loss" }
}

function publishResult(player, computer, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="computer-choice"]').textContent = computer;
    document.querySelector('p.numbers span').textContent = ++gameResult.numbers;
    switch (result) {
        case "win":
            document.querySelector('p.wins span').textContent = ++gameResult.wins;
            document.querySelector('[data-summary="who-win"]').textContent = "WYGRAŁEŚ";
            break;
        case "loss":
            document.querySelector('p.losses span').textContent = ++gameResult.losses;
            document.querySelector('[data-summary="who-win"]').textContent = "Wygrał Komputer";
            break;
        case "draw":
            document.querySelector('p.draws span').textContent = ++gameResult.draws;
            document.querySelector('[data-summary="who-win"]').textContent = "Remis";
            break;

    }
}

function startGame() {
    if (!game.playerChoice) return alert('Wybierz: Kamień, Papier lub Nożyce')
    game.computerChoice = randomization()
    // console.log(game.computerChoice);
    const gameResult = checkResult(game.playerChoice, game.computerChoice);
    console.log(gameResult);
    publishResult(game.playerChoice, game.computerChoice, gameResult);

}

selections.forEach(select => select.addEventListener('click', playerSelect))

document.querySelector('.start').addEventListener('click', startGame);