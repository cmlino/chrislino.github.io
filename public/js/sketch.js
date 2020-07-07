p5.disableFriendlyErrors = true; // disables FES

function setup() {
  var can = createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  can.parent('sketch');
  frameRate(30);
}
let fc = 0;
let depth = 100;
function draw() {
  
  let angle = PI/6;
  clear();
  translate(width/2,height/1.6)
  stroke(255/*,frameCount*3*/);

  branch(min(floor(windowHeight*.13),100), angle, 6, fc);
  if(frameCount >= 97) {
    noLoop();
  //  saveCanvas('myCanvas', 'png');
  }
  depth*=.75;
  fc+=6;
}

function windowResized() {
  resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
}


function branch(length, angle, w, f) {
  if(w)
    strokeWeight(w);
  if(f < length) {
    line(0,0,0,-f);
    return;
  }
  line(0,0,0,-length);
  translate(0,-length);
  if(length > depth && length > 4) {
    if(w > 1)
      w--;
    f-=length;
    push();
    rotate(angle);
    branch(floor(length*.75),angle*.9,w,f);
    pop();
    push();
    rotate(-angle);
    branch(floor(length*.75),angle*.9,w,f);
    pop();
  } 
}