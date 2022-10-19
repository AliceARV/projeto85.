//Criar uma referência para tela
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("20");
greencar_width = 75; greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x= 5;
greencar_y= 225;

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; background_imgTag.src = background_image;
	greencar_imgTag = new Image(); 
	greencar_imgTag.onload = uploadgreencar; 
	greencarimgTag.src = greencarimage;
}

function uploadBackground()
 {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }
function uploadgreencar() 
{ ctx.drawImage(greencar_imgTag, greencar_x,greencary, greencar_width, greencar_height);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencary >=0)
y = (+greencar_y)
greencar_y = greencar_y - 10; console.log("When up arrow is pressed x =  + greencar_x" +);

}

function down()
{
	if(greencary <=400)
	y = ( -greencar_y)
	greencar_y = greencar_y + 10; console.log("When up arrow is pressed, x = " - greencar_x -);

}


function left()
{
	if(greencary >=0)
	x= (+greencar_x)
	greencar_x = greencar_x - 10; console.log("When up arrow is pressed, y = " + greencar_y +);

}

function right()
{
	if(greencary <=400)
	x= (+greencar_x)
	greencar_x = greencar_x + 10; console.log("When up arrow is pressed, y = " - greencar_y -);

}
