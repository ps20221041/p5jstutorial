var easyquestion1;
var easyquestion2;
var easyquestion3;
var easyquestion4;
var easyquestion5;
var easyquestion6;
var easyquestion7;
var easyquestion8;
var easyquestion9;
var easyquestion10;

var mediumquestion1;
var mediumquestion2;
var mediumquestion3;
var mediumquestion4;
var mediumquestion5;
var mediumquestion6;

var questionX;
var questionY;
var questionLength;
var questionHeight;
var introImage;

var canvasID;
var locked;

var numberOfAnswers;

function preload()
{
	// numberOfAnswers is how many multiple choice the player has
	numberOfAnswers = 4;
	questionLength = 350;
	questionHeight = 200;

	questionX = [27,27+250+50,27,27+250+50];
	questionY = [50,50,50+200+23,50+200+23];


	introImage = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_other/intro.png');

	easyquestion1 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/101.png');
	easyquestion2 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/102.png');
	easyquestion3 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/103.png');
	easyquestion4 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/104.png');
	easyquestion5 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/105.png');
	easyquestion6 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/106.png');
	easyquestion7 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/107.png');
	easyquestion8 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/108.png');
	easyquestion9 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/109.png');
	easyquestion10 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/110.png');

	mediumquestion1 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/201.png');
	mediumquestion2 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/202.png');
	mediumquestion3 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/203.png');
	mediumquestion4 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/204.png');
	mediumquestion5 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/205.png');
	mediumquestion6 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_easy/206.png');



}

function setup()
{
	createCanvas(800,600);

	score = 0;
	canvasID = 100;
	locked = false;
}

function draw()
{
	background(0,0,0);

	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 100)
	{
		drawIntro();
	}
	else if (canvasID == 101)
	{
		image(easyquestion1,0,0);

//function isButtonClicked(correct,nextID)

		isButtonClicked(1,102)
	}
	else if (canvasID == 102)
	{
		image(easyquestion2,0,0);
		isButtonClicked(1,103)
	}
	else if (canvasID == 103)
	{
		image(easyquestion3,0,0);
		isButtonClicked(3,104)
	}
	else if (canvasID == 104)
	{
		image(easyquestion4,0,0);
		isButtonClicked(2,105)
	}
	else if (canvasID == 105)
	{
		image(easyquestion5,0,0);
		isButtonClicked(3,106)
	}
	else if (canvasID == 106)
	{
		image(easyquestion6,0,0);
		isButtonClicked(2,107)
	}
	else if (canvasID == 107)
	{
		image(easyquestion7,0,0);
		isButtonClicked(4,108)
	}
	else if (canvasID == 108)
	{
		image(easyquestion8,0,0);
		isButtonClicked(1,109)
	}
	else if (canvasID == 109)
	{
		image(easyquestion9,0,0);
		isButtonClicked(2,110)
	}
	else if (canvasID == 110)
	{
		image(easyquestion10,0,0);
		isButtonClicked(3,100)
	}

	else if (canvasID == 201)
	{
		image(mediumquestion1,0,0);
		isButtonClicked(3,202)
	}
	else if (canvasID == 202)
	{
		image(mediumquestion2,0,0);
		isButtonClicked(3,203)
	}
	else if (canvasID == 203)
	{
		image(mediumquestion3,0,0);
		isButtonClicked(1,204)
	}
	else if (canvasID == 204)
	{
		image(mediumquestion4,0,0);
		isButtonClicked(4,205)
	}
	else if (canvasID == 205)
	{
		image(mediumquestion5,0,0);
		isButtonClicked(2,206)
	}
	else if (canvasID == 206)
	{
		image(mediumquestion6,3,0);
		isButtonClicked(2,207)
	}


}

function drawIntro()
{
	image(introImage,0,0);
	if (mouseX > 300 & mouseX < 500 && mouseY > 200 & mouseY < 300 && mouseIsPressed)
	{
		canvasID = 101;
	}
	if (mouseX > 300 & mouseX < 500 && mouseY > 330 & mouseY < 430 && mouseIsPressed)
	{
		canvasID = 201;
	}
	if (mouseX > 300 & mouseX < 500 && mouseY > 460 & mouseY < 560 && mouseIsPressed)
	{
		canvasID = 301;
	}

}


// checks what happens when you click on a button
function isButtonClicked(correct,nextID)
{
	correct--;
	var deductHealth = false;
	if (mouseIsPressed && !locked)
	{
		locked = true;
		for (var i = 0; i < numberOfAnswers; i++)
		{
			if (mouseX > questionX[i] && mouseX < questionX[i] + questionLength && mouseY > questionY[i] && mouseY < questionY[i] + questionHeight)
			{
				if (i == correct)
				{
					canvasID = nextID;
					return 0;
				}
				else
				{
					deductHealth = true;
				}
			}
		}
		if (deductHealth)
		{
		//	health = health - 50;
		}
	}
}

// handles all game over code
function gameOver()
{
	textSize(32);
	fill(255,255,255);
	text("GAME OVER!",50,50);
	textSize(12);
}

// shows questions on the screen
function showQuestions(thequestion)
{
	for (var i = 0; i < numberOfAnswers; i++)
	{
		image(thequestion[i],questionX[i],questionY[i])
	}
}

// locked is to prevent HOLDING onto the button
function mouseReleased()
{
	locked = false;
}










