var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");

var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winingScore = 5 ; 
p1Button.addEventListener("click",function()
{
	if(!gameover){
	 p1Score++;
	if(p1Score==winingScore)
     
     {
     	p1display.classList.add("winner");
     	console.log("gameover");
     	gameover = true;

     }
 
 p1display.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function()
{
	if(!gameover){
	 p2Score++;
	if(p2Score==winingScore)
     
     {
     	p2display.classList.add("winner");
     	console.log("gameover");
     	gameover = true;

     }
 
 p2display.textContent = p2Score;
	}
});


resetButton.addEventListener("click",function()
{
reset();
});
function reset()
{ 
p1Score = 0;
p2Score = 0;
p1display.textContent = 0;
p2display.textContent = 0;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
gameover = false;	
}
numInput.addEventListener("change",function()
{ 
	//winningScoreDisplay.textContent = "Value Changed!"
    winningScoreDisplay.textContent = numInput.value;
    winingScore = Number(numInput.value);
    reset();
});
var button = document.getElementById("s1"); 
var ispurple = false;
button.addEventListener("click",function()
{if(ispurple)
	{
	document.body.style.background = "white";

	}
	else
	{
	document.body.style.background = "purple";
	
	}
	ispurple = !ispurple;
});