var boy,bgimg,boyimg,track,trackImg
function preload(){
bgimg=loadImage("bg.jpg")
trackImg=loadImage("track.jpg")
boyimg=loadAnimation("Runner-1.png","Runner-2.png")


}

function setup() {
    createCanvas(windowWidth, windowHeight);
bg=createSprite(windowWidth/2, windowHeight/3);
//bg.addImage("track",bgimg)
track=createSprite(windowWidth/3, windowHeight/2);
track.addImage("track",trackImg)
track.velocityY=4

boy=createSprite(600,650,20,20);

boy.addAnimation("naitikRunner",boyimg)
boy.scale=0.09
}

function draw() {
 background (0)

if (track.y>700){
track.y=windowHeight/2



}

if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-3

    
}
console.log("LEFTSIDE",boy.x)
if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+3
}
if(boy.x<80||boy.x>600){
boy.x=300
boy.y=600

}





 drawSprites()


 
}