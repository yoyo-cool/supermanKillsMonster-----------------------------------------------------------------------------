const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world

function preload() {
//preload the images here
bg= loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1400, 800);
  engine=Engine.create()
  world = engine.world
  // create sprites here
  ground1=new Ground(500,500,1000,20)
  hero1=new hero(200,200,300,200)
  block1=new Block(500,350,50,50)
  block2=new Block(550,350,50,50)
  block3=new Block(550,350,50,50)
  block4=new Block(500,350,50,50)
  block5=new Block(550,350,50,50)
  block6=new Block(500,350,50,50)
  block7=new Block(550,350,50,50)
  block8=new Block(500,350,50,50)
  block9=new Block(550,350,50,50)
  block10=new Block(500,250,50,50)
  block11=new Block(550,250,50,50)
  block12=new Block(500,250,50,50)
  block13=new Block(550,250,50,50)
  block14=new Block(500,350,50,50)
  block15=new Block(550,250,50,50)
  monster1=new monster(800,350,200,200)
  SlingShot1=new SlingShot(hero1.body,{x:250,y:300})

  Engine.run(engine)
}

function draw() {
  background(bg);
  ground1.display()
  hero1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  monster1.display()
  SlingShot1.display()

}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})
}
