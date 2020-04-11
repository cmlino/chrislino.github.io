p5.disableFriendlyErrors = true; // disables FES
function setup() {
  var can = createCanvas(400, 400);
  can.parent('sketch');
}
function draw() {
  let angle = PI/6;
  background(34);
  translate(200,height)
  stroke(255);

  branch(67, angle, 6);

}
function branch(length, angle, w) {
  if(w)
    strokeWeight(w);
  line(0,0,0,-length);
  translate(0,-length);
  if(length > 3) {
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
  } else {
    noLoop();
  }
  
  //line(0,0,0,-length);
}