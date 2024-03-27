var canvas = document.getElementById("drawing_area");
var bsp_context = canvas.getContext('2d');
var hsp_context = canvas.getContext('2d');
var flu_context = canvas.getContext('2d');
var flo_context = canvas.getContext('2d');
var LeftWeb_context = canvas.getContext('2d');
var RightWeb_context = canvas.getContext('2d');
var Left_Low_sec_context = canvas.getContext('2d');
var Right_Low_sec_context = canvas.getContext('2d');
var Left_Up_sec_context = canvas.getContext('2d');
var Right_Up_sec_context = canvas.getContext('2d');

document.getElementById('hsp').addEventListener('input', function() {
    document.getElementById("drawing_area").style.display = "block";

});

function draw_faceplate_width(bsp) {
    var bsp = parseFloat(document.getElementById("bsp").value);
    var hsp = parseFloat(document.getElementById("hsp").value);
    bsp_context.clearRect(0, 0, canvas.width, canvas.height);
    bsp_context.beginPath();
    bsp_context.moveTo(10, 145);
    bsp_context.lineTo(10 + 250 * bsp / hsp, 145);
    bsp_context.lineTo(10 + 250 * bsp / hsp, (20));
    bsp_context.lineTo(10, 20);
    bsp_context.lineTo(10, 145);
    bsp_context.stroke();
}

document.getElementById('bsp').addEventListener('input', function() {
    var tsp = this.value;
    draw_faceplate_width(bsp);
});


function draw_screws() {

    dataload()

    var b = window.b
    var h = window.h
    var tw = window.tw
    var tf = window.tf
    var r = window.r
    var hsp = parseFloat(document.getElementById("hsp").value);
    var bsp = parseFloat(document.getElementById("bsp").value);
    var tsp = parseFloat(document.getElementById("tsp").value);
    var e = parseFloat(document.getElementById("distancee1").value);
    var ex = parseFloat(document.getElementById("distanceex").value);
    var go = parseFloat(document.getElementById("distancego").value);
    var gu = parseFloat(document.getElementById("distancegu").value);
    var gu = parseFloat(document.getElementById("distancegu").value);
    var u1n = parseFloat(document.getElementById("distanceu1n").value);

    //Umrechnungsfaktor für x-Wert von Höhen zu Pixel in Grafik

    var x_factor = 250 / hsp

    //Drawing of lower Flange
    flu_context.clearRect(11, 21, 136, 123);
    flo_context.clearRect(11, 21, 136, 123);
    LeftWeb_context.clearRect(11, 21, 136, 123);
    RightWeb_context.clearRect(11, 21, 136, 123);


    flu_context.beginPath();
    flu_context.moveTo(10 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor, 145 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(10 + 250 * 0.5 * bsp / hsp - b * x_factor / 2, 145 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(10 + 250 * 0.5 * bsp / hsp - b * x_factor / 2, 145 - u1n * 125 / hsp);
    flu_context.lineTo(10 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 145 - u1n * 125 / hsp);
    flu_context.lineTo(10 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 145 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(10 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor, 145 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.stroke();

    //Drawing of upper flange
    flo_context.beginPath();
    flo_context.moveTo(10 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor, 145 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(10 + 250 * 0.5 * bsp / hsp - (b * x_factor / 2), 145 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(10 + 250 * 0.5 * bsp / hsp - (b * x_factor / 2), 145 - u1n * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(10 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 145 - u1n * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(10 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 145 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(10 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor, 145 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.stroke();

    //Drawing of left Web
    LeftWeb_context.beginPath();
    LeftWeb_context.moveTo(10 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2, 145 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp);
    LeftWeb_context.lineTo(10 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2, 145 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp - (h * 125 / hsp - 2 * tf * 125 / hsp - 2 * r * 125 / hsp));
    LeftWeb_context.stroke();

    //Drawing of right Web
    RightWeb_context.beginPath();
    RightWeb_context.moveTo(10 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2, 145 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp);
    RightWeb_context.lineTo(10 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2, 145 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp - (h * 125 / hsp - 2 * tf * 125 / hsp - 2 * r * 125 / hsp));
    RightWeb_context.stroke();

    //Drawing of left lower sector
    var centerX_left_low = 10 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor
    var centerY_left_low = 145 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp
    var startangle_left_low = 0
    var endangle_left_low = Math.PI / 2;

    Left_Low_sec_context.beginPath();
    Left_Low_sec_context.arc(centerX_left_low, centerY_left_low, r * 125 / hsp, startangle_left_low, endangle_left_low)
    Left_Low_sec_context.lineWidth = 2;
    Left_Low_sec_context.stroke();
    Left_Low_sec_context.closePath();

}

document.getElementById('distanceu1n').addEventListener('input', function() {
    var tsp = this.value;
    draw_screws();
});