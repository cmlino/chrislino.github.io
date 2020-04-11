p5.disableFriendlyErrors = true; // disables FES

function setup() {
  var can = createCanvas(600, 600);
  can.parent('sketch');
  frameRate(30);
}
let depth = 100;
function draw() {
  
  let angle = PI/6;
  background(34);
  clear();
  translate(300,height)
  stroke(255/*,frameCount*3*/);
  branch(100, angle, 6);
  if(frameCount >= 20) {
    noLoop();
 //   saveCanvas('myCanvas', 'png');
  }
  depth*=.75;
}
function branch(length, angle, w) {
  if(w)
    strokeWeight(w);
  line(0,0,0,-length);
  //drawLine(0,0,0,-length); //make a function to animate the line drawing process
  translate(0,-length);
  if(length > depth && length > 4) {
    if(w > 1)
      w--;
    push();
    rotate(angle);
    branch(length*.75,angle*.9,w);
    pop();
    push();
    rotate(-angle);
    branch(length*.75,angle*.9,w);

    pop();
  } 
}