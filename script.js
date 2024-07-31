
let UserScores = 0;
let CompScores = 0;


//access choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".message");//acess message

//access user and comp score
const userScore = document.querySelector(".userzero");
const compScore = document.querySelector(".compzero");


 

//generate computer choice 
const genCompChoice = () =>{
    //rock, papaer, sciossors ( options that are randomly generated by computer)
    //store option in an options array
    const options = ["rock", "paper", "scissors"]
    const randIndx=Math.floor(Math.random() * 3)// generate random values
return options[randIndx];

}



//when comp and user choice is same
const drawGame = () =>{
    // console.log("Game was draw");
    msg.innerText = "Game was draw. Play game";
    msg.style.backgroundColor = "purple";
}



//show winner
//if userwin == true
const showWinner = (userWin, UserChoice, CompChoice) => {
if(userWin){
    UserScores++;
    userScore.innerText=UserScores;
    // console.log("You Win");
    msg.innerText = `You Win!! yours ${UserChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
}
else{
    CompScores++;
    compScore.innerText=CompScores;
    // console.log("You loose..") //for backend
    msg.innerText = `You lost.. ${CompChoice} beats yours ${UserChoice} `;
    msg.style.backgroundColor = "red";
}
}



//track userchoice and computer choice
const playGame = (UserChoice) =>{
    console.log("user choice = ", UserChoice)
    //to generate computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice)

//when computer and user fight what happened
if(UserChoice == CompChoice){
drawGame()
}
else{
    let userWin = true; //track userwin (user move) as if user is winning or not
    if(UserChoice === "rock"){
        // if userChoice is rock then computer can generate paper or rock
        //PAPER,SCISSORS
        userWin = CompChoice === "paper" ? false : true;
    }
    else if(UserChoice === "paper"){
        //comp choice will be ROCK, SCISSORS
        userWin = CompChoice === "scissors" ? false : true;
    }
    else {
        //here userchoice is scissors and comp choice will be 
        //ROCK, PAPER
        userWin = CompChoice === "rock" ? false : true;
    }

    //now that our userwin is known we can show winner
    showWinner(userWin, UserChoice, CompChoice)
    }
    
}



//add event listener to each of choices
choices.forEach((choice) =>{
    // console.log(choice)
    choice.addEventListener("click", ()=>{
        const UserChoice = choice.getAttribute("id")
        // console.log("choice was clicked", UserChoice);
        playGame(UserChoice)
    });
});
