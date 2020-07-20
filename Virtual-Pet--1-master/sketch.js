var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dog=loadImage("images/dogimg.png");
  happyDog=loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dogsprite=createSprite(300,250);
  dogsprite.addImage(dog);
  dogsprite.scale=0.2; 
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}

  drawSprites();
  //stroke(10)
  fill("blue")
  text("Press UP _ARROW Key to Feed Drago milk",100,50);
  text("food remaining  : "+    foodStock,200,100)

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
      Food:x
  })
  
}


