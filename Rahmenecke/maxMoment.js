function maxMoment() {
    var Ab_Column = window.Ab_Column
    var fy_Column = window.fy_Column;
    var tf = window.tf
    var af = window.af
    var tf_Column = window.tf_Column
    var r_Column = window.r_Column
    var tsp = window.tsp;
    var u1n = window.u1n;
    var tw_Column = window.tw_Column
    var h_Column = window.h_Column
    var selectedScrewRows = window.selectedScrewRows
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    var Vwprd = window.Vwprd
    var Fcwcrd = window.Fcwcrd
    var Fcfbrd = window.Fcfbrd
    var Ftwbrd = window.Ftwbrd
    var Ft1rdO = window.Ft1rdO
    var Ft2rdO = window.Ft2rdO
    var Ft3rdO = window.Ft3rdO
    var Ft1rdM = window.Ft1rdM
    var Ft2rdM = window.Ft2rdM
    var Ft3rdM = window.Ft3rdM
    var Ft1rdU = window.Ft1rdU
    var Ft2rdU = window.Ft2rdU
    var Ft3rdU = window.Ft3rdU

    var Ft1rdO_Column = window.Ft1rdO_Column
    var Ft2rdO_Column = window.Ft1rdO_Column
    var Ft3rdO_Column = window.Ft3rdO_Column

    var Ft1rdM_Column = window.Ft1rdM_Column
    var Ft2rdM_Column = window.Ft1rdM_Column
    var Ft3rdM_Column = window.Ft3rdM_Column

    var Ft1rdU_Column = window.Ft1rdU_Column
    var Ft2rdU_Column = window.Ft2rdU_Column
    var Ft3rdU_Column = window.Ft3rdU_Column

    if (selectedScrewRows == 2) {
        var FtO = Math.min(Ft1rdO, Ft2rdO, Ft3rdO, Ft1rdO_Column, Ft2rdO_Column, Ft3rdO_Column, FtwcrdO, Ftwbrd);
        var FtU = Math.min(Ft1rdU, Ft2rdU, Ft3rdU, Ft1rdU_Column, Ft2rdU_Column, Ft3rdU_Column, FtwcrdU, Ftwbrd);

        var Fglobal = Math.min(Vwprd, Fcwcrd, Fcfbrd)
        var sumFtrd = FtO + FtU

        var hs1 = window.hs1
        var hs2 = window.hs2

        if (Fglobal < sumFtrd) { FtU = FtU - (sumFtrd - Fglobal) }

        if (FtU < 0) {
            FtO = FtO + FtU;
            FtU = 0
        }
        if (FtU > (FtO / hs1) * hs2) { if (FtO > 0.95 * Ft3rdO) { FtU = FtO * hs2 / hs1 } }

        var Mmax = FtO * hs1 + FtU * hs2

        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("Mmaxresults").innerText = "authoritive Screwforces & Max M:";
            document.getElementById("Ft1eff").innerText = "Fteff1: " + (FtO / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft2eff").innerText = "Fteff2: " + (FtU / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft3eff").innerText = "";
            document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";
        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("Mmaxresults").innerText = "maßgebende Schraubenkräfte & Max M:";
            document.getElementById("Ft1eff").innerText = "Fteff1: " + (FtO / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft2eff").innerText = "Fteff2: " + (FtU / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft3eff").innerText = "";
            document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";
        }
        if (language_spanish == 1) {
            document.getElementById("Mmaxresults").innerText = "fuerzas de tornillos predominantes & Max M:";
            document.getElementById("Ft1eff").innerText = "Fteff1: " + (FtO / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft2eff").innerText = "Fteff2: " + (FtU / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft3eff").innerText = "";
            document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";
        }
    }

    if (selectedScrewRows == 3) {
        var FtO = Math.min(Ft1rdO, Ft2rdO, Ft3rdO, Ft1rdO_Column, Ft2rdO_Column, Ft3rdO_Column, FtwcrdO, Ftwbrd);
        var FtM = Math.min(Ft1rdM, Ft2rdM, Ft3rdM, Ft1rdM_Column, Ft2rdM_Column, Ft3rdM_Column, FtwcrdM, Ftwbrd);
        var FtU = Math.min(Ft1rdU, Ft2rdU, Ft3rdU, Ft1rdU_Column, Ft2rdU_Column, Ft3rdU_Column, FtwcrdU, Ftwbrd);
        var Fglobal = Math.min(Vwprd, Fcwcrd, Fcfbrd)
        var sumFtrd = FtO + FtM + FtU
        var hs1 = window.hs1
        var hs2 = window.hs2
        var hs3 = window.hs3

        var SumFtrd = FtO + FtM + FtU

        if (Fglobal < SumFtrd) { FtU = FtU - (sumFtrd - Fglobal) }

        if (FtU < 0) {
            FtM = FtM + FtU;
            FtU = 0
        }
        if (FtM < 0) {
            FtO = Fglobal;
            FtM = 0
        }
        if (FtO > 0.95 * FtU) { if (FtM > (FtO / hs1) * hs2) { FtM = (FtO / hs1) * hs2 }; if (FtU > (FtO / hs1) * hs3) { FtU = (FtO / hs1) * hs3 } }
        if (FtM > 0.95 * FtU) { if (FtU > (FtM / hs2) * hs3) { FtU = (FtM / hs2) * hs3 } }

        var Mmax = FtO * hs1 + FtM * hs2 + FtU * hs3

        if (language_english == 1) {
            document.getElementById("Mmaxresults").innerText = "Calculation of Mmax:";
        }
        if (language_english == 0) {
            document.getElementById("Mmaxresults").innerText = "Berechnung von Mmax:";
        }
        if (language_spanish == 1) {
            document.getElementById("Mmaxresults").innerText = "Calculacion de Mmax:";
        }
        document.getElementById("Ft1eff").innerText = "Fteff1: " + (aFtO / 1000).toFixed(2) + " kN ";
        document.getElementById("Ft2eff").innerText = "Fteff2: " + (aFtM / 1000).toFixed(2) + " kN ";
        document.getElementById("Ft3eff").innerText = "Fteff3: " + (FtU / 1000).toFixed(2) + " kN ";
        document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";
    }
}