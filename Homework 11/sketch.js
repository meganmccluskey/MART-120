
// Player 
var characterX = 50;
var characterY = 300;

// Keyboard controls
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// First shape
var shape1X = 100;
var shape1Y = 100;
var shape1XSpeed;
var shape1YSpeed;

// Second shape
var shape2X = 250;
var shape2Y = 200;
var shape2XSpeed;
var shape2YSpeed;

// Third shape
var shape3X = 350;
var shape3Y = 400;
var shape3XSpeed;
var shape3YSpeed;

// Mouse 
var mouseShapeX = -100;
var mouseShapeY = -100;

// Game 
var gameWon = false;

function setup()
{
    createCanvas(500, 600);

    // Random speeds for first shape
    shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // Random speeds for second shape
    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // Random speeds for third shape
    shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    createCharacter(50, 300);
}

function draw()
{
    background(220);

    // Create borders
    createBorders(10);

    // Draw exit
    fill(0, 200, 0);
    rect(width - 10, height - 100, 10, 100);

    fill(0);
    textSize(16);
    text("EXIT", width - 65, height - 110);

    // Draw player
    drawCharacter();

    // First shape
    fill(255, 0, 0);
    circle(shape1X, shape1Y, 30);

    shape1X += shape1XSpeed;
    shape1Y += shape1YSpeed;

    // Second shape 
    fill(0, 0, 255);
    rect(shape2X, shape2Y, 35, 25);

    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;

    // Third shape
    fill(255, 150, 0);
    ellipse(shape3X, shape3Y, 45, 25);

    shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;

    // Check first shape 
    if(shape1X > width)
    {
        shape1X = 0;
    }
    else if(shape1X < 0)
    {
        shape1X = width;
    }

    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    else if(shape1Y < 0)
    {
        shape1Y = height;
    }

    // Check second shape boundaries
    if(shape2X > width)
    {
        shape2X = 0;
    }
    else if(shape2X < 0)
    {
        shape2X = width;
    }

    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    else if(shape2Y < 0)
    {
        shape2Y = height;
    }

    // Check third shape boundaries
    if(shape3X > width)
    {
        shape3X = 0;
    }
    else if(shape3X < 0)
    {
        shape3X = width;
    }

    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    else if(shape3Y < 0)
    {
        shape3Y = height;
    }

    // Draw stationary mouse shape
    fill(100, 100, 100);
    circle(mouseShapeX, mouseShapeY, 30);

    // Check if player reaches the exit
    if(characterX > width - 15 && characterY > height - 85 && characterY < height - 15)
    {
        gameWon = true;
    }

    // Display winning message
    if(gameWon == true)
    {
        fill(0, 150, 0);
        textSize(40);
        text("You Win!", width / 2 - 90, height / 2);
    }
}

// Create player
function createCharacter(x, y)
{
    characterX = x;
    characterY = y;
}

// Draw player
function drawCharacter()
{
    fill(0, 0, 150);
    circle(characterX, characterY, 30);
}

// Move player using keyboard
function keyPressed()
{
    if(gameWon == false)
    {
        if(keyCode == w)
        {
            characterY -= 10;
        }
        else if(keyCode == s)
        {
            characterY += 10;
        }
        else if(keyCode == a)
        {
            characterX -= 10;
        }
        else if(keyCode == d)
        {
            characterX += 10;
        }
    }
}

// Create borders
function createBorders(thickness)
{
    fill(0);

    // Top border
    rect(0, 0, width, thickness);

    // Left border
    rect(0, 0, thickness, height);

    // Bottom border
    rect(0, height - thickness, width, thickness);

    // Right border with exit opening
    rect(width - thickness, 0, thickness, height - 100);
}

// Create circle when mouse is clicked
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
