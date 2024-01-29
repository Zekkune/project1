//query selectors & globals

const guessSubmit = document.querySelector('#guessSubmit')
const invalidGuess = document.querySelector('#invalidGuess')
const previousGuessesText = document.querySelector('#previousGuessesText')
const playAgainBtn = document.querySelector('#playAgainBtn')
const endScreen = document.querySelector('#endScreen')
const endText = document.querySelector('#endText')
const livesText = document.querySelector('#livesText')
const inputBar = document.querySelector('#guessInput')

let consecutiveLoss = 0



//game logic



//lives 
let lives = 3
livesText.innerText = 'Lives: ❌ ❌ ❌'

//the number player needs to guess
function randomNumber () {
    return Math.floor(Math.random() * 11);
} 
let number = randomNumber()
console.log(number)

//checks the guess value and displays a hint
function checkGuess() {

    let guessInput = document.querySelector('#guessInput').value
    let guess = parseInt(guessInput, 10);
    if (guess > 10 || guess < 0) {
        //number is too big or small
        invalidGuess.innerText = 'pick a number from 0 to 10!'
     } else if (guess === number) {
        //player guess was correct
        endScreen.style.display = 'flex'
        endText.innerText = `you got it! the number was ${number}`
        console.log(guess)
        playAgainBtn.style.display = 'flex'
        consecutiveLoss = 0
    } else if (guess > number && guess - 1 === number || guess - 2 === number ) {
        //player guess was too high
        invalidGuess.innerText = 'your guess was too high, try again with a smaller number 😎👍'
        subtractLife()
    } else if (guess < number && guess + 1 === number || guess + 2 === number ) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was too low, guess again with a larger number 😎👍'
        subtractLife()
    } else if (guess - 3 >= number) {
        //player guess was way too high
        invalidGuess.innerText = 'your guess was way too high! try again with a much smaller number 😎👍'
        subtractLife()
    } else if (guess + 3 <= number) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was way too low! guess again with a much larger number 😎👍'
        subtractLife()
    } else {
          for (let i = 0; i > previousGuesses.length; i++) {
            if (guess === previousGuesses[i]) {
                invalidGuess.innerText = 'you guessed that number already, pick another'
            }
        }
    }
}



//function to subtract lives from player
function subtractLife () {

    lives = lives - 1
    
    if (lives === 3) {
        livesText.innerText = 'Lives: ❌ ❌ ❌'
    } else if (lives === 2) {
        livesText.innerText = 'Lives: ❌ ❌ '
    } else if (lives === 1) {
        livesText.innerText = 'Lives: ❌ '
    }
}

//function to check player lives
function checkLives () {
    if (lives === 0) {
        endScreen.style.display = 'flex'
        endText.innerText = `You ran out of lives... the number was ${number}, try again!`
        consecutiveLoss = consecutiveLoss + 1
        playAgainBtn.style.display = 'flex'
        consecutiveLosses()
    
    } 
}
//easter egg code, I dabble in the arts of trolling...
function consecutiveLosses () {
    if (consecutiveLoss === 3) {
        endScreen.style.display = 'flex'
        endText.innerText = `3 L's in a row... the number was ${number}, 4th times a charm! try again.`
    } else if (consecutiveLoss > 3 && consecutiveLoss < 5) {
        endScreen.style.display = 'flex'
        endText.innerText = `4th time was NOT the charm 💀... the number was ${number}, try again... `
    } else if (consecutiveLoss >= 5) {
        endScreen.style.display = 'flex'
        endText.innerText = `${consecutiveLoss} L's in a row is WILD 💀💀💀... the number was ${number}, try again... `
    }
}

//array of guessed numbers to let player know if repeat guesses
let previousGuesses = []



guessSubmit.addEventListener('click', () => {
    
    console.log(`this many lives: ${lives}`)

    //gets player guess and converts it to a number 
    let guessInput = document.querySelector('#guessInput').value
    
    let guess = parseInt(guessInput, 10);
        
    previousGuesses.push(guess)
    console.log(`previous guesses: ${previousGuesses}`)
    

    checkGuess()
    checkLives()


})

playAgainBtn.addEventListener('click', () => {
    number = randomNumber()
    endScreen.style.display = 'none'
    lives = 3
    livesText.innerText = 'Lives: ❌ ❌ ❌'
    inputBar.value = ''
    playAgainBtn.style.display = 'none'
    invalidGuess.innerText = 'Enter your guess below'
    console.log(number)
    console.log(`this many losses in a row: ${consecutiveLoss}`)

})


