const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

function preload(){
    cenario = loadImage("fundo.gif")

}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    parado = { isStatic: true };

    solo = Bodies.rectangle(width/2, height-2, width, 2, parado);
    World.add(world, solo);


    rectMode(CENTER);
    

}

function draw() {
    Engine.update(engine);
    background("cyan");

    fill("green")
    //solo
    rect(solo.position.x, solo.position.y, width, 2);
    
}