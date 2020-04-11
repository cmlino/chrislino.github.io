p5.disableFriendlyErrors = true; // disables FES
function distSquared(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return dx * dx + dy * dy;
}
let angle = 0;
let w =41;
let ma;
function setup() {
  var can = createCanvas(350, 350, WEBGL);
  ma = atan(1/sqrt(2));
  can.parent('sketch');
  maxD = distSquared(0,0,200,200);
}
function draw() {
  ortho(-750,750,-750,750,-100,1000);
  translate(0, 0,-100);
  rectMode(CENTER)
  rotateX(-ma);
  rotateY(-QUARTER_PI);
  background(34);
  normalMaterial();
  wi = 650;
  he = 650;
  for(let z = w; z < wi-w; z+=w){
    for(let x = w; x < he-w; x+=w){
      push()
      let d = distSquared(x,z,wi/2,he/2);
      let offset = map(d,0,maxD, PI,-QUARTER_PI);
      translate(x-wi/2,0,z-he/2);
      let h = floor(map(Math.sin(angle+offset),-1,1, 140, 440));

      box(w, h, w);
      //rect(x,0,10,h); 
    
      pop()
    }
  }
  noLoop();
  angle += 0.065;
}