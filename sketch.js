
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var paper;
var ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(680,685,130,20);
	dustbin2 = new Dustbin(625,675,20,70);
	dustbin3 = new Dustbin(735,675,20,70);

	ground = new Ground(400,height,800,20);

	paper = new Paper(100,695,25);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  
  drawSprites();

  if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:35});
  }

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paper.display();
 
}



