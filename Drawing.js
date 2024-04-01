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

function draw_faceplate_width() {
    var bsp = parseFloat(document.getElementById("bsp").value);
    if (isNaN(bsp)) {
        bsp = window.bsp
    }

    var hsp = parseFloat(document.getElementById("hsp").value);
    if (isNaN(hsp)) {
        hsp = window.hsp;
    }
    bsp_context.clearRect(0, 0, canvas.width, canvas.height);
    bsp_context.beginPath();
    bsp_context.moveTo(55, 149);
    bsp_context.lineTo(55 + 250 * bsp / hsp, 149);
    bsp_context.lineTo(55 + 250 * bsp / hsp, 24);
    bsp_context.lineTo(55, 24);
    bsp_context.lineTo(55, 149);
    bsp_context.stroke();

    draw_screws()
}

document.getElementById('hsp').addEventListener('input', function() {
    draw_faceplate_width();
});

document.getElementById('bsp').addEventListener('input', function() {
    var tsp = this.value;
    draw_faceplate_width();
});


function draw_screws() {

    dataload()
    var selectedProfile = window.selectedProfile
    var b = window.b
    var h = window.h
    var tw = window.tw
    var tf = window.tf
    var r = window.r

    var hsp = parseFloat(document.getElementById("hsp").value);
    if (isNaN(hsp)) {
        hsp = window.hsp;
    }
    var bsp = parseFloat(document.getElementById("bsp").value);
    if (isNaN(bsp)) {
        bsp = window.bsp
    }
    var tsp = parseFloat(document.getElementById("tsp").value);
    if (isNaN(tsp)) {
        tsp = window.tsp
    }
    var e = parseFloat(document.getElementById("distancee1").value);
    if (isNaN(e)) {
        e = window.e
    }
    var ex = parseFloat(document.getElementById("distanceex").value);
    if (isNaN(ex)) {
        ex = window.ex
    }
    var go = parseFloat(document.getElementById("distancego").value);
    if (isNaN(go)) {
        go = window.go
    }
    var gu = parseFloat(document.getElementById("distancegu").value);
    if (isNaN(gu)) {
        gu = window.gu
    }

    var u1n = parseFloat(document.getElementById("distanceu1n").value);
    if (isNaN(u1n)) {
        u1n = window.u1n
    }
    var selectedScrewRows = document.getElementById("ScrewRows").value
    var u1 = (hsp - u1n - h).toFixed(2);

    //Umrechnungsfaktor für x-Wert von Höhen zu Pixel in Grafik

    var x_factor = 250 / hsp
    var y_factor = 125 / hsp;

    //Code for dimension chains
    hsp_measure.beginPath();
    hsp_measure.moveTo(35, 149);
    hsp_measure.lineTo(43, 149);
    hsp_measure.lineTo(39, 149);
    hsp_measure.lineTo(39, 24);
    hsp_measure.lineTo(35, 24);
    hsp_measure.lineTo(43, 24);
    hsp_measure.stroke();


    var h2_measure = canvas.getContext('2d');
    h2_measure.beginPath();
    h2_measure.moveTo(25, 149);
    h2_measure.lineTo(17, 149);
    h2_measure.lineTo(21, 149);
    h2_measure.lineTo(21, 149 - u1n * y_factor);
    h2_measure.lineTo(25, 149 - u1n * y_factor);
    h2_measure.lineTo(17, 149 - u1n * y_factor);
    h2_measure.lineTo(21, 149 - u1n * y_factor);
    h2_measure.lineTo(21, 149 - (u1n + h) * y_factor);
    h2_measure.lineTo(17, 149 - (u1n + h) * y_factor);
    h2_measure.lineTo(25, 149 - (u1n + h) * y_factor);
    h2_measure.lineTo(21, 149 - (u1n + h) * y_factor);
    h2_measure.lineTo(21, 24);
    h2_measure.lineTo(25, 24);
    h2_measure.lineTo(17, 24);
    h2_measure.stroke()


    //Ziffer Maßkette gesamte Breite
    var bsp_number = canvas.getContext('2d');
    bsp_number.font = '7px Arial';
    bsp_number.fillStyle = 'black';
    bsp_number.fillText(bsp, 55 + 125 * bsp / hsp, 8);


    //Maßketten für Schraubenabstände vertikal

    //Ziffer für Maßketten vertikale
    if (u1n !== 0) {
        var u1n_number = canvas.getContext('2d');
        u1n_number.font = '7px Arial';
        u1n_number.fillStyle = 'black';
        u1n_number.fillText(u1n, 75 + 250 * bsp / hsp, 149 - 0.5 * u1n * y_factor);
    }

    var gu_number = canvas.getContext('2d');
    gu_number.font = '7px Arial';
    gu_number.fillStyle = 'black';
    gu_number.fillText(gu, 75 + 250 * bsp / hsp, 149 - (0.5 * gu + u1n) * y_factor);

    var wh_number = canvas.getContext('2d');
    wh_number.font = '7px Arial';
    wh_number.fillStyle = 'black';
    wh_number.fillText(h - go - gu, 75 + 250 * bsp / hsp, 149 - (gu + u1n + 0.5 * (h - go - gu)) * y_factor);

    var go_number = canvas.getContext('2d');
    go_number.font = '7px Arial';
    go_number.fillStyle = 'black';
    go_number.fillText(go, 75 + 250 * bsp / hsp, 149 - (u1n + h - 0.5 * go) * y_factor);

    if (selectedScrewRows == 2) {
        var u1_number = canvas.getContext('2d');
        u1_number.font = '7px Arial';
        u1_number.fillStyle = 'black';
        u1_number.fillText(u1, 75 + 250 * bsp / hsp, 24 + 0.5 * u1 * y_factor)
    }

    if (selectedScrewRows == 3) {
        var eO_number = canvas.getContext('2d');
        eO_number.font = '7px Arial';
        eO_number.fillStyle = 'black';
        eO_number.fillText(ex, 75 + 250 * bsp / hsp, 24 + 0.5 * ex * y_factor)

        var mvE_number = canvas.getContext('2d');
        mvE_number.font = '7px Arial';
        mvE_number.fillStyle = 'black';
        mvE_number.fillText((u1 - ex).toFixed(2), 75 + 250 * bsp / hsp, 24 + ex * y_factor + 0.5 * (u1 - ex) * y_factor)
    }

    var hsp_number = canvas.getContext('2d');
    hsp_number.font = '7px Arial';
    hsp_number.fillStyle = 'black';
    hsp_number.fillText(hsp, 25, 149 - 0.5 * hsp * y_factor)

    if (u1n !== 0) {
        var u1nleft_number = canvas.getContext('2d');
        u1nleft_number.font = '7px Arial';
        u1nleft_number.fillStyle = 'black';
        u1nleft_number.fillText(u1n, 3, 149 - 0.5 * u1n * y_factor);
    }

    var h_number = canvas.getContext('2d');
    h_number.font = '7px Arial';
    h_number.fillStyle = 'black';
    h_number.fillText(h, 1, 149 - (u1n + 0.5 * h) * y_factor);

    var u1_number_left = canvas.getContext('2d');
    u1_number_left.font = '7px Arial';
    u1_number_left.fillStyle = 'black';
    u1_number_left.fillText(u1, 1, 149 - (u1n + h + 0.5 * u1) * y_factor);

    var e_measures = canvas.getContext('2d');
    e_measures.beginPath();
    e_measures.moveTo(67 + 250 * bsp / hsp, 149);
    e_measures.lineTo(75 + 250 * bsp / hsp, 149);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(67 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(75 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - u1n * y_factor);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(67 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(75 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - (gu + u1n) * y_factor);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(67 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(75 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - (u1n + h - go) * 125 / hsp);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(67 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(75 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(71 + 250 * bsp / hsp, 149 - (u1n + h) * 125 / hsp);
    e_measures.lineTo(71 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(67 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(75 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(71 + 250 * bsp / hsp, 24 + ex * y_factor);
    e_measures.lineTo(71 + 250 * bsp / hsp, 24);
    e_measures.lineTo(75 + 250 * bsp / hsp, 24);
    e_measures.lineTo(67 + 250 * bsp / hsp, 24);
    e_measures.stroke();

    //Maßkette für Abstände in Breite

    //Ziffer Maßketten Breite
    var e_number1 = canvas.getContext('2d');
    e_number1.font = '7px Arial';
    e_number1.fillStyle = 'black';
    e_number1.fillText(e, 55 + 0.5 * e * x_factor, 17);

    var e_number2 = canvas.getContext('2d');
    e_number2.font = '7px Arial';
    e_number2.fillStyle = 'black';
    e_number2.fillText(e, 55 + (bsp - 0.5 * e) * x_factor, 17);

    var w_number = canvas.getContext('2d');
    w_number.font = '7px Arial';
    w_number.fillStyle = 'black';
    w_number.fillText(bsp - 2 * e, 55 + (0.5 * bsp) * x_factor, 17);

    var bsp_measures = canvas.getContext('2d');
    bsp_measures.beginPath();
    bsp_measures.moveTo(55, 20);
    bsp_measures.lineTo(55, 16);
    bsp_measures.lineTo(55, 18);
    bsp_measures.lineTo(55 + e * x_factor, 18);
    bsp_measures.lineTo(55 + e * x_factor, 16);
    bsp_measures.lineTo(55 + e * x_factor, 20);
    bsp_measures.lineTo(55 + e * x_factor, 18);
    bsp_measures.lineTo(55 + (bsp - e) * x_factor, 18);
    bsp_measures.lineTo(55 + (bsp - e) * x_factor, 16);
    bsp_measures.lineTo(55 + (bsp - e) * x_factor, 20);
    bsp_measures.lineTo(55 + (bsp - e) * x_factor, 18);
    bsp_measures.lineTo(55 + bsp * x_factor, 18);
    bsp_measures.lineTo(55 + bsp * x_factor, 20);
    bsp_measures.lineTo(55 + bsp * x_factor, 16);
    bsp_measures.stroke();

    //Maßkette für Breitegesamt
    var bsp_m_sum = canvas.getContext('2d');
    bsp_m_sum.beginPath();
    bsp_m_sum.moveTo(55, 11)
    bsp_m_sum.lineTo(55, 7);
    bsp_m_sum.lineTo(55, 9);
    bsp_m_sum.lineTo(55 + bsp * x_factor, 9);
    bsp_m_sum.lineTo(55 + bsp * x_factor, 11);
    bsp_m_sum.lineTo(55 + bsp * x_factor, 7);
    bsp_m_sum.stroke();

    flu_context.beginPath();
    flu_context.moveTo(55 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(55 + 250 * 0.5 * bsp / hsp - b * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(55 + 250 * 0.5 * bsp / hsp - b * x_factor / 2, 149 - u1n * 125 / hsp);
    flu_context.lineTo(55 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp);
    flu_context.lineTo(55 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.lineTo(55 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor, 149 - u1n * 125 / hsp - tf * 125 / hsp);
    flu_context.stroke();

    //Drawing of upper flange
    flo_context.beginPath();
    flo_context.moveTo(55 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor, 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(55 + 250 * 0.5 * bsp / hsp - (b * x_factor / 2), 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(55 + 250 * 0.5 * bsp / hsp - (b * x_factor / 2), 149 - u1n * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(55 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(55 + 250 * 0.5 * bsp / hsp + b * x_factor / 2, 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.lineTo(55 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor, 149 - u1n * 125 / hsp + tf * 125 / hsp - h * 125 / hsp);
    flo_context.stroke();

    //Drawing of left Web
    LeftWeb_context.beginPath();
    LeftWeb_context.moveTo(55 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp);
    LeftWeb_context.lineTo(55 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp - (h * 125 / hsp - 2 * tf * 125 / hsp - 2 * r * 125 / hsp));
    LeftWeb_context.stroke();

    //Drawing of right Web
    RightWeb_context.beginPath();
    RightWeb_context.moveTo(55 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp);
    RightWeb_context.lineTo(55 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2, 149 - u1n * 125 / hsp - tf * 125 / hsp - r * 125 / hsp - (h * 125 / hsp - 2 * tf * 125 / hsp - 2 * r * 125 / hsp));
    RightWeb_context.stroke();

    //Drawing of left lower sector
    var centerX_left_low = 55 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor
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
    var centerX_right_low = 55 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor
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
    var centerX_right_up = 55 + 250 * 0.5 * bsp / hsp + tw * x_factor / 2 + r * x_factor;
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
    var centerX_left_up = 55 + 250 * 0.5 * bsp / hsp - tw * x_factor / 2 - r * x_factor;
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
    Low_screw_left_context.moveTo(55 + e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(55 + e * x_factor - 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(55 + e * x_factor + 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(55 + e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_left_context.lineTo(55 + e * x_factor, 149 - (u1n + gu) * 125 / hsp + 5);
    Low_screw_left_context.lineTo(55 + e * x_factor, 149 - (u1n + gu) * 125 / hsp - 5);
    Low_screw_left_context.stroke();

    Low_screw_right_context.beginPath();
    Low_screw_right_context.moveTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor - 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor + 5, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp);
    Low_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp + 5);
    Low_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + gu) * 125 / hsp - 5);
    Low_screw_right_context.stroke();

    //Drawing of inner upper Screws
    mid_screw_right_context.beginPath();
    mid_screw_right_context.moveTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor + 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor - 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp + 5);
    mid_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 149 - (u1n + h - go) * 125 / hsp - 5);
    mid_screw_right_context.stroke();

    mid_screw_left_context.beginPath();
    mid_screw_left_context.moveTo(55 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(55 + e * x_factor + 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(55 + e * x_factor - 5, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(55 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp);
    mid_screw_left_context.lineTo(55 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp + 5);
    mid_screw_left_context.lineTo(55 + e * x_factor, 149 - (u1n + h - go) * 125 / hsp - 5);
    mid_screw_left_context.stroke();

    //Drawing of upper screws (outside) -> only if 3 screw rows chosen by user!
    var selectedScrewRows = document.getElementById("ScrewRows").value
    if (selectedScrewRows == 3) {

        up_screw_right_context.beginPath();
        up_screw_right_context.moveTo(55 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp);
        up_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor + 5, 24 + ex * 125 / hsp)
        up_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor - 5, 24 + ex * 125 / hsp)
        up_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp)
        up_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp + 5)
        up_screw_right_context.lineTo(55 + bsp * x_factor - e * x_factor, 24 + ex * 125 / hsp - 5)
        up_screw_right_context.stroke();

        up_screw_left_context.beginPath();
        up_screw_left_context.moveTo(55 + e * x_factor, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(55 + e * x_factor + 5, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(55 + e * x_factor - 5, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(55 + e * x_factor, 24 + ex * 125 / hsp);
        up_screw_left_context.lineTo(55 + e * x_factor, 24 + ex * 125 / hsp + 5);
        up_screw_left_context.lineTo(55 + e * x_factor, 24 + ex * 125 / hsp - 5);
        up_screw_left_context.stroke();
    }
    var profileselection = document.getElementById("BeamSelection");
    var selectedProfile = BeamSelection.options[BeamSelection.selectedIndex].value;

    var profile = canvas.getContext('2d');
    profile.font = '9px Arial';
    profile.fillStyle = 'black';
    profile.fillText(selectedProfile, 10, 10);
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