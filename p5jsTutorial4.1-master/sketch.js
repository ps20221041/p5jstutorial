// declare bcm variable
var bcm;

function preload()
{
	// load sound file into variable bgm
	bcm = loadSound("https://ps20221041.github.io/p5jstutorial/p5jsTutorial4.1-master/bensound-creativeminds.mp3");

}

function setup()
{
	createCanvas(800,600);

	// play music during setup so that it doesn't loop infinitely
	bcm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com",10,40);


}

