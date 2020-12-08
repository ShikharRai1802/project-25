const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper, wall1, wall2, wall3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1400);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(700,650,1900,10);

	wall1 = new Wall(1300,635,200,20);
	wall1.shapeColor = ("white");
	wall2 = new Wall(1200,595,20,100);
	wall1.shapeColor = ("white");
	wall3 = new Wall(1400,595,02,100);
	wall1.shapeColor = ("white");
	
	paper = new Paper(100,46,15);

}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();

  
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-0.9});
  }
}


