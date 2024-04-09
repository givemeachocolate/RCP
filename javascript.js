// let admin
// let name = "John"

// admin = name

// alert(admin)

// function add7(a) {
//     return a += 7
// }

// alert(add7(2))

// function multifly(a,b) {
//     return a*b
// }

// alert(multifly(2,3))

// function capitalize(a) {
//     a = a.toLowerCase()
//     b = a.split('')
//     b[0] = b[0].toUpperCase()
//     c = b.join('')
//     return c

// }

// alert(capitalize('UPPERCASE'))

// function lastLetter(a) {
//     b = a.length - 1
//     a = a.split('')
//     c = a[b]
//     return c
// }

// alert(lastLetter('dmklsaml2'))

let a = ['rock', 'scissors', 'paper']
let c = 0

function getComputerChoice() {
   b = Math.floor(Math.random()*3)
   return a[b]
}

// alert(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock') ) {
    c += 1
    return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
    c -= 1
    return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

// alert(playRound(playerSelection,computerSelection))

function playGame() {
    for (i=0; i<5; i++) {
        const playerSelection = prompt("what's your choice? RCP",)
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection,computerSelection))
        console.log(c)
    }
}

playGame()

if (c>0) {
    alert("YOU WIN!")
} else if (c=0) {
    alert("TIE!")
} else {
    alert("YOU LOSE!")
}