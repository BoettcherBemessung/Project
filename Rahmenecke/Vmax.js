function Vmax() {
    var FtO = window.FtO;
    var FtM = window.FtM;
    var FtU = window.FtU;
    var selectedScrewRows = window.selectedScrewRows;
    var fub = window.fub;
    var Ascrew = window.As;
    var d = window.d
    var Avzb = window.Avzb;
    var fy = window.fy;
    var h = window.h
    var tf = window.tf;
    var aw = window.aw;
    var af = window.af;
    var betaw = window.betaw;
    var GammaTwo = 1.25;
    var dzero = window.dzero;
    var tsp = window.tsp;
    var tf_Column = window.tf_Column
    var fu = window.fu;
    var fu_Column = window.fu_Column;
    var e_Column = window.ec
    var Mmax = window.Mmax
    var Med = parseFloat(document.getElementById("ValueMed").value) * 10 ** 6;

    var language_english = window.language_english
    var language_german = window.language_german
    var language_spanish = window.language_spanish


    var Ftrd = 0.9 * fub * Ascrew / 1.25
    var Fvrd = 0.6 * fub * Math.PI * (0.5 * d) ** 2 / 1.25;

    if (selectedScrewRows == 2) {

        //Calculation of actual acting forces per Screwrow

        var hs1 = window.hs1
        var hs2 = window.hs2

        var deltaM = Mmax - Med

        if (deltaM >= 0) {
            var aFtrd1_new = FtO
            var aFtrd2_new = FtU - deltaM / hs2
            if (aFtrd2_new < 0) {
                var aFtrd2_new = 0
                var aFtrd1_new = FtO - (deltaM - FtU * hs2) / hs1
            }
        }

        if (deltaM < 0) {
            var aFtrd2_new = FtU;
            var aFtrd1_new = FtO;
        }

        var Fved1 = (1 - ((aFtrd1_new / 2) / (1.4 * 0.5 * Ftrd))) * 2 * Fvrd
        var Fved2 = (1 - ((aFtrd2_new / 2) / (1.4 * 0.5 * Ftrd))) * 2 * Fvrd
        var FvedSum = Fved1 + Fved2

        // max Force due to avoiding Interaction of Vz/My in Beam
        var Vplzrd = Avzb * fy / 1.732050808
        var VoInteraction = 0.5 * Vplzrd

        // max Force due to capacity of Web-Weldings
        var lw = h - 2 * tf - 2 * r
        var Vmaxwelding = 2 * fu * aw * lw / (1.73205808 * betaw * GammaTwo)

        //max force due to punching shear
        //1.Screws "bite" to upper side

        var alphaPunch1Up = Math.min(1.0, (fub / fu))
        var kPunch1Up = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd1Up = (kPunch1Up * alphaPunch1Up * fu * d * tsp / GammaTwo) * 2

        var alphaPunch2Up = Math.min(1.0, fub / fu, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch2Up = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd2Up = (kPunch2Up * alphaPunch2Up * fu * d * tsp / GammaTwo) * 2

        var alphaPunch1Up_Column = Math.min(1.0, (fub / fu_Column))
        var kPunch1Up_Column = Math.min(2.8 * e_Column / dzero - 1.7, 2.5)
        var Fbrd1Up_Column = (kPunch1Up_Column * alphaPunch1Up_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        var alphaPunch2Up_Column = Math.min(1.0, fub / fu_Column, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch2Up_Column = Math.min(2.8 * e_Column / dzero - 1.7, 2.5)
        var Fbrd2Up_Column = (kPunch2Up_Column * alphaPunch2Up_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        //1.Screws "bite" downside 

        var alphaPunch1Down = Math.min(1.0, fub / fu, ((h - go - gu) / (3 * dzero)) - 0.25, )
        var kPunch1Down = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd1Down = (kPunch1Down * alphaPunch1Down * fu * d * tsp / GammaTwo) * 2

        var alphaPunch2Down = Math.min(1, fub / fu)
        var kPunch2Down = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd2Down = (kPunch2Down * alphaPunch2Down * fu * d * tsp / GammaTwo) * 2

        var alphaPunch1Down_Column = Math.min(1.0, fub / fu, ((h - go - gu) / (3 * dzero)) - 0.25, )
        var kPunch1Down_Column = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd1Down_Column = (kPunch1Down * alphaPunch1Down * fu * d * tsp / GammaTwo) * 2

        var alphaPunch2Down_Column = Math.min(1, fub / fu_Column)
        var kPunch2Down_Column = Math.min(2.8 * ec / dzero - 1.7, 2.5)
        var Fbrd2Down_Column = (kPunch2Down_Column * alphaPunch2Down_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        //Selection of authoritive punching shear per Screw row

        var Fbrdauthoritive1 = Math.min(Fbrd1Up, Fbrd1Down, Fbrd1Up_Column, Fbrd1Down_Column)
        var Fbrdauthoritive2 = Math.min(Fbrd2Up, Fbrd2Down, Fbrd2Up_Column, Fbrd2Down_Column)
        var VmaxPunshShear = Fbrdauthoritive1 + Fbrdauthoritive2

        var Vmax = Math.min(FvedSum, VoInteraction, Vmaxwelding, VmaxPunshShear)

        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("Vmaxresults").innerText = "Results of max Shear Force";
            document.getElementById("Vloadbearingcapacity").innerText = "bearingcapacity: " + (FvedSum / 1000).toFixed(2) + " kN ";
            document.getElementById("Vinteraction").innerText = "interaction: " + (VoInteraction / 1000).toFixed(2) + " kN ";
            document.getElementById("Vwelding").innerText = " Welding : " + (Vmaxwelding / 1000).toFixed(2) + " kN ";
            document.getElementById("VpunchingShear").innerText = "PunchingShear: " + (VmaxPunshShear / 1000).toFixed(2) + " kN ";
            document.getElementById("Vmax").innerText = "max V : " + (Vmax / 1000).toFixed(2) + " kN";
        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("Vmaxresults").innerText = "Ergebnisse maximaler Querkraft";
            document.getElementById("Vloadbearingcapacity").innerText = "Resttragfähigkeit: " + (FvedSum / 1000).toFixed(2) + " kN ";
            document.getElementById("Vinteraction").innerText = "Interaktion: " + (VoInteraction / 1000).toFixed(2) + " kN ";
            document.getElementById("Vwelding").innerText = "Schweißnahtnachweis: " + (Vmaxwelding / 1000).toFixed(2) + " kN ";
            document.getElementById("VpunchingShear").innerText = "Lochleibung: " + (VmaxPunshShear / 1000).toFixed(2) + " kN ";
            document.getElementById("Vmax").innerText = "max V : " + (Vmax / 1000).toFixed(2) + " kN ";
        }
        if (language_spanish == 1) {
            document.getElementById("Vmaxresults").innerText = "Resultos de la fuerta contante";
            document.getElementById("Vloadbearingcapacity").innerText = "capacidad de carga residual: " + (FvedSum / 1000).toFixed(2) + " kN ";
            document.getElementById("Vinteraction").innerText = "Interaccion: " + (VoInteraction / 1000).toFixed(2) + " kN ";
            document.getElementById("Vwelding").innerText = "certificación de soldadura: " + (Vmaxwelding / 1000).toFixed(2) + " kN ";
            document.getElementById("VpunchingShear").innerText = "perforacion: " + (VmaxPunshShear / 1000).toFixed(2) + " kN ";
            document.getElementById("Vmax").innerText = "max V : " + (Vmax / 1000).toFixed(2) + " kN ";
        }
    }

    if (selectedScrewRows == 3) {

        var deltaM = Mmax - Med
        var hs1 = window.hs1
        var hs2 = window.hs2
        var hs3 = window.hs3


        if (deltaM >= 0) {
            var aFtrd3_new = FtU - deltaM / hs3
            var aFtrd2_new = FtM
            var aFtrd1_new = FtO

            if (aFtrd3_new < 0) {
                var aFtrd1_new = FtO
                var aFtrd3_new = 0
                var aFtrd2_new = FtM - (deltaM - FtU * hs3) / hs2
                if (aFtrd2_new < 0) {
                    var aFtrd2_new = 0
                    var aFtrd1_new = FtO - (deltaM - FtU * hs3 - FtM * hs2) / hs1

                }
            }
        }

        if (deltaM < 0) {
            aFtrd3_new = FtU
            aFtrd2_new = FtM;
            aFtrd1_new = FtO;
        }
        var Fved1 = (1 - ((aFtrd1_new / 2) / (1.4 * 0.5 * Ftrd))) * 2 * Fvrd
        var Fved2 = (1 - ((aFtrd2_new / 2) / (1.4 * 0.5 * Ftrd))) * 2 * Fvrd
        var Fved3 = (1 - ((aFtrd3_new / 2) / (1.4 * 0.5 * Ftrd))) * 2 * Fvrd
        var FvedSum = Fved1 + Fved2 + Fved3

        // max Force due to avoiding Interaction of Vz/My in Beam
        var Vplzrd = Avzb * fy / 1.732050808
        var VoInteraction = 0.5 * Vplzrd

        // max Force due to capacity of Web-Weldings
        var lw = h - 2 * tf - 2 * r
        var Vmaxwelding = 2 * fu * aw * lw / (1.73205808 * betaw * GammaTwo)

        //max force due to punching shear
        //1.Screws "bite" to upper side
        var alphaPunch1Up = Math.min(ex / (3 * dzero), fub / fu, 1)
        var kPunch1Up = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd1Up = (kPunch1Up * alphaPunch1Up * fu * d * tsp / GammaTwo) * 2

        var alphaPunch2Up = Math.min(1.0, fub / fu)
        var kPunch2Up = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd2Up = (kPunch2Up * alphaPunch2Up * fu * d * tsp / GammaTwo) * 2

        var alphaPunch3Up = Math.min(1.0, fub / fu, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch3Up = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd3Up = (kPunch3Up * alphaPunch3Up * fu * d * tsp / GammaTwo) * 2

        var eO = window.eO;
        var alphaPunch1Up_Column = Math.min(eO / (3 * dzero), fub / fu_Column, 1)
        var kPunch1Up_Column = Math.min(2.8 * ec / dzero - 1.7, 2.5)
        var Fbrd1Up_Column = (kPunch1Up_Column * alphaPunch1Up_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        var alphaPunch2Up_Column = Math.min(1.0, fub / fu_Column)
        var kPunch2Up_Column = Math.min(2.8 * ec / dzero - 1.7, 2.5)
        var Fbrd2Up_Column = (kPunch2Up_Column * alphaPunch2Up_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        var alphaPunch3Up_Column = Math.min(1.0, fub / fu_Column, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch3Up_Column = Math.min(2.8 * ec / dzero - 1.7, 2.5)
        var Fbrd3Up_Column = (kPunch3Up_Column * alphaPunch3Up_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        //1.Screws "bite" downside 

        var alphaPunch1Down = Math.min(1.0, fub / fu, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch1Down = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd1Down = (kPunch1Up * alphaPunch1Up * fu * d * tsp / GammaTwo) * 2

        var alphaPunch2Down = Math.min(1.0, fub / fu, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch2Down = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd2Down = (kPunch2Down * alphaPunch2Down * fu * d * tsp / GammaTwo) * 2

        var alphaPunch3Down = Math.min(1, fub / fu)
        var kPunch3Down = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd3Down = (kPunch3Down * alphaPunch3Down * fu * d * tsp / GammaTwo) * 2

        var alphaPunch1Down_Column = Math.min(1.0, fub / fu_Column, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch1Down_Column = Math.min(2.8 * ec / dzero - 1.7, 2.5)
        var Fbrd1Down_Column = (kPunch1Down_Column * alphaPunch1Down_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        var alphaPunch2Down_Column = Math.min(1.0, fub / fu_Column, (h - go - gu) / (3 * dzero) - 0.25, )
        var kPunch2Down_Column = Math.min(2.8 * ec / dzero - 1.7, 2.5)
        var Fbrd2Down_Column = (kPunch2Down_Column * alphaPunch2Down_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        var alphaPunch3Down_Column = Math.min(1, fub / fu_Column)
        var kPunch3Down_Column = Math.min(2.8 * ec / dzero - 1.7, 2.5)
        var Fbrd3Down_Column = (kPunch3Down_Column * alphaPunch3Down_Column * fu_Column * d * tf_Column / GammaTwo) * 2

        //Selection of authoritive punching shear per Screw row

        var Fbrdauthoritive1 = Math.min(Fbrd1Up, Fbrd1Down, Fbrd1Up_Column, Fbrd1Down_Column)
        var Fbrdauthoritive2 = Math.min(Fbrd2Up, Fbrd2Down, Fbrd2Up_Column, Fbrd2Down_Column)
        var Fbrdauthoritive3 = Math.min(Fbrd3Up, Fbrd3Down, Fbrd3Up_Column, Fbrd3Down_Column)

        var VmaxPunshShear = Fbrdauthoritive1 + Fbrdauthoritive2 + Fbrdauthoritive3
        var Vmax = Math.min(FvedSum, VoInteraction, Vmaxwelding, VmaxPunshShear)

        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("Vmaxresults").innerText = "Results of max Shear Force";
            document.getElementById("Vloadbearingcapacity").innerText = "bearingcapacity: " + (FvedSum / 1000).toFixed(2) + " kN ";
            document.getElementById("Vinteraction").innerText = "interaction: " + (VoInteraction / 1000).toFixed(2) + " kN ";
            document.getElementById("Vwelding").innerText = " Welding : " + (Vmaxwelding / 1000).toFixed(2) + " kN";
            document.getElementById("VpunchingShear").innerText = "PunchingShear: " + (VmaxPunshShear / 1000).toFixed(2) + " kN ";
            document.getElementById("Vmax").innerText = "max V : " + (Vmax / 1000).toFixed(2) + " kN";
        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("Vmaxresults").innerText = "Ergebnisse maximaler Querkraft";
            document.getElementById("Vloadbearingcapacity").innerText = "Resttragfähigkeit: " + (FvedSum / 1000).toFixed(2) + " kN ";
            document.getElementById("Vinteraction").innerText = "Vermeidung Interaktion: " + (VoInteraction / 1000).toFixed(2) + " kN ";
            document.getElementById("Vwelding").innerText = "Schweißnahtnachweis: " + (Vmaxwelding / 1000).toFixed(2) + " kN ";
            document.getElementById("VpunchingShear").innerText = "Lochleibung: " + (VmaxPunshShear / 1000).toFixed(2) + " kN ";
            document.getElementById("Vmax").innerText = "max V  " + (Vmax / 1000).toFixed(2) + " kN ";
        }
        if (language_spanish == 1) {
            document.getElementById("Vmaxresults").innerText = "resultos de fuerza contante";
            document.getElementById("Vloadbearingcapacity").innerText = "capacidad de carga residual: " + (FvedSum / 1000).toFixed(2) + " kN ";
            document.getElementById("Vinteraction").innerText = "interaccion: " + (VoInteraction / 1000).toFixed(2) + " kN ";
            document.getElementById("Vwelding").innerText = "certificacion de soldadura: " + (Vmaxwelding / 1000).toFixed(2) + " kN ";
            document.getElementById("VpunchingShear").innerText = "perforacion: " + (VmaxPunshShear / 1000).toFixed(2) + " kN ";
            document.getElementById("Vmax").innerText = "max V  " + (Vmax / 1000).toFixed(2) + " kN ";
        }
    }



    var Med = parseFloat(document.getElementById("ValueMed").value) * 10 ** 6;
    var Ved = parseFloat(document.getElementById("ValueVed").value) * 10 ** 3;
    var Mmax = window.Mmax
    var etaV = Ved / (Vmax)
    var etaM = Med / (Mmax)
    var eta = Math.max(etaV, etaM)



    if (language_english == 1 && language_spanish == 0) {
        document.getElementById("Endresults").innerText = "Utilization"
        document.getElementById("UtilizationV").innerText = "Utilization of shearforce:            " + "\u03B7 = " + etaV.toFixed(2);
        document.getElementById("UtiliziationM").innerText = "Utilization of moment:               " + "\u03B7 = " + etaM.toFixed(2);
        document.getElementById("Utilization").innerText = "Utilization authoritive:               " + "\u03B7 = " + eta.toFixed(2);
    }
    if (language_english == 0 && language_spanish == 0) {
        document.getElementById("Endresults").innerText = "Ausnutzung"
        document.getElementById("UtilizationV").innerText = "Ausnutzung Querkraft:            " + "\u03B7 = " + etaV.toFixed(2);
        document.getElementById("UtiliziationM").innerText = "AUsnutzung durch Moment:               " + "\u03B7 = " + etaM.toFixed(2);
        document.getElementById("Utilization").innerText = "Maßgebende Ausnutzung:               " + "\u03B7 = " + eta.toFixed(2);
    }

    if (language_spanish == 1) {
        document.getElementById("Endresults").innerText = "Utilization"
        document.getElementById("UtilizationV").innerText = "Utilization of shearforce:            " + "\u03B7 = " + etaV.toFixed(2);
        document.getElementById("UtiliziationM").innerText = "Utilization of moment:               " + "\u03B7 = " + etaM.toFixed(2);
        document.getElementById("Utilization").innerText = "Utilization authoritive:               " + "\u03B7 = " + eta.toFixed(2);
    }
}