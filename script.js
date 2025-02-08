const buttons = document.querySelectorAll('.buttons button');
let winner = document.querySelector('.winner');
let score = JSON.parse(localStorage.getItem('score')) ||
 {
    'userWinCount' : 0,
    'compWinCount' : 0,
    'tie' : 0
};
document.querySelector('.userWin').innerHTML = score.userWinCount
document.querySelector('.compWin').innerHTML = score.compWinCount
document.querySelector('.tie').innerHTML = score.tie


document.querySelector('.reset button').addEventListener('click',()=>{
    localStorage.removeItem('score')
    document.querySelector('.userWin').innerHTML = 0
    document.querySelector('.compWin').innerHTML = 0
    document.querySelector('.tie').innerHTML = 0
    winner.innerHTML = '';
    score.userWinCount = 0
    score.compWinCount = 0
    score.tie = 0
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
        score.tie++ 
        document.querySelector('.tie').innerHTML = score.tie
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
        localStorage.setItem('score',JSON.stringify(score))
    }
}
const checkWinner = (win)=>{
    if(win){
        winner.innerHTML = 'You Win!'
        score.userWinCount++
        document.querySelector('.userWin').innerHTML = score.userWinCount
        console.log(score)

    }else{
        winner.innerHTML = 'Computer Wins!'
        score.compWinCount++
        document.querySelector('.compWin').innerHTML = score.compWinCount
        console.log(score)

    }
}
const genComputerChoice = ()=>{
    let choices = ['rock','paper','scissor']
    return choices[Math.floor(Math.random()*3)]
}