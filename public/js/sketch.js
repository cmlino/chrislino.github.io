p5.disableFriendlyErrors = true; // disables FES
function setup() {
  var can = createCanvas(400, 400);
  can.parent('sketch');
}
let weight = 5;
function draw() {
  let angle = PI/6;
  background(34);
  translate(200,height)
  stroke(255);

  branch(67, angle);

}
function branch(length, angle) {
  line(0,0,0,-length);
  translate(0,-length);
  if(length > 3) {
    push();
    rotate(angle);
    branch(length*.75,angle*.9);
    pop();
    push();
    rotate(-angle);
    branch(length*.75,angle*.9);
    pop();
  } else {
    noLoop();
  }
  //line(0,0,0,-length);
}