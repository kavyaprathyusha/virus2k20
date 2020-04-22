let person;
let scroll = 10;
let scrollBg = 0;
let pImg;
let vImg;
let bImg;
let soapImg;
let viruses = [];
let soaps = [];
let score = 0;
let soundClassifier;
let restart = false;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  font = loadFont('Cubano-1.ttf');
  pImg = loadImage('person.png');
  vImg = loadImage('virusImg.png');
  bImg = loadImage('background.jpg');
  logo = loadImage('stayhome.png');
  soapImg = loadImage('soap.png');
}


function setup() {
  createCanvas(900, 500);
  person = new Person();
  soundClassifier.classify(gotCommand);

}

function gotCommand(error, results) {
  if (error)
    console.error(error);
  console.log(results[0].label, results[0]);
  if (results[0].label == 'up') {
    person.jump();
  }
}

function keyPressed() {

if (restart){
    restart = false;
    score = 0;
    scollBg = 0;
    scroll = 10;
    viruses = [];
    loop();
  }
  if (key == ' ') {
      person.jump();
      return false;
  }
}




function draw() {

  image(bImg, -scrollBg, 0, width, height);
  image(bImg, -scrollBg + width, 0, width, height);
  if (random(1) < 0.005) {
    soaps.push(new Soap());

  }


  if (scrollBg > width) {
    scrollBg = 0;
  }
  if (random(1) < 0.005) {
    viruses.push(new Virus());

  }


  //background(bImg);
  person.show();
  person.move();


  for (let s of soaps) {
    s.move();
    s.show();
    if (person.hits(s)) {
      score++;
      console.log(score);
      s.r=100;
      s.y=800;
      // s.remove();
    }
  }
  textFont("default");
  
  
  textFont(font);
  textSize(30);
  fill(255,0,0);
   text("STAY HOME STAY SAFE", width-600, 25);
  
  textSize(25);
  fill(150, 75, 0)
  stroke(255, 158, 77);
  text("Soap Usage", width - 150, 25);
  text(parseInt(score), width - 100, 50);

  for (let v of viruses) {
    v.move();
    v.show();
    if (person.hits(v)) {
       v.r=100;
      console.log('Game Over');
      v.r=70;
      textFont("default");
      fill(245, 220, 35);
      stroke(255, 158, 77);
      textSize(25);
      textFont(font);

      fill(0, 0, 0);
      stroke(255);
      textSize(32);
      text("YOU ARE IN DANGER!", width-560, height / 2);



      fill(0, 0, 0);
      stroke(255);
      textSize(18);
      text("Press any key to restart...", width-560, height / 1.6);
      noLoop();
        restart = true;
     
    }
    
   

  }

  scroll += 0.003;
  scrollBg += scroll / 6;
  
   
}