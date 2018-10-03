var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 200;
  button2Y = 10;

  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y + 50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Shanghai",215,40);
		if (mouseIsPressed == true)
		{
			fill(47,247,114);
			stroke(0,0,0);
			strokeWeight(3);
			rect(200,10,100,50);	
			fill(255,255,255);
			stroke(0,0,0);
			textSize(12);
			text("Academy",215,40);				
		}
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);

	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Victoria",215,40);
}

	// Example 1: easy to understand - End
