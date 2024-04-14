function draw_rect() {
    var canvas = document.getElementById('draw_Querschnitt');
    var bsp_context = canvas.getContext('2d')

    var hsp = parseFloat(document.getElementById('h_concrete').value) * 10;
    if (isNaN(hsp)) {
        hsp = 800
    }
    var bsp = parseFloat(document.getElementById('b_concrete').value) * 10;
    if (isNaN(bsp)) {
        bsp = 400
    }
    var x_factor = 230 / hsp
    var y_factor = 115 / hsp;

    //Zeichnung Rechteckquerschnitt
    bsp_context.clearRect(0, 0, canvas.width, canvas.height);
    bsp_context.beginPath();
    bsp_context.moveTo(30, 140);
    bsp_context.lineTo(30 + 250 * bsp / hsp, 140);
    bsp_context.lineTo(30 + 250 * bsp / hsp, 25);
    bsp_context.lineTo(30, 25);
    bsp_context.lineTo(30, 140);
    bsp_context.stroke();

    //Zeichnung Maßketten Rechteck
    bsp_context.beginPath();
    bsp_context.moveTo(40 + 250 * bsp / hsp, 140)
    bsp_context.lineTo(35 + 250 * bsp / hsp, 140)
    bsp_context.lineTo(45 + 250 * bsp / hsp, 140)
    bsp_context.lineTo(40 + 250 * bsp / hsp, 140)
    bsp_context.lineTo(40 + 250 * bsp / hsp, 25)
    bsp_context.lineTo(45 + 250 * bsp / hsp, 25)
    bsp_context.lineTo(35 + 250 * bsp / hsp, 25)
    bsp_context.stroke()

    bsp_context.beginPath();
    bsp_context.moveTo(30, 15)
    bsp_context.lineTo(30, 18)
    bsp_context.lineTo(30, 12)
    bsp_context.lineTo(30, 15)
    bsp_context.lineTo(30 + 250 * bsp / hsp, 15)
    bsp_context.lineTo(30 + 250 * bsp / hsp, 12)
    bsp_context.lineTo(30 + 250 * bsp / hsp, 18)
    bsp_context.stroke()

    //Ziffer Maßkette Rechteck
    var bsp_number = canvas.getContext('2d');
    bsp_number.font = '7px Arial';
    bsp_number.fillStyle = 'black';
    bsp_number.fillText("b = " + (bsp / 10).toFixed(2) + "cm", (30 + 30 + 250 * bsp / hsp) / 2 - 10, 12);

    var hsp_number = canvas.getContext('2d');
    hsp_number.font = '7px Arial';
    hsp_number.fillStyle = 'black';
    hsp_number.fillText("h = " + (hsp / 10).toFixed(2) + "cm", 45 + 250 * bsp / hsp, 82);
}

function drawPlattenBalken_oben() {

    var canvas = document.getElementById('draw_Querschnitt');
    var bsp_context = canvas.getContext('2d')
    var hsp = parseFloat(document.getElementById('h_concrete').value) * 10;
    if (isNaN(hsp)) {
        hsp = 800
    }
    var bsp = parseFloat(document.getElementById('b_concrete').value) * 10;
    if (isNaN(bsp)) {
        bsp = 1000
    }
    var t_pb_O = parseFloat(document.getElementById('t_Platte').value) * 10;
    if (isNaN(t_pb_O)) {
        t_pb_O = 100
    }
    var t_steg = parseFloat(document.getElementById('Stegdicke').value) * 10;
    if (isNaN(t_steg)) {
        t_steg = 200
    }
    console.log("dicke der Platte = " + t_pb_O)
    var x_factor = 220 / bsp
    var y_factor = 110 / bsp;

    //Zeichnung Rechteckquerschnitt
    bsp_context.clearRect(0, 0, canvas.width, canvas.height);
    bsp_context.beginPath();
    bsp_context.moveTo(30, 25);
    bsp_context.lineTo(250, 25);
    bsp_context.lineTo(250, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 25 + hsp * y_factor);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 25 + hsp * y_factor);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(30, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(30, 25);
    bsp_context.stroke();

    bsp_context.beginPath();
    bsp_context.moveTo(30, 20);
    bsp_context.lineTo(30, 23);
    bsp_context.lineTo(30, 17);
    bsp_context.lineTo(30, 20);
    bsp_context.lineTo(250, 20);
    bsp_context.lineTo(250, 17);
    bsp_context.lineTo(250, 23);
    bsp_context.stroke()

    bsp_context.beginPath();
    bsp_context.moveTo(140 - 0.5 * t_steg * x_factor, 30 + hsp * y_factor);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 33 + hsp * y_factor);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 27 + hsp * y_factor);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 30 + hsp * y_factor);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 30 + hsp * y_factor);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 33 + hsp * y_factor);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 27 + hsp * y_factor);
    bsp_context.stroke()

    bsp_context.beginPath();
    bsp_context.moveTo(260, 25);
    bsp_context.lineTo(255, 25);
    bsp_context.lineTo(265, 25);
    bsp_context.lineTo(260, 25);
    bsp_context.lineTo(260, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(265, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(255, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(260, 25 + t_pb_O * y_factor);
    bsp_context.lineTo(260, 25 + hsp * y_factor);
    bsp_context.lineTo(255, 25 + hsp * y_factor);
    bsp_context.lineTo(265, 25 + hsp * y_factor);
    bsp_context.stroke()

    bsp_context.beginPath();
    bsp_context.moveTo(20, 25);
    bsp_context.lineTo(25, 25);
    bsp_context.lineTo(15, 25);
    bsp_context.lineTo(20, 25);
    bsp_context.lineTo(20, 25 + hsp * y_factor);
    bsp_context.lineTo(15, 25 + hsp * y_factor);
    bsp_context.lineTo(25, 25 + hsp * y_factor);
    bsp_context.stroke()

    //Ziffer Maßkette Rechteck
    var bsp_number = canvas.getContext('2d');
    bsp_number.font = '7px Arial';
    bsp_number.fillStyle = 'black';
    bsp_number.fillText("b = " + (bsp / 10).toFixed(2) + "cm", 120, 19);

    var hsp_number = canvas.getContext('2d');
    hsp_number.font = '7px Arial';
    hsp_number.fillStyle = 'black';
    hsp_number.fillText("h = " + (hsp / 10).toFixed(2) + "cm", 25, 25 + 0.5 * hsp * y_factor);

    var tsp_number = canvas.getContext('2d');
    tsp_number.font = '7px Arial';
    tsp_number.fillStyle = 'black';
    tsp_number.fillText("t = " + (t_pb_O / 10).toFixed(2) + "cm", 265, 25 + 0.5 * t_pb_O * y_factor);

    var hrest_number = canvas.getContext('2d');
    hrest_number.font = '7px Arial';
    hrest_number.fillStyle = 'black';
    hrest_number.fillText("hu= " + ((hsp - t_pb_O) / 10).toFixed(2) + "cm", 265, 25 + (t_pb_O + 0.5 * (hsp - t_pb_O)) * y_factor)

    var t_steg_number = canvas.getContext('2d');
    t_steg_number.font = '8px Arial';
    t_steg_number.fillStyle = 'black';
    t_steg_number.fillText("tw = " + (t_steg / 10).toFixed(2) + "cm", 120, 40 + hsp * y_factor)

}

function drawPlattenBalken_unten() {

    var canvas = document.getElementById('draw_Querschnitt');
    var bsp_context = canvas.getContext('2d')
    var hsp = parseFloat(document.getElementById('h_concrete').value) * 10;
    if (isNaN(hsp)) {
        hsp = 800
    }
    var bsp = parseFloat(document.getElementById('b_concrete').value) * 10;
    if (isNaN(bsp)) {
        bsp = 1000
    }
    var t_pb_O = parseFloat(document.getElementById('t_Platte').value) * 10;
    if (isNaN(t_pb_O)) {
        t_pb_O = 100
    }
    var t_steg = parseFloat(document.getElementById('Stegdicke').value) * 10;
    if (isNaN(t_steg)) {
        t_steg = 200
    }
    console.log("dicke der Platte = " + t_pb_O)
    var x_factor = 220 / bsp
    var y_factor = 110 / bsp;

    //Zeichnung Rechteckquerschnitt
    bsp_context.clearRect(0, 0, canvas.width, canvas.height);
    bsp_context.beginPath();
    bsp_context.moveTo(140 - 0.5 * t_steg * x_factor, 25);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 25);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(250, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(250, 25 + hsp * y_factor);
    bsp_context.lineTo(30, 25 + hsp * y_factor);
    bsp_context.lineTo(30, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 25);
    bsp_context.stroke();

    bsp_context.beginPath();
    bsp_context.moveTo(30, 30 + hsp * y_factor);
    bsp_context.lineTo(30, 27 + hsp * y_factor);
    bsp_context.lineTo(30, 33 + hsp * y_factor);
    bsp_context.lineTo(30, 30 + hsp * y_factor);
    bsp_context.lineTo(250, 30 + hsp * y_factor);
    bsp_context.lineTo(250, 27 + hsp * y_factor);
    bsp_context.lineTo(250, 33 + hsp * y_factor);
    bsp_context.stroke()

    bsp_context.beginPath();
    bsp_context.moveTo(140 - 0.5 * t_steg * x_factor, 20);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 23);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 17);
    bsp_context.lineTo(140 - 0.5 * t_steg * x_factor, 20);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 20);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 23);
    bsp_context.lineTo(140 + 0.5 * t_steg * x_factor, 17);
    bsp_context.stroke()

    bsp_context.beginPath();
    bsp_context.moveTo(260, 25);
    bsp_context.lineTo(255, 25);
    bsp_context.lineTo(265, 25);
    bsp_context.lineTo(260, 25);
    bsp_context.lineTo(260, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(265, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(255, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(260, 25 + (hsp - t_pb_O) * y_factor);
    bsp_context.lineTo(260, 25 + hsp * y_factor);
    bsp_context.lineTo(255, 25 + hsp * y_factor);
    bsp_context.lineTo(265, 25 + hsp * y_factor);
    bsp_context.stroke()

    bsp_context.beginPath();
    bsp_context.moveTo(20, 25);
    bsp_context.lineTo(25, 25);
    bsp_context.lineTo(15, 25);
    bsp_context.lineTo(20, 25);
    bsp_context.lineTo(20, 25 + hsp * y_factor);
    bsp_context.lineTo(15, 25 + hsp * y_factor);
    bsp_context.lineTo(25, 25 + hsp * y_factor);
    bsp_context.stroke()

    //Ziffer Maßkette Rechteck
    var bsp_number = canvas.getContext('2d');
    bsp_number.font = '7px Arial';
    bsp_number.fillStyle = 'black';
    bsp_number.fillText("b = " + (bsp / 10).toFixed(2) + "cm", 120, 40 + hsp * y_factor);

    var hsp_number = canvas.getContext('2d');
    hsp_number.font = '7px Arial';
    hsp_number.fillStyle = 'black';
    hsp_number.fillText("h = " + (hsp / 10).toFixed(2) + "cm", 25, 25 + 0.5 * hsp * y_factor);

    var tsp_number = canvas.getContext('2d');
    tsp_number.font = '7px Arial';
    tsp_number.fillStyle = 'black';
    tsp_number.fillText("t = " + (t_pb_O / 10).toFixed(2) + "cm", 265, 25 + (hsp - t_pb_O + 0.5 * t_pb_O) * y_factor);

    var hrest_number = canvas.getContext('2d');
    hrest_number.font = '7px Arial';
    hrest_number.fillStyle = 'black';
    hrest_number.fillText("hu= " + ((hsp - t_pb_O) / 10).toFixed(2) + "cm", 265, 25 + 0.5 * (hsp - t_pb_O) * y_factor)

    var t_steg_number = canvas.getContext('2d');
    t_steg_number.font = '8px Arial';
    t_steg_number.fillStyle = 'black';
    t_steg_number.fillText("tw = " + (t_steg / 10).toFixed(2) + "cm", 120, 17)


}