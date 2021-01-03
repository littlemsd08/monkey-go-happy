
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(80,315,10,10)
monkey.addAnimation('moving', monkey_running)
  monkey.scale=0.2;
  
   
  ground = createSprite(300,380,600,20);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
}

function draw() {
background("white")
  if(keyDown("space")){
      monkey.velocityy=-4;
  monkey.velocityY = monkey.velocityY + 0.8; 
  }
  if (ground.x < 0){
      ground.x = ground.width/2; 
    }
  monkey.collide(ground);
  spawnfood()
spawnObstacles() 

  drawSprites();
    if( obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
 foodGroup.setLifetimeEach(-1);
    
    
    
    
    }
}
function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
   banana.y = Math.round(random(80,120));
   banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth =  banana.depth + 1;
    
    //add each cloud to the group
   foodGroup.add(banana);
  }
  
}


function spawnObstacles() {
  if(frameCount % 120 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6 
    obstacle.addImage(  "obstaceImage");
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}







