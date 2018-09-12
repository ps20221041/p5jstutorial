var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 250 && mouseX < 250 + 200 && mouseY > 200 && mouseY < 200+50)
	{
		fill(100,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(250,200,200,50);	
		fill(255,255,255);
		stroke(0,0,0);
		textSize(27);
		text("Task Force 141",260,235);
	
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(250,200,200,50);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Task Force 141",310,230);
	
	}

}