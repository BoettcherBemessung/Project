function framedraw() {
    dataload()
    loadColumndata()

    var ew = window.ew
    var go = window.go
    var ex = window.ex
    var gu = window.gu
    var u1n = window.u1n
    var hsp = window.hsp;
    var bsp = window.bsp;
    var tsp = window.tsp;
    var tfc = window.tfc;
    var u2 = window.u2;


    var selectedScrewRows = document.getElementById("ScrewRows").value
    var selectedScrewshape = document.getElementById("ScrewShape").value;
    var canvasColumn = document.getElementById("canvasframe");
    var columnheight_context = canvasColumn.getContext('2d');

    var yC_factor = 100 / hsp;
    var xC_factor = 200 / hsp;

    console.log("hc=" + hc)
    console.log("h=" + h)
    console.log("hsp=" + hsp)

    columnheight_context.clearRect(0, 0, canvasColumn.width, canvasColumn.height);

    //Drawing of Column
    columnheight_context.beginPath();
    columnheight_context.moveTo(10, 130);
    columnheight_context.lineTo(10, 10);
    columnheight_context.lineTo(10 + hc * xC_factor, 10);
    columnheight_context.lineTo(10 + hc * xC_factor, 130);
    columnheight_context.lineTo(10, 130);
    columnheight_context.stroke();

    //Drawing of Columnflange
    var columnflange_context = canvasColumn.getContext('2d')
    columnflange_context.beginPath();
    columnflange_context.moveTo(10 + tfc * xC_factor, 130)
    columnflange_context.lineTo(10 + tfc * xC_factor, 10)
    columnflange_context.lineTo(10 + hc * xC_factor - tfc * xC_factor, 10)
    columnflange_context.lineTo(10 + hc * xC_factor - tfc * xC_factor, 130)
    columnflange_context.stroke();

    //Drawing of facepalte
    var beam_context = canvasColumn.getContext('2d');
    beam_context.beginPath();
    beam_context.moveTo(10 + hc * xC_factor, 10);
    beam_context.lineTo(10 + hc * xC_factor, 20);
    beam_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20);
    beam_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor);
    beam_context.lineTo(10 + hc * xC_factor, 20 + hsp * yC_factor);
    beam_context.stroke();

    //Drawing of Beam lower Flange
    var u1n_context = canvasColumn.getContext('2d');
    u1n_context.beginPath();
    u1n_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor);
    u1n_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor);
    u1n_context.lineTo(280, 20 + hsp * yC_factor - u1n * yC_factor);
    u1n_context.stroke();

    u1n_context.beginPath();
    u1n_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - tf * yC_factor)
    u1n_context.lineTo(280, 20 + hsp * yC_factor - u1n * yC_factor - tf * yC_factor)
    u1n_context.stroke();

    //Drawing of Beam upper Flange
    var topflange_context = canvasColumn.getContext('2d');
    topflange_context.beginPath();
    topflange_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor);
    topflange_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor);
    topflange_context.lineTo(280, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor);
    topflange_context.stroke();

    topflange_context.beginPath();
    topflange_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + tf * yC_factor)
    topflange_context.lineTo(280, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + tf * yC_factor);
    topflange_context.stroke()

    //Drawing of lower ScrewRow
    var lowerScrew_context = canvasColumn.getContext('2d');
    lowerScrew_context.beginPath();
    lowerScrew_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor)
    lowerScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + (hsp - (u1n + gu)) * yC_factor)
    lowerScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 10, 20 + (hsp - (u1n + gu)) * yC_factor)
    lowerScrew_context.lineTo(10 + hc * xC_factor - tfc * xC_factor - 10, 20 + (hsp - (u1n + gu)) * yC_factor)
    lowerScrew_context.stroke();

    //Drawing of middle Screwros
    var middleScrew_context = canvasColumn.getContext('2d');
    middleScrew_context.beginPath();
    middleScrew_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor)
    middleScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + go * yC_factor)
    middleScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 10, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + go * yC_factor)
    middleScrew_context.lineTo(10 + hc * xC_factor - tfc * xC_factor - 10, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + go * yC_factor)
    middleScrew_context.stroke();

    //Drawing of upper Screwrows
    if (selectedScrewRows == 3) {
        var upperScrew_context = canvasColumn.getContext('2d');
        upperScrew_context.beginPath();
        upperScrew_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + ex * yC_factor)
        upperScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 10, 20 + ex * yC_factor)
        upperScrew_context.lineTo(10 + hc * xC_factor - tfc * xC_factor - 10, 20 + ex * yC_factor)
        upperScrew_context.stroke();
    }

    //Drawing of dimensionchains Column
    var dimensioncolumn_context = canvasColumn.getContext('2d');
    dimensioncolumn_context.beginPath();
    dimensioncolumn_context.moveTo(10, 145)
    dimensioncolumn_context.lineTo(10, 140);
    dimensioncolumn_context.lineTo(10, 150);
    dimensioncolumn_context.lineTo(10, 145);
    dimensioncolumn_context.lineTo(10 + tfc * xC_factor, 145);
    dimensioncolumn_context.lineTo(10 + tfc * xC_factor, 140);
    dimensioncolumn_context.lineTo(10 + tfc * xC_factor, 150);
    dimensioncolumn_context.lineTo(10 + tfc * xC_factor, 145);
    dimensioncolumn_context.lineTo(10 + (hc - tfc) * xC_factor, 145);
    dimensioncolumn_context.lineTo(10 + (hc - tfc) * xC_factor, 140);
    dimensioncolumn_context.lineTo(10 + (hc - tfc) * xC_factor, 150);
    dimensioncolumn_context.lineTo(10 + (hc - tfc) * xC_factor, 145);
    dimensioncolumn_context.lineTo(10 + hc * xC_factor, 145);
    dimensioncolumn_context.lineTo(10 + hc * xC_factor, 150);
    dimensioncolumn_context.lineTo(10 + hc * xC_factor, 140);
    dimensioncolumn_context.lineTo(10 + hc * xC_factor, 145);
    dimensioncolumn_context.lineTo(10 + (hc + tsp) * xC_factor, 145);
    dimensioncolumn_context.lineTo(10 + (hc + tsp) * xC_factor, 150);
    dimensioncolumn_context.lineTo(10 + (hc + tsp) * xC_factor, 140);
    dimensioncolumn_context.stroke()

    //numbers of columndimensionchain
    var tfc1_number = canvasColumn.getContext('2d');
    tfc1_number.font = '9px Arial';
    tfc1_number.fillStyle = 'black';
    tfc1_number.fillText(tfc, (10 + 10 + tfc * xC_factor) / 2 - 4, 140)

    var hwc_number = canvasColumn.getContext('2d');
    hwc_number.font = '9px Arial';
    hwc_number.fillStyle = 'black';
    hwc_number.fillText((h - 2 * tfc).toFixed(2), (10 + tfc * xC_factor + 10 + (hc - tfc) * xC_factor) / 2 - 10, 140)

    var tfc2_number = canvasColumn.getContext('2d');
    tfc2_number.font = '9px Arial';
    tfc2_number.fillStyle = 'black';
    tfc2_number.fillText(tfc, (10 + hc * xC_factor + 10 + (hc - tfc) * xC_factor) / 2 - 9, 140)

    var tsp_number = canvasColumn.getContext('2d');
    tsp_number.font = '9px Arial';
    tsp_number.fillStyle = 'black';
    tsp_number.fillText(tsp, (10 + (hc + tsp) * xC_factor + 10 + hc * xC_factor) / 2, 140)

    //Drawing of dimension chain e1
    var u2_context = canvasColumn.getContext('2d');
    u2_context.beginPath();
    u2_context.moveTo(10 + hc * xC_factor + tsp * xC_factor + 20, 20)
    u2_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 15, 20)
    u2_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 25, 20)
    u2_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 20, 20)
    u2_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 20, 10)
    u2_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 15, 10)
    u2_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 25, 10)
    u2_context.stroke()

    var u2_number = canvasColumn.getContext('2d');
    u2_number.font = '9px Arial';
    u2_number.fillStyle = 'black';
    u2_number.fillText("u2=" + u2, 10 + hc * xC_factor + tsp * xC_factor + 30, 15)

    //Showing of chosen profile

    var selectedColumnprofile = document.getElementById('ColumnSelection').value
    var selectedbeamprofile = document.getElementById('BeamSelection').value

    var columnprofile = canvasColumn.getContext('2d');
    columnprofile.font = '9px Arial';
    columnprofile.fillStyle = 'black';
    columnprofile.fillText(selectedColumnprofile, (10 + 10 + hc * xC_factor) / 2 - 10, 125)

    var beamprofile = canvasColumn.getContext('2d');
    beamprofile.font = '9px Arial';
    beamprofile.fillStyle = 'black';
    beamprofile.fillText(selectedbeamprofile, 260, (20 + hsp * yC_factor - u1n * yC_factor + 20 + hsp * yC_factor - u1n * yC_factor - tf * yC_factor) / 2 - 15)


}