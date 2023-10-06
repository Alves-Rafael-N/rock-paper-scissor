const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const announcer = document.querySelector('.announcer')



rock.addEventListener('click', () =>{
    const getPlayerChoice = 'rock';
    const getComputerChoice = computerChoice();
    const result = playGame(getPlayerChoice,getComputerChoice)
    declareChoices(getPlayerChoice,getComputerChoice)
    if(result === 'won'){
        getPoint(scoreLeft);
        declareWinner('Player');
        announcer.style["background-color"] = "green" 
    }
    else if(result === 'lost'){
        getPoint(scoreRight);
        declareWinner('Computer');    
        announcer.style["background-color"] = "red" 
    }
    else if(result === 'draw'){
        draw(getPlayerChoice,getComputerChoice);
        announcer.style["background-color"] = "yellow" 

    }
})

paper.addEventListener('click', () =>{
    const getPlayerChoice = 'paper';
    const getComputerChoice = computerChoice();
    const result = playGame(getPlayerChoice,getComputerChoice)
    declareChoices(getPlayerChoice,getComputerChoice)
    if(result === 'won'){
        getPoint(scoreLeft);
        declareWinner('Player');
        announcer.style["background-color"] = "green" 
    }
    else if(result === 'lost'){
        getPoint(scoreRight);
        declareWinner('Computer');    
        announcer.style["background-color"] = "red" 
    }
    else if(result === 'draw'){
        draw(getPlayerChoice,getComputerChoice);
        announcer.style["background-color"] = "yellow" 

    }

})

scissors.addEventListener('click', () =>{
    const getPlayerChoice = 'scissors';
    const getComputerChoice = computerChoice();
    const result = playGame(getPlayerChoice,getComputerChoice)
    declareChoices(getPlayerChoice,getComputerChoice)
    if(result === 'won'){
        getPoint(scoreLeft);
        declareWinner('Player');
        announcer.style["background-color"] = "green" 
    }
    else if(result === 'lost'){
        getPoint(scoreRight);
        declareWinner('Computer');    
        announcer.style["background-color"] = "red" 
    }
    else if(result === 'draw'){
        draw(getPlayerChoice,getComputerChoice);
        announcer.style["background-color"] = "yellow" 

    }
})

function computerChoice(){
    let getComputerChoice = '';
    const randomValue = Math.floor(Math.random()*3)+1;
        if(randomValue === 1){
            getComputerChoice = 'rock'
        }
        else if(randomValue === 2){
            getComputerChoice = 'paper'
        }
        else{
            getComputerChoice = 'scissors'
        }
    return getComputerChoice;
}






function playGame (getPlayerChoice,getComputerChoice){
    let winner = '';
    if(getPlayerChoice === 'rock'){
        if(getComputerChoice === 'rock'){
            //winner = 'Player:rock  VS  Computer:rock, DRAWW!'
            winner = 'draw'
        }
        else if(getComputerChoice === 'paper'){
           // winner = 'Player:rock  VS  Computer:Paper, You LOSE!'
            winner = 'lost'
        }
        else if(getComputerChoice === 'scissors'){
            //winner = 'Player:rock  VS  Computer:Scissors, You WIN!'
            winner = 'won'
        }
        else{
            winner = 'error';
        }
    }
    
    else if(getPlayerChoice === 'paper'){
        if(getComputerChoice === 'paper'){
            //winner = 'Player:Paper  VS  Computer:Paper, DRAWW!'
            winner = 'draw'
        }
        else if(getComputerChoice === 'scissors'){
            //winner = 'Player:Paper  VS  Computer:Scissors, You LOSE!'
            winner = 'lost'
        }
        else if(getComputerChoice === 'rock'){
            //winner = 'Player:Paper  VS  Computer:Rock, You WIN!'
            winner = 'won'
        }
        else{
            winner = 'error';
        }
    }

    else if(getPlayerChoice === 'scissors'){
        if(getComputerChoice === 'scissors'){
           // winner = 'Player:Scissors  VS  Computer:Scissors, DRAWW!'
            winner = 'draw'
        }
        else if(getComputerChoice === 'rock'){
            //winner = 'Player:Scissors  VS  Computer:Rock, You LOSE!'
            winner = 'lost'
        }
        else if(getComputerChoice ==='paper'){
           // winner = 'Player:Scissors  VS  Computer:Paper, You WIN!'
           winner = 'won'
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
    winner.textContent = winner.textContent + ' ✰'
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
        alert('You won!' + '\nPress the button to play again')
        location.reload();
    }
    else if(scoreRightValue >= 5){
        alert('You lost!'+ '\nPress the button to play again')
        location.reload();
    }
}

const playerHand = document.querySelector('.player-hand')
const computerHand = document.querySelector('.computer-hand')

function declareChoices(getPlayerChoice,getComputerChoice){
    playerHand.textContent = 'You choose: '+getPlayerChoice.toUpperCase();
    if(getPlayerChoice === 'rock'){
        playerHand.style["color"] = "#BC9E82"
    }
    else if(getPlayerChoice ==='paper'){
        playerHand.style["color"] = "#F9FBFF"

    }
    else{
        playerHand.style["color"] = "silver"

    }
    computerHand.textContent = 'Computer choose: ' +getComputerChoice.toUpperCase();
    if(getComputerChoice === 'rock'){
        computerHand.style["color"] = "#BC9E82"
    }
    else if(getComputerChoice ==='paper'){
        computerHand.style["color"] = "#F9FBFF"

    }
    else{
        computerHand.style["color"] = "silver"

    }
}


function declareWinner(winner){
    announcer.textContent = winner + ' Wins !';
}

function draw(){
    announcer.textContent = 'Draw !'
}