let choices =  document.querySelectorAll(".choice");
let user = document.querySelector("#uScore");
let comp = document.querySelector("#cScore");
let result = document.querySelector("#result");

const options = ["rock","paper","scissors"];
let userScore = 0;
let compScore = 0;

function getCompChoice() {
    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = getCompChoice();
        checkWinner(userChoice, compChoice);
    });
})
    

function checkWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        result.innerText = "It's a draw!";
        result.style.backgroundColor = "#081b31";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        userScore++;
        user.innerText = userScore;
        result.innerText = "You Won!";
        result.style.backgroundColor = "green";
    } else {
        compScore++;
        comp.innerText = compScore;
        result.innerText = "Computer Wins!";
        result.style.backgroundColor = "red";
    } 
}