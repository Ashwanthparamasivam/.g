
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
let bgImg;

function preload(){

 bgImg = loadImage('background.png');


}
function setup() {
  createCanvas(400,400);


  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300,height,width,10);




}


function draw() 
{
  background(51);
  image(bgImg, 0, 0);
  text(mouseX+","+mouseY,mouseX,mouseY);


  Engine.update(engine);
 ground.show();


  drawSprites();
}

