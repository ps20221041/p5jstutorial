var question1;
var question2;
var question3;
var questionX;
var questionY;
var questionLength;
var questionHeight;
var health;

var canvasID;
var locked;

var numberOfAnswers;

function preload()
{
	// numberOfAnswers is how many multiple choice the player has
	numberOfAnswers = 4;
	questionLength = 126;
	questionHeight = 40;

	questionX = [100,100,100,100,100];
	questionY = [50,100,150,200,250];


	question1 = new Array(numberOfAnswers);
	question2 = new Array(numberOfAnswers);
	question3 = new Array(numberOfAnswers);
	question4 = new Array(numberOfAnswers);
	question5 = new Array(numberOfAnswers);
	question6 = new Array(numberOfAnswers);
	question7 = new Array(numberOfAnswers);
	question8 = new Array(numberOfAnswers);
	question9 = new Array(numberOfAnswers);
	question10 = new Array(numberOfAnswers);

	question1[1] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_747-100.jpg');
	question1[2] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_747-300.jpg');
	question1[3] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_747-400.jpg');
	question1[4] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_747-8.jpg');

	question2[1] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a320-100.jpg');
	question2[2] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a320-200.jpg');
	question2[3] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a321.jpg');
	question2[4] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a321neo.jpg');

	question3[1] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_737-200.jpg');
	question3[2] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_737-400.jpg');
	question3[3] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_737-800.jpg');
	question3[4] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_737-900.jpg');

	question4[1] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_tu-154a.jpg');
	question4[2] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_tu-154b.jpg');
	question4[3] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_tu-154m.jpg');
	question4[4] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_tu-154s.jpg');

	question5[1] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_767-200.jpg');
	question5[2] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_767-300.jpg');
	question5[3] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_767-300F.jpg');
	question5[4] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_767-400.jpg');

	question6[1] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a340-200.jpg');
	question6[2] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a340-300.jpg');
	question6[3] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a340-500.jpg');
	question6[4] = loadImage('https://ps20221041.github.io/p5jstutorial/aeroplane-game/images_hard/button_a340-600.jpg');

}

function setup()
{
	createCanvas(1000,800);

	health = 300;
	canvasID = 0;
	locked = false;
}

function draw()
{
	background(0,0,0);

	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 0)
	{
		showQuestions(question1);
		isButtonClicked(0,1)
	}
	else if (canvasID == 1)
	{
		showQuestions(question2);
		isButtonClicked(0,2)
	}
	else if (canvasID == 2)
	{
		showQuestions(question3);
		isButtonClicked(1,0)
	}

	showHealth();

}

// shows your health bar and check if you are dead or not
function showHealth()
{
	fill(0,255,0);
	rect(300,30,health,25);
	fill(0,0,0);
	text(health,300+10,30+20)
	if (health <= 0)
	{
		canvasID = -1;
	}
}

// checks what happens when you click on a button
function isButtonClicked(correct,nextID)
{
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
			health = health - 50;
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










