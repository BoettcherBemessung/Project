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