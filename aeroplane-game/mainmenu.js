var buttonMainMenuEasy;
var buttonMainMenuMedium;
var buttonMainMenuHard;
var imageMainMenuTitle;


var buttonMainMenuEasyX;
var buttonMainMenuEasyY;

var buttonMainMenuMediumX;
var buttonMainMenuMediumY;

var buttonMainMenuHardX;
var buttonMainMenuHardY;


function preloadMainMenu()
{
	buttonMainMenuEasy = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonEasy.png');
	buttonMainMenuMedium = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonMedium.png')
	buttonMainMenuHard = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonHard.png')
	imageMainMenuTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMainMenu.png');	

}

function setupMainMenu()
{
	
	buttonMainMenuEasyX = 200;
	buttonMainMenuEasyY = 110;

	buttonMainMenuMediumX = 200;
	buttonMainMenuMediumY = 220;

	buttonMainMenuHardX = 200;
	buttonMainMenuHardY = 330;

}

function drawMainMenu()
{
	background(255,125,0)

	image(imageMainMenuTitle,400,10);

	image(buttonMainMenuEasy,buttonMainMenuEasyX,buttonMainMenuEasyY);

	image(buttonMainMenuMedium,buttonMainMenuMediumX,buttonMainMenuMediumY);

	image(buttonMainMenuHard,buttonMainMenuHardX,buttonMainMenuHardY);

	if (mouseX > buttonMainMenuEasyX && mouseX < buttonMainMenuEasyX + 139 && mouseY > buttonMainMenuEasyY && mouseY < buttonMainMenuEasyY + 65 && mouseIsPressed)
	{
		canvasID =- 2;
	}

	if (mouseX > buttonMainMenuMediumX && mouseX < buttonMainMenuMediumX + 201 && mouseY > buttonMainMenuMediumY && mouseY < buttonMainMenuMediumY + 65 && mouseIsPressed)
	{
		canvasID =- 3;
	}

	if (mouseX > buttonMainMenuHardX && mouseX < buttonMainMenuHardX + 139 && mouseY > buttonMainMenuHardY && mouseY < buttonMainMenuHardY + 65 && mouseIsPressed)
	{
		canvasID =- 4;
	}

}