var imageEasyBack;
var imageEasyTitle;


var buttonEasyBackX;
var buttonEasyBackY;


function preloadEasy()
{
	imageEasyBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	imageEasyTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleEasyGame.png');	

}

function setupEasy()
{
	buttonEasyBackX = 200;
	buttonEasyBackY = 110;

}

function drawEasy()
{
	background(0,125,255);

	image(imageEasyTitle,400,50);

	image(imageEasyBack,buttonEasyBackX,buttonEasyBackY);

	if (mouseX > buttonEasyBackX && mouseX < buttonEasyBackX + 200 && mouseY > buttonEasyBackY && mouseY < buttonEasyBackY+50 && mouseIsPressed)
	{
		canvasID = -1;
	}

}