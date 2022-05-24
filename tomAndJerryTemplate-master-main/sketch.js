var bgImg;
var mouse;
var cat;

function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("images/garden.png");
    
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
    
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    mouse = createSprite(870, 600),
    mouse.addAnimation("ratoSentado", mouseImg1);
    mouse.x = 300;
    mouse.scale = 0.2;    

    cat = createSprite(870, 600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;    

}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/3) {
        cat.velocityX = 0;
        cat.addAnimation("ultimaImagemGato", catImg3);
        cat.changeAnimation("ultimaImagemGato");
        cat.x = 200;
        cat.scale = 0.2;
        mouse.changeAnimation("ratoSentado")
    }
    drawSprites();
}


function keyPressed(){
  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("ratoProvocando", mouseImg2);
    mouse.changeAnimation("ratoProvocando");
    mouse.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation("gatoAndando", catImg2);
    cat.changeAnimation("gatoAndando");
  }
}