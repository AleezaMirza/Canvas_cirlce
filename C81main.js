canvas= document.getElementById("mycanvas");
context=canvas.getContext("2d");
color="red";

cirlce(200, 200);

function cirlce(mouse_x, mouse_y){
    context.beginPath();
    context.lineWidth=2;
    context.strokeStyle=color;
    context.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    context.stroke();
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("mouse x=", mouse_x, " mouse y=", mouse_y);
    cirlce(mouse_x,mouse_y);
}

function clearcanvas(){
    context.clearRect(0,0,canvas.width,canvas.height);
}
