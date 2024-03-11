let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let score1 = document.querySelector("#player-score");
let score2 = document.querySelector("#computer-score");
let msgContainer = document.querySelector(".msg-container");
let s1 = 0;
let s2 = 0;


const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice+" was clicked!");
        if(userChoice==="rock") {
            updateScore(0);
        }
        else if(userChoice==="paper") {
            updateScore(1);
        }
        else {
            updateScore(2);
        }
    })
});

const printWinner = (val,num,win) => {
    let str = "";
    if(num===0) str = "Rock";
    if(num===1) str = "Paper";
    if(num===2) str = "Scissors";
    console.log("Computer's choice is "+str);
    if(val===num) {
        msg.innerHTML = `Computer says ${str}! It's a draw!`
    }
    else {
        msg.innerHTML = `Computer says ${str}! You ${win}!`
    }
};

const updateScore = (val) => {
    const num = Math.floor(Math.random(3)*3);
    let win = "";
    if(val===num) {
    }
    else if(val===0 && num===1) {
        score2.innerHTML = `${++s2}`;
        win = "lose";
    }
    else if(val===0 && num===2) {
        score1.innerHTML = `${++s1}`;
        win = "win";
    }
    else if(val===1 && num===0) {
        score1.innerHTML = `${++s1}`;
        win = "win";
    }
    else if(val===1 && num===2) {
        score2.innerHTML = `${++s2}`;
        win = "lose";
    }
    else if(val===2 && num===0) {
        score2.innerHTML = `${++s2}`;
        win = "lose";
    }
    else if(val===2 && num===1) {
        score1.innerHTML = `${++s1}`;
        win = "win";
    }
    printWinner(val,num,win);
}