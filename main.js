var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
       block_image_object = Img;

       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
           top:player_y,
           left:player_x
       });
       canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38')
    {
        console.log("Up arrow is pressed");
        up();
    }
    if(keyPressed == '40')
    {
        console.log("Down arrow is pressed");
        down();
    }
    if(keyPressed == '37')
    {
        console.log("Left arrow is pressed");
        left();
    }
    if(keyPressed == '39')
    {
        console.log("Right arrow is pressed");
        right();
    }
    if(keyPressed == '70')
    {
        console.log("f");
        new_image('Iron man mask.jpg');
    }
    if(keyPressed == '66')
    {
        console.log("b");
        new_image('spiderman_body.png');
    }

    if(keyPressed == '76')
    {
        console.log("l");
        new_image('hulk_legs.png');
    }
    if(keyPressed == '82')
    {
        console.log("r");
        new_image('thor_right_hand.png');
    }
    if(keyPressed == '72')
    {
        console.log("h");
        new_image('captain_america_left_hand.png');
    }
    if(keyPressed == '85')
    {
        console.log("u");
        new_image('unique.png');
    }
    if(keyPressed == '87')
    {
        console.log("w");
        new_image('wall.jpg');
    }
    if(keyPressed == '89')
    {
        console.log("y");
        new_image('yellow_wall.png');
    }
}
function up()
{
    if(player_y >= 0)
    {
        player_y = player_y - block_image_height;
        console.log("When up arrow key is pressed" + "X is = " + player_x + "Y is = " + player_y);
        console.log("Block Height - " + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y <= 500)
    {
        player_y = player_y + block_image_height;
        console.log("When down arrow key is pressed" + "X is = " + player_x + "Y is = " + player_y);
        console.log("Block Height - " + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x >= 0)
    {
        player_x = player_x - block_image_height;
        console.log("When left arrow key is pressed" + "X is = " + player_x + "Y is = " + player_y);
        console.log("Block Height - " + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x <= 850)
    {
        player_x = player_x + block_image_height;
        console.log("When right arrow key is pressed" + "X is = " + player_x + "Y is = " + player_y);
        console.log("Block Height - " + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}