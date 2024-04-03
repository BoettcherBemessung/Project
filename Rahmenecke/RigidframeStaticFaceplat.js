function QSK() {
    dataload()
    window.Iy = Iy;
    window.Wely = Wely;
    window.Wply = Wply;
    window.Avzb = Avzb;


    // === 2.2 Classification of I-section===
    var qsk = 4;
    if (cw / tw < CwTwQSK3 && cf / tf < CfTfQSK3) { qsk = 3 }
    if (cw / tw < CwTwQSK2 && cf / tf < CfTfQSK2) { qsk = 2 }
    if (cw / tw < CwTwQSK1 && cf / tf < CfTfQSK1) { qsk = 1 }

    window.qsk = qsk;

    // === 2.3 Calculation of max. beammoment===
    var mcr
    if (qsk == 3) { mcr = Wely * fy }
    if (qsk == 1 || qsk == 2) { mcr = Wply * fy }

    if (language_english == 1) {
        document.getElementById("beamresultQsk").innerHML = "class: " + qsk + " maxM: " + mcr;
    }

    if (language_english == 0) {
        document.getElementById("beamresultQsk").innerHML = "Querschnittsklasse: " + qsk + " maxM: " + mcr;
    }
    if (language_spanish == 1) {
        document.getElementById("beamresultQsk").innerHML = "clase de sección transversal: " + qsk + " maxM: " + mcr;
    }
    window.mcr = mcr

    // === 2.4 Calculation of max. Force before failure Flange of Beam ===
    var Fcfbrd = mcr / (h - tf)

    window.Fcfbrd = Fcfbrd

    // === 3.0 Displaying some results on Webpage ===
    var IyOutput = (Iy / 1000000).toFixed(2)
    var McrOutput = (mcr / 1000000).toFixed(2)
    var FcfbRdOutput = (Fcfbrd / 1000).toFixed(2)

    if (language_english == 1 && language_spanish == 0) {
        document.getElementById("clickonresults").innerText = "You can click on the results to see detailed calculations methods!"
        document.getElementById("beamresultIy").innerText = "Iy: " + IyOutput + " E+06 mm^4";
        document.getElementById("beamresultQsk").innerText = "QSK: " + qsk;
        document.getElementById("beamresultMcr").innerText = "Mcr: " + (McrOutput) + " kNm";
        document.getElementById("beamresultFcfbrd").innerText = "Fcfbrd: " + (FcfbRdOutput) + " kN";
    }

    if (language_english == 0 && language_spanish == 0) {
        document.getElementById("clickonresults").innerText = "Klicke auf die Ergebnisse um die genauen Rechenwege anzuzeigen!!"
        document.getElementById("beamresultIy").innerText = "Iy: " + IyOutput + " E+06 mm^4";
        document.getElementById("beamresultQsk").innerText = "QSK: " + qsk;
        document.getElementById("beamresultMcr").innerText = "Mcr: " + (McrOutput) + " kNm";
        document.getElementById("beamresultFcfbrd").innerText = "Fcfbrd: " + (FcfbRdOutput) + " kN";
    }
    if (language_spanish == 1) {
        document.getElementById("clickonresults").innerText = "haz click a los resultos para ver la calculacion en detail!!"
        document.getElementById("beamresultIy").innerText = "Iy: " + IyOutput + " E+06 mm^4";
        document.getElementById("beamresultQsk").innerText = "QSK: " + qsk;
        document.getElementById("beamresultMcr").innerText = "Mcr: " + (McrOutput) + " kNm";
        document.getElementById("beamresultFcfbrd").innerText = "Fcfbrd: " + (FcfbRdOutput) + " kN";
    }

    // === 3.1 Obtaining values of Userinput for faceplate and Screwconfigure on Webpage ===
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

    var aw = parseFloat(document.getElementById("BeamWelding").value);
    var af = parseFloat(document.getElementById("FlangeWelding").value);
    var Med = parseFloat(document.getElementById("ValueMed").value) * 10 ** 6;
    var Ved = parseFloat(document.getElementById("ValueVed").value) * 10 ** 3;

    var w = bsp - 2 * e
    var u1 = hsp - u1n - h

    window.hsp = hsp;
    window.bsp = bsp;
    window.tsp = tsp;
    window.e = e;
    window.ex = ex;
    window.go = go;
    window.gu = gu;
    window.u1n = u1n;
    window.aw = aw;
    window.af = af;
    window.w = w;
    window.u1 = u1;

    // === 3.3 Warning programms for impossible/forbidden joint-configurations ===

    if (language_english == 1 && language_spanish == 0) {
        if (hsp < h) { alert("Calculation not possible, faceplate smaller than Beamheight! please rise the height of the faceplate") }
        if (bsp < b) { alert("Calculation not possible, faceplate smaller than Beamheight! please rise the width of the faceplate") }
        if (0.5 * bsp - e - 0.5 * tw < 2 * ew) { alert("Calculation not possible screws touching web of beam") }
        if (e < 1.2 * dzero) { alert("Calculation not possible screws too close to faceplatmargin") }
        if (go - tf < 2 * ew) { alert("Calculation not possible inner screws touch upper flange") }
        if (gu - tf < 2 * ew) { alert("Calculation not possible inner screws touch lower flange") }
        if (h - go - gu < 2.2 * dzero) { "Calculation not possible inner screw rows too close to each other" }
        if (hsp - u1n < h) { "Calculation not possible,too small faceplate/too huge u1n. Please rise faceplate height" }
        if ((h - go - gu) < (2.2 * dzero)) { alert("Calculation not possible , inner Screw Rows lay too close to each other! Please user select smaller g0/gu") }
    }
    if (language_english == 0 && language_spanish == 0) {
        if (hsp < h) { alert("Berechnung nicht möglich, Stirnplatte kleiner als Trägerhöhe! Bitte wählen Sie eine höhere Stirnplatte") }
        if (bsp < b) { alert("Berechnung nicht möglich, Stirnplatter kleiner als Trägerbreite! Bitte wählen Sie eine breitere Stirnplatte") }
        if (0.5 * bsp - e - 0.5 * tw < 2 * ew) { alert("Berechnung nicht möglich, Schrauben zu nah am Trägersteg") }
        if (e < 1.2 * dzero) { alert("Berechnung nicht möglich, Schrauben zu nahe am Stirnplattenrand") }
        if (go - tf < 2 * ew) { alert("Berechnung nicht möglich,Die inneren oberen Schrauben liegen zu nah am Trägerflansch") }
        if (gu - tf < 2 * ew) { alert("Berechnung nicht möglich,Die inneren unteren Schrauben liegen zu nah am Trägerflansch") }
        if (h - go - gu < 2.2 * dzero) { "Berechnung nicht möglich Die inneren Schrauben liegen zu nah beieinander" }
        if (hsp - u1n < h) { "Berechnung nicht möglich,zu kleine Stirnplatte bzw. zu kleines u1 " }
        if ((h - go - gu) < (2.2 * dzero)) { alert("Berechnung nicht möglich , inner Screw Rows lay too close to each other! Please user select smaller g0/gu") }
    }

    if (language_spanish == 1) {
        if (hsp < h) { alert("Calculacion no possible, placa frontal menor que  altura de la viga! elige placa frontal mas alta por favor") }
        if (bsp < b) { alert("Calculacion no possible, placa frontal menor que ancho de la viga! elige placa frontal mas ancho por favor") }
        if (0.5 * bsp - e - 0.5 * tw < 2 * ew) { alert("Calculacion no possible, tornillos demasiadio cerca a la alma") }
        if (e < 1.2 * dzero) { alert("Calculacion no possible, tornillos demasido cerca al margen de la placa frontal") }
        if (go - tf < 2 * ew) { alert("Calculacion no possible,los tornillos adentros estan demasiado cerca a la ala del perfil") }
        if (gu - tf < 2 * ew) { alert("Calculacion no possible,los tornillos bajos estan demasiado cerca a la ala del perfil") }
        if (h - go - gu < 2.2 * dzero) { "Calculacion no possible lost tornillos adentros estan demasido cerca al otro" }
        if (hsp - u1n < h) { "Calculacion no possible,placa de perfil demasiado pequeño o  u1 demasiado pequeño " }
        if ((h - go - gu) < (2.2 * dzero)) { alert("Calculacion no possible , los tornillos adentros etsan demasiado cerca al otro! usa g0/gu mas pequeño") }
    }
    var selectedScrewRows = parseFloat(document.getElementById("ScrewRows").value);

    if (selectedScrewRows === 3) {

        if (language_english == 1 && language_spanish == 0) {
            if (ex < 1.2 * dzero) { alert("Calculation not possible screw spacing to upper margin too small ") }
            if (u1 - ex < 2 * ew) { alert("Calculation not possible screws touch flange! Please select smaller ex!") }
        }
        if (language_english == 0 && language_spanish == 0) {
            if (ex < 1.2 * dzero) { alert("Berechnung nicht möglich, Äußere Schraube zu nah am Rand der Stirnplatte wählen sie ein größeren Abstand ex ") }
            if (u1 - ex < 2 * ew) { alert("Berechnung nicht möglich, äußere Schrauben zu nah am Trägerflansch! Bitte wählen Sie einen keineren Abstand ex!") }
        }
        if (language_spanish == 1) {
            if (ex < 1.2 * dzero) { alert("Calculacion no possible, tornillos demasiado del margen de la placa frontal elige ex mas ") }
            if (u1 - ex < 2 * ew) { alert("Calculacion no possible, tornillos demasidao cerca de la ala! elige und ex mas pequeño !") }
        }
    }

    // === 4.0 Starting calculations for endplate in bending ===

    var mh = (bsp / 2) - e - (tw / 2) - 0.8 * aw * 1.414213562;
    var iterationDoneO = 0;
    var iterationDoneU = 0;

    var GammaTwo = 1.25
    var RScrew = 0.5 * d
    var AlphaV = 0.6
    var AScrew = 3.1415926535897932384626433832795 * RScrew ** 2
    var Fvrd = AlphaV * fub * AScrew / GammaTwo

    window.mh = mh;
    window.AScrew = AScrew;
    window.Fvrd = Fvrd;

    //=============================================================================================================================================
    // ================================= 4.1 calculations  endplate in bending 2 screwRows ========================================================
    //=============================================================================================================================================
    if (selectedScrewRows === 2) {
        var mvO = go - tf - 0.8 * (2 ** 0.5) * af;
        var mvU = gu - tf - 0.8 * (2 ** 0.5) * af;
        var lambda1O = mh / (mh + e);
        var lambda2O = mvO / (mh + e);
        var alphaO = 1.25 / lambda1O + 2.75;
        var lambda2limO = 0.5 * lambda1O * alphaO;

        window.mvO = mvO;
        window.mvU = mvU;


        // === Additional Warning Programms for forbidden Userinput ===  

        if (language_english == 1 && language_spanish == 0) {
            if (mh < 2 * ew) { alert("Calculation not possible, Screws too close to web of beam. Please select lower e, or rise width of faceplate!") }
            if (mvO < 2 * ew) { alert("Calculation not possible, Upper Screws too close to flange of beam. Please select higher go !") }
            if (mvU < 2 * ew) { alert("Calculation not possible, Lower Screws too close to flange of beam. Pleaease select higher gu !") }
        }
        if (language_english == 0 && language_spanish == 0) {
            if (mh < 2 * ew) { alert("Berechnung nicht möglich, Schrauben zu nah am Trägersteg. Bitte wählen sie einen geringeren Abstand e, oder erhöhen Sie die Stirnplattenbreite!") }
            if (mvO < 2 * ew) { alert("Berechnung nicht möglich, Obere Schrauben zu nah am Trägerflansch. Bitte wählen Sie einen höheren Abstand go !") }
            if (mvU < 2 * ew) { alert("Berechnung nicht möglich, Untere Schrauben zu nah am Trägerflansch. Bitte wählen Sie einen höheren Abstand gu!") }
        }
        if (language_spanish == 1) {
            if (mh < 2 * ew) { alert("Calculacion no possible, tornillos demasiado cerca de la alma. elige un e mas bajo o amplia el ancho de la placa frontal !") }
            if (mvO < 2 * ew) { alert("Calculacion no possible, tronillos demasiado cerca de la alma. elige un  go mas alto !") }
            if (mvU < 2 * ew) { alert("Calculacion no possible, tornillos bajos demasiado cerca de la ala . elige un gu mas alto!") }
        }


        if (lambda2limO > lambda2O || alphaO > 8 || alphaO < 4.45) {
            var alphaIterationO = 4.45;
            var lambda1OlimIteration = (1.25 / (alphaIterationO - 2.75));
            var lambda2OlimIteration = 0.5 * alphaIterationO * lambda1OlimIteration;
            var lambda1OIteration = lambda1OlimIteration + (1 - lambda1OlimIteration) * ((lambda2OlimIteration - lambda2O) / lambda2OlimIteration) ** (0.185 * alphaIterationO ** 1.785);
            var errorIterationO = lambda1OIteration - lambda1O;

            if (errorIterationO < 0.0001) {
                alphaO = alphaIterationO;
                iterationDoneO = 1
            }
            while (errorIterationO > 0.00001) {
                lambda1OlimIteration = (1.25 / (alphaIterationO - 2.75));
                lambda2OlimIteration = 0.5 * alphaIterationO * lambda1OlimIteration;
                lambda2OlimIteration = 0.5 * alphaIterationO * lambda1OlimIteration;
                lambda1OIteration = lambda1OlimIteration + (1 - lambda1OlimIteration) * ((lambda2OlimIteration - lambda2O) / lambda2OlimIteration) ** (0.185 * alphaIterationO ** 1.785);
                errorIterationO = lambda1OIteration - lambda1O;
                alphaIterationO = alphaIterationO + 0.00001
            }
            alphaO = alphaIterationO
        }

        var leffcpO = 2 * 3.1415926535897932384626433832795 * mh;
        var leffncO = alphaO * mh;

        var lambda1U = mh / (mh + e);
        var lambda2U = mvU / (mh + e);
        var alphaU = 1.25 / lambda1U + 2.75;
        var lambda2limU = 0.5 * lambda1U * alphaU;

        window.leffcpO = leffcpO;
        window.leffncO = leffncO;
        window.alphaO = alphaO;

        if (lambda2limU > lambda2U || alphaU > 8 || alphaU < 4.45) {
            var alphaIterationU = 4.45;
            var lambda1UlimIteration = (1.25 / (alphaIterationU - 2.75));
            var lambda2UlimIteration = 0.5 * alphaIterationU * lambda1UlimIteration;
            var lambda1UIteration = lambda1UlimIteration + (1 - lambda1UlimIteration) * ((lambda2UlimIteration - lambda2U) / lambda2UlimIteration) ** (0.185 * alphaIterationU ** 1.785);
            var errorIterationU = lambda1UIteration - lambda1U;

            if (errorIterationU < 0.0001) {
                alphaU = alphaIterationU;
                iterationDoneU = 1
            }
            while (errorIterationU > 0.00001) {
                lambda1UlimIteration = (1.25 / (alphaIterationU - 2.75));
                lambda2UlimIteration = 0.5 * alphaIterationU * lambda1UlimIteration;
                lambda2UlimIteration = 0.5 * alphaIterationU * lambda1UlimIteration;
                lambda1UIteration = lambda1UlimIteration + (1 - lambda1UlimIteration) * ((lambda2UlimIteration - lambda2U) / lambda2UlimIteration) ** (0.185 * alphaIterationU ** 1.785);
                errorIterationU = lambda1UIteration - lambda1U;
                alphaIterationU = alphaIterationU + 0.00001
            }
            alphaU = alphaIterationU
        }
        var leffcpU = 2 * 3.1415926535897932384626433832795 * mh;
        var leffncU = alphaU * mh;
        var leff1O = Math.min(leffncO, leffcpO);
        var leff2O = leffncO;
        var leff1U = Math.min(leffncU, leffcpU);
        var leff2U = leffncU;
        var Mpl1rdO = 0.25 * leff1O * tsp ** 2 * fy;
        var Mpl2rdO = 0.25 * leff2O * tsp ** 2 * fy;
        var Mpl1rdU = 0.25 * leff1U * tsp ** 2 * fy;
        var Mpl2rdU = 0.25 * leff2U * tsp ** 2 * fy;

        window.leffcpU = leffcpU;
        window.leffncU = leffncU;
        window.alphaU = alphaU;
        window.leff1O = leff1O;
        window.leff2O = leff2O;
        window.Mpl1rdO = Mpl1rdO;
        window.Mpl2rdO = Mpl2rdO;
        window.Mpl1rdU = Mpl1rdU;
        window.Mpl2rdU = Mpl2rdU;

        var nRest = Math.min(e, 1.25 * mh)
        var nO = nRest
        window.nRest = nRest;
        window.nO = nO;

        var Ft1rdO = ((8 * nRest - 2 * ew) * Mpl1rdO) / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdO = 2 * As * 0.9 * fub / 1.25
        var Ft2rdO = (2 * Mpl2rdO + nRest * Ft3rdO) / (mh + nRest)

        var Ft1rdU = (8 * nRest - 2 * ew) * Mpl1rdU / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdU = 2 * As * 0.9 * fub / 1.25
        var Ft2rdU = (2 * Mpl2rdU + nRest * Ft3rdU) / (mh + nRest)

        window.Ft1rdO = Ft1rdO;
        window.Ft3rdO = Ft3rdO;
        window.Ft2rdO = Ft2rdO;
        window.Ft1rdU = Ft1rdU;
        window.Ft2rdU = Ft2rdU;
        window.Ft3rdU = Ft3rdU;

        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("Screwresult1").innerHTML = "Results of upper Screwrow: ";
            document.getElementById("Screwresult2").innerHTML = ""
            document.getElementById("Screwresult3").innerHTML = "Results of lower Screwrow: ";
            document.getElementById("TensionWebBeam").innerHTML = "Results Tension Web Beam:";
        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("Screwresult1").innerHTML = "Ergebnisse oberer Schraubenreihe: ";
            document.getElementById("Screwresult2").innerHTML = ""
            document.getElementById("Screwresult3").innerHTML = "Ergebnisse unterer Schraubenreihe: ";
            document.getElementById("TensionWebBeam").innerHTML = "Ergebnis Zugbeanspruchung Trägersteg";
        }
        if (language_spanish == 1) {
            document.getElementById("Screwresult1").innerHTML = "Resultos de los tornillos altos: ";
            document.getElementById("Screwresult2").innerHTML = ""
            document.getElementById("Screwresult3").innerHTML = "Resultos de los tornillos bajos: ";
            document.getElementById("TensionWebBeam").innerHTML = " Reusulto almba bajo Tension";
        }

        document.getElementById("mxresult").innerText = "m2: " + " mm " + mvO.toFixed(2);
        document.getElementById("m1Oresult").innerText = "m1: " + " mm " + mh.toFixed(2);
        document.getElementById("m2Mresult").innerText = "";
        document.getElementById("m1Mresult").innerText = "";
        document.getElementById("m1Uresult").innerText = "m1: " + " mm " + mh.toFixed(2);
        document.getElementById("m2Uresult").innerText = "m2: " + " mm " + mvU.toFixed(2);

        document.getElementById("leffcpresult1").innerText = "leffcp: " + " mm " + leffcpO.toFixed(2);
        document.getElementById("leffncresult1").innerText = "leffnc: " + " mm " + leffncO.toFixed(2);
        document.getElementById("Mpl1rdresult1").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdO / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult1").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdO / 1000000).toFixed(2);
        document.getElementById("Ft1rd1").innerText = "Ft1rd: " + " kN " + (Ft1rdO / 1000).toFixed(2);
        document.getElementById("Ft2rd1").innerText = "Ft2rd: " + " kN " + (Ft2rdO / 1000).toFixed(2);
        document.getElementById("Ft3rd1").innerText = "Ft3rd: " + " kN " + (Ft3rdO / 1000).toFixed(2);

        document.getElementById("leffcpresult3").innerText = "leffcp: " + " mm " + leffcpU.toFixed(2);
        document.getElementById("leffncresult3").innerText = "leffnc: " + " mm " + leffncU.toFixed(2);
        document.getElementById("Mpl1rdresult3").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdU / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult3").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdU / 1000000).toFixed(2);
        document.getElementById("Ft1rd3").innerText = "Ft1rd: " + " kN " + (Ft1rdU / 1000).toFixed(2);
        document.getElementById("Ft2rd3").innerText = "Ft2rd: " + " kN " + (Ft2rdU / 1000).toFixed(2);
        document.getElementById("Ft3rd3").innerText = "Ft3rd: " + " kN " + (Ft3rdU / 1000).toFixed(2);

        document.getElementById("leffcpresult2").innerText = "";
        document.getElementById("leffncresult2").innerText = "";
        document.getElementById("Mpl1rdresult2").innerText = "";
        document.getElementById("Mpl2rdresult2").innerText = "";
        document.getElementById("Ft1rd2").innerText = "";
        document.getElementById("Ft2rd2").innerText = "";
        document.getElementById("Ft3rd2").innerText = "";

        // === 4.11 calculations evidence of tension beam screwRows ===

        var befftwb = leff1O

        if (Ft2rdO < Ft1rdO || Ft3rdO < Ft1rdO) { befftwb = leff2O }

        var Ftwbrd = befftwb * tw * fy

        window.befftwb = befftwb
        window.Ftwbrd = Ftwbrd

        document.getElementById("befftwb").innerText = "befftwb: " + befftwb.toFixed(2) + " mm ";
        document.getElementById("Ftwbrd").innerText = "Ftwbrd: " + (Ftwbrd / 1000).toFixed(2) + " kN ";

        // === 4.13 calculations max. Moment===

        var hs1 = h - (tf / 2) - go
        var hs2 = gu - (tf / 2)

        var aFtrd1 = Math.min(Ft1rdO, Ft2rdO, Ft3rdO, Ftwbrd)
        var aFtrd2 = Math.min(Ft1rdU, Ft2rdU, Ft3rdU, Ftwbrd)

        var SumFtrd = aFtrd1 + aFtrd2

        if (Fcfbrd < SumFtrd) { aFtrd2 = aFtrd2 - (SumFtrd - Fcfbrd) }

        if (aFtrd2 < 0) {
            aFtrd1 = aFtrd1 + aFtrd2;
            aFtrd2 = 0
        }
        if (aFtrd2 > (aFtrd1 / hs1) * hs2) { if (aFtrd1 > 0.95 * Ft3rdO) { aFtrd2 = aFtrd1 * hs2 / hs1 } }

        var Mmax = aFtrd1 * hs1 + aFtrd2 * hs2

        window.hs1 = hs1
        window.hs2 = hs2
        window.Mmax = Mmax
        window.aFtrd1 = aFtrd1
        window.aFtrd2 = aFtrd2


        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("Mmaxresults").innerText = "authoritive Screwforces & Max M:";
            document.getElementById("Ft1eff").innerText = "Fteff1: " + (aFtrd1 / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft2eff").innerText = "Fteff2: " + (aFtrd2 / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft3eff").innerText = "";
            document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";
        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("Mmaxresults").innerText = "maßgebende Schraubenkräfte & Max M:";
            document.getElementById("Ft1eff").innerText = "Fteff1: " + (aFtrd1 / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft2eff").innerText = "Fteff2: " + (aFtrd2 / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft3eff").innerText = "";
            document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";
        }
        if (language_spanish == 1) {
            document.getElementById("Mmaxresults").innerText = "fuerzas de tornillos predominantes & Max M:";
            document.getElementById("Ft1eff").innerText = "Fteff1: " + (aFtrd1 / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft2eff").innerText = "Fteff2: " + (aFtrd2 / 1000).toFixed(2) + " kN ";
            document.getElementById("Ft3eff").innerText = "";
            document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";
        }

        // === 4.13 calculations max. shear force===

        // max Force due to residual load-bearing capacity

        var Fved1 = (1 - ((aFtrd1 / 2) / (1.4 * 0.5 * Ft3rdO))) * 2 * Fvrd
        var Fved2 = (1 - ((aFtrd2 / 2) / (1.4 * 0.5 * Ft3rdU))) * 2 * Fvrd
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


        //1.Screws "bite" downside 

        var alphaPunch1Down = Math.min(1.0, fub / fu, ((h - go - gu) / (3 * dzero)) - 0.25, )
        var kPunch1Down = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd1Down = (kPunch1Down * alphaPunch1Down * fu * d * tsp / GammaTwo) * 2

        var alphaPunch2Down = Math.min(1, fub / fu)
        var kPunch2Down = Math.min(2.8 * e / dzero - 1.7, 2.5)
        var Fbrd2Down = (kPunch2Down * alphaPunch2Down * fu * d * tsp / GammaTwo) * 2

        //Selection of authoritive punching shear per Screw row

        var Fbrdauthoritive1 = Math.min(Fbrd1Up, Fbrd1Down)
        var Fbrdauthoritive2 = Math.min(Fbrd2Up, Fbrd2Down)

        console.log(Fbrdauthoritive1)
        console.log(Fbrdauthoritive2)


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

        //Calculations of Rotationstiffnes

        if (Med < 2 / 3 * Mmax) { var mueh = 1 }

        if (Med > 2 / 3 * Mmax) { var mueh = (1.5 * Med / Mmax) ** 2.7 }

        var k_fourO = 0.9 * Math.min(leff1O, leff2O) * tsp ** 3 / mvO ** 3
        var k_fiveO = 0.9 * Math.min(leff1O, leff2O) * tsp ** 3 / mh
        var k_ten = 1.6 * AScrew / (2 * tsp + 0.5 * kScrew + 0.5 * mmaxScrew)

        var Sj = 210000 * hs1 ** 2 / (mueh * (1 / k_fiveO + 1 / k_ten))

        var k_effO = 1 / (1 / k_fiveO + 1 / k_fourO + 1 / k_ten)
        var zeq = (k_effO * hs1 ** 2) / (k_effO * hs1)
        var k_eq = (k_effO * hs1) / zeq

        var Sj = ((210000 * zeq ** 2) / (1 / k_fiveO + 1 / k_fourO + 1 / k_ten)) / 10 ** 6

        console.log(k_ten)
        console.log(k_fourO)
        console.log(k_fiveO)
        console.log(zeq)
        console.log(k_eq)
        console.log(mueh)
        console.log(Sj)

    }
    //==============================================================================================================================================
    // =========================================== 4.2 calculations  endplate in bending 3 screwRows ===============================================
    //==============================================================================================================================================
    if (selectedScrewRows === 3) {
        var mvO = u1 - ex - 0.8 * af * 1.414213562;
        var mvM = go - tf - 0.8 * af * 1.414213562;
        var mvU = gu - tf - 0.8 * af * 1.414213562;

        window.mvO = mvO;
        window.mvM = mvM;
        window.mvU = mvU;

        if (language_english == 1 && language_spanish == 0) {
            if (mh < 2 * ew) { alert("Calculation not possible, Screws too close to web of beam. Please select lower e, or rise width of faceplate!") }
            if (mvO < 2 * ew) { alert("Calculation not possible, Upper Screws too close to flange of beam. Please select lower ex or Rise height of faceplate !") }
            if (mvM < 2 * ew) { alert("Calculation not possible, Upper Screws too close to flange of beam. Please select higher go !") }
            if (mvU < 2 * ew) { alert("Calculation not possible, Lower Screws too close to flange of beam. Pleaease select higher gu !") }
        }
        if (language_english == 0 && language_spanish == 0) {
            if (mh < 2 * ew) { alert("Berechnung nicht möglich, Schrauben zu nah am Trägersteg. Bitte wählen Sie einen geringeren Abstand e, oder erhöhen Sie die Breite der Stirnplatte!") }
            if (mvO < 2 * ew) { alert("Berechnung nicht möglich, Schrauben zu nah am Trägerflansch. Bitte wählen Sie einen geringeren Abstand ex oder erhöhen Sie die Höhe der Stirnplatte !") }
            if (mvM < 2 * ew) { alert("Berechnung nicht möglich, Schrauben zu nah am Trägerflansch. Bitte wählen Sie einen größeren Abstand go !") }
            if (mvU < 2 * ew) { alert("Berechnung nicht möglich, Schrauben zu nah am Trägerflansch. Bitte wählen Sie einen größeren Abstand gu !") }
        }
        if (language_spanish == 1) {
            if (mh < 2 * ew) { alert("Calculacion no possible, tornillos demasiado cerca de la alma. elige e mas bajo , o amplia el ancho de la placa frontal!") }
            if (mvO < 2 * ew) { alert("Calculacion no possible, tornillos demasiado cerca de la ala. elige ex mas bajo o amplia la altura de la placa frontal!") }
            if (mvM < 2 * ew) { alert("Calculacion no possible, tornillos demasiado cerca de la ala. elige go mas alto !") }
            if (mvU < 2 * ew) { alert("Calculacion no possible, tornillos demasiado cerca de la ala. elige gu mas alto !") }
        }

        var leffcpO = Math.min(2 * 3.1415926535897932384626433832795 * mvO, 3.1415926535897932384626433832795 * mvO + w, 3.1415926535897932384626433832795 * mvO + 2 * e);
        var leffncO = Math.min(4 * mvO + 1.25 * ex, e + 2 * mvO + 0.625 * ex, 0.5 * bsp, 0.5 * w + 2 * mvO + 0.625 * ex)

        var lambda1M = mh / (mh + e);
        var lambda2M = mvM / (mh + e);
        var alphaM = 1.25 / lambda1M + 2.75;
        var lambda2limM = 0.5 * lambda1M * alphaM;
        var iterationDoneM = 0

        window.leffncO = leffncO
        window.leffcpO = leffcpO
        window.alphaM = alphaM

        // Iterarion for Screwrow at upper flange
        if (lambda2limM > lambda2M || alphaM > 8 || alphaM < 4.45) {
            var alphaIterationM = 4.45;
            var lambda1MlimIteration = (1.25 / (alphaIterationM - 2.75));
            var lambda2MlimIteration = 0.5 * alphaIterationM * lambda1MlimIteration;
            var lambda1MIteration = lambda1MlimIteration + (1 - lambda1MlimIteration) * ((lambda2MlimIteration - lambda2M) / lambda2MlimIteration) ** (0.185 * alphaIterationM ** 1.785);
            var errorIterationM = lambda1MIteration - lambda1M;

            if (errorIterationM < 0.0001) {
                alphaM = alphaIterationM;
                iterationDoneM = 1
            }
            console.log(iterationDoneM)

            while (errorIterationM > 0.00001) {
                lambda1MlimIteration = (1.25 / (alphaIterationM - 2.75));
                lambda2MlimIteration = 0.5 * alphaIterationM * lambda1MlimIteration;
                lambda2MlimIteration = 0.5 * alphaIterationM * lambda1MlimIteration;
                lambda1MIteration = lambda1MlimIteration + (1 - lambda1MlimIteration) * ((lambda2MlimIteration - lambda2M) / lambda2MlimIteration) ** (0.185 * alphaIterationM ** 1.785);
                errorIterationM = lambda1MIteration - lambda1M;
                alphaIterationM = alphaIterationM + 0.00001
            }
            alphaM = alphaIterationM
        }

        var leffcpM = 2 * 3.1415926535897932384626433832795 * mh;
        var leffncM = alphaM * mh;

        window.leffcpM = leffcpM
        window.leffncM = leffncM

        //Iteration for lower Screwrow
        var lambda1U = mh / (mh + e);
        var lambda2U = mvU / (mh + e);
        var alphaU = 1.25 / lambda1U + 2.75;
        var lambda2limU = 0.5 * lambda1U * alphaU;

        if (lambda2limU > lambda2U || alphaU > 8 || alphaU < 4.45) {
            var alphaIterationU = 4.45;
            var lambda1UlimIteration = (1.25 / (alphaIterationU - 2.75));
            var lambda2UlimIteration = 0.5 * alphaIterationU * lambda1UlimIteration;
            var lambda1UIteration = lambda1UlimIteration + (1 - lambda1UlimIteration) * ((lambda2UlimIteration - lambda2U) / lambda2UlimIteration) ** (0.185 * alphaIterationU ** 1.785);
            var errorIterationU = lambda1UIteration - lambda1U;

            if (errorIterationU < 0.0001) {
                alphaU = alphaIterationU;
                iterationDoneU = 1
            }
            while (errorIterationU > 0.00001) {
                lambda1UlimIteration = (1.25 / (alphaIterationU - 2.75));
                lambda2UlimIteration = 0.5 * alphaIterationU * lambda1UlimIteration;
                lambda2UlimIteration = 0.5 * alphaIterationU * lambda1UlimIteration;
                lambda1UIteration = lambda1UlimIteration + (1 - lambda1UlimIteration) * ((lambda2UlimIteration - lambda2U) / lambda2UlimIteration) ** (0.185 * alphaIterationU ** 1.785);
                errorIterationU = lambda1UIteration - lambda1U;
                alphaIterationU = alphaIterationU + 0.00001
            }
            alphaU = alphaIterationU
        }

        var leffcpU = 2 * 3.1415926535897932384626433832795 * mh;
        var leffncU = alphaU * mh;

        var leff1O = Math.min(leffncO, leffcpO);
        var leff2O = leffncO;
        var leff1M = Math.min(leffncM, leffcpM);
        var leff2M = leffncM;
        var leff1U = Math.min(leffncU, leffcpU);
        var leff2U = leffncU;
        var Mpl1rdO = 0.25 * leff1O * tsp ** 2 * fy;
        var Mpl2rdO = 0.25 * leff2O * tsp ** 2 * fy;
        var Mpl1rdM = 0.25 * leff1M * tsp ** 2 * fy;
        var Mpl2rdM = 0.25 * leff2M * tsp ** 2 * fy;
        var Mpl1rdU = 0.25 * leff1U * tsp ** 2 * fy;
        var Mpl2rdU = 0.25 * leff2U * tsp ** 2 * fy;

        var nO = Math.min(e, ex, 1.25 * mh)
        var nRest = Math.min(e, 1.25 * mh)

        window.alphaU = alphaU;
        window.leffcpU = leffcpU;
        window.leffncU = leffncU;
        window.nO = nO;
        window.nRest = nRest;
        window.Mpl1rdO = Mpl1rdO;
        window.Mpl2rdO = Mpl2rdO;
        window.Mpl1rdM = Mpl1rdM;
        window.Mpl2rdM = Mpl2rdM;
        window.Mpl1rdU = Mpl1rdU;
        window.Mpl2rdU = Mpl2rdU;

        var Ft1rdO = (((8 * nO - 2 * ew) * Mpl1rdO) / (2 * mvO * nO - ew * (mvO + nO)))
        var Ft3rdO = 2 * As * 0.9 * fub / 1.25
        var Ft2rdO = (2 * Mpl2rdO + nO * Ft3rdO) / (mvO + nO)

        var Ft1rdM = (8 * nRest - 2 * ew) * Mpl1rdM / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdM = 2 * As * 0.9 * fub / 1.25
        var Ft2rdM = (2 * Mpl2rdM + nRest * Ft3rdM) / (mh + nRest)

        var Ft1rdU = (8 * nRest - 2 * ew) * Mpl1rdU / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdU = 2 * As * 0.9 * fub / 1.25
        var Ft2rdU = (2 * Mpl2rdU + nRest * Ft3rdU) / (mh + nRest)

        window.Ft1rdO = Ft1rdO;
        window.Ft3rdO = Ft3rdO;
        window.Ft2rdO = Ft2rdO;
        window.Ft1rdM = Ft1rdM;
        window.Ft2rdM = Ft2rdM;
        window.Ft3rdM = Ft3rdM;
        window.Ft1rdU = Ft1rdU;
        window.Ft2rdU = Ft2rdU;
        window.Ft3rdU = Ft3rdU;


        document.getElementById("mxresult").innerText = "mx    " + " mm " + mvO.toFixed(2);
        document.getElementById("m1Oresult").innerText = "";
        document.getElementById("m2Mresult").innerText = "m2 " + " mm " + mvM.toFixed(2);
        document.getElementById("m1Mresult").innerText = "m1 " + " mm " + mh.toFixed(2);
        document.getElementById("m1Uresult").innerText = "m1 " + " mm " + mh.toFixed(2);
        document.getElementById("m2Uresult").innerText = "m2 " + " mm " + mvU.toFixed(2);

        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("Screwresult1").innerHTML = "Results of upper Screwrow: "
            document.getElementById("Screwresult2").innerHTML = "Results of middle Screwrow: "
            document.getElementById("Screwresult3").innerHTML = "Results of lower Screwrow: "
            document.getElementById("TensionWebBeam").innerHTML = "Results Tension Web Beam"
        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("Screwresult1").innerHTML = "Ergebnisse oberer Schraubenreihe: "
            document.getElementById("Screwresult2").innerHTML = "Ergebnisse mittlerer Schraubenreihe: "
            document.getElementById("Screwresult3").innerHTML = "Ergebnisse unterer Schraubenreihe: "
            document.getElementById("TensionWebBeam").innerHTML = "Ergebnisse Trägersteg auf Zugbeanspruchung"
        }
        if (language_spanish == 1) {
            document.getElementById("Screwresult1").innerHTML = "resultos de los tornillos altos: "
            document.getElementById("Screwresult2").innerHTML = "resultos de los tornillos en la mitad: "
            document.getElementById("Screwresult3").innerHTML = "resultros de los tornillos abajos: "
            document.getElementById("TensionWebBeam").innerHTML = "resultos de la alma bajo Tension"
        }

        document.getElementById("leffcpresult1").innerText = "leffcp " + " mm " + leffcpO.toFixed(2);
        document.getElementById("leffncresult1").innerText = "leffnc " + " mm " + leffncO.toFixed(2);
        document.getElementById("Mpl1rdresult1").innerText = "Mpl1rd " + " kNm " + (Mpl1rdO / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult1").innerText = "Mpl2rd " + " kNm " + (Mpl2rdO / 1000000).toFixed(2);
        document.getElementById("Ft1rd1").innerText = "Ft1rd: " + " kNm " + (Ft1rdO / 1000).toFixed(2);
        document.getElementById("Ft2rd1").innerText = "Ft2rd: " + " kN " + (Ft2rdO / 1000).toFixed(2);
        document.getElementById("Ft3rd1").innerText = "Ft3rd: " + " kN " + (Ft3rdO / 1000).toFixed(2);

        document.getElementById("leffcpresult2").innerText = "leffcp: " + " mm " + leffcpM.toFixed(2);
        document.getElementById("leffncresult2").innerText = "leffnc: " + " mm " + leffncM.toFixed(2);
        document.getElementById("Mpl1rdresult2").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdM / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult2").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdM / 1000000).toFixed(2);
        document.getElementById("Ft1rd2").innerText = "Ft1rd: " + " kN " + (Ft1rdM / 1000).toFixed(2);
        document.getElementById("Ft2rd2").innerText = "Ft2rd: " + " kN " + (Ft2rdM / 1000).toFixed(2);
        document.getElementById("Ft3rd2").innerText = "Ft3rd: " + " kN " + (Ft3rdM / 1000).toFixed(2);

        document.getElementById("leffcpresult3").innerText = "leffcp: " + " mm " + leffcpU.toFixed(2);
        document.getElementById("leffncresult3").innerText = "leffnc: " + " mm " + leffncU.toFixed(2);
        document.getElementById("Mpl1rdresult3").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdU / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult3").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdU / 1000000).toFixed(2);
        document.getElementById("Ft1rd3").innerText = "Ft1rd: " + " kN " + (Ft1rdU / 1000).toFixed(2);
        document.getElementById("Ft2rd3").innerText = "Ft2rd: " + " kN " + (Ft2rdU / 1000).toFixed(2);
        document.getElementById("Ft3rd3").innerText = "Ft3rd: " + " kN " + (Ft3rdU / 1000).toFixed(2);

        // === 4.21 calculations evidence of tension beam screwRows ===

        var befftwb = leff1M

        if (Ft2rdM < Ft1rdM || Ft3rdM < Ft1rdM) { befftwb = leff2M }

        var Ftwbrd = befftwb * tw * fy

        window.befftwb = befftwb;
        window.Ftwbrd = Ftwbrd;

        document.getElementById("befftwb").innerText = "befftwb: " + befftwb.toFixed(2) + " mm ";
        document.getElementById("Ftwbrd").innerText = "Ftwbrd: " + (Ftwbrd / 1000).toFixed(2) + " kN ";

        // === 4.23 calculations max. Moment===

        var hs1 = h + u1 - ex - 0.5 * tf
        var hs2 = h - (tf / 2) - go
        var hs3 = gu - (tf / 2)

        var aFtrd1 = Math.min(Ft1rdO, Ft2rdO, Ft3rdO)
        var aFtrd2 = Math.min(Ft1rdM, Ft2rdM, Ft3rdM, Ftwbrd)
        var aFtrd3 = Math.min(Ft1rdM, Ft2rdM, Ft3rdM, Ftwbrd)

        var SumFtrd = aFtrd1 + aFtrd2 + aFtrd3

        if (Fcfbrd < SumFtrd) { aFtrd3 = aFtrd3 - (SumFtrd - Fcfbrd) }

        if (aFtrd3 < 0) {
            aFtrd2 = aFtrd2 + aFtrd3;
            aFtrd3 = 0
        }
        if (aFtrd2 < 0) {
            aFtrd1 = Fcfbrd;
            aFtrd2 = 0
        }
        if (aFtrd1 > 0.95 * Ft3rdO) { if (aFtrd2 > (aFtrd1 / hs1) * hs2) { aFtrd2 = (aFtrd1 / hs1) * hs2 }; if (aFtrd3 > (aFtrd1 / hs1) * hs3) { aFtrd3 = (aFtrd1 / hs1) * hs3 } }
        if (aFtrd2 > 0.95 * Ft3rdO) { if (aFtrd3 > (aFtrd2 / hs2) * hs3) { aFtrd3 = (aFtrd2 / hs2) * hs3 } }

        var Mmax = aFtrd1 * hs1 + aFtrd2 * hs2 + aFtrd3 * hs3

        window.hs1 = hs1
        window.hs2 = hs2
        window.hs3 = hs3
        window.Mmax = Mmax
        window.aFtrd1 = aFtrd1
        window.aFtrd2 = aFtrd2
        window.aFtrd3 = aFtrd3

        if (language_english == 1) {
            document.getElementById("Mmaxresults").innerText = "Calculation of Mmax:";
        }
        if (language_english == 0) {
            document.getElementById("Mmaxresults").innerText = "Berechnung von Mmax:";
        }
        if (language_spanish == 1) {
            document.getElementById("Mmaxresults").innerText = "Calculacion de Mmax:";
        }

        document.getElementById("Ft1eff").innerText = "Fteff1: " + (aFtrd1 / 1000).toFixed(2) + " kN ";
        document.getElementById("Ft2eff").innerText = "Fteff2: " + (aFtrd2 / 1000).toFixed(2) + " kN ";
        document.getElementById("Ft3eff").innerText = "Fteff3: " + (aFtrd3 / 1000).toFixed(2) + " kN ";
        document.getElementById("Mmax").innerText = "Mmax: " + (Mmax / 1000000).toFixed(2) + " kNm ";

        // === 4.13 calculations max. shear force===

        // max Force due to residual load-bearing capacity

        var Fved1 = (1 - ((aFtrd1 / 2) / (1.4 * 0.5 * Ft3rdO))) * 2 * Fvrd
        var Fved2 = (1 - ((aFtrd2 / 2) / (1.4 * 0.5 * Ft3rdM))) * 2 * Fvrd
        var Fved3 = (1 - ((aFtrd3 / 2) / (1.4 * 0.5 * Ft3rdU))) * 2 * Fvrd
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
        var Fbrd3Up = (kPunch2Up * alphaPunch2Up * fu * d * tsp / GammaTwo) * 2

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

        //Selection of authoritive punching shear per Screw row

        var Fbrdauthoritive1 = Math.min(Fbrd1Up, Fbrd1Down, )
        var Fbrdauthoritive2 = Math.min(Fbrd2Up, Fbrd2Down)
        var Fbrdauthoritive3 = Math.min(Fbrd3Up, Fbrd3Down)

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

}