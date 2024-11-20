const upper_div = document.createElement("div");
upper_div.id = "upper_div";
const div = document.createElement("div");

div.id = "div0";
const div1 = document.createElement("div");
div1.id = "div1";

// document.body.appendChild(div);
// document.body.appendChild(div1);
upper_div.appendChild(div);
upper_div.appendChild(div1);
document.body.appendChild(upper_div);
const span1 = document.createElement("span");
const span = document.createElement("span");

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);

div1.appendChild(span);
div1.insertBefore(span1 , span);

btn1.setAttribute("style", "width : 100px ; height : 50px");
btn2.setAttribute("style", "width : 100px ; height : 50px");
btn3.setAttribute("style", "width : 100px ; height : 50px");

span1.setAttribute("style", "display : block");
span.setAttribute("style", "display : block");

 btn1.textContent = "rock";
 btn2.textContent = "scissors";
 btn3.textContent = "paper";




// let number = prompt("How many rounds");
// let n = parseInt(number);
// fiveRounds();  



//<----------------LOGIC--------------->

let getComputerChoice = function(){
    const result = Math.random()*100;
   

if(result >= 0 && result <= 33){
    return ("rock");
}
else if(result > 33 && result <= 66){
    return("paper");
   

}
else
{
return ("scissors");

}
}



 let getHumanChoice = function(choice){

    const input = choice;

    

let newInput = input.trim()
newInput = newInput.toLowerCase();

return((newInput));

;



}  


// function fiveRounds(){


let compScore = 0;
let humanScore = 0;


 
function playRound(compSelect , humanSelect){

   
    if((compSelect === "rock" ) & (humanSelect === "scissors")){
            compScore += 1 ;
            span1.textContent = ("You LOST"); 
            span.textContent = `Your score is ${ humanScore } : ${compScore}`;
            
        // alert("Your score is "+ humanScore + "-" + compScore,50);
        
      
    }
    else if(compSelect === "rock" & humanSelect === "paper")
    {
        humanScore += 1 ;
        span1.textContent = ("You WON"); 
            span.textContent = `Your score is ${ humanScore } : ${compScore}`;
        
    }
    else if((compSelect === "paper" )& (humanSelect === "scissors"))
    {   humanScore += 1 ;
        span1.textContent = ("You WON"); 
        span.textContent = `Your score is ${ humanScore } : ${compScore}`;
// alert("Your score is "+ humanScore + "-" + compScore,50)
    }
    else if((compSelect === "scissors")& (humanSelect === "paper"))
    {
        compScore += 1 ;
        span1.textContent = ("You LOST"); 
        span.textContent = `Your score is ${ humanScore } : ${compScore}`;
        
    }
    else if(compSelect === "scissors" & humanSelect === "scissors")
    {
        // alert("Your score is "+ humanScore + "-" + compScore,50)
       
        span1.textContent = ("IT'S a TIE"); 
        span.textContent = `Your score is ${ humanScore } : ${compScore}`;

    }
    else if(compSelect === "paper" & humanSelect === "paper")
    {
        span1.textContent = ("IT'S a TIE"); 
        span.textContent = `Your score is ${ humanScore } : ${compScore}`;
    }
    else if((compSelect === "rock") & (humanSelect === "rock"))
    {
        span1.textContent = ("IT'S a TIE"); 
        span.textContent = `Your score is ${ humanScore } : ${compScore}`;
    }
    else if(compSelect === "paper" & humanSelect === "rock")
    {
        compScore += 1 ;
        span1.textContent = ("You LOST"); 
            span.textContent = `Your score is ${ humanScore } : ${compScore}`;
        
    }
   else if ((compSelect === "scissors") & (humanSelect === "rock"))
    {
        humanScore += 1 ;
        span1.textContent = ("You WON"); 
        span.textContent = `Your score is ${ humanScore } : ${compScore}`;
       
    }

    else
    {
        span1.textContent = ("The Input entered doesnt match!");
    }
    
    
    if(compScore === 5 || humanScore === 5){
        btn1.disabled = true ;
        btn2.disabled = true ;
        btn3.disabled = true ;

        if( compScore === 5 ){
            span1.textContent = "Computer WON!";
    }
    else{
        span1.textContent = "Human WON!";
    }

}
}

// for(let i = 0 ; i < n; i++) {
// let compChoice = getComputerChoice();
// let humanChoice = btn1_clicked;
// playRound( compChoice , humanChoice);
// }


btn1.addEventListener('click' , (e) => (playRound(getComputerChoice() , getHumanChoice(btn1.textContent))));
btn2.addEventListener('click' , (e) => (playRound(getComputerChoice() , getHumanChoice(btn2.textContent))));
btn3.addEventListener('click' , (e) => (playRound(getComputerChoice() , getHumanChoice(btn3.textContent))));

