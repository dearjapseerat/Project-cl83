var mouseEvnt = "empty";
var last_position_of_x, last_position_of_y;

Canvas = document.getElementsById('myCanvas');
ctx =canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListeneer("mousedown", my_mousedown);
function my_mousedown(e)
