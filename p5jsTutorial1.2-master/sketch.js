function setup()
{
  createCanvas(700,500);
  
}

function draw()
{
	background(255,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(0,0,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,0,0);

	// modifies the thickness of the border of an object
	strokeWeight(15);


	rect(69,10,100,50);
	rect(200,100,200,50);


	fill(50,255,20);    
	stroke(255,255,255);
	strokeWeight(5);

	rect(260,10,100,50);
	rect(400,10,100,50);	

}