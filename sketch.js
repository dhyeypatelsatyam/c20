
var smallsqure;


function setup(){

  createCanvas(900,400);
  smallsqure = createSprite(23,42,5,5)
}

function draw(){
background("yellow");
  

smallsqure.x=mouseX;


smallsqure.y=mouseY;

if(smallsqure.x>0 && smallsqure.x<300){
  background("rgb(255,48,255)");

}
if(smallsqure.x>100 && smallsqure.x<600){
  background("rgb(255,8,49)");

}
if(smallsqure.x>200 && smallsqure.x<900){
  background("rgb(38,8,255)");

}

if(smallsqure.y>0 && smallsqure.y<100){
  background("rgb(184,64,255)");

}
if(smallsqure.y>100 && smallsqure.y<200){
  background("rgb(193,93,255)");

}
if(smallsqure.y>200 && smallsqure.y<300){
  background("rgb(25,46,208)");

}
if(smallsqure.y>300 && smallsqure.y<400){
  background("rgb(25,255,28)");

}

drawSprites();
}