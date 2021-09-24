var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
 // shipImg = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(seaImg);
  drawSprites();
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
 // sea.velocityY = -3;
 // sea.x = -3;
  sea.velocityX = -3;
 // sea.velocityX = 3;
  

  
    
 
}
