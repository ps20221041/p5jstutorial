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
var mediumquestion7;
var mediumquestion8;
var mediumquestion9;
var mediumquestion10;

var hardquestion1;
var hardquestion2;
var hardquestion3;
var harduestion4;
var hardquestion5;
var hardquestion6;
var hardquestion7;
var hardquestion8;
var hardquestion9;
var hardquestion10;

var questionX;
var questionY;
var questionLength;
var questionHeight;
var introImage;

var jetFlyBy;
var correctSound;
var incorrectSound;

var canvasID;
var locked;

var score;

var numberOfAnswers;

function preload()
{
	// numberOfAnswers is how many multiple choice the player has
	numberOfAnswers = 4;
	questionLength = 350;
	questionHeight = 200;

	questionX = [27,27+250+50,27,27+250+50];
	questionY = [50,50,50+200+23,50+200+23];

	jetFlyBy = loadSound("https://ps20221041.github.io/p5jstutorial/aeroplane-game/sounds/jetflyby.mp3")
	correctSound = loadSound("https://ps20221041.github.io/p5jstutorial/aeroplane-game/sounds/correct.mp3")
	incorrectSound = loadSound("https://ps20221041.github.io/p5jstutorial/aeroplane-game/sounds/incorrect.mp3")


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

	mediumquestion1 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/201.png');
	mediumquestion2 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/202.png');
	mediumquestion3 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/203.png');
	mediumquestion4 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/204.png');
	mediumquestion5 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/205.png');
	mediumquestion6 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/206.png');
	mediumquestion7 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/207.png');
	mediumquestion8 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/208.png');
	mediumquestion9 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/209.png');
	mediumquestion10 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_medium/210.png');

	hardquestion1 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/301.png');
	hardquestion2 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/302.png');
	hardquestion3 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/303.png');
	hardquestion4 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/304.png');
	hardquestion5 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/305.png');
	hardquestion6 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/306.png');
	hardquestion7 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/307.png');
	hardquestion8 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/308.png');
	hardquestion9 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/309.png');
	hardquestion10 = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/backgrounds_hard/310.png');


}


function setup()
{
	createCanvas(800,600);

	score = 0;
	canvasID = 100;
	locked = false;
	if (!jetFlyBy.isPlaying())
	{
		jetFlyBy.play();
	}
}


function drawIntro()
{
	image(introImage,0,0);
	if (mouseX > 300 & mouseX < 500 && mouseY > 200 & mouseY < 300 && mouseIsPressed)
	{
		canvasID = 101;
		score = 0;

	}
	if (mouseX > 300 & mouseX < 500 && mouseY > 330 & mouseY < 430 && mouseIsPressed)
	{
		canvasID = 201;
		score = 0;

	}
	if (mouseX > 300 & mouseX < 500 && mouseY > 460 & mouseY < 560 && mouseIsPressed)
	{
		canvasID = 301;
		score = 0;

	}

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
		isButtonClicked(1,102)
		showScore();

	}
	else if (canvasID == 102)
	{
		image(easyquestion2,0,0);
		isButtonClicked(1,103)
		showScore();

	}
	else if (canvasID == 103)
	{
		image(easyquestion3,0,0);
		isButtonClicked(3,104)
		showScore();
	}
	else if (canvasID == 104)
	{
		image(easyquestion4,0,0);
		isButtonClicked(2,105)
		showScore();
	}
	else if (canvasID == 105)
	{
		image(easyquestion5,0,0);
		isButtonClicked(3,106)
		showScore();
	}
	else if (canvasID == 106)
	{
		image(easyquestion6,0,0);
		isButtonClicked(2,107)
		showScore();
	}
	else if (canvasID == 107)
	{
		image(easyquestion7,0,0);
		isButtonClicked(4,108)
		showScore();
	}
	else if (canvasID == 108)
	{
		image(easyquestion8,0,0);
		isButtonClicked(1,109)
		showScore();
	}
	else if (canvasID == 109)
	{
		image(easyquestion9,0,0);
		isButtonClicked(2,110)
		showScore();
	}
	else if (canvasID == 110)
	{
		image(easyquestion10,0,0);
		isButtonClicked(3,100)
		showScore();
	}


	else if (canvasID == 201)
	{
		image(mediumquestion1,0,0);
		isButtonClicked(3,202)
		showScore();
	}
	else if (canvasID == 202)
	{
		image(mediumquestion2,0,0);
		isButtonClicked(3,203)
		showScore();
	}
	else if (canvasID == 203)
	{
		image(mediumquestion3,0,0);
		isButtonClicked(1,204)
		showScore();
	}
	else if (canvasID == 204)
	{
		image(mediumquestion4,0,0);
		isButtonClicked(4,205)
		showScore();
	}
	else if (canvasID == 205)
	{
		image(mediumquestion5,0,0);
		isButtonClicked(2,206)
		showScore();
	}
	else if (canvasID == 206)
	{
		image(mediumquestion6,0,0);
		isButtonClicked(3,207)
		showScore();
	}
	else if (canvasID == 207)
	{
		image(mediumquestion7,0,0);
		isButtonClicked(4,208)
		showScore();
	}
	else if (canvasID == 208)
	{
		image(mediumquestion8,0,0);
		isButtonClicked(3,209)
		showScore();
	}
	else if (canvasID == 209)
	{
		image(mediumquestion9,0,0);
		isButtonClicked(1,210)
		showScore();
	}
	else if (canvasID == 210)
	{
		image(mediumquestion10,0,0);
		isButtonClicked(4,100)
		showScore();
	}


	else if (canvasID == 301)
	{
		image(hardquestion1,0,0);
		isButtonClicked(3,302)
		showScore();
	}
	else if (canvasID == 302)
	{
		image(hardquestion2,0,0);
		isButtonClicked(4,303)
		showScore();
	}
	else if (canvasID == 303)
	{
		image(hardquestion3,0,0);
		isButtonClicked(1,304)
		showScore();
	}
	else if (canvasID == 304)
	{
		image(hardquestion4,0,0);
		isButtonClicked(3,305)
		showScore();
	}
	else if (canvasID == 305)
	{
		image(hardquestion5,0,0);
		isButtonClicked(2,306)
		showScore();
	}
	else if (canvasID == 306)
	{
		image(hardquestion6,0,0);
		isButtonClicked(4,307)
		showScore();
	}
	else if (canvasID == 307)
	{
		image(hardquestion7,0,0);
		isButtonClicked(2,308)
		showScore();
	}
	else if (canvasID == 308)
	{
		image(hardquestion8,0,0);
		isButtonClicked(3,309)
		showScore();
	}
	else if (canvasID == 309)
	{
		image(hardquestion9,0,0);
		isButtonClicked(1,310)
		showScore();
	}
	else if (canvasID == 310)
	{
		image(hardquestion10,0,0);
		isButtonClicked(3,100)
		showScore();
	}

}

function showScore()
{
	fill(0,0,0);
	text(score,10,10);
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
					if (!correctSound.isPlaying())
					{
						correctSound.play();
					}
					score += 10;
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
			score -= 0;
			if (!incorrectSound.isPlaying())
			{
				incorrectSound.play();
			}
			canvasID = nextID;

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










