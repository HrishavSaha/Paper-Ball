

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ball;
var ground;

var engine, world

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,390,1200,10);

	dustbin1 = new Dustbin(900,375,300,PI/2);
	dustbin2 = new Dustbin(760,335,100,PI);
	dustbin3 = new Dustbin(1040,335,100,PI);

	ball = new Ball(200,250,40);

	Engine.run(engine);
  
}


function draw() {
	
	rectMode(CENTER);
	background(0);
	Engine.update(engine);

	ground.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	ball.display();
 
	if(keyPressed()){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:285,y:-285});
	}

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		keyCode = 1;
		return true;
	}
}
