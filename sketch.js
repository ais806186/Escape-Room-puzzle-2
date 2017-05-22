
var ellipseX;
var ellipseY;

var ellipse2X; 
var ellipse2Y; 

var lock;
var lock2;
var lock3;
var permanentLock1;
var permanentLock2;
var permanentLock3;

var stickLocation0X;
var stickLocation0Y;

var stickLocation1X;
var stickLocation1Y;

var stickLocation2X;
var stickLocation2Y;

var stickLocation3X;
var stickLocation3Y;

var itemGrid;
function preload()
{
  typewriter = loadImage('https://dl.dropbox.com/s/w7y7g08g2peuypz/Typewriter.jpg')
  codemachine = loadImage('https://dl.dropbox.com/s/mk87rtn5h68xlt1/page5-screenshot_1.png?dl=0');
  button1 = loadImage('https://dl.dropbox.com/s/1m9y12sdyyr3qy4/typewriter%20key.png')
  a = loadImage('https://dl.dropbox.com/s/p7w72p2jevho9q1/a.png')

  e = loadImage('https://dl.dropbox.com/s/54mf7t3mlrne97f/e.png');
}


function setup()
{
  createCanvas(800,600);
  ellipseOrientation = 0;
  ellipseX = 240;
  ellipseY = 490;

ellipse2X = 320;
ellipse2Y = 494;

stickLocation0X = 280;
stickLocation0Y = 149;
  
  stickLocation1X = 290;
  stickLocation1Y = 228;
  
  stickLocation2X = 326;
  stickLocation2Y = 288;

  stickLocation3X = 428;
  stickLocation3Y = 335;
  
  
  lock = false;
  lock2 = false;
  lockellipseOrientation = false;

  permanentLock1 = false;
}

function draw()
{
  background(255,255,255);
  image(typewriter,180,100);
  fill(0,0,0);
  //a
  rect(272,210,35,35);
  //j
  ellipse(325,288,30,30);
//s
  ellipse(428,335,30,30);

//big box
  fill(125,125,125);
  rect(110,455,600,75);
  // small box 1
  fill(50,50,50);
  rect(220,465,55,55);
//small box 2
fill(50,50,50);
  rect(300,465,55,55);
//small box 3
  fill (50,50,50);
  rect(380,465,55,55);
  
  //small box 4
  fill (50,50,50);
  rect(460,465,55,55);
  
  //small box 5 
  fill (50,50,50);
  rect(540,465,55,55);

  moveellipse1();
  changeellipse();
   fill(0,0,0);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)

  fill(0,0,0,0);
  stroke(255,255,255,0);
  ellipse(stickLocation1X,stickLocation1Y,30,30);

  ellipse(stickLocation2X,stickLocation2Y,30,30);

  ellipse(stickLocation3X,stickLocation3Y,30,30);


}

function moveellipse1()
{
  if (permanentLock1 == false)
fill(100,100,100);
 ellipseDistance = sqrt((ellipseX-mouseX)*(ellipseX-mouseX)+(ellipseY-mouseY)*(ellipseY-mouseY))
if(ellipseDistance< 20)

    {
      if (mouseIsPressed == true && mouseButton == LEFT && lock == false && lock2 == false)
      {
        lock = true;
      }
    }

    if (lock == true)
    {
      fill(255,0,0);
      ellipseX = mouseX;
      ellipseY = mouseY;

stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY))
stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY))
stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY))

      if (stickDistance < 10)
      {
        fill(255,255,255);
        ellipseX = stickLocation1X;
        ellipseY = stickLocation1Y;
        permanentLock1 = true;
      }
      else if(stickDistance2 < 10)
      {

         fill(255,255,255);
        ellipseX = stickLocation2X;
        ellipseY = stickLocation2Y;
        permanentLock2 = true;
      }

      if(stickDistance3 < 20)
      {
        fill(255,255,255)
        ellipseX = stickLocation3X;
        ellipseY = stickLocation3Y;
        permanentLock3 = true; 
      }

    }

}


function changeellipse()
{
  
    if (mouseIsPressed == true && mouseButton == LEFT && lockellipseOrientation == false)
    {
  
          ellipseOrientation = 0;

      lockellipseOrientation = true;
    }
  
  if (ellipseOrientation == 0)
  {
    image(a,ellipseX-20,ellipseY-20,40,40);
  }
 
}



function mouseReleased()
{
    if (lock)
    {
      lock = false;
    }
  
    if (lock2)
    {
       lock2 = false;

    }


}

function itemGrid()
{
//big box
  fill(125,125,125);
  rect(110,455,600,75);
  // small box 1
  fill(50,50,50);
  rect(220,465,55,55);
//small box 2
fill(50,50,50);
  rect(300,465,55,55);
//small box 3
  fill (50,50,50);
  rect(380,465,55,55);
  
  //small box 4
  fill (50,50,50);
  rect(460,465,55,55);
  
  //small box 5 
  fill (50,50,50);
  rect(540,465,55,55);
  
  image(right,650,470,50,50);
  image(left,125,460,60,70);
  
}