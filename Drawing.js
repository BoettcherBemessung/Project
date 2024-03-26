var canvas = document.getElementById("drawing_area");
var bsp_context = canvas.getContext('2d');
var hsp_context = canvas.getContext('2d');

function draw_faceplate_width(bsp) {
    var bsp = parseFloat(document.getElementById("bsp").value);
    var hsp = parseFloat(document.getElementById("hsp").value);
    bsp_context.beginPath();
    bsp_context.moveTo(10, 145);
    bsp_context.lineTo(((10 + 250) * bsp / hsp), 145)
    bsp_context.lineTo(((10 + 250) * bsp / hsp), (145 - 125))
    bsp_context.lineTo(10, (145 - 125))
    bsp_context.lineTo(10, 145)
    bsp_context.stroke();
}

document.getElementById('tsp').addEventListener('input', function() {
    var tsp = this.value;
    draw_faceplate_width(bsp);
});


function draw_screws() {
    var bsp = parseFloat(document.getElementById("bsp").value);
    var hsp = parseFloat(document.getElementById("hsp").value);
    var e = parseFloat(document.getElementById("bsp").value);
    var hsp = parseFloat(document.getElementById("hsp").value);

    bsp_context.beginPath();
    bsp_context.moveTo(10, 145);
    bsp_context.lineTo(((10 + 250) * bsp / hsp), 145)
    bsp_context.lineTo(((10 + 250) * bsp / hsp), (145 - 125))
    bsp_context.lineTo(10, (145 - 125))
    bsp_context.lineTo(10, 145)
    bsp_context.stroke();
}

document.getElementById('tsp').addEventListener('input', function() {
    var tsp = this.value;
    draw_screws();
});