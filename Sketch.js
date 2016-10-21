var myCar;

function setup()
{
  createCanvas(800, 400);

  // create the car
  myCar = new Car();
}

function draw()
{
  // clear background
  background(46, 139, 87);

  // check the xpos of myCar
  // if myCar is approaching the edge of the screen, apply the brakes
  if(myCar.xpos > 600)
  {
    myCar.brake();
  }

  // drive car
  myCar.drive();

  // display the car
  myCar.display();

  // display the speed
  fill(50);
  noStroke();
  text("Speed: " + myCar.speed, 25, 25);

  // display instructions
  text("Press any key to reset the xpos of myCar", 25, height - 50);
}

function keyPressed()
{
  myCar.xpos = 0;
  myCar.speed = 2;
}

// car constructor
function Car()
{
  this.xpos = 0;
  this.ypos = 200;
  this.speed = 2;
  this.c = color(153, 102, 51);

  // drive method
  this.drive = function()
  {
    if(this.xpos > width)
    {
      this.xpos = 0;
    }
    this.xpos = this.xpos + this.speed;
  }

  // brake method
  this.brake = function()
  {
    if(this.speed > 0)
    {
      this.speed = this.speed - 0.05;
    } else {
      this.speed = 0;
    }
  }

  // display method
  this.display = function()
  {
    // body of the car
    fill(this.c);
    rectMode(CORNER);
    rect(this.xpos, this.ypos, 100, 50);

    // wheels
    fill(0);
    ellipse(this.xpos + 20, this.ypos + 45, 40, 40);
    ellipse(this.xpos + 80, this.ypos + 45, 40, 40);
  }
}
