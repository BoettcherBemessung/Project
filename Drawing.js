var canvas = document.getElementById("drawing_area");
var bsp_context = canvas.getContext('2d');
var hsp_context = canvas.getContext('2d');
var flu_context = canvas.getContext('2d');
var flo_context = canvas.getContext('2d');
var hsp_measure = canvas.getContext('2d');
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
    bsp_context.moveTo(80, 149);
    bsp_context.lineTo(80 + 250 * bsp / hsp, 149);
    bsp_context.lineTo(80 + 250 * bsp / hsp, 24);
    bsp_context.lineTo(80, 24);
    bsp_context.lineTo(80, 149);
    bsp_context.stroke();

    draw_screws()
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
    var y_factor = 125 / hsp;

    //Code for dimension chains
    hsp_measure.beginPath();
    hsp_measure.moveTo(60, 149);
    hsp_measure.lineTo(68, 149);
    hsp_measure.lineTo(64, 149);
    hsp_measure.lineTo(64, 24);
    hsp_measure.lineTo(60, 24);
    hsp_measure.lineTo(68, 24);
    hsp_measure.stroke();

    //Ziffer Maßkette gesamte Breite
    var bsp_number = canvas.getContext('2d');
    bsp_number.font = '7px Arial';
    bsp_number.fillStyle = 'black';
    bsp_number.fillText(bsp, 80 + 125 * bsp / hsp, 8);

    //Maßketten für Schraubenabstände vertikal

    //Ziffer für Maßketten vertikale
    var u1n_number = canvas.getContext('2d');
    u1n_number.font = '7px Arial';
    u1n_number.fillStyle = 'black';
    u1n_number.fillText(u1n, 100 + 250 * bsp / hsp, 149 - 0.5 * u1n * y_factor);

    var gu_number = canvas.getContext('2d');
    gu_number.font = '7px Arial';
    gu_number.fillStyle = 'black';
    gu_number.fillText(gu, 100 + 250 * bsp / hsp, 149 - (0.5 * gu + u1n) * y_factor);

    var wh_number = canvas.getContext('2d');
    wh_number.font = '7px Arial';
    wh_number.fillStyle = 'black';
    wh_number.fillText(h - go - gu, 100 + 250 * bsp / hsp, 149 - (gu + u1n + 0.5 * (h - go - gu)) * y_factor);

    var go_number = canvas.getContext('2d');
    go_number.font = '7px Arial';
    go_number.fillStyle = 'black';
    go_number.fillText(go, 100 + 250 * bsp / hsp, 149 - (u1n + h - go) * y_factor);



    var e_measures = canvas.getContext('2d');
    e_measures.beginPath();
    e_measures.moveTo(92 + 250 * bsp / hsp, 149);
    e_measures.lineTo(100 + 250 * bsp / hsp, 149);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(92 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(100 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(92 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(100 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(92 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(100 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(92 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(100 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(96 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(96 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(92 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(100 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(96 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(96 + 250 * bsp / hsp, 24);
    e_measures.lineTo(100 + 250 * bsp / hsp, 24);
    e_measures.lineTo(92 + 250 * bsp / hsp, 24);
    e_measures.stroke();

    //Maßkette für Abstände in Breite

    //Ziffer Maßketten Breite
    var e_number1 = canvas.getContext('2d');
    e_number1.font = '7px Arial';
    e_number1.fillStyle = 'black';
    e_number1.fillText(e, 80 + 0.5 * e * x_factor, 17);

    var e_number2 = canvas.getContext('2d');
    e_number2.font = '7px Arial';
    e_number2.fillStyle = 'black';
    e_number2.fillText(e, 80 + (bsp - 0.5 * e) * x_factor, 17);

    var w_number = canvas.getContext('2d');
    w_number.font = '7px Arial';
    w_number.fillStyle = 'black';
    w_number.fillText(bsp - 2 * e, 80 + (0.5 * bsp) * x_factor, 17);

    var bsp_measures = canvas.getContext('2d');
    bsp_measures.beginPath();
    bsp_measures.moveTo(80, 20);
    bsp_measures.lineTo(80, 16);
    bsp_measures.lineTo(80, 18);
    bsp_measures.lineTo(80 + e * x_factor, 18);
    bsp_measures.lineTo(80 + e * x_factor, 16);
    bsp_measures.lineTo(80 + e * x_factor, 20);
    bsp_measures.lineTo(80 + e * x_factor, 18);
    bsp_measures.lineTo(80 + (bsp - e) * x_factor, 18);
    bsp_measures.lineTo(80 + (bsp - e) * x_factor, 16);
    bsp_measures.lineTo(80 + (bsp - e) * x_factor, 20);
    bsp_measures.lineTo(80 + (bsp - e) * x_factor, 18);
    bsp_measures.lineTo(80 + bsp * x_factor, 18);
    bsp_measures.lineTo(80 + bsp * x_factor, 20);
    bsp_measures.lineTo(80 + bsp * x_factor, 16);
    bsp_measures.stroke();

    //Maßkette für Breitegesamt
    var bsp_m_sum = canvas.getContext('2d');
    bsp_m_sum.beginPath();
    bsp_m_sum.moveTo(80, 11)
    bsp_m_sum.lineTo(80, 7);
    bsp_m_sum.lineTo(80, 9);
    bsp_m_sum.lineTo(80 + bsp * x_factor, 9);
    bsp_m_sum.lineTo(80 + bsp * x_factor, 11);
    bsp_m_sum.lineTo(80 + bsp * x_factor, 7);
    bsp_m_sum.stroke();

    flu_context.beginPath();
    flu_context.moveTo(80 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(80 + 250 * 0.5 * bsp / hsp - b * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(80 + 250 * 0.5 * bsp / hsp - b * x_factor / 2, 149 - u1n * 125 / hsp);
    flu_context.lineTo(80 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp);
    flu_context.lineTo(80 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(80 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.stroke();

    //Drawing of upper flange
    flo_context.beginPath();
    flo_context.moveTo(80 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor, 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(80 + 250 * 0.5 * bsp / hsp - (b * x_factor / 2), 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(80 + 250 * 0.5 * bsp / hsp - (b * x_factor / 2), 149 - u1n * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(80 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(80 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(80 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor, 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.stroke();

    //Drawing of left Web
    LeftWeb_context.beginPath();
    LeftWeb_context.moveTo(80 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp);
    LeftWeb_context.lineTo(80 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp - (h * 125 / hsp - 2 * tf * 125 / hsp - 2 * r * 125 / hsp));
    LeftWeb_context.stroke();

    //Drawing of right Web
    RightWeb_context.beginPath();
    RightWeb_context.moveTo(80 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp);
    RightWeb_context.lineTo(80 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp - (h * 125 / hsp - 2 * tf * 125 / hsp - 2 * r * 125 / hsp));
    RightWeb_context.stroke();

    //Drawing of left lower sector
    var centerX_left_low = 80 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor
    var centerY_left_low = 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp
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
    var centerX_right_low = 80 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor
    var centerY_right_low = 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp
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
    var centerX_right_up = 80 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor;
    var centerY_right_up = 149 - (u1n + h - tf - r) * 125 / hsp;
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
    var centerX_left_up = 80 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor;
    var centerY_left_up = 149 - (u1n + h - tf - r) * 125 / hsp;
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
    Low_screw_left_context.moveTo(80 + e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(80 + e * x_factor - 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(80 + e * x_factor + 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(80 + e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(80 + e * x_factor, 149 - (u1n + gu) * 125 / hsp + 5);
    Low_screw_left_context.lineTo(80 + e * x_factor, 149 - (u1n + gu) * 125 / hsp - 5);
    Low_screw_left_context.stroke();

    Low_screw_right_context.beginPath();
    Low_screw_right_context.moveTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor - 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor + 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp + 5);
    Low_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp - 5);
    Low_screw_right_context.stroke();

    //Drawing of inner upper Screws
    mid_screw_right_context.beginPath();
    mid_screw_right_context.moveTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor + 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor - 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp + 5);
    mid_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp - 5);
    mid_screw_right_context.stroke();

    mid_screw_left_context.beginPath();
    mid_screw_left_context.moveTo(80 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(80 + e * x_factor + 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(80 + e * x_factor - 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(80 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(80 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp + 5);
    mid_screw_left_context.lineTo(80 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp - 5);
    mid_screw_left_context.stroke();


    //Drawing of upper screws (outside) -> only if 3 screw rows chosen by user!
    var selectedScrewRows = document.getElementById("ScrewRows").value
    if (selectedScrewRows == 3) {

        up_screw_right_context.beginPath();
        up_screw_right_context.moveTo(80 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp);
        up_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor + 5, 24 + ex * 125 / hsp)
        up_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor - 5, 24 + ex * 125 / hsp)
        up_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp)
        up_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp + 5)
        up_screw_right_context.lineTo(80 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp - 5)
        up_screw_right_context.stroke();

        up_screw_left_context.beginPath();
        up_screw_left_context.moveTo(80 + e * x_factor, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(80 + e * x_factor + 5, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(80 + e * x_factor - 5, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(80 + e * x_factor, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(80 + e * x_factor, 24 + ex * 125 / hsp + 5);
        up_screw_left_context.lineTo(80 + e * x_factor, 24 + ex * 125 / hsp - 5);
        up_screw_left_context.stroke();
    }

}

document.getElementById('distanceu1n').addEventListener('input', function() {
    draw_faceplate_width();
})
document.getElementById('distancee1').addEventListener('input', function() {
    draw_faceplate_width();
})
document.getElementById('distancego').addEventListener('input', function() {

    draw_faceplate_width();
})
document.getElementById('distancegu').addEventListener('input', function() {

    draw_faceplate_width();
})
document.getElementById('distanceex').addEventListener('input', function() {

    draw_faceplate_width();
})