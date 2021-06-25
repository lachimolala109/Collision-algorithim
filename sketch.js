var fixedRect, movingRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green"
  fixedRect.debug = true
  movingRect = createSprite(600, 400, 80, 30);
  movingRect.shapeColor = "green"
  movingRect.debug = true
}

function draw() {
  background(255,255,255);  
  console.log (movingRect.x - fixedRect.x)
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "blue"
    fixedRect.shapeColor = "blue"
  }
  else {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  drawSprites();
}