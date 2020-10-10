
//global Definitions
let turn = false; //keeps track if it's player 1's turn or player 2's 
let boardState = []; //an array that keeps track of the users inputs for logic tests 
let turnsTaken = 0; //for cats game test
let gameOver = false; //to prevent inputs after game is over

/**************************************************************
 * Using the event object from the onclick we are able to edit 
 * the div that was clicked. A few checks happen here.
 **************************************************************/
let addInput = (event) =>{ 
  console.log(event);
    if (turn === false){ //is it player 1's turn?
        //check to see if div can be edited
        if (event.target.innerHTML === "" && gameOver === false){
            event.target.innerHTML = 'X'; //update board 
            turnsTaken++; //increment the number of turns taken 
        }
        turn = true; //switch turn to player 2
        gameLogic(); //check for winner 
        boardState = []; //reset boardState 
    }
    else{ //is it player 2's turn?
        //check to see if div can be edited
        if (event.target.innerHTML === "" && gameOver === false){  
            event.target.innerHTML = '0'; //update board 
            turnsTaken++; //increment the number of turns taken 
        } 
        turn = false; //switch turn to player 1
        gameLogic(); //check for winner 
        boardState = []; //reset boardState
    }
}

/**************************************************************
 * game logic updates the board state based on the current HTML.
 * gameLogic then check every combination of ways that either 
 * "X"s or "0"s can win. If a test passes then the bool that 
 * represents the player switches to true. If this is the case,
 * gameOver also switches to true
 **************************************************************/
let gameLogic = () => {
    document.querySelectorAll(".box").forEach(element => {
        boardState.push(element.innerHTML);
    });
    
    //bools that represents the two players 
    let xWins = false;
    let oWins = false;

    //if X wins 
    if (boardState[0] === 'X' && boardState[1] === 'X' && boardState[2] === 'X'){
        xWins = true;
    }
    else if (boardState[3] === 'X' && boardState[4] === 'X' && boardState[5] === 'X'){
        xWins = true;
    }
    else if (boardState[6] === 'X' && boardState[7] === 'X' && boardState[8] === 'X'){
        xWins = true;
    }
    else if (boardState[0] === 'X' && boardState[3] === 'X' && boardState[6] === 'X'){
        xWins = true;
    }
    else if (boardState[1] === 'X' && boardState[4] === 'X' && boardState[7] === 'X'){
        xWins = true;
    }
    else if (boardState[2] === 'X' && boardState[5] === 'X' && boardState[8] === 'X'){
        xWins = true;
    }
    else if (boardState[0] === 'X' && boardState[4] === 'X' && boardState[8] === 'X'){
        xWins = true;
    }
    else if (boardState[2] === 'X' && boardState[4] === 'X' && boardState[6] === 'X'){
        xWins = true;
    }
    //if 0 wins 
    else if (boardState[0] === '0' && boardState[1] === '0' && boardState[2] === '0'){
        oWins = true;
    }
    else if (boardState[3] === '0' && boardState[4] === '0' && boardState[5] === '0'){
        oWins = true;
    }
    else if (boardState[6] === '0' && boardState[7] === '0' && boardState[8] === '0'){
        oWins = true;
    }
    else if (boardState[0] === '0' && boardState[3] === '0' && boardState[6] === '0'){
        oWins = true;
    }
    else if (boardState[1] === '0' && boardState[4] === '0' && boardState[7] === '0'){
        oWins = true;
    }
    else if (boardState[2] === '0' && boardState[5] === '0' && boardState[8] === '0'){
        oWins = true;
    }
    else if (boardState[0] === '0' && boardState[4] === '0' && boardState[8] === '0'){
        oWins = true;
    }
    else if (boardState[2] === '0' && boardState[4] === '0' && boardState[6] === '0'){
        oWins = true;
    }

    //display winner
    if (xWins === true){
        document.getElementById("winLose").innerHTML = "Player 1 Wins!"
        gameOver = true;
    } 
    else if (oWins === true){
        document.getElementById("winLose").innerHTML = "Player 2 Wins!"
        gameOver = true;
    }
    else if (turnsTaken === 9){
        document.getElementById("winLose").innerHTML = "Cats Game"
        gameOver = true;
    } 
} 

/**************************************************************
 * Resets everything as if the page was reset 
 **************************************************************/
let reset = () => {
    document.querySelectorAll(".box").forEach(element => {
        element.innerHTML = "";
        turn = false; 
        boardState = [];
        document.getElementById("winLose").innerHTML = "";
        turnsTaken = 0; 
        gameOver = false;
    });
}

/**************************************************************
 * event listeners 
 **************************************************************/
document.querySelector(".board").onclick = addInput;
document.getElementById("reset").onclick = reset;