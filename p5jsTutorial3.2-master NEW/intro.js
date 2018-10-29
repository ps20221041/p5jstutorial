var imageIntroTitle;

function preloadIntro()
{
	imageIntroTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleIntro.png');	
}

function setupIntro()
{

}

function drawIntro()
{
	background(125,125,125)

	image(imageIntroTitle,400,50);

	if (mouseIsPressed)
	{
		canvasID = -1;
	}
}
