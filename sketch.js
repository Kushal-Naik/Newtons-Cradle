
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter = 80;

	roofObject = new Roof(500, 200, 300, 20);

	bobObject1 = new Bob(380, 500, 60);
	bobObject2 = new Bob(440, 500, 60);
	bobObject3 = new Bob(500, 500, 60);
	bobObject4 = new Bob(560, 500, 60);
	bobObject5 = new Bob(620, 500, 60);

	rope1 = new Rope(bobObject1.body, roofObject.body, -120, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -60, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, +60, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, +120, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(99);
  
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  fill("white");
  textSize(24);
  text("PRESS THE UP ARROW KEY TO SWING THE LEFT PENDULUM", 150,100);
  

  //console.log(bobObject1.body);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-240,y:0});
	}
}

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
//    		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
// 	}
// }
