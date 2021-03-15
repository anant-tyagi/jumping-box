var canvas; 
var music;
var block1, block2, block3, block4;
var ball, edge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "yellow";
    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "brown";
    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green";
    //create 4 different surfaces
    ball = createSprite(10,200,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.veloctiyY = 9;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edge = createEdgeSprites();
ball.bounceOff(edge);

if(block1.isTouching(ball)){
ball.shapeColor = "blue";
music.play();

}
if(block2.isTouching(ball)){
ball.shapeColor = "yellow"

}
if(block3.isTouching(ball)){
ball.shapeColor = "brown"

}
if(block4.isTouching(ball)){
    ball.shapeColor = "green";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();


}
drawSprites();
    //add condition to check if box touching surface and make it box
}
