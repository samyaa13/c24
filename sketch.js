
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, ground, stone1, stone2, rubber1,rubber2,rubber3;
var rubber4,rubber5,rubber6,rubber7,rubber8,rubber9,rubber10,rubber11;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,200,100,20);
	ground = new ground(600,height,1700,30);
	stone1 = new Stone(1000,600,60,60);
	stone2 = new Stone(400,600,60,30);
	rubber1 = new Rubber(600,600,10);
	rubber2 = new Rubber(602,600,10);
	rubber3 = new Rubber(604,600,10);
	rubber4 = new Rubber(606,600,10);
	rubber5 = new Rubber(608,600,10);
	rubber6 = new Rubber(610,600,10);
	rubber7 = new Rubber(612,600,10);
	rubber8 = new Rubber(614,600,10);
	rubber9 = new Rubber(616,600,10);
	rubber10 = new Rubber(618,600,10);
	rubber11 = new Rubber(1200,600,60);
	console.log(circle11);

	Engine.run(engine);
  
} 


function draw() {
  rectMode(CENTER);
  background("lavender");
  Engine.update(engine);
  console.log(box2,body.position.x)
  hammer.display();
  ground.display();
  stone1.display();
  stone2.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  rubber4.display();
  rubber5.display();
  rubber6.display();
  rubber7.display();
  rubber8.display();
  rubber9.display();
  rubber10.display();
  rubber11.display();
  drawSprites();
 
}



