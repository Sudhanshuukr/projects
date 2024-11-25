let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgBox");
const uScore = document.querySelector("#userScore");
const cScore = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}
const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText = "It's an draw, Try Again";
};


 
const shwoWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log(`You win! Your ${userChoice} beats ${compChoice}`);
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        uScore.innerText = userScore;
    }
    else{
         console.log("You Lose") ;
         msg.innerText = `you lose ${compChoice} beats yours ${userChoice}`;
         msg.style.backgroundColor = "red";
         compScore++;
         cScore.innerText = compScore;

    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
        msg.style.backgroundColor = "#081b31";
    }
    else {
        let userWin = true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false: true;
        }
        else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        shwoWinner(userWin, userChoice, compChoice);
    } 
};

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});