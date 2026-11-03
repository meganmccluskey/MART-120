
var headX = 40;
var headY = 55;
var headDirection = 2;

var bodyX = 360;
var bodyY = 350;
var bodyDirection = 3;

var squareX = 20;
var squareY = 80;
var squareDirection = 2;

var circleX = 375;
var circleY = 300;
var circleDirection = 3;

var triangleX = 290;
var triangleY = 250;
var triangleDirectionX = 2;
var triangleDirectionY = 2;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(400, 400);

    headDirection = random(1, 3);
    bodyDirection = random(1, 3);
    squareDirection = random(1, 3);
    circleDirection = random(1, 3);
    triangleDirectionX = random(1, 3);
    triangleDirectionY = random(1, 3);
}

function draw()
{
    background(220);

    // Title
    fill(0);
    textSize(size);
    textAlign(CENTER);
    text("Self Portrait", 200, 30);

    size += sizeDirection;
    count++;

    if(count > 5)
    {
        sizeDirection *= -1;
        count = 0;
    }

    // Hair behind head
    fill(90, 50, 30);
    ellipse(200, 165, 155, 205);

    // Neck
    fill(255, 210, 180);
    rect(180, 220, 40, 45);

    // Shirt
    fill(160, 100, 180);
    triangle(180, 250, 220, 250, 270, 320);
    triangle(180, 250, 220, 250, 130, 320);
    rect(130, 290, 140, 40);

    // Face
    fill(255, 220, 190);
    ellipse(200, 155, 120, 145);

    // Hair
    fill(90, 50, 30);
    rect(137, 115, 25, 130);
    rect(238, 115, 25, 130);
    ellipse(200, 95, 125, 45);

    // Hair part
    line(200, 75, 200, 95);

    // Ears
    fill(255, 210, 180);
    circle(140, 160, 22);
    circle(260, 160, 22);

    // Eyes
    fill(255);
    ellipse(177, 150, 27, 18);
    ellipse(223, 150, 27, 18);

    // Pupils
    fill(60, 40, 25);
    circle(177, 150, 10);
    circle(223, 150, 10);

    // Eyelashes
    line(164, 143, 160, 138);
    line(173, 140, 173, 135);
    line(236, 143, 240, 138);
    line(227, 140, 227, 135);

    // Eyebrows
    line(163, 133, 189, 133);
    line(211, 133, 237, 133);

    // Nose
    fill(255, 190, 160);
    triangle(200, 158, 192, 185, 208, 185);

    // Mouth
    strokeWeight(3);
    line(183, 200, 217, 200);
    strokeWeight(1);

    // Cheeks
    fill(245, 160, 160);
    circle(165, 180, 12);
    circle(235, 180, 12);

    // Hair clip
    fill(220, 100, 150);
    square(238, 92, 15);

    // First circle moves 
    fill(255, 100, 100);
    circle(headX, headY, 20);

    headX += headDirection;

    if(headX >= 380 || headX <= 20)
    {
        headDirection *= -1;
    }

    // Second circle moves 
    fill(100, 150, 255);
    circle(bodyX, bodyY, 20);

    bodyX += bodyDirection;

    if(bodyX >= 380 || bodyX <= 20)
    {
        bodyDirection *= -1;
    }

    // Square moves 
    fill(100, 200, 100);
    square(squareX, squareY, 20);

    squareY += squareDirection;

    if(squareY >= 360 || squareY <= 20)
    {
        squareDirection *= -1;
    }

    // Circle moves 
    fill(200, 100, 200);
    circle(circleX, circleY, 20);

    circleY += circleDirection;

    if(circleY >= 380 || circleY <= 20)
    {
        circleDirection *= -1;
    }

    // Triangle moves 
    fill(255, 180, 50);
    triangle(triangleX, triangleY,
             triangleX + 15, triangleY - 15,
             triangleX + 30, triangleY);

    triangleX += triangleDirectionX;
    triangleY += triangleDirectionY;

    if(triangleX >= 350 || triangleX <= 280)
    {
        triangleDirectionX *= -1;
    }

    if(triangleY >= 300 || triangleY <= 230)
    {
        triangleDirectionY *= -1;
    }

    // Signature
    fill(0);
    textSize(14);
    textAlign(CENTER);
    text("By: Megan McCluskey", 320, 385);
}
