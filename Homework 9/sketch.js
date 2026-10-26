function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

 
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Self Portrait", 200, 25);
 
  fill(90, 50, 30);
  ellipse(200, 165, 155, 205);

  fill(255, 210, 180);
  rect(180, 220, 40, 45);

  fill(160, 100, 180);
  triangle(180, 250, 220, 250, 270, 320);
  triangle(180, 250, 220, 250, 130, 320);
  rect(130, 290, 140, 40);

  fill(255, 220, 190);
  ellipse(200, 155, 120, 145);

  fill(90, 50, 30);
  rect(137, 115, 25, 130);
  rect(238, 115, 25, 130);
  ellipse(200, 95, 125, 45);

  line(200, 75, 200, 95);

  fill(255, 210, 180);
  circle(140, 160, 22);
  circle(260, 160, 22);

   fill(255);
  ellipse(177, 150, 27, 18);
  ellipse(223, 150, 27, 18);

  fill(60, 40, 25);
  circle(177, 150, 10);
  circle(223, 150, 10);

  line(164, 143, 160, 138);
  line(173, 140, 173, 135);
  line(236, 143, 240, 138);
  line(227, 140, 227, 135);

  line(163, 133, 189, 133);
  line(211, 133, 237, 133);

  fill(255, 190, 160);
  triangle(200, 158, 192, 185, 208, 185);

  strokeWeight(3);
  line(183, 200, 217, 200);
  strokeWeight(1);

  fill(245, 160, 160);
  circle(165, 180, 12);
  circle(235, 180, 12);

   strokeWeight(4);
  point(177, 150);
  point(223, 150);
  strokeWeight(1);

  fill(220, 100, 150);
  square(238, 92, 15);

  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("By: Megan McCluskey", 320, 370);
}
