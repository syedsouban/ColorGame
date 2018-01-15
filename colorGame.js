var numSquares=6;
var colors=generateRandomColors(numSquares);
var pickedColor=colors[random()];

var pickedColorInRGB=document.getElementById("pickedColorInRGB");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");

hardBtn.classList.add("selected");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	resetButton.textContent="New Colors";
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=colors[random()];
	pickedColorInRGB.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display="none";
	}
	h1.style.backgroundColor="steelblue"	
	messageDisplay.textContent="";
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	resetButton.textContent="New Colors";
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=colors[random()];
	pickedColorInRGB.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue"	
	messageDisplay.textContent="";
})


resetButton.addEventListener("click",function(){
	resetButton.textContent="New Colors";
	colors=generateRandomColors(6);
	pickedColor=colors[random()];
	pickedColorInRGB.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue"	
	messageDisplay.textContent="";
});

pickedColorInRGB.textContent=pickedColor;




var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(this.style.backgroundColor===pickedColor)
				{
					colorAllSquares(clickedColor);
					messageDisplay.textContent="Correct";
					h1.style.backgroundColor=pickedColor;
					resetButton.textContent="Play Again?";
				}
			else
				{
					this.style.backgroundColor="#232323";
					messageDisplay.textContent="Try Again";
				}
		});
	}
function random()
{
	return Math.floor(Math.random()*numSquares);
}
function colorAllSquares(clickedColor)
{
	for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=clickedColor;
		}
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
		{
			var red=Math.floor(Math.random()*256);
			var blue=Math.floor(Math.random()*256);
			var green=Math.floor(Math.random()*256);
			arr[i]="rgb("+red+", "+blue+", "+green+")";
		}
	return arr;
}