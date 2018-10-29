var imageMediumBack;
var imageMediumTitle;


var buttonMediumBackX;
var buttonMediumBackY;


function preloadMedium()
{
	imageMediumBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	imageMediumTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMediumGame.png');	

}

function setupMedium()
{
	buttonMediumBackX = 200;
	buttonMediumBackY = 110;

}

function drawMedium()
{
	background(0,125,255);

	image(imageMediumTitle,400,50);

	image(imageMediumBack,buttonMediumBackX,buttonMediumBackY);

	if (mouseX > buttonMediumBackX && mouseX < buttonMediumBackX + 200 && mouseY > buttonMediumBackY && mouseY < buttonMediumBackY+50 && mouseIsPressed)
	{
		canvasID = -1;
	}

}