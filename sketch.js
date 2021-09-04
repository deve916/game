var i_jungle
 var ground;
 var i_monkey
function preload(){
i_jungle = loadImage("jungle.jpg");
i_monkey = loadImage("ali.png");
}

function setup() {
  createCanvas(1200,600);
 ground = createSprite(600,550,1200,100);
 ground.shapeColor ='limegreen';
 monkey = createSprite(100,500);
 monkey.addImage('**%#',i_monkey);
 monkey.scale = 0.4
}

function draw() {
  background(i_jungle);  
  
  drawSprites();
}