const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



rock.addEventListener('click', () =>{
    const getPlayerChoice = 'rock';
    const getComputerChoice = computerChoice();
    const result = playGame(getPlayerChoice,getComputerChoice)
    if(result === 'won'){
        getPoint(scoreLeft);
        declareWinner(getPlayerChoice,getComputerChoice,'Player ');
    }
    else if(result === 'lost'){
        getPoint(scoreRight);
        declareWinner(getPlayerChoice,getComputerChoice,'Computer ');
    }
    else if(result === 'draw'){
        draw(getPlayerChoice,getComputerChoice);
    }
})

paper.addEventListener('click', () =>{
    const getPlayerChoice = 'paper';
    const getComputerChoice = computerChoice();
    const result = playGame(getPlayerChoice,getComputerChoice)
    if(result === 'won'){
        getPoint(scoreLeft);
        declareWinner(getPlayerChoice,getComputerChoice,'Player ');

    }
    else if(result === 'lost'){
        getPoint(scoreRight);
        declareWinner(getPlayerChoice,getComputerChoice,'Computer ');

    }
    else if(result === 'draw'){
        draw(getPlayerChoice,getComputerChoice);
    }

})

scissors.addEventListener('click', () =>{
    const getPlayerChoice = 'scissors';
    const getComputerChoice = computerChoice();
    const result = playGame(getPlayerChoice,getComputerChoice)
    if(result === 'won'){
        getPoint(scoreLeft);
        declareWinner(getPlayerChoice,getComputerChoice,'Player ');

    }
    else if(result === 'lost'){
        getPoint(scoreRight);
        declareWinner(getPlayerChoice,getComputerChoice,'Computer ');

    }
    else if(result === 'draw'){
        draw(getPlayerChoice,getComputerChoice);
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
    winner.textContent = winner.textContent + '✰'
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

//announcer
const announcer = document.querySelector('.announcer')
function declareWinner(getPlayerChoice,getComputerChoice,winner){
    announcer.textContent = getPlayerChoice.toUpperCase() + ' vs ' + getComputerChoice.toUpperCase()+' => '+ winner + 'Wins !';

}

function draw(getPlayerChoice,getComputerChoice){
    announcer.textContent = getPlayerChoice.toUpperCase() + ' vs ' + getComputerChoice.toUpperCase()+ ' =>  it is a '+ 'DRAW !';
}

