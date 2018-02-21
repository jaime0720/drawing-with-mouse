var canvas = document.getElementById('dibujo');
var context = canvas.getContext("2d");
var prevX, prevY, currX, currY, clickOn = false;
var flag = false;
var boton = document.getElementById('borrar');

canvas.addEventListener("mousedown", function (e) {
  findCoordinates (e);
});
document.addEventListener("mouseup", function (e) {
  findCoordinates (e);
});
canvas.addEventListener("mouseout", function (e) {
  findCoordinates (e);
});
canvas.addEventListener("mousemove", function (e) {
  findCoordinates (e);
});
canvas.addEventListener("mouseover", function (e) {
  findCoordinates (e);
});
boton.addEventListener("click", erase);

function erase() {
  var clear = confirm("Deseas borrar el dibujo");
  if (clear) {
    context.clearRect(0,0,300,300);
  }
}


function draw() {
  context.beginPath();
  context.strokeStyle = "red";
  context.moveTo(prevX,prevY);
  context.lineTo(currX,currY);
  context.stroke();
  context.closePath();
}

function findCoordinates(e) {
  switch (e.type) {
    case "mousedown":
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;
      clickOn = true;
    break;
    case "mouseup" || "mouseout":
      clickOn = false;

    break;
    case "mouseover":
      flag = true;
    break;
    case "mousemove":
      if (flag == true && clickOn == true) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
      }
    break;
    default:
  }
}
