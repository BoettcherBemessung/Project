function framedraw() {
    dataload()
    loadColumndata()

    var ew = window.ew
    var go = window.gu
    var ex = window.ex
    var gu = window.ex
    var u1n = window.u1n
    var hsp = window.hsp;
    var bsp = window.bsp;
    var tsp = window.tsp;

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
    columnheight_context.moveTo(10, 145);
    columnheight_context.lineTo(10, 10);
    columnheight_context.lineTo(10 + hc * xC_factor, 10);
    columnheight_context.lineTo(10 + hc * xC_factor, 145);
    columnheight_context.lineTo(10, 145);
    columnheight_context.stroke();

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

    //Drawing of Beam upper Flange
    var topflange_context = canvasColumn.getContext('2d');
    topflange_context.beginPath();
    topflange_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor);
    topflange_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor);
    topflange_context.lineTo(280, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor);
    topflange_context.stroke();

    //Drawing of lower ScrewRow
    var lowerScrew_context = canvasColumn.getContext('2d');
    lowerScrew_context.beginPath();
    lowerScrew_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor)
    lowerScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + (hsp - (u1n + gu)) * yC_factor)
    lowerScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 10, 20 + (hsp - (u1n + gu)) * yC_factor)
    lowerScrew_context.lineTo(10 + hc * xC_factor - 10, 20 + (hsp - (u1n + gu)) * yC_factor)
    lowerScrew_context.stroke();

    //Drawing of middle Screwros
    var middleScrew_context = canvasColumn.getContext('2d');
    middleScrew_context.beginPath();
    middleScrew_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor)
    middleScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + go * yC_factor)
    middleScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 10, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + go * yC_factor)
    middleScrew_context.lineTo(10 + hc * xC_factor - 10, 20 + hsp * yC_factor - u1n * yC_factor - h * yC_factor + go * yC_factor)
    middleScrew_context.stroke();

    //Drawing of upper Screwrows
    if (selectedScrewRows == 3) {
        var upperScrew_context = canvasColumn.getContext('2d');
        upperScrew_context.beginPath();
        upperScrew_context.moveTo(10 + hc * xC_factor + tsp * xC_factor, 20 + ex * yC_factor)
        upperScrew_context.lineTo(10 + hc * xC_factor + tsp * xC_factor + 10, 20 + ex * yC_factor)
        upperScrew_context.lineTo(10 + hc * xC_factor - 10, 20 + ex * yC_factor)
        upperScrew_context.stroke();
    }






}