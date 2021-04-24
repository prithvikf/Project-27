
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var string1,string2,string3,string4,string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,400,30);
	bob2 = new Bob(360,400,30);
	bob3 = new Bob(420,400,30)
	bob4 = new Bob(480,400,30);
	bob5 = new Bob(540,400,30)

	roof = new Ground(415,200,300,30);

	string1 =new Rope(bob1.body,{x:300,y:200});
	string2 =new Rope(bob2.body,{x:360,y:200});
	string3 =new Rope(bob3.body,{x:420,y:200});
	string4 =new Rope(bob4.body,{x:480,y:200});
	string5 =new Rope(bob5.body,{x:540,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(bob5.body,{x:mouseX, y:mouseY});
}

