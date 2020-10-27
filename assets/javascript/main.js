const game = () => {
    let bestOf = false
    let round = 0
    let pScore = 0
    let cScore = 0
    const computerOptions = ['rock', 'paper', 'scissors'] // Computer options   


    // Start the game
    const startGame = () => {

        const playButton = document.querySelector('#button-submit')

        playButton.addEventListener('click', () => {
            bestOf = document.querySelector('#input-bestof').value
            bestOf.length === 0 ? bestOf = 3 : bestOf = bestOf

            document.querySelector('.start-menu').style.transition = 'height 0.7s ease, marginTop 2s'
            document.querySelector('#button-submit').style.display = 'none'
            document.querySelector('.start-menu-options').style.display = 'none'
            document.querySelector('.score-tracker').style.display = 'grid'
            document.querySelector('.title').innerHTML = `ROUND 1`
            
            setTimeout(() => {
                document.querySelector('.start-menu').style.height = '20rem'                
            }, 300)

            setTimeout(() => {
                document.querySelector('.start-menu').style.marginTop = '3vh'

            }, 1200)

            setTimeout(() => {
                document.querySelector('#game').style.display = 'grid'
            }, 1700)
        })
    }
    
    // Plays a round
    const playRound = () => {
        const hands = document.querySelectorAll('.hands img')
        const handOptions = document.querySelectorAll('.hand-options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        
        hands.forEach(hand => { // Resets  shake hand animation
            hand.addEventListener('animationend', function() {
                this.style.animation = ''
            })
        })

        handOptions.forEach(option => {
            option.addEventListener('click', function() {
                const playerChoice = this.textContent.toLowerCase() // Player choice
                const computerChoice = computerOptions[Math.floor(Math.random() * 3)] // Computer choice

                // Delays winner and image update for animation
                setTimeout(() => {
                    // Finds the winner
                    compareHands(playerChoice, computerChoice)
                    
                    // Updates hand images
                    playerHand.src = `./assets/media/${this.textContent}.png`
                    computerHand.src = `./assets/media/${computerChoice}.png`

                    // Updats the scoreboard
                    updateScoreboard()
                }, 1500)

                // Hand shake animation
                playerHand.style.animation = 'shakePlayer 1.5s ease'
                computerHand.style.animation = 'shakeComputer 1.5s ease'
            })
            })
        }

    // Compares the player and computer choices
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')
        
        // Decreases ties. If tie, reroll. If tie again, returns tie.   
        if (playerChoice === computerChoice) {
            let secondGuess = computerOptions[Math.floor(Math.random() * 3)]
            if (secondGuess === computerChoice) {
                winner.innerHTML = `It's a tie!`
                round++
                return
            }else {
                return compareHands(playerChoice, secondGuess)
            }
        }
        if (playerChoice === 'rock') {
            if(computerChoice !== 'paper') {
                winner.innerHTML = `Player Wins!`
                pScore++
                round++
                return
            } else {
                winner.textContent = `Computer Wins!`
                cScore++
                round++
                return
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice !== 'scissors') {
                winner.innerHTML = `Player Wins!`
                pScore++
                round++
                return
            } else {
                winner.textContent = `Computer Wins!`
                cScore++
                round++
                return
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice !== 'rock') {
                winner.innerHTML = `Player Wins!`
                pScore++
                round++
                return
            } else {
                winner.textContent = `Computer Wins!`
                cScore++
                round++
                return
            }
        }
    }

    // Updates the scoreboard
    const updateScoreboard = () => {
        const playerScore = document.querySelector('#player-score')
        const computerScore = document.querySelector('#computer-score')
        const roundNumber = document.querySelector('.title')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
        roundNumber.textContent = `Round ${round}`

        // Lights up the colour of the higher score or when both scores are equal but higher than 0
        pScore >= cScore && pScore > 0 ? playerScore.style.color = '#5F39E8' : playerScore.style.color = '#0C2339'
        cScore >= pScore && cScore > 0 ? computerScore.style.color = '#5F39E8' : computerScore.style.color = '#0C2339'

        // If score is equal to bestOf, alert the player and restart the game.
        setTimeout(() => {
            if (pScore == bestOf) {
                return alert(`You won ${pScore}:${cScore}`) ? window.location.reload() : window.location.reload()
            }
            if (cScore == bestOf) {
                return alert(`The Computer won ${cScore}:${pScore}`) ? window.location.reload() : window.location.reload()
            } 
        }, 500)
    }

    startGame()
    playRound()
}

game()