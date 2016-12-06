//Tatyana Lee

//Pumpkin race for two players
//https://p5js.org/examples/structure-loop.html Reference used
//http://coursescript.com/notes/interactivecomputing/objects/
//Name for the variables
var pumpkin;

function setup () {
  createCanvas(800, 400);
  background(50, 205, 50, 215);
  //Create Object
  pumpkin = new PumpkinCart(width/3, height/3);
}

function draw() {
//if keypressed it moves
  pumpkin.move();
  pumpkin.display();
}

function PumpkinCart(tempX) {
  this.x = tempX;
  this.speed = 2.5;

  // drive method
  this.move = function() {
  this.x = random(-this.speed, this.speed);
  this.y = 0;
};

  //the Actual cart
  this.display = function () {
    push();
    //body
    noStroke();
    fill(218, 165, 32);
    ellipse(50, 200, 100, 100);
    ellipse(100, 200, 100, 100);

    //wheels
    fill(0);
    ellipse(30, 250, 50, 50);
    ellipse(130, 250, 50, 50);

    //eyes
    triangle(30, 200, 50, 200, 40, 175);
    triangle(100, 200, 120, 200, 110, 175);
    pop();
  };
}
