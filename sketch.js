var tom,tomImage1,tomImage2,tomImage3,jerry,jerryImage1,jerryImage2,jerryImage3,ground,groundImage;
function preload() {
    //load the images here
    tomImage1=loadImage("tomOne.png");
    tomImage2=loadAnimation("tomTow.png,tomThree.png");
    tomImage3=loadImage("tomFour.png");
    jerryImage1=loadImage("jerryOne.png");
    jerryImage2=loadAnimation("jerryTwo.png,jerryThree.png");
    jerryImage3=loadImage("jerryFour.png");
    groundImage=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(200,200,20,20);
    tom.addImage(tomImage1);
    tom.scale=1;
    jerry=createSprite(150,150,20,20);
    jerry.addImage(jerryImage1);
    jerry.scale=1;
    ground=createSprite(200,200,20,20);
    ground.addImage(groundImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
     tom.addImage(tomImage3);
     jerry.addImage(jerryImage3);
     tom.velocityX=0;
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomImage2);
    tom.changeAnimation("tomrunning");
    jerry.addAnimation("jerrylaughing",jerryImage2);
    jerry.changeAnimation("jerrylaughing");
    }

}
