let maxParticles=200;
let numParticles=125;
let maxSpeed=1.2;
let joinDistance=120;
let forceCoeff=50;
let forceDist = 150;
let fillclr=225;
let bgclr=0
let particleRad = 4;
let linecount = 5;
let haloRadius = 0
let haloClrMax = 200;
let framesRepulsed = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400)
  frameRate(60);
  setupParticles();
  stroke(200);
  strokeWeight(1);
  haloRadius = forceDist
}

function draw() {
  background(bgclr, 20, 40);
  fill(fillclr);
  updateParticles();
  document.getElementById("counter").innerHTML = "Number of Particles = " + numParticles;
}

function mouseClicked() {
  framesRepulsed=120
  for(let i=0; i<10; i++) {
  prt.push([mouseX + random(-10, 10), mouseY+random(-10, 10), random(-maxSpeed, maxSpeed), random(-maxSpeed, maxSpeed)]);
  numParticles++;}
}
