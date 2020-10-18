// namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    object1 = new Box();
    // object creation
}

function draw(){
    background(0);
    Engine.update(engine);
    
    object1.display();
}