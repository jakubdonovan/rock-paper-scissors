let playerScore = 0
let computerScore = 0

// Computer choice logic
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

// Determine the winner
const getWinner = () => {
    const playerChoice = prompt(`Enter "Rock", "Paper", or "Scissors"`).toLowerCase()
    const computerChoice = getComputerChoice()
    

    if (playerChoice === computerChoice){
        return `It's a tie!`
    } else if (playerChoice === 'rock'){
        return computerChoice !== 'paper' ? `You won! rock beats ${computerChoice}!` : `You lose! ${computerChoice} beats rock!`
    } else if (playerChoice === 'paper') {
        return computerChoice !== 'scissors' ? `You won! paper beats ${computerChoice}!` : `You lose! ${computerChoice} beats paper!`
    } else if (playerChoice === 'scissors') {
        return computerChoice !== 'rock' ? `You won! scissors beats ${computerChoice}!` : `You lose! ${computerChoice} beats scissors!`
    } else {
        prompt(`Invalid entry. Enter "Rock", "Paper", or "Scissors`).toLowerCase()
    }
}

// Scoreboard
const scoreboard = () => {
    const winner = getWinner()
    if (winner.includes("You won!")) {
        playerScore++
    } 
    else if (winner.includes("You lose!")) {
        computerScore++
    }

    alert(`
        -------------------------------
        SCOREBOARD:
        -------------------------------
        Player: ${playerScore} | Computer: ${computerScore}
        
        
        ${winner}
        `)
}

// // Start the game
const playGame = () => {
    for (let i = 0; i < 5; i++){
        scoreboard()
    }
    alert(playerScore > computerScore ? `You won by a score of ${playerScore - computerScore}` : `You lost by a score of ${computerScore - playerScore}`)
}
