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
    console.log(game.playerChoice);
    this.style.boxShadow = '0 0 0 4px brown'

}

selections.forEach(select => select.addEventListener('click', playerSelect))