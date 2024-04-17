/*get computer to select rock, paper or scissors
get player to type rock, paper or scissors
write what to display for each condition i.e what happen when player selects rock and computer selects scissors 
possible conditions (rock, paper) ,(rock, scissor), (rock,rock), 
(paper,rock), (paper scissor), (paper, paper), (scissor,rock), (scissor,paper), (scissor, scissor)*/


 

let playerScore = 0;
let computerScore = 0;
let resultMsg = document.querySelector("#resultMsg")




let rock_btn = document.querySelector("#rock_btn");
rock_btn.addEventListener("click", () => { playerSelection = "rock"; playRound();  })

let paper_btn = document.querySelector("#paper_btn");
paper_btn.addEventListener("click", () => { playerSelection = "paper"; playRound();  })

let scissor_btn = document.querySelector("#scissor_btn");
scissor_btn.addEventListener("click", () => { playerSelection = "scissor"; playRound();})

let gameMsg = document.querySelector("#gameMsg")

let start = document.querySelector("#start")








function playRound()
{
    let random = Math.floor(Math.random()*3);//randomly generates 0,1 or 2

    function getComputerChoice ()
    {
        switch(random)
        {
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissor";
        }
    }
      
    //let input = prompt("type rock, paper or scissor to play rock, paper and scissor")
    //let playerSelection= input.toLowerCase();
    
    
    computerSelection = getComputerChoice()
    function game(playerSelection, computerSelection)
    {

        if (playerSelection =="rock" && computerSelection=="paper")      
        {
            console.log ("You lose, I had chosen paper"); 
            gameMsg.textContent = "You lose, I had chosen paper"
            return false
            
        } 
        if (playerSelection =="rock" && computerSelection=="scissor")
        {
            console.log ("You win, I had chosen scissor"); 
            gameMsg.textContent = "You win, I had chosen scissor"
            return true
        }
        else if(playerSelection =="paper" && computerSelection=="scissor")
        {
            console.log ("You lose, I had chosen scissor");
            gameMsg.textContent = "You lose, I had chosen scissor"
            return false
        }
        else if(playerSelection =="paper" && computerSelection=="rock")
        {
            console.log ("You win, I had chosen rock"); 
            gameMsg.textContent = "You win, I had chosen rock"
            return true
        }
        else if(playerSelection =="scissor" && computerSelection=="paper")
        {
            console.log ("You win, I had chosen paper");
            gameMsg.textContent = "You win, I had chosen paper"
            return true
        }   
        else if(playerSelection =="scissor" && computerSelection=="rock")
        {
            console.log ("You lose, I had chosen rock"); 
            gameMsg.textContent = "You lose, I had chosen rock"
            return false
        }
        else if(playerSelection == computerSelection)
        { 
            console.log("It's a tie. PLAY AGAIN!");  
            gameMsg.textContent = "It's a tie. PLAY AGAIN!"
        }
       
    }

    let htmlplayerScore = document.querySelector("#playerScore")
    let htmlcomputerScore = document.querySelector("#computerScore")


    switch (game(playerSelection, computerSelection))
    {
        case true: 
            playerScore++
            htmlplayerScore.textContent = "Player Score:" + playerScore

        break
        case false:
            computerScore++
            htmlcomputerScore.textContent = "Computer Score: " + computerScore
        break
    }

    console.log("Player Score: " + " " + playerScore)
    console.log("Computer Score: " + " " + computerScore)

    

    if (playerScore == 5 || computerScore == 5)
    {
        result()
        
        htmlcomputerScore.textContent = " Final Computer Score: " + playerScore
        htmlplayerScore.textContent = " Final Player Score: " + computerScore
        let classIcons = document.querySelector(".icons")
        classIcons.remove()
        
        
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "RESET";
        document.body.appendChild(resetBtn);

        resetBtn.addEventListener("click", () =>{
            document.body.appendChild(classIcons)
            computerScore = 0
            playerScore = 0
            htmlcomputerScore.textContent = "Computer Score: " + 0
            htmlplayerScore.textContent = "Player Score: " + 0
            resetBtn.remove()
            resultMsg.textContent = ""
            gameMsg.textContent = ""
            
        } )

        
    }
}





function result()
{
if (playerScore > computerScore)
{
    console.log("Woah, seems like you won the game")
    resultMsg.textContent = "Woah, seems like you won the game. Now GO AND CONQUER THE WORLD!!!"
}
else if (computerScore > playerScore) 
{
    console.log("Computerji won the game. Better luck next time!")
    resultMsg.textContent = "Computerji won the game. Better luck next time!"

}
else if (computerScore == 0 && playerScore == 0) 
{
    console.log("Start the game")
    resultMsg.textContent = "Start the game"
}
else
{
    console.log(" It's a draw.")
    resultMsg.textContent = " It's a draw."
}
}





let thebtn = document.querySelector("#thebtn");
let messages = ["Come on now, don't be shy. Click one of the buttons below and START THE GAME!!", "not me, click the buttons below", "Why are you still clicking me?", "Stop it", "Okay fine, I won't change now", "OMG still?"];
let counter = 0;

thebtn.addEventListener("click", () => {
    if (counter < messages.length) {
        thebtn.textContent = messages[counter];
        counter++;
    }
});






