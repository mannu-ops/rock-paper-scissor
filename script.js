const buttons = document.querySelectorAll('.buttons button');
let winner = document.querySelector('.winner');
let userWinCount = 0
let compWinCount = 0

document.querySelector('.reset button').addEventListener('click',()=>{
    userWinCount=0;compWinCount=0;
    document.querySelector('.userWin').innerHTML = userWinCount
    document.querySelector('.compWin').innerHTML = compWinCount
    winner.innerHTML = '';
})

buttons.forEach((choice) => {
    choice.addEventListener('click',()=>{
        playGame(choice.getAttribute('class'))
    })
})
const playGame = (userChoice)=>{
    let compChoice = genComputerChoice();
    console.log('userChoice : '+ userChoice)
    console.log('compChoice : '+ compChoice)
    if(userChoice === compChoice){
        winner.innerHTML = 'DRAW' 
        userWinCount += 0.5
        compWinCount += 0.5
        document.querySelector('.userWin').innerHTML = userWinCount
        document.querySelector('.compWin').innerHTML = compWinCount
    }else{
        let userWin = true
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false  : true
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'rock' ? true  : false
        }else{
            userWin = compChoice === 'rock' ? false  : true
        }
        checkWinner(userWin)
    }
}
const checkWinner = (win)=>{
    if(win){
        winner.innerHTML = 'You Win!'
        userWinCount++
        document.querySelector('.userWin').innerHTML = userWinCount
    }else{
        winner.innerHTML = 'Computer Wins!'
        compWinCount++
        document.querySelector('.compWin').innerHTML = compWinCount
    }
}
const genComputerChoice = ()=>{
    let choices = ['rock','paper','scissor']
    return choices[Math.floor(Math.random()*3)]
}