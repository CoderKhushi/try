

var ground;
var Box1,Box2,Box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    Box1=new Box(330,555,100,8,PI)

    
    Box2=new Box(252,535,8,50,PI/2)


    Box3=new Box(405,535,8,50,PI/2)
	
	
	paper1=new Paper(40,200,10)
    
	ground = new Ground(200,height,1200,20)
  
   

  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  ground.display()
  Box1.display()
  Box2.display()
  Box3.display()
  keyPressed()
  drawSprites();
  Engine.update(engine)
}
function keyPressed(){
  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }
}


