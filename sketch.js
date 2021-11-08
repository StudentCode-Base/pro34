var bathIMG, bath;
var brushIMG, brush;
var eatingA, eating;
var drinkingA, drink;
var gymA, gym;
var moveA, move;
var sleepA, astronaut;
var bgIMG, BG;

function preload(){
  bgIMG = loadImage("iss.png")
  brushIMG = loadAnimation("brush.png")
  eatingA = loadAnimation("eat1.png","eat2.png")
  drinkingA = loadAnimation("drink1.png","drink2.png")
  gymA = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  moveA = loadAnimation("move.png","move1.png")
  sleepA = loadAnimation("sleep.png")
}

function setup() {
  createCanvas(800,400);
 
  astronaut = createSprite(400,200)
  astronaut.scale = 0.1
  astronaut.addAnimation("sleep",sleepA)
}



function draw() {
  background(BG);
  drawSprites();
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");

  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");

  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");

  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");

  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
  }

}