
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(80,315,15,15)
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1

  ground = createSprite(400,350,900,10);
  
  
  score = 0;  
  
}

function draw() {
  
  background("white");
  
  var survivalTime = 0;
  stroke("black")
  textSize(20);
  fill("black")
  text("Survial Time: " + score,150,50)
  
  score = Math.round(frameCount/frameRate())
  
 if(keyDown("space") && monkey.y >= 305) {
    
     monkey.velocityY = -14
  }
  
  //console.log(monkey.y)
  
  spawnObstacles();
  spawnBanana();
  
  monkey.velocityY = monkey.velocityY + 0.6
  monkey.collide(ground);
  
  if(ground.x < 0){
  ground.x=ground.width/2;
  }
  ground.velocityX = -4;
  
  
  
  
  drawSprites();
}

function spawnBanana(){

  if(frameCount % 60 === 0) {
    banana = createSprite(400,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -6
    banana.lifetime = 80;
    banana.scale= 0.1
    
  }
}

function spawnObstacles(){

if(frameCount % 300 === 0) {
  
  obstacle = createSprite(400,325,10,10);
  obstacle.lifetime = 200;
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -8;
  obstacle.scale = 0.15;
  }
}




