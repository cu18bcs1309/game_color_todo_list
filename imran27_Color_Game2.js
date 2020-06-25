var Numsquare =9
var colors = generateRandomColors(Numsquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var h11 = document.querySelector("#h11");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var mediumbtn = document.querySelector("#mediumbtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click",function()
{
	hardbtn.classList.remove("selected");
	hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
Numsquare = 3;
colors = generateRandomColors(Numsquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.background = colors[i];
		}
		else
		{
			square[i].style.display = "none";
		}
	}
});

mediumbtn.addEventListener("click",function()
{
	hardbtn.classList.remove("selected");
	mediumbtn.classList.add("selected");
easybtn.classList.remove("selected");
Numsquare = 6;
colors = generateRandomColors(Numsquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.background = colors[i];
		}
		else
		{
			square[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click",function()
{
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
mediumbtn.classList.remove("selected");
Numsquare = 9;
colors = generateRandomColors(Numsquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++)
	{
		
			square[i].style.background = colors[i];
		    square[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function()
{
	Numsquare =9;
	colors = generateRandomColors(Numsquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "NewColors";
	messageDisplay.textContent = ""
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background = colors[i];
	}
	h11.style.background ="steelblue";
}
);
colorDisplay.textContent = pickedColor;
messageDisplay = document.querySelector("#message");
for(var i=0;i<square.length;i++)
{
	square[i].style.background = colors[i];
	square[i].addEventListener("click",function()
	{
      var clickedColor = this.style.background;
      console.log(clickedColor,pickedColor);
      if(clickedColor==pickedColor)
      {
      	resetButton.textContent = "Play Again?";
      	messageDisplay.textContent = "Correct!";
      	changeColor(clickedColor);
      	h11.style.background = clickedColor;
      	
      }
      else
      {
      	this.style.background = "#232323";  
      	messageDisplay.textContent = "Try Again";
      }
	});
}

function changeColor(colors)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background = colors;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
var arr = [];
for(var i=0;i<num;i++)
{
arr.push(randomColor())
}
return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
