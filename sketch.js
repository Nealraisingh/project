function preload(){
treximage=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
} 
function setup(){
createCanvas(400,400)
trex=createSprite(50,350,10,10)
ground=createSprite(200,380,400,5)
trex.addAnimation("trex",treximage)
ground.addImage("ground",groundimage)
 trex.scale=0.5
 edges=createEdgeSprites()
}
function draw(){
  if(keyDown("space")){
    trex.velocityY=-9

  }
  trex.velocityY=trex.velocityY+0.8
background("white")
drawSprites()
trex.collide(ground)
}
