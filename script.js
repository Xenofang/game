// take 2 variable to count the winning 
let uScore = 0;
let comScore = 0;

// access all the buttons in js 
const choices = document.querySelectorAll(".playbtn");
const mesg = document.querySelector(".msg");
const hscore = document.querySelector("#uScore");
const cscore = document.querySelector("#comScore");
const rset = document.querySelector("#rebtn");
// generate compChoice

hscore.innerText = 0;
cscore.innerText = 0;
mesg.innerText = " Let's begin the game!";
const genChoice = () =>{
    let option = ["rock" ,"paper","scissor"];
    let cc = Math.floor(Math.random() * option.length);
    return option[cc];
}

// create computer choices
const playGame = (userChoice) =>{
    
    let userwin = true;
    console.log(`UserChoice is : ${userChoice}`);
    const compChoice = genChoice();
    console.log(`Computer choice is : ${compChoice}`);
    if(compChoice === userChoice){
       drawGame(userChoice , compChoice );
       return;
    }
    else if( userChoice === "rock"){
        // compchoice = paper/scissor
        userwin = compChoice === "paper" ? false :true;
    }
    else if (userChoice === "paper") {
        // compchoice = rock/scissor
        userwin = compChoice === "scissor" ? false :true;
    }
    else{
        // compchoice = rock/paper
        userwin = compChoice === "rock" ? false :true;
    }
    showWinner(userwin , userChoice , compChoice);
    
}


// create a user choice 
choices.forEach((btn)=>{
    let userChoice = btn.getAttribute("id")
    btn.addEventListener("click" , ()=> {
        playGame(userChoice);
    }); 
});

const drawGame =(userChoice , compChoice)=>
{
    
    console.log("This round is Draw");
    mesg.innerText = `DRAW Game! Both ${userChoice} & ${compChoice} are same!`;

}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        uScore++;
        hscore.innerText = uScore;
        mesg.innerText = `You Won! You chose ${userChoice}, Computer chose ${compChoice}`;
    } else {
        comScore++;
        cscore.innerText = comScore;
        mesg.innerText = `You Lost! You chose ${userChoice}, Computer chose ${compChoice}`;
    }
};


const resetGame = () =>{
    uScore = 0;
    comScore = 0 ;
    hscore.innerText = uScore;
    cscore.innerText = comScore ;
    mesg.innerText = "Game reset";
}

rset.addEventListener("click" ,resetGame);