//Tatyana Lee

//Pumpkin race for two players
//https://p5js.org/examples/structure-loop.html Reference used
//http://coursescript.com/notes/interactivecomputing/objects/
//Name for the variables
var pumpkin;

function setup ()
{
  createCanvas(800, 400);
  background(50, 205, 50, 215);
  //Create Object
  pumpkin = new PumpkinCart();
}

function draw()
{
  //stopping cart
  if(pumpkin.x > 600)
  {
    pumpkin.brake();
  }

  pumpkin.display();
  pumpkin.move();
}

//Making the object move
function keyPressed()
{
  pumpkin.x = 0;
  pumpkin.speed = 2;
}

function PumpkinCart()
{
  this.x = 0;
  this.y = 200;
  this.speed = 2;

  // drive method
  this.move = function()
  {
    if(this.x > width)
    {
      this.x = 0;
    }
    this.x = this.x + this.speed;
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

  //the Actual cart
  this.display = function ()
  {
    push();
    //body
    noStroke();
    fill(218, 165, 32);
    ellipse(this.x, this.y, 100, 100);
    ellipse(this.x, this.y, 100, 100);

    //wheels
    fill(0);
    ellipse(this.x, this.y, 50, 50);
    ellipse(this.x, this.y, 50, 50);

    //eyes
    triangle(30, 200, 50, 200, 40, 175);
    triangle(100, 200, 120, 200, 110, 175);
    pop();
  }
}
