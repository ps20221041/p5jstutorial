var button2X;
var button2Y;

var button3X;
var button3Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;

  button3X = 300;
  button3Y = 300;
  
}

function draw()
{
	background(125,125,125)


	if (mouseX > button3X && mouseX < button3X + 200 && mouseY > button3Y + 50 && mouseY < button3Y + 100)
	{
		fill(100,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button3X-50,button3Y+50,300,50);	
		fill(255,255,255);
		stroke(0,0,0);
		textSize(27);
		text("V1... Rotate!",button3X+25,button3Y+85);
	
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(button3X,button3Y+50,200,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(20);
		text("Thrust set",button3X+55,button3Y+83);
	
	}

}