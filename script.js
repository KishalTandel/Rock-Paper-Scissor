let userScore = 0;
let compScore = 0;
let userChoice = "";
let compChoice = "";
let userSelect = document.querySelectorAll(".choice");
let userPoint = document.querySelector(".user-score");
let computerPoint = document.querySelector(".computer-score");
let msg = document.querySelector(".msg");

const choices = ["rock", "paper", "scissor"];   // possible choices

// function to determine winner
let win = (userChoice,compChoice) => {
    if (userChoice === "rock") {
        let userWin = compChoice === "scissor" ? true : false;  // ternary operator
        if (userWin){
            userScore++;
            msg.innerText = `You win. Your rock beats scissor.`;
            userPoint.innerText = userScore; 
        } else {
            compScore++;
            msg.innerText = `You loose. Paper beats your rock.`;
            computerPoint.innerText = compScore;
        }
    } else if (userChoice === "paper") {
        let userWin = compChoice === "rock" ? true : false;  // ternary operator
        if (userWin){
            userScore++;
            msg.innerText = `You win. Your paper beats rock.`;
            userPoint.innerText = userScore; 
        } else {
            compScore++;
            msg.innerText = `You loose. Scissor beats your paper.`;
            computerPoint.innerText = compScore;
        }
    } else {
        let userWin = compChoice === "paper" ? true : false;
        if (userWin){
            userScore++;
            msg.innerText = `You win. Your scissor beats paper.`;
            userPoint.innerText = userScore; 
        } else {
            compScore++;
            msg.innerText = `You loose. Rock beats your scissor.`;
            computerPoint.innerText = compScore;
        }
    }
};


// function to determine computer choice
let compSelect = () => {
    let randomIdx = Math.floor(Math.random() * 3);
    compChoice = choices[randomIdx];
};


userSelect.forEach((choice) => {
    choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    compSelect();
    result();
    });
});


// function to determine winner/draw
let result = () => {
    if (userChoice === compChoice) {     // condition for draw
        msg.innerText = "It's a draw."
    } else {
        win(userChoice,compChoice);   // calling function
    }
};
