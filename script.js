//query selectors & globals

const guessSubmit = document.querySelector('#guessSubmit')
const invalidGuess = document.querySelector('#invalidGuess')
const previousGuessesText = document.querySelector('#previousGuessesText')
const playAgainBtn = document.querySelector('#playAgainBtn')
const endScreen = document.querySelector('#endScreen')
const startScreen = document.querySelector('#startScreen')
const endText = document.querySelector('#endText')
const livesText = document.querySelector('#livesText')
const livesNum = document.querySelector('#livesNum')
const inputBar = document.querySelector('#guessInput')
const easyButton = document.querySelector('#easyButton')
const medButton = document.querySelector('#medButton')
const hardButton = document.querySelector('#hardButton')
const instructionsText = document.querySelector('#instructionsText')


let consecutiveLoss = 0



//game logic

let number = null

//lives
let difficulty = null
function showLives () {
    let xEmojis = '❌ '.repeat(lives);
    livesNum.innerText = `Lives: ${xEmojis}`
}

//difficulty
easyButton.addEventListener('click', () => {
    difficulty = 'easy'
    number = randomNumber()
    lives = 3
    showLives()
    startScreen.style.display = 'none'
    livesText.innerText = `you only have ${lives} tries, so be careful!`
    instructionsText.innerText = `guess the number ranging from 0 to 10.`
    console.log(number)
})
medButton.addEventListener('click', () => {
    difficulty = 'medium'
    number = randomNumberMed()
    lives = 10
    showLives()
    startScreen.style.display = 'none'
    livesText.innerText = `you only have ${lives} tries, so be careful!`
    instructionsText.innerText = 'guess the number ranging from 0 to 100.'
    console.log(number)
})
hardButton.addEventListener('click', () => {
    difficulty = 'hard'
    number = randomNumberHard()
    lives = 20
    showLives()
    startScreen.style.display = 'none'
    livesText.innerText = `you only have ${lives} tries, so be careful!`
    instructionsText.innerText = `guess the number ranging from 0 to 500.`
    console.log(number)
})

//array of guessed numbers to let player know if repeat guesses
let previousGuesses = []

//the number player needs to guess
function randomNumber () {
    return Math.floor(Math.random() * 11);
} 

function randomNumberMed () {
    return Math.floor(Math.random() * 101);
} 

function randomNumberHard () {
    return Math.floor(Math.random() * 501);
} 


console.log(number)


//function to check if a number is within a threshold
// function threshold (guess, target, threshold = 20) {
//     return Math.abs(guess - target >= threshold)
// }

//checks the guess value and displays a hint
function checkGuess () {

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
    } else if (Math.abs(guess - number) < 3 && guess > number) {
        //player guess was too high
        invalidGuess.innerText = 'your guess was too high, try again with a smaller number 😎👍' 
        subtractLife()
    } else if (Math.abs(guess - number) < 3 && guess < number) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was too low, guess again with a larger number 😎👍'
        subtractLife()
    } else if (Math.abs(guess - number) >= 3 && guess > number) {
        //player guess was way too high
        invalidGuess.innerText = 'your guess was way too high (3 or more away)!  try again with a much smaller number 😎👍'
        subtractLife()
    } else if (Math.abs(guess - number) >= 3 && guess < number) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was way too low (3 or more away)! guess again with a much larger number 😎👍'
        subtractLife()
    } 
}



function checkGuessMed () {

    let guessInput = document.querySelector('#guessInput').value
    let guess = parseInt(guessInput, 10);
    
    if (guess > 100 || guess < 0) {
        //number is too big or small
        invalidGuess.innerText = 'pick a number from 0 to 100!'
     } else if (guess === number) {
        //player guess was correct
        endScreen.style.display = 'flex'
        endText.innerText = `you got it! the number was ${number}`
        console.log(guess)
        playAgainBtn.style.display = 'flex'
        consecutiveLoss = 0
    } else if (Math.abs(guess - number) < 10 && guess > number) {
        //player guess was too high
        invalidGuess.innerText = 'your guess was too high, try again with a smaller number 😎👍' 
        subtractLife()
    } else if (Math.abs(guess - number) < 10 && guess < number) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was too low, guess again with a larger number 😎👍'
        subtractLife()
    } else if (Math.abs(guess - number) >= 10 && guess > number) {
        //player guess was way too high
        invalidGuess.innerText = 'your guess was way too high (10 or more away)! try again with a much smaller number 😎👍'
        subtractLife()
    } else if (Math.abs(guess - number) >= 10 && guess < number) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was way too low (10 or more away)! guess again with a much larger number 😎👍'
        subtractLife()
    } 
}

function checkGuessHard () {

    let guessInput = document.querySelector('#guessInput').value
    let guess = parseInt(guessInput, 10);
    
    if (guess > 500 || guess < 0) {
        //number is too big or small
        invalidGuess.innerText = 'pick a number from 0 to 500!'
     } else if (guess === number) {
        //player guess was correct
        endScreen.style.display = 'flex'
        endText.innerText = `you got it! the number was ${number}`
        console.log(guess)
        playAgainBtn.style.display = 'flex'
        consecutiveLoss = 0
    } else if (Math.abs(guess - number) < 50 && guess > number) {
        //player guess was too high
        invalidGuess.innerText = 'your guess was too high, try again with a smaller number 😎👍' 
        subtractLife()
    } else if (Math.abs(guess - number) < 50 && guess < number) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was too low, guess again with a larger number 😎👍'
        subtractLife()
    } else if (Math.abs(guess - number) >= 50 && guess > number) {
        //player guess was way too high
        invalidGuess.innerText = 'your guess was way too high (50 or more away)! try again with a much smaller number 😎👍'
        subtractLife()
    } else if (Math.abs(guess - number) >= 50 && guess < number) {
        //player guess was too low
        invalidGuess.innerText = 'your guess was way too low (50 or more away)! guess again with a much larger number 😎👍'
        subtractLife()
    } 
}


//function to subtract lives from player
function subtractLife () {

    lives = lives - 1
    
    let xEmojis = '❌ '.repeat(lives);

    livesNum.innerText = `Lives: ${xEmojis}`
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
        endText.style.fontSize = '25px'
        endText.innerText = `${consecutiveLoss} L's in a row is WILD 💀💀💀... the number was ${number}, try again... `
    }
}





guessSubmit.addEventListener('click', () => {

    if (difficulty === 'easy') {
        console.log(`this many lives: ${lives}`)

        //gets player guess and converts it to a number 
        let guessInput = document.querySelector('#guessInput').value
        let guess = parseInt(guessInput, 10);
            
        previousGuesses.push(guess)
        previousGuessesText.innerText = `you guessed ${previousGuesses.join(', ')}`
        console.log(`previous guesses: ${previousGuesses}`)
        
    
        checkGuess()
        checkLives()

    } else if (difficulty === 'medium') {
        console.log(`this many lives: ${lives}`)

        //gets player guess and converts it to a number 
        let guessInput = document.querySelector('#guessInput').value
        let guess = parseInt(guessInput, 10);
            
        previousGuesses.push(guess)
        previousGuessesText.innerText = `you guessed ${previousGuesses.join(', ')}`
        console.log(`previous guesses: ${previousGuesses}`)
        
    
        checkGuessMed()
        checkLives()

    } else if (difficulty === 'hard') {
        console.log(`this many lives: ${lives}`)

        //gets player guess and converts it to a number 
        let guessInput = document.querySelector('#guessInput').value
        let guess = parseInt(guessInput, 10);
            
        previousGuesses.push(guess)
        previousGuessesText.innerText = `you guessed ${previousGuesses.join(', ')}`
        console.log(`previous guesses: ${previousGuesses}`)
        
    
        checkGuessHard()
        checkLives()



}})

playAgainBtn.addEventListener('click', () => {
    endScreen.style.display = 'none'
    startScreen.style.display = 'block'
    inputBar.value = ''
    playAgainBtn.style.display = 'none'
    invalidGuess.innerText = 'Enter your guess below'
    console.log(`this many losses in a row: ${consecutiveLoss}`)
    previousGuesses = []
    previousGuessesText.innerText = `you guessed ${previousGuesses.join(', ')}`  

})



