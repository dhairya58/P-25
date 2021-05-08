
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d;
function preload()
{
	d=loadImage("box.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,690,800,20)
	ground1=new Ground(700,675,120,15)
	ground2=new Ground(650,650,15,70);
	ground3=new Ground(755,650,15,70);
	paper=new Paper(50,670,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ground1.display()
  ground2.display()
  ground3.display()
  paper.display()
  image(d,580,485,200,200)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-65})
	  
	}
}
 



