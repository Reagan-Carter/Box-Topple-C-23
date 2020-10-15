const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var MyEngine,MyWorld

var box1,box2;
var ground1;
function setup() {
  createCanvas(800,400);
MyEngine= Engine.create()
MyWorld= MyEngine.world;

box1=new box(200,300,50,50);
box2=new box(240,100,50,100);

ground1=new ground(400,380,800,20);
}

function draw() {
  background(0);  
  Engine.update(MyEngine);
  
  box1.display();
  box2.display();

  ground1.display();
}