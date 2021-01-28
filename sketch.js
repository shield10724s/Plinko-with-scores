const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var score=0;
var turn=0;

var particle;
var plinkos = [];
var divisions = [];

var gameState = 'play';

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,790,800,10);

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k, height - divisionHeight/2-5, 10, divisionHeight));
  }

  for(var j = 40;j <=width;j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15;j <=width-10;j = j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40;j <=width;j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15;j <=width-10;j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  Engine.run(engine);
}

function draw() {
  background('black');

  textSize(25);
  text('Score : '+score,0,30);

  text('500',15,550);
  text('500',100,550);
  text('500',175,550);
  text('100',255,550);
  text('100',335,550);
  text('100',415,550);
  text('100',495,550);
  text('200',580,550);
  text('200',660,550);
  text('200',740,550);

  ground.display();

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500;
        particle=null;
        if(turn>=5)gameState='end';
      }
    } 
  }

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score+100;
        particle=null;
        if(turn>=5)gameState='end';
      }
    }
  }

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x>601 && particle.body.position.x<900){
        score = score+200;
        particle=null;
        if(turn>=5)gameState='end';
      }
    }
  }

  if(gameState==='end'){
    fill('yellow');
    textSize(130);
    text('Game Over',30,300);
  }

  for(var k = 0;k < divisions.length;k++){
    divisions[k].display();
  }
  for(var j= 0;j < plinkos.length;j++){
    plinkos[j].display();
  }
}

function mousePressed(){
  if(gameState!=='end'){
    turn++;
    particle = new Particle(mouseX,10,10);
  }
}