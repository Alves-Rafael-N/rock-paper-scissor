const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');




//
rock.addEventListener('click', () =>{
    const getPlayerChoice = 'rock';
    const getComputerChoice = computerChoice();
    if(playGame(getPlayerChoice,getComputerChoice) === 'win'){
        getPoint(scoreLeft);
    }
    else if(playGame(getPlayerChoice,getComputerChoice) === 'loss'){
        getPoint(scoreRight);
    }
   // alert(playGame(getPlayerChoice,getComputerChoice))
})

paper.addEventListener('click', () =>{
    const getPlayerChoice = 'paper';
    const getComputerChoice = computerChoice();
    if(playGame(getPlayerChoice,getComputerChoice) === 'win'){
        getPoint(scoreLeft);
    }
    else if(playGame(getPlayerChoice,getComputerChoice) === 'loss'){
        getPoint(scoreRight);
    }
   // alert(playGame(getPlayerChoice,getComputerChoice))
})

scissors.addEventListener('click', () =>{
    const getPlayerChoice = 'scissors';
    const getComputerChoice = computerChoice();
    if(playGame(getPlayerChoice,getComputerChoice) === 'win'){
        getPoint(scoreLeft);
    }
    else if(playGame(getPlayerChoice,getComputerChoice) === 'loss'){
        getPoint(scoreRight);
    }
    //alert(playGame(getPlayerChoice,getComputerChoice))
})

function computerChoice(){
    const getComputerChoice = Math.floor(Math.random()*3)+1;
    return getComputerChoice;
}
//





function playGame (getPlayerChoice,getComputerChoice){
    let winner = '';
    if(getPlayerChoice === 'rock'){
        if(getComputerChoice === 1){
            //winner = 'Player:rock  VS  Computer:rock, DRAWW!'
            winner = 'draw'
        }
        else if(getComputerChoice === 2){
           // winner = 'Player:rock  VS  Computer:Paper, You LOSE!'
            winner = 'loss'
        }
        else if(getComputerChoice ===3){
            //winner = 'Player:rock  VS  Computer:Scissors, You WIN!'
            winner = 'win'
        }
        else{
            winner = 'error';
        }
    }
    
    else if(getPlayerChoice === 'paper'){
        if(getComputerChoice === 2){
            //winner = 'Player:Paper  VS  Computer:Paper, DRAWW!'
            winner = 'draw'
        }
        else if(getComputerChoice === 3){
            //winner = 'Player:Paper  VS  Computer:Scissors, You LOSE!'
            winner = 'loss'
        }
        else if(getComputerChoice ===1){
            //winner = 'Player:Paper  VS  Computer:Rock, You WIN!'
            winner = 'win'
        }
        else{
            winner = 'error';
        }
    }

    else if(getPlayerChoice === 'scissors'){
        if(getComputerChoice === 3){
           // winner = 'Player:Scissors  VS  Computer:Scissors, DRAWW!'
            winner = 'draw'
        }
        else if(getComputerChoice === 1){
            //winner = 'Player:Scissors  VS  Computer:Rock, You LOSE!'
            winner = 'loss'
        }
        else if(getComputerChoice ===2){
           // winner = 'Player:Scissors  VS  Computer:Paper, You WIN!'
           winner = 'win'
        }
        else{
            winner = 'error';
        }
    }

    return winner;
}

//1 =rock
//2 =paper
//3 = scissors

//score logic
const scoreLeft = document.querySelector('.score-left');
const scoreRight = document.querySelector('.score-right');
let scoreLeftValue = 0;
let scoreRightValue = 0;


function getPoint(winner){
    winner.textContent = winner.textContent + '*'
    if(winner === scoreLeft){
        scoreLeftValue++
    }   
    else{
        scoreRightValue++
    }
    testWinner();
}

function testWinner(){
    if(scoreLeftValue >= 5){
        alert('you won')
    }
    else if(scoreRightValue >= 5){
        alert('you lost')
    }
}




