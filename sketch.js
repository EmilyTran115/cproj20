var car, wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1400,200,30,height/2)
  wall.shapeColor=color(80,80,80)
  car=createSprite(50,200,50,50)
  car.velocityX=speed=10;
  
}

function draw() {
  background(0); 
  console.log(wall.x)
  console.log(car.x)
  if (car.x+car.width/2===wall.x-wall.width/2){
car.velocityX=speed=0
car.shapeColor=color(0,255,0)
  }
  drawSprites();
}