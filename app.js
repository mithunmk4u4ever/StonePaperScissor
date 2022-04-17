const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
const playerscoreDisplay=document.getElementById('player-score')
const computerscoreDisplay=document.getElementById('computer-score')
let result
let playerscore=0
let computerscore=0
const movesDisplay=document.getElementById('move-count')
let moves=9

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  finalresult()

  moves--
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'stone'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'stone' && userChoice === "paper") {
    result = 'you win!'
    playerscore++
  }
  if (computerChoice === 'stone' && userChoice === "scissors") {
    result = 'you lost!'
    computerscore++
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
    playerscore++
  }
  if (computerChoice === 'paper' && userChoice === "stone") {
    result = 'you lose!'
    computerscore++
  }
  if (computerChoice === 'scissors' && userChoice === "stone") {
    result = 'you win!'
    playerscore++
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
    computerscore++
  }
  resultDisplay.innerHTML = result
  playerscoreDisplay.innerHTML=playerscore
  computerscoreDisplay.innerHTML=computerscore
  movesDisplay.innerHTML=moves
  
}
function finalresult(){
  let fresult=document.getElementById('final-result')
  
  if(moves==0){
    
    if(playerscore>computerscore){
      fresult.style.color='green'
      fresult.innerHTML="You Won the Game!!!"
      
    }else if(playerscore<computerscore){
      fresult.innerHTML="Computer won the Game!!!"
      fresult.style.color='red'
    }
    else{
      fresult.style.color='grey'
      fresult.innerHTML="It's Draw!!!"
    }
    
  }
  
}
function gameOver(){
 

  if(moves==0){
    document.querySelectorAll('button').style.visibility='hidden'
  }
}
function restart(){
  window.location.reload()
}
gameOver()