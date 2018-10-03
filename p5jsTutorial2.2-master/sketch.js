var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 200;
  button2Y = 10;
  button3X = 300;
  button3Y = 400;
  button4X = 250;
  button4Y = 100

  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start
{
	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y + 50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button2X,button2Y,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Shanghai",button2X + 15,button2Y + 30);
		if (mouseIsPressed == true)
		{
			fill(47,247,114);
			stroke(0,0,0);
			strokeWeight(3);
			rect(button2X,button2Y,100,50);	
			fill(255,255,255);
			stroke(0,0,0);
			textSize(12);
			text("Academy",button2X + 15,button2Y + 30);				
		}
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button2X,button2Y,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Victoria",button2X + 15,button2Y + 30);
}

{

	if (mouseX > button3X && mouseX < button3X + 100 && mouseY > button3Y && mouseY < button3Y + 50)
	{
		fill(0,255,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button3X,button3Y,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Amazon",button3X + 15,button3Y + 30);
		if (mouseIsPressed == true)
		{
			fill(255,0,0);
			stroke(0,0,0);
			strokeWeight(3);
			rect(button3X,button3Y,100,50);	
			fill(255,255,255);
			stroke(0,0,0);
			textSize(12);
			text("Nile",button3X + 15,button3Y + 30);				
		}
	}
	else
	{
		fill(127,0,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button3X,button3Y,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Danube",button3X + 15,button3Y + 30);
	}


}

{

	if (mouseX > button4X && mouseX < button4X + 100 && mouseY > button4Y && mouseY < button4Y + 50)
	{
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button4X,button4Y,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Joy",button4X + 15,button4Y + 30);
		if (mouseIsPressed == true)
		{
			fill(255,0,255);
			stroke(0,0,0);
			strokeWeight(3);
			rect(button4X,button4Y,100,50);	
			fill(255,255,255);
			stroke(0,0,0);
			textSize(12);
			text("Virtue",button4X + 15,button4Y + 30);				
		}
	}
	else
	{
		fill(0,0,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button4X,button4Y,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Peace",button4X + 15,button4Y + 30);
	}


}

}


}


	// Example 1: easy to understand - End
