var mrect;
var frect;



function setup() {


  createCanvas(800,400);
  mrect=createSprite(400, 200, 80, 50);
  mrect.shapeColor="black";
  frect=createSprite(100, 200, 50, 80);
  frect.shapeColor="black";
}

function draw() {
  background(255,255,255);  

mrect.y=World.mouseY
mrect.x=World.mouseX


if(mrect.x-frect.x <= mrect.width/2+frect.width/2 && 
  frect.x-mrect.x <= mrect.width/2+frect.width/2 && 
  mrect.y-frect.y <= mrect.height/2+frect.height/2 && 
  frect.y-mrect.y <= mrect.height/2+frect.height/2)
{mrect.shapeColor="blue";
frect.shapeColor="blue";

}
else{
  mrect.shapeColor="black";
  frect.shapeColor="black";
}
  drawSprites();
}
