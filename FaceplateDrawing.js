var canvas = document.getElementById("canvasdrawing");
var context = canvas.getContext('2d');

function draw_faceplate_width(bsp) {
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(10 + bsp, 0)
    context.stroke();
}

document.getElementById('bsp').addEventListener('input', function() {
    var bsp = this.value;
    zeichneEtwas(bsp);
});