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
var Low_screw_left_context = canvas.getContext('2d');
var Low_screw_right_context = canvas.getContext('2d');
var mid_screw_right_context = canvas.getContext('2d');
var mid_screw_left_context = canvas.getContext('2d');
var up_screw_left_context = canvas.getContext('2d');
var up_screw_right_context = canvas.getContext('2d');

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

document.getElementById('hsp').addEventListener('input', function() {
    draw_faceplate_width();
});

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
    var u1n = parseFloat(document.getElementById("distanceu1n").value);

    //Umrechnungsfaktor für x-Wert von Höhen zu Pixel in Grafik

    var x_factor = 250 / hsp

    //Drawing of lower Flange
    flu_context.clearRect(11, 21, 7 + 232 * bsp / hsp, 123);
    flo_context.clearRect(11, 21, 7 + 232 * bsp / hsp, 123);
    LeftWeb_context.clearRect(11, 21, 7 + 232 * bsp / hsp, 123);
    RightWeb_context.clearRect(11, 21, 7 + 232 * bsp / hsp, 123);


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
    var radius_X = r * 250 / hsp;
    var radius_y = r * 125 / hsp;
    var scale_X = 1;
    var scale_y = 0.5;

    Left_Low_sec_context.scale(scale_X, scale_y);
    var endangle_left_low = Math.PI / 2;
    Left_Low_sec_context.beginPath();
    Left_Low_sec_context.arc(centerX_left_low / scale_X, centerY_left_low / scale_y, r * 250 / hsp, startangle_left_low, endangle_left_low);
    Left_Low_sec_context.lineWidth = 2;
    Left_Low_sec_context.stroke();
    Left_Low_sec_context.closePath();
    Left_Low_sec_context.setTransform(1, 0, 0, 1, 0, 0);

    //Drawing of right lower sector
    var centerX_right_low = 10 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor
    var centerY_right_low = 145 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp
    var startangle_right_low = Math.PI / 2;
    var radius_X = r * 250 / hsp;
    var radius_y = r * 125 / hsp;
    var scale_X = 1;
    var scale_y = 0.5;

    Right_Low_sec_context.scale(scale_X, scale_y);
    var endangle_right_low = Math.PI;
    Right_Low_sec_context.beginPath();
    Right_Low_sec_context.arc(centerX_right_low / scale_X, centerY_right_low / scale_y, r * 250 / hsp, startangle_right_low, endangle_right_low);
    Right_Low_sec_context.lineWidth = 2;
    Right_Low_sec_context.stroke();
    Right_Low_sec_context.closePath();
    Right_Low_sec_context.setTransform(1, 0, 0, 1, 0, 0);

    //Drawing of right upper sector
    var centerX_right_up = 10 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor;
    var centerY_right_up = 145 - (u1n + h - tf - r) * 125 / hsp;
    var startangle_right_up = Math.PI;
    var endangle_right_up = 1.5 * Math.PI;

    Right_Up_sec_context.scale(scale_X, scale_y);
    Right_Up_sec_context.beginPath();
    Right_Up_sec_context.arc(centerX_right_up / scale_X, centerY_right_up / scale_y, r * 250 / hsp, startangle_right_up, endangle_right_up);
    Right_Up_sec_context.lineWidth = 2;
    Right_Up_sec_context.stroke();
    Right_Up_sec_context.closePath();
    Right_Up_sec_context.setTransform(1, 0, 0, 1, 0, 0);

    //Drawing of left upper sector 
    var centerX_left_up = 10 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor;
    var centerY_left_up = 145 - (u1n + h - tf - r) * 125 / hsp;
    var startangle_left_up = 1.5 * Math.PI
    var endangle_left_up = 0;

    Left_Up_sec_context.scale(scale_X, scale_y);
    Left_Up_sec_context.beginPath();
    Left_Up_sec_context.arc(centerX_left_up / scale_X, centerY_left_up / scale_y, r * 250 / hsp, startangle_left_up, endangle_left_up);
    Left_Up_sec_context.lindeWidth = 2;
    Left_Up_sec_context.stroke();
    Left_Up_sec_context.closePath();
    Left_Up_sec_context.setTransform(1, 0, 0, 1, 0, 0);


    //Drawing of lower Screws

    Low_screw_left_context.beginPath();
    Low_screw_left_context.moveTo(10 + e * x_factor, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(10 + e * x_factor - 5, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(10 + e * x_factor + 5, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(10 + e * x_factor, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(10 + e * x_factor, 145 - (u1n + gu) * 125 / hsp + 5);
    Low_screw_left_context.lineTo(10 + e * x_factor, 145 - (u1n + gu) * 125 / hsp - 5);
    Low_screw_left_context.stroke();

    Low_screw_right_context.beginPath();
    Low_screw_right_context.moveTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor - 5, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor + 5, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + gu) * 125 / hsp + 5);
    Low_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + gu) * 125 / hsp - 5);
    Low_screw_right_context.stroke();

    //Drawing of inner upper Screws
    mid_screw_right_context.beginPath();
    mid_screw_right_context.moveTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor + 5, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor - 5, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + h - go) * 125 / hsp + 5);
    mid_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 145 - (u1n + h - go) * 125 / hsp - 5);
    mid_screw_right_context.stroke();

    mid_screw_left_context.beginPath();
    mid_screw_left_context.moveTo(10 + e * x_factor, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(10 + e * x_factor + 5, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(10 + e * x_factor - 5, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(10 + e * x_factor, 145 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(10 + e * x_factor, 145 - (u1n + h - go) * 125 / hsp + 5);
    mid_screw_left_context.lineTo(10 + e * x_factor, 145 - (u1n + h - go) * 125 / hsp - 5);
    mid_screw_left_context.stroke();


    //Drawing of upper screws (outside) -> only if 3 screw rows chosen by user!
    var selectedScrewRows = document.getElementById("ScrewRows").value
    if (selectedScrewRows == 3) {

        up_screw_right_context.beginPath();
        up_screw_right_context.moveTo(10 + bsp * x_factor - e * x_factor, 20 + ex * 125 / hsp);
        up_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor + 5, 20 + ex * 125 / hsp)
        up_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor - 5, 20 + ex * 125 / hsp)
        up_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 20 + ex * 125 / hsp)
        up_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 20 + ex * 125 / hsp + 5)
        up_screw_right_context.lineTo(10 + bsp * x_factor - e * x_factor, 20 + ex * 125 / hsp - 5)
        up_screw_right_context.stroke();

        up_screw_left_context.beginPath();
        up_screw_left_context.moveTo(10 + e * x_factor, 20 + ex * 125 / hsp);
        up_screw_left_context.lineTo(10 + e * x_factor + 5, 20 + ex * 125 / hsp);
        up_screw_left_context.lineTo(10 + e * x_factor - 5, 20 + ex * 125 / hsp);
        up_screw_left_context.lineTo(10 + e * x_factor, 20 + ex * 125 / hsp);
        up_screw_left_context.lineTo(10 + e * x_factor, 20 + ex * 125 / hsp + 5);
        up_screw_left_context.lineTo(10 + e * x_factor, 20 + ex * 125 / hsp - 5);
        up_screw_left_context.stroke();
    }

}

document.getElementById('distanceu1n').addEventListener('input', function() {
    draw_screws();
})
document.getElementById('distancee1').addEventListener('input', function() {
    draw_screws();
})
document.getElementById('distancego').addEventListener('input', function() {

    draw_screws();
})
document.getElementById('distancegu').addEventListener('input', function() {

    draw_screws();
})
document.getElementById('distanceex').addEventListener('input', function() {

    draw_screws();
})