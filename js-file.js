const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



//
rock.addEventListener('click', () =>{
    const getPlayerChoice = 'rock';
    const getComputerChoice = computerChoice();
    
    console.log(playGame(getPlayerChoice,getComputerChoice))

})

paper.addEventListener('click', () =>{
    const getPlayerChoice = 'paper';
    const getComputerChoice = computerChoice();
    
    console.log(playGame(getPlayerChoice,getComputerChoice))

})

scissors.addEventListener('click', () =>{
    const getPlayerChoice = 'scissors';
    const getComputerChoice = computerChoice();
    
    console.log(playGame(getPlayerChoice,getComputerChoice))

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
            winner = 'Player:rock  VS  Computer:rock, DRAWW!'
        }
        else if(getComputerChoice === 2){
            winner = 'Player:rock  VS  Computer:Paper, You LOSE!'
        }
        else if(getComputerChoice ===3){
            winner = 'Player:rock  VS  Computer:Scissors, You WIN!'
        }
        else{
            winner = 'error';
        }
    }
    
    else if(getPlayerChoice === 'paper'){
        if(getComputerChoice === 2){
            winner = 'Player:Paper  VS  Computer:Paper, DRAWW!'
        }
        else if(getComputerChoice === 3){
            winner = 'Player:Paper  VS  Computer:Scissors, You LOSE!'
        }
        else if(getComputerChoice ===1){
            winner = 'Player:Paper  VS  Computer:Rock, You WIN!'
        }
        else{
            winner = 'error';
        }
    }

    else if(getPlayerChoice === 'scissors'){
        if(getComputerChoice === 3){
            winner = 'Player:Scissors  VS  Computer:Scissors, DRAWW!'
        }
        else if(getComputerChoice === 1){
            winner = 'Player:Scissors  VS  Computer:Rock, You LOSE!'
        }
        else if(getComputerChoice ===2){
            winner = 'Player:Scissors  VS  Computer:Paper, You WIN!'
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