var spacebg, sc1, sc2, sc3, sc4, iss
var spacecraft, issobj;
//var hasDocked = false;

function preload()
{
    spacebg = loadImage("spacebg.jpg");
    sc1 = loadImage("spacecraft1.png");
    sc2 = loadImage("spacecraft2.png");
    sc3 = loadImage("spacecraft3.png");
    sc4 = loadImage("spacecraft4.png");
    iss = loadImage("iss.png");
}

function setup() {
  createCanvas(1580,850);
  //createSprite(400, 200, 50, 50);

 spacecraft = createSprite(1400,600);
  //spacecraft = createSprite(740,480);
  spacecraft.addImage(sc1);
  spacecraft.scale = 0.5;

  issobj = createSprite(790,350);
  issobj.addImage(iss);
  issobj.scale = 0.9;

  

}

function draw() {
  background(spacebg);  
  
    
  //if(!hasDocked)
  //{
   // spacecraft.x = 1400;
   // spacecraft.y = 600;
  //}

  if(keyDown("up"))
  {
       spacecraft.y = spacecraft.y - 10;
       spacecraft.addImage(sc1);
  }
  if(keyDown("down"))
  {
       //spacecraft.y = spacecraft.y + 10;
       spacecraft.addImage(sc2);

  }
  if(keyDown("left"))
  {
       spacecraft.x = spacecraft.x - 10;
       spacecraft.addImage(sc3);

  }
  if(keyDown("right"))
  {
       spacecraft.x = spacecraft.x + 10;
       spacecraft.addImage(sc4);

  }

  
  drawSprites();
   //console.log(spacecraft.x);
   //console.log(spacecraft.y);

   if(spacecraft.x == 740 && spacecraft.y == 480)
  {
    textSize(40)
    fill("white")
    text("Docking Successfull", 740, 600);
   
  }
}