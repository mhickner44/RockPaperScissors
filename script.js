let userInput = null;
let gameOutput = null;
let userScore = 0;
let compScore = 0;
let draws = 0;
let gamesPlayed = 0;

///event listeners
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector('#scissors');

const resultsDiv = document.querySelector('#results');
const wins = document.querySelector('#userScore');
const losses = document.querySelector('#compScore');

const drawScore = document.querySelector('#drawScore');
const total = document.querySelector('#total');

const images = document.querySelectorAll(".option");
const all = document.querySelector('.container').childNodes;




window.addEventListener("load", (event) => {
    images.forEach(addMovement => {
        addMovement.classList.add("move");
    });
});

function getComputerGuess() {
    let rand = Math.floor(Math.random() * 3);

    return rand;
}


function setHumanGuess(userThrow) {
    if (userThrow == "rock") {
        userInput = 1;
    } else if (userThrow == "paper") {
        userInput = 2;

    } else {
        userInput = 0;
    }

}




function playRound(userThrow, computerThrow) {
    //0 scissors 1 rock 2 paper

    let winner;
    let userWin = "You won";
    let compWin = "The computer won";

    console.log('comp throw' + computerThrow);
    console.log('userthrow' + userInput);


    //decides if it was a draw 
    if (userThrow == computerThrow) {
        winner = "draw"
        return winner;
    }

    //ROCK
    if (userThrow == 0) {
        if (userThrow == 0 && computerThrow == 2) {
            winner = userWin;
        } else {
            winner = compWin;
        }

    }
    //PAPER
    else if (userThrow == 1) {
        if (userThrow == 1 && computerThrow == 0) {
            winner = userWin;
        } else {
            winner = compWin;
        }
    }
    //SCISSORS
    else {
        if (userThrow == 2 && computerThrow == 1) {
            winner = userWin;
        } else {
            winner = compWin;
        }
    }
    return winner;
}


function newGame() {
    userInput = null;
    gameOutput = null;
    userScore = 0;
    compScore = 0;
    draws = 0;
    gamesPlayed = 0;


    wins.textContent = "Wins: ";
    losses.textContent = "Losses: ";
    drawScore.textContent = "Draws: ";
    total.textContent = "Total: ";
    results.textContent = "";


    toggle(all);
}


//toggle elements display
function toggle(e) {

    e.forEach((item) => {
        if (item.classList == "toggle-content") {

            item.classList.add('isVisible');
        } else if (item.classList == "toggle-content isVisible") {

            item.classList.remove('isVisible');
        }
    });


}



function game() {


    setHumanGuess(this.id);

    gameOutput = playRound(userInput, getComputerGuess());
    if (gameOutput == "draw") {

        draws++;
        drawScore.textContent = "Draws " + draws;
        resultsDiv.textContent = "Draw!";
    } else {
        if (gameOutput == "You won") {
            userScore++;
            resultsDiv.textContent = "You won"
            wins.textContent = "Wins:" + userScore;
        } else {
            compScore++;
            resultsDiv.textContent = "The computer won";
            losses.textContent = "Losses:" + compScore;

        }

    }
    gamesPlayed++;
    total.textContent = "Total: " + gamesPlayed;

    if (userScore == 3 || compScore == 3) {

        toggle(all);
    }





}



rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

restartBtn.addEventListener('click', newGame);