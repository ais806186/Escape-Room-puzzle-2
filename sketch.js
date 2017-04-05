
var ellipseX;
var ellipseY;

var lock;
var lock2;
var lock3;
var permanentLock1;
var permanentLock2;

var stickLocation1X;
var stickLocation1Y;
var stickLocation2X;
var stickLocation2Y;

var itemGrid;
function preload()
{
  codemachine = loadImage('https://dl.dropbox.com/s/mk87rtn5h68xlt1/page5-screenshot_1.png?dl=0');
}

function setup()
{
  createCanvas(700,700);
  ellipseOrientation = 0;
  ellipseX = 244;
  ellipseY = 494;

  
  stickLocation1X = 223;
  stickLocation1Y = 240;
  
  stickLocation2X = 326;
  stickLocation2Y = 288;
  
  lock = false;
  lock2 = false;
  lockellipseOrientation = false;

  permanentLock1 = false;
}

function draw()
{
  background(255,255,255);
  image(codemachine,180,100);
  fill(0,0,0);
  //a
  ellipse(223,240,30,30);
  //j
  ellipse(325,288,30,30);
//s
  ellipse(429,336,30,30);

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
  changeellipseOrientation1();
   fill(0,0,0);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)

  fill(0,0,0,0);
  ellipse(stickLocation1X,stickLocation1Y,30,30);

  ellipse(stickLocation2X,stickLocation2Y,30,30);
  
}

function moveellipse1()
{
  if (permanentLock1 == false)

    {
      fill(100,100,100);
      if (mouseX>226 && mouseX < 264 && mouseY >478 && mouseY < 516 && mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock == false && lock2 == false)
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

      if (stickDistance < 15)
      {
        fill(255,255,255);
        ellipseX = stickLocation1X;
        ellipseY = stickLocation1Y;
        permanentLock1 = true;
      }
    }

}


function changeellipseOrientation1()
{
  ellipseDistance = 50

  if (ellipseDistance < 30)
  {
  
  
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && lockellipseOrientation == false)
    {
  
          ellipseOrientation = 0;

      lockellipseOrientation = true;
    }
  }
  
  if (ellipseOrientation == 0)
  {
    ellipse(ellipseX,ellipseY,40,40);
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