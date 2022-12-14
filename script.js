


function getComputerGuess() {
    let rand = Math.floor(Math.random() * 3);

    return rand;
}


function getHumanGuess() {

    //you have to input numbers 0 1 2  for now until the GUI version
    let userInput = prompt('Enter "scissors" "Rock" or "Paper"');
    return userInput;

}


function playRound(userThrow, computerThrow) {
    //0 scissors 1 rock 2 paper

    let winner;
    let userWin = "You won";
    let compWin = "The computer won";
    console.log(computerThrow);
   
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
    let userScore = 0;
    let compScore = 0;

    for (let i = 0; i <= 4; i++) {
        result = playRound(getHumanGuess(), getComputerGuess());
        if (result == "draw") {
            // deducts a game so it plays 5 times if there are draws
            i--;
        } else {
            if (result == "You won") {
                userScore++;
            } else {
                compScore++;

            }

        }
        gamesPlayed++;
    }
//calculate winner
if(userScore>compScore){
    result= "You won " 

}else{
    result="The computer won"
}

//string for the output
    result = result + " and you played " + gamesPlayed + " games." + "You won " + userScore + " of them." +
        "The computer won " + compScore + " of them.";

    return result;
}
///////////


console.log(game());