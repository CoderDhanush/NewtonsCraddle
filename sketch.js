
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject,bobObject2,bobObject3,bobObject4,bobObject5
var roofObject,testingRoof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject=new Bob(270,420,40)
	bobObject2=new Bob(310,420,40)
	bobObject3=new Bob(350,420,40)
	bobObject4=new Bob(390,420,40)
	bobObject5=new Bob(430,420,40)
	roofObject=new Roof(350,200,250,20)
    testingRoof=new Roof(width/2,670,width,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  testingRoof.display();
  
  
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:85,y:-85});
  
	}
}

