var ball;
function preload() {
    Theimage = loadImage("pro-C35 images/Hot Air Ballon-02.png");
    Theimage2 = loadImage("pro-C35 images/Hot Air Ballon-01.png");
    Theimage3 = loadImage("pro-C35 images/Cloud.png");
}
function setup(){
    clouds = [];
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    //Coll = new Ball(200,200,50);
    ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
    ball.shapeColor = "red";
    keys = [];
    rectMode(CENTER);
    ball.addImage(Theimage);
    ball.scale = 0.3;
}

function draw(){
    background(Theimage2);
    if(keys[LEFT_ARROW]){
        writePosition(-1,0);
    }
    else if(keys[RIGHT_ARROW]){
        writePosition(1,0);
    }
    else if(keys[UP_ARROW]){
        writePosition(0,-1);
    }
    else if(keys[DOWN_ARROW]){
        writePosition(0,+1);
    }
    drawSprites();
    //Coll.display();
    
}

function writePosition(x,y){
    database.ref('ball/position').set(
        {
            'x':Pos.x + x,
            'y':Pos.y + y
        }
    );

}

function keyPressed(){
    keys[keyCode] = true;
}
function keyReleased (){
    keys[keyCode] = false;
}
function readPosition(data){
    Pos = data.val();
    console.log(Pos);
    ball.x = Pos.x;
    ball.y = Pos.y;
}
function showError(){

}