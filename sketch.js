const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 620);



	engine = Engine.create();
	world = engine.world;


 ground = new Ground(width/2,height-40,width,10);
 paper1 = new Paper(50,200,20)
 dustbin1 = new Dustbin(1010,height-150);



	//Engine.run(engine);
  


}

function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  ground.display();
  paper1.display();
  dustbin1.display();
 
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position , {x:87,y:-70});
  
 }
}


