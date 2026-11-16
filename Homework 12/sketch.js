// x and y for my character
var characterX = 50;
var characterY = 300;

// define the codes for the keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for the first shape
var shape1X = 100;
var shape1Y = 100;
var shape1XSpeed;
var shape1YSpeed;

// x and y for the second shape
var shape2X = 250;
var shape2Y = 200;
var shape2XSpeed;
var shape2YSpeed;

// x and y for the third shape
var shape3X = 350;
var shape3Y = 400;
var shape3XSpeed;
var shape3YSpeed;

// create a shape when the mouse is clicked
var mouseShapeX = -100;
var mouseShapeY = -100;

// check if the player has won
var gameWon = false;

function setup()
{
    createCanvas(500, 600);

    // get a random speed when it first starts
    shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    createCharacter(50,300);
}

function draw()
{
    background(220);

    // call createBorders function
    createBorders(10);

    // call createExit function
    createExit();

    // call drawCharacter function
    drawCharacter();

    // call createObstacles function
    createObstacles();

    // call movement functions
    moveShape1();
    moveShape2();
    moveShape3();

    // call mouse obstacle function
    drawMouseShape();

    // check to see if the character has left the exit
    checkWin();

    // display the winning message
    displayWinMessage();
}

function characterMovement()
{
    if(gameWon == false)
    {
        if(keyCode == w)
        {
            characterY -= 10;
        }
        if(keyCode == s)
        {
            characterY += 10;
        }
        if(keyCode == a)
        {
            characterX -= 10;
        }
        if(keyCode == d)
        {
            characterX += 10;
        }
    }
}

// detect when a key is pressed
function keyPressed()
{
    characterMovement();
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;

    // character
}

function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,30);
}

function createObstacles()
{
    // first obstacle 
    fill(255,0,0);
    circle(shape1X,shape1Y,30);

    // second obstacle
    fill(0,0,255);
    rect(shape2X,shape2Y,35,25);

    // third obstacle
    fill(255,150,0);
    ellipse(shape3X,shape3Y,45,25);
}

function moveShape1()
{
    // move the first shape
    shape1X += shape1XSpeed;
    shape1Y += shape1YSpeed;

    // check to see if the shape has gone out of bounds
    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0)
    {
        shape1Y = height;
    }
}

function moveShape2()
{
    // move the second shape
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;

    // check to see if the shape has gone out of bounds
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
}

function moveShape3()
{
    // move the third shape
    shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;

    // check to see if the shape has gone out of bounds
    if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }
}

function drawMouseShape()
{
    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX,mouseShapeY,25);
}

function createBorders(thickness)
{
    // top border
    fill(0);
    rect(0,0,width,thickness);

    // left border
    rect(0,0,thickness,height);

    // bottom border
    rect(0,height-thickness,width,thickness);

    // right border with exit opening
    rect(width-thickness,0,thickness,height-100);
}

function createExit()
{
    // create the exit
    fill(0,200,0);
    rect(width-10,height-100,10,100);

    // exit message
    fill(0);
    textSize(16);
    text("EXIT",width-65,height-110);
}

function checkWin()
{
    // check to see if the character has left the exit
    if(characterX > width-15 && characterY > height-85 && characterY < height-15)
    {
        gameWon = true;
    }
}

function displayWinMessage()
{
    // display the winning message
    if(gameWon == true)
    {
        fill(0);
        stroke(5);
        textSize(40);
        text("You Win!",width/2-90,height/2);
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
