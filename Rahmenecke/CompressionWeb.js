function ColumnEvidence() {

    var Avzb_Column = window.Avzb_Column
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
    var language_german = window.language_german
    var Iy_Column = window.Iy_Column
    var Ab = window.Ab_Column

    var RibSelection = window.RibSelection
    var ts_Rib = document.getElementById("ts_Rib").value;
    if (isNaN(ts_Rib)) {
        ts_Rib = window.tf
    }
    var a_Rib = document.getElementById("Rib_Welding").value;

    var Med = parseFloat(document.getElementById("ValueMed").value) * 10 ** 6;
    if (isNaN(Med)) { var Med = 0.1 }

    var Ved = parseFloat(document.getElementById("ValueVed").value) * 10 ** 3;
    if (isNaN(Ved)) { var Ved = 0.1 }

    var sigmacom = Ved / Ab_Column + Med * (0.5 * h_Column - tf_Column - r_Column) / Iy_Column;
    var Vwprd = 0.9 * Avzb_Column * fy_Column / 1.7320508075688772935274463415059;
    if (RibSelection == "yes") {
        var ds = h_Column - 2 * tf_Column
        var Vwp_add = Math.min(4 * (0.25 * (bc - 2) * tfc ** 2 * fy_Column) / ds, (2 * 0.25 * (bc - 2) * tf_Column ** 2 * fy + 2 * 0.25 * (bc - 2) * ts_Rib ** 2 * fy_Column) / ds)
        Vwprd = Vwprd + Vwp_add
    }
    window.Vwprd = Vwprd;

    if (language_english == 1 && language_spanish == 0) {
        document.getElementById('Vwprd').innerText = "Verification of Shear force Web panel";
        document.getElementById('FcwcrdHeading').innerText = "Verification of Compression Web Column";
        document.getElementById('FtwbrdHeading').innerText = "Verification of Tension Web Column";
    }

    if (language_english == 0 && language_spanish == 0) {
        document.getElementById('Vwprd').innerText = "NW Stützentsteg auf Querschub";
        document.getElementById('FcwcrdHeading').innerText = "NW Stützensteg auf Querdruck";
        document.getElementById('FtwbrdHeading').innerText = "NW Stützensteg Querzug";
    }

    if (language_spanish == 1) {
        document.getElementById('Vwprd').innerText = "Verificacion alma de la columna baj fuerza contante";
        document.getElementById('FcwcrdHeading').innerText = "Verifiacion de alma de la columna bajo compresion";
        document.getElementById('FtwbrdHeading').innerText = "Verifiacion de alma de la columna bajo tension";
    }

    document.getElementById('VwprdResult').innerText = "Vwprd: " + (Vwprd / 1000).toFixed(2) + "kN";

    var beffcwc = tf + 2 * 1.4142135623730950488016887242097 * af + 5 * (tf_Column + r_Column) + Math.min(2 * tsp, tsp + u1n)
    var omega = 1 / (1 + 1.3 * (beffcwc * tw_Column / Avzb_Column) ** 2) ** 0.5
    var kwc = Math.min(1, 1.7 - sigmacom / fy_Column)
    if (kwc <= 0) { kwc = 1 }
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
    if (RibSelection == "yes") {
        Fcwcrd = "not necessary!"
        document.getElementById('Fcwcrd').innerText = "unnecessary";

    }

    if (selectedScrewRows == 2) {
        var Ft1rdO_Column = window.Ft1rdO_Column
        var Ft2rdO_Column = window.Ft2rdO_Column
        var Ft3rdO_Column = window.Ft3rdO_Column
        var Ft1rdU_Column = window.Ft1rdU_Column
        var Ft2rdU_Column = window.Ft2rdU_Column
        var Ft3rdU_Column = window.Ft3rdU_Column
        var leff1O_Column = window.leff1O_Column
        var leff2O_Column = window.leff2O_Column
        var leff1U_Column = window.leff1U_Column
        var leff2U_Column = window.leff2U_Column


        if (Ft1rdO_Column > Ft2rdO_Column && Ft1rdO_Column > Ft3rdO_Column) {
            var befftwcO = leff1O_Column
        } else {
            befftwcO = leff2O_Column
        }
        if (Ft1rdU_Column > Ft2rdU_Column && Ft1rdO_Column > Ft3rdU_Column) {
            var befftwcU = leff1O
        } else {
            var befftwcU = leff2U_Column
        }

        var omegaO = 1 / (1 + 1.3 * (befftwcO * tw_Column / Avzb_Column) ** 2) ** 0.5
        var omegaU = 1 / (1 + 1.3 * (befftwcU * tw_Column / Avzb_Column) ** 2) ** 0.5

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

        var Ft1rdO_Column = window.Ft1rdO_Column
        var Ft2rdO_Column = window.Ft2rdO_Column
        var Ft3rdO_Column = window.Ft3rdO_Column

        var Ft1rdM_Column = window.Ft1rdM_Column
        var Ft2rdM_Column = window.Ft2rdM_Column
        var Ft3rdM_Column = window.Ft3rdM_Column

        var Ft1rdU_Column = window.Ft1rdU_Column
        var Ft2rdU_Column = window.Ft2rdU_Column
        var Ft3rdU_Column = window.Ft3rdU_Column

        var leff1O_Column = window.leff1O_Column
        var leff2O_Column = window.leff2O_Column
        var leff1M_Column = window.leff1M_Column
        var leff2M_Column = window.leff2M_Column
        var leff1U_Column = window.leff1U_Column
        var leff2U_Column = window.leff2U_Column

        if (Ft1rdO_Column > Ft2rdO_Column && Ft1rdO_Column > Ft3rdO_Column) {
            var befftwcO = leff1O_Column
        } else {
            var befftwcO = leff2O_Column
        }

        if (Ft1rdM_Column > Ft2rdM_Column && Ft1rdM_Column > Ft3rdM_Column) {
            var befftwcM = leff1M_Column
        } else {
            var befftwcM = leff2M_Column
        }

        if (Ft1rdU_Column > Ft2rdU_Column && Ft1rdO_Column > Ft3rdU_Column) {
            var befftwcU = leff1U_Column
        } else {
            var befftwcU = leff2U_Column
        }
        var omegaO = 1 / (1 + 1.3 * (befftwcO * tw_Column / Avzb_Column) ** 2) ** 0.5
        var omegaM = 1 / (1 + 1.3 * (befftwcM * tw_Column / Avzb_Column) ** 2) ** 0.5
        var omegaU = 1 / (1 + 1.3 * (befftwcU * tw_Column / Avzb_Column) ** 2) ** 0.5

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
    window.FtwcrdO = FtwcrdO;
    window.FtwcrdM = FtwcrdM;
    window.FtwcrdU = FtwcrdU;

    maxMoment()
}