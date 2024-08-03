
let number = prompt("How many rounds");
let n = parseInt(number);
fiveRounds();   


function getComputerChoice(){
    const result = Math.random()*100;
    // console.log(result);

if(result >= 0 && result <= 33){
    return ("rock");
    // return(console.log("rock"));
}
else if(result > 33 && result <= 66){
    return("paper");
    // return(console.log("paper"));

}
else
{
return ("scissors");
// return(console.log("scissors"));
}
}

function getHumanChoice(){
    
    const input = prompt("Enter your input ", " ");

let newInput = input.trim()
 newInput = newInput.toLowerCase();
return((newInput));

// console.log(input);
// console.log(newInput);
}

function fiveRounds(){


let compScore = 0;
let humanScore = 0;


 
function playRound(compSelect , humanSelect){

    // console.log(compSelect);
    // console.log(humanSelect);
    if((compSelect === "rock" ) && (humanSelect === "scissors")){
            compScore += 1 ;
            alert("You LOST");
            alert("Your score is "+ humanScore + "-" + compScore,50);
        

      
    }
    else if(compSelect === "rock" & humanSelect === "paper")
    {
        humanScore += 1 ;
        alert("You WON");
        alert("Your score is "+ humanScore + "-" + compScore,50)
        
    }
    else if((compSelect === "paper" )&& (humanSelect === "scissors"))
    {   humanScore += 1 ;
        alert("You WON");
        alert("Your score is "+ humanScore + "-" + compScore,50)
        
    }
    else if((compSelect === "scissors")&& (humanSelect === "paper"))
    {
        compScore += 1 ;
         alert("You LOST");
         alert("Your score is "+ humanScore + "-" + compScore,50)
        
    }
    else if(compSelect === "scissors" & humanSelect === "scissors")
    {
        alert("It's a TIE");
        alert("Your score is "+ humanScore + "-" + compScore,50)
        
    }
    else if(compSelect === "paper" & humanSelect === "paper")
    {
        alert("It's a TIE");
        alert("Your score is "+ humanScore + "-" + compScore,50)
    }
    else if((compSelect === "rock") & (humanSelect === "rock"))
    {
        alert("It's a TIE");
        alert("Your score is "+ humanScore + "-" + compScore,50)
    }
    else if(compSelect === "paper" & humanSelect === "rock")
    {
        compScore += 1 ;
        alert("You LOST");
        alert("Your score is "+ humanScore + "-" + compScore,50)
        
    }
   else if ((compSelect === "scissors") && (humanSelect === "rock"))
    {
        humanScore += 1 ;
        alert("You won");
        alert("Your score is "+ humanScore + "-" + compScore,50)
       
    }

    else
    {
        alert("The Input entered doesnt match!");
    }
    
   
}

for(let i = 0 ; i < n; i++) {
    let compChoice = getComputerChoice();
    console.log(compChoice);
    let humanChoice = getHumanChoice();
    console.log(humanChoice);
    playRound( compChoice , humanChoice);
    
}

}









