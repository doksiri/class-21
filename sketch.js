var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.debug=true;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug=true;
}

function draw() {
  background(0,0,0); 

  if(isTouching(bullet,wall)){
    bullet.shapeColor = "white";
  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor = "green";
    }
    if(damage<10){
      wall.shapeColor = "red";
    }
  }

drawSprites();
}

function isTouching(object1,object2){
  if (object1.x -object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
 return false;
}
}

function hasCollided(bullet1, wall1){
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
}

