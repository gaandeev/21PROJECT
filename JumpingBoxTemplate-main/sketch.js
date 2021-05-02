var canvas;
var music;
var block1,block2,block3,block4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,500,360,30);
    block1.shapecolor = ("red");

    block2 = createSprite(295,500,200,30);
    block2.shapecolor = ("green");

    block3 = createSprite(515,500,200,30);
    block3.shapecolor = ("orange");

    block4 = createSprite(740,500,220,30);
    block4.shapecolor = ("skyblue");


    //create box sprite and give velocity
    ball = createSprite(random(20,750,),100,40,40);
    ball.shapecolor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprite();
    ball.bounceOff(edges);

    if(block1.isTouching(ball)  && ball.bounceOff(block1)){
        block1.shapecolor = ("red");
        music.piay();
    }

    if(block2.isTouching(ball)  && ball.bounceOff(block2)){
        block2.shapecolor = ("green");
        music.play();
    }

    if(block3.isTouching(ball)  && ball.bounceOff(block3)){
        block3.shapecolor = ("orange");
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop(); 
    }

    if(block4.isTouching(ball)  && ball.bounceOff(block4)){
        block4.shapecolor = ("skyblue");
        music.play();
    }


    
    
     drawSprites();
}
