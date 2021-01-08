var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(10,99);
  weight = random(400,1500);

  bullet = createSprite(50,200,8,3);
  bullet.velocityX = speed;
  
  wall = createSprite(1000,200,10,350);
  wall.shapeColor=color("yellow");
  
}

function draw() {
  background("black"); 
  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) 
  {
bullet.velocityX=0;
var deformation=0.5*width*speed*speed/22509

if (deformation>180) {
  wall.shapeColor=color("green");
}
if (deformation<180 && deformation>100) {
  wall.shapeColor=color("orange");
}
if (deformation<100) {
  wall.shapeColor=color("red");
}
    
  }

  drawSprites();
}