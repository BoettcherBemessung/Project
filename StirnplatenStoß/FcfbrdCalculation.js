function McrCalculation() {
    var qsk = window.qsk;
    var Wely = window.Wely;
    var Wply = window.Wply;
    var fy = window.fy;
    var mcr = window.mcr;

    if (qsk == 3) {
        alert("Mcr=Wely*fy= " + Wely.toFixed(0) + "*" + fy + "=" + mcr.toFixed(0))
    }
    if (qsk == 1 || qsk == 2) {
        alert("Mcr=Wply*fy= " + Wply.toFixed(0) + "*" + fy + "=" + mcr.toFixed(0))
    }
}

function FcfbrdCalculation() {
    var h = window.h;
    var tf = window.tf;
    var mcr = window.mcr;
    var Fcfbrd = window.Fcfbrd
    alert("Fcfbrd= Mcr/ (h-tf) = " + mcr.toFixed(0) + "/(" + h + "-" + tf + ")=" + Fcfbrd.toFixed(0))
}