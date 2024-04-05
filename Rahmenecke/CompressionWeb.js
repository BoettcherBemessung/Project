function ColumnEvidence() {

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

    var Vwprd = 0.9 * Ab_Column * fy_Column / 1.7320508075688772935274463415059;
    window.Vwprd = Vwprd;

    if (language_english == 1 && language_spanish == 0) {
        document.getElementById('Vwprd').innerText = "Evidence of Shear force Web panel";
        document.getElementById('FcwcrdHeading').innerText = "Evidence of Compression Web Column";
        document.getElementById('FtwbrdHeading').innerText = "Evidence of Tension Web Column";
    }

    if (language_english == 0 && language_spanish == 0) {
        document.getElementById('Vwprd').innerText = "NW Stützentsteg auf Querschub";
        document.getElementById('FcwcrdHeading').innerText = "NW Stützensteg auf Querdruck";
        document.getElementById('FtwbrdHeading').innerText = "NW Stützensteg Querzug";
    }

    if (language_spanish == 1) {
        document.getElementById('Vwprd').innerText = "Evidencia alma de la columna baj fuerza contante";
        document.getElementById('FcwcrdHeading').innerText = "Evidencia de alma de la columna bajo compresion";
        document.getElementById('FtwbrdHeading').innerText = "Evidencia de alma de la columna bajo tension";
    }

    document.getElementById('VwprdResult').innerText = "Vwprd: " + (Vwprd / 1000).toFixed(2) + "kN";

    var beffcwc = tf + 2 * 1.4142135623730950488016887242097 * af + 5 * (tf_Column + r_Column) + Math.min(2 * tsp, tsp + u1n)
    var omega = 1 / (1 + 1.3 * (beffcwc * tw_Column / Ab_Column) ** 2) ** 0.5
    var kwc = 1
    var lambdap = 0.932 * (beffcwc * (h_Column - 2 * (tf_Column + r_Column)) * fy_Column / (210000 * tw_Column ** 2)) ** 0.5;
    if (lambdap <= 0, 72) {
        roh = 1
    }
    if (lambdap > 0.72) {
        roh = (lambdap - 0.2) / lambdap ** 2

    }
    var Fcwcrd = Math.min(omega * kwc * beffcwc * tw_Column * fy_Column, omega * kwc * roh * beffcwc * tw_Column * fy_Column / 1.1)
    window.Fcwcrd = Fcwcrd

    document.getElementById('kwc').innerText = "kwc: " + kwc.toFixed(4);
    document.getElementById('omegacw').innerText = "omega: " + omega.toFixed(2);
    document.getElementById('beffcwc').innerText = "beffcwc: " + beffcwc.toFixed(2) + "mm";
    document.getElementById('Fcwcrd').innerText = "Fcwcrd: " + (Fcwcrd / 1000).toFixed(2) + "kN";

    if (selectedScrewRows == 2) {
        var Ft1rdO = window.Ft1rdO_Column
        var Ft2rdO = window.Ft2rdO_Column
        var Ft3rdO = window.Ft3rdO_Column
        var Ft1rdU = window.Ft1rdU_Column
        var Ft2rdU = window.Ft2rdU_Column
        var Ft3rdU = window.Ft3rdU_Column
        var leff1O = window.leff1O_Column
        var leff2O = window.leff2O_Column
        var leff1U = window.leff1U_Column
        var leff2U = window.leff2U_Column


        if (Ft1rdO > Ft2rdO && Ft1rdO > Ft3rdO) {
            befftwcO = leff1O
        } else {
            befftwcO = leff2O
        }
        if (Ft1rdU > Ft2rdU && Ft1rdO > Ft3rdU) {
            befftwcU = leff1O
        } else {
            befftwcU = leff2U
        }

        var omegaO = 1 / (1 + 1.3 * (befftwcO * tw_Column / Ab_Column) ** 2) ** 0.5
        var omegaU = 1 / (1 + 1.3 * (befftwcU * tw_Column / Ab_Column) ** 2) ** 0.5

        var FtwcrdO = omegaO * befftwcO * tw_Column * fy_Column
        var FtwcrdU = omegaU * befftwcU * tw_Column * fy_Column

        document.getElementById('omegatwO').innerText = "omega: " + omegaO.toFixed(4);
        document.getElementById('befftwcO').innerText = "befftwc: " + befftwcO.toFixed(2) + "mm";
        document.getElementById('FtwcrdO').innerText = "Ftwcrd: " + (FtwcrdO / 1000).toFixed(2) + "kN";

        document.getElementById('omegatwM').innerText = "";
        document.getElementById('befftwcM').innerText = "";
        document.getElementById('FtwcrdM').innerText = "";

        document.getElementById('omegatwU').innerText = "omega: " + omegaU.toFixed(4);
        document.getElementById('befftwcU').innerText = "befftwc: " + befftwcU.toFixed(2) + "mm";
        document.getElementById('FtwcrdU').innerText = "Ftwcrd: " + (FtwcrdU / 1000).toFixed(2) + "kN";

    }
    if (selectedScrewRows == 3) {

        var Ft1rdO = window.Ft1rdO_Column
        var Ft2rdO = window.Ft2rdO_Column
        var Ft3rdO = window.Ft3rdO_Column
        var Ft1rdM = window.Ft1rdM_Column
        var Ft2rdM = window.Ft2rdM_Column
        var Ft3rdM = window.Ft3rdM_Column
        var Ft1rdU = window.Ft1rdU_Column
        var Ft2rdU = window.Ft2rdU_Column
        var Ft3rdU = window.Ft3rdU_Column
        var leff1O = window.leff1O_Column
        var leff2O = window.leff2O_Column
        var leff1M = window.leff1M_Column
        var leff2M = window.leff2M_Column
        var leff1U = window.leff1U_Column
        var leff2U = window.leff2U_Column

        if (Ft1rdO > Ft2rdO && Ft1rdO > Ft3rdO) {
            befftwcU = leff1O
        } else {
            befftwcO = leff2O
        }

        if (Ft1rdM > Ft2rdM && Ft1rdM > Ft3rdM) {
            befftwcM = leff1M
        } else {
            befftwcM = leff2M
        }

        if (Ft1rdU > Ft2rdU && Ft1rdO > Ft3rdU) {
            befftwcU = leff1O
        } else {
            befftwcU = leff2U
        }
        var omegaO = 1 / (1 + 1.3 * (befftwcO * tw_Column / Ab_Column) ** 2) ** 0.5
        var omegaM = 1 / (1 + 1.3 * (befftwcM * tw_Column / Ab_Column) ** 2) ** 0.5
        var omegaU = 1 / (1 + 1.3 * (befftwcU * tw_Column / Ab_Column) ** 2) ** 0.5

        var FtwcrdO = omegaO * befftwcO * tw_Column * fy_Column
        var FtwcrdM = omegaM * befftwcM * tw_Column * fy_Column
        var FtwcrdU = omegaU * befftwcU * tw_Column * fy_Column

        document.getElementById('omegatwO').innerText = "omega: " + omegaO.toFixed(4);
        document.getElementById('befftwcO').innerText = "befftwc: " + befftwcO.toFixed(2) + "mm";
        document.getElementById('FtwcrdO').innerText = "Ftwcrd: " + (FtwcrdO / 1000).toFixed(2) + "kN";

        document.getElementById('omegatwM').innerText = "omega: " + omegaM.toFixed(4);
        document.getElementById('befftwcM').innerText = "befftwc: " + befftwcM.toFixed(2) + "mm";
        document.getElementById('FtwcrdM').innerText = "Ftwcrd: " + (FtwcrdM / 1000).toFixed(2) + "kN";

        document.getElementById('omegatwU').innerText = "omega: " + omegaU.toFixed(4);
        document.getElementById('befftwcU').innerText = "befftwc: " + befftwcU.toFixed(2) + "mm";
        document.getElementById('FtwcrdU').innerText = "Ftwcrd: " + (FtwcrdU / 1000).toFixed(2) + "kN";
    }
    window.Ft1rdO = Ft1rdO
    window.Ft2rdO = Ft2rdO
    window.Ft3rdO = Ft3rdO
    window.Ft1rdM = Ft1rdM
    window.Ft2rdM = Ft2rdM
    window.Ft3rdM = Ft3rdM
    window.Ft1rdU = Ft1rdU
    window.Ft2rdU = Ft2rdU
    window.Ft3rdU = Ft3rdU
    window.FtwcrdO = FtwcrdO;
    window.FtwcrdM = FtwcrdM;
    window.FtwcrdU = FtwcrdU;


}