let userInput = null;
let results = null;
let userScore = 0;
let compScore = 0;
let draws=0;

///event listeneers
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector('.scissors');

const resultsDiv = document.querySelector('.results');
const wins = document.querySelector('.userScore');
const losses = document.querySelector('.compScore');
const final = document.querySelector('.final');
const drawScore = document.querySelector('.drawScore');



function getComputerGuess() {
    let rand = Math.floor(Math.random() * 3);

    return rand;
}


function setHumanGuess(userThrow) {

    //you have to input numbers 0 1 2  for now until the GUI version
    //take the input from the button press 
    //0 scissors 1 rock 2 paper
  

    // if(this.id){}
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
 
    console.log(computerThrow);
    console.log(userThrow);


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






function game() {
    let gamesPlayed = 0;
  
    setHumanGuess(this.classList.value);

    result = playRound(userInput, getComputerGuess());
    if (result == "draw") {
        // deducts a game so it plays 5 times if there are draws
        draws++;
       drawScore.textContent = "Draws "+ draws;
    } else {
        if (result == "You won") {
            userScore++;
            resultsDiv.textContent = "You won"
            wins.textContent = "Wins " + userScore;
        } else {
            compScore++;
            result = "The computer won";
            losses.textContent = "Losses " + compScore;

        }

    }
   gamesPlayed++;
   
    //string for the output
    if((userScore || compScore )== 5){
        final.textContent="GAME OVER"

    }




}
///////////




rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
