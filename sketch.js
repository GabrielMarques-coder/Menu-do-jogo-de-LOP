var tela = 1;
var largura = 200;
var altura = 50;
var xmenu = 50;
var ymenu1 = 85;
var ymenu2 = 145;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  textStyle(NORMAL);
  // Tela de menu
  if(tela==1){
    background(20);
    textAlign(CENTER);
    textSize(26);
    
    if(mouseX > xmenu && mouseX < xmenu+largura && mouseY > ymenu1  && mouseY < ymenu1+ altura){
     stroke(200);
     fill(100);
     rect(xmenu, ymenu1, largura, altura, 15);
     if(mouseIsPressed){
          tela=2
        } 
    }
    fill(240);
    noStroke();
    text("iniciar", 150,120);
    
    //Informações do jogo
      if(mouseX > xmenu && mouseX < xmenu+largura && mouseY > ymenu2  && mouseY < ymenu2+ altura){
     stroke(200);
     fill(100);
     rect(xmenu, ymenu2, largura, altura, 15);
        if(mouseIsPressed){
          tela=3
        }
    stroke(200);
    fill(100);
    rect(xmenu, ymenu2, largura, altura, 15);
  }
    fill(240);
    noStroke();
    text("Informações", 150, 180);
  } 
}