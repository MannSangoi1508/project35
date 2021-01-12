//Create variables here
var  dog, happyDog; 
var database;
var foodS, foodStock;
var dogImage,happyDogImage;
function preload()
{
  //load images here
  dogImage=loadImage(image/dogImg.png);
  happyDogImage=loadImage(image/dogImg1.png);

}

function setup() {
	createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,250,30,30);
  dog.addImage(dogImage);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
    //add styles here
    food=food;
text("foodstock:"+"food")
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({

    
  })
}



