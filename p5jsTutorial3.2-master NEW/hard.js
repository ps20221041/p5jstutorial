var imageHardBack;
var imageHardTitle;


var buttonHardBackX;
var buttonHardBackY;


function preloadHard()
{
	imageHardBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	imageHardTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleHardGame.png');	

}

function setupHard()
{
	buttonHardBackX = 200;
	buttonHardBackY = 110;

}

function drawHard()
{
	background(0,125,255);

	image(imageHardTitle,400,50);

	image(imageHardBack,buttonHardBackX,buttonHardBackY);

	if (mouseX > buttonHardBackX && mouseX < buttonHardBackX + 200 && mouseY > buttonHardBackY && mouseY < buttonHardBackY+50 && mouseIsPressed)
	{
		canvasID = -1;
	}

}