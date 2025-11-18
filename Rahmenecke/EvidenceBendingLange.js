function bendingFlange() {

    var selectedScrewRows = window.selectedScrewRows
    var RibSelection = window.RibSelection
    var ts_Rib = document.getElementById("ts_Rib").value;
    if (isNaN(ts_Rib)) {
        ts_Rib = window.tf
    }
    var b_Column = window.b_Column
    var e = window.e
    var tw_Column = window.tw_Column
    var d = window.d
    var fub = window.fub
    var AScrew = window.AScrew
    var r_Column = window.r_Column
    var go = window.go
    var u1 = window.u1
    var u2 = window.u2
    var gu = window.gu
    var h = window.h
    var tf_Column = window.tf_Column
    var fy_Column = window.fy_Column
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    var ew = window.ew
    var u2 = parseFloat(document.getElementById("distanceu2").value);
    if (isNaN(u2)) {
        u2 = window.u2;
    }
    var a_Rib = document.getElementById("Rib_Welding").value;
    var mh = (bsp / 2) - e - (tw_Column / 2) - 0.8 * r_Column
    var GammaTwo = 1.25
    var RScrew = 0.5 * d
    var AlphaV = 0.6
    var AScrew = 3.1415926535897932384626433832795 * RScrew ** 2
    var Fvrd = AlphaV * fub * AScrew / GammaTwo
    var mvO = u2 + u1 + go

    if (isNaN(u2)) { mvO = u1 + go }
    var eO = ex + u2

    window.eO = eO
    window.mvO = mvO;

    // === Additional Warning Programms for forbidden Userinput ===  

    if (language_english == 1 && language_spanish == 0) {
        if (mh <= 2 * ew) { alert("Calculation not possible, Screws too close to web of beam. Please select lower e, or rise width of faceplate!") }
    }
    if (language_english == 0 && language_spanish == 0) {
        if (mh <= 2 * ew) { alert("Berechnung nicht möglich, Schrauben zu nah am Trägersteg. Bitte wählen sie einen geringeren Abstand e, oder erhöhen Sie die Stirnplattenbreite!") }
    }

    if (language_spanish == 1) {
        if (mh <= 2 * ew) { alert("Calculacion no possible, tornillos demasiado cerca de la alma. elige un e mas bajo o amplia el ancho de la placa frontal !") }
    }

    if (bsp > b_Column) {
        var ec = e - (0.5 * (bsp - b_Column))
    }
    if (bsp < b_Column) {
        var ec = e + (0.5 * (b_Column - bsp))
    }
    window.ec = ec
    if (bsp == b_Column) {
        var ec = e
    }
    var pO = h - go - gu
    console.log("ec ist" + ec)
    if (selectedScrewRows == 2) {
        var leffcpO_Column = Math.min(2 * 3.1415926535897932384626433832795 * mh, 2 * pO)
        var leffncO_Column = Math.min(4 * mh + 1.25 * ec, pO);

        var leffcpU_Column = Math.min(2 * 3.1415926535897932384626433832795 * mh, 2 * pO)
        var leffncU_Column = Math.min(4 * mh + 1.25 * ec, pO);


        if (RibSelection == "yes") {
            var mvO_Rib = go - 0.5 * tf - 0.5 * ts_Rib - 0.8 * 2 ** 0.5 * a_Rib
            var mvU_Rib = gu - 0.5 * tf - 0.5 * ts_Rib - 0.8 * 2 ** 0.5 * a_Rib

            leffcpO_Column = 2 * Math.PI * mh
            leffcpU_Column = leffcpO_Column

            var iterationDoneO_Rib = 0;
            var iterationDoneU_Rib = 0;

            var lambda1O_Rib = mh / (mh + ec);
            var lambda2O_Rib = mvO_Rib / (mh + ec);
            var alphaO_Rib = 1.25 / lambda1O_Rib + 2.75;
            var lambda2limO_Rib = 0.5 * lambda1O_Rib * alphaO_Rib;

            if (lambda2limO_Rib > lambda2O_Rib || alphaO_Rib > 8 || alphaO_Rib < 4.45) {
                var alphaIterationO_Rib = 4.45;
                var lambda1OlimIteration_Rib = (1.25 / (alphaIterationO_Rib - 2.75));
                var lambda2OlimIteration_Rib = 0.5 * alphaIterationO_Rib * lambda1OlimIteration_Rib;
                var lambda1OIteration_Rib = lambda1OlimIteration_Rib + (1 - lambda1OlimIteration_Rib) * ((lambda2OlimIteration_Rib - lambda2O_Rib) / lambda2OlimIteration_Rib) ** (0.185 * alphaIterationO_Rib ** 1.785);
                var errorIterationO_Rib = lambda1OIteration_Rib - lambda1O_Rib;

                if (errorIterationO_Rib < 0.0001) {
                    alphaO_Rib = alphaIterationO_Rib;
                    iterationDoneO_Rib = 1
                }
                while (errorIterationO_Rib > 0.00001) {
                    lambda1OlimIteration_Rib = (1.25 / (alphaIterationO_Rib - 2.75));
                    lambda2OlimIteration_Rib = 0.5 * alphaIterationO_Rib * lambda1OlimIteration_Rib;
                    lambda2OlimIteration_Rib = 0.5 * alphaIterationO_Rib * lambda1OlimIteration_Rib;
                    lambda1OIteration_Rib = lambda1OlimIteration_Rib + (1 - lambda1OlimIteration_Rib) * ((lambda2OlimIteration_Rib - lambda2O_Rib) / lambda2OlimIteration_Rib) ** (0.185 * alphaIterationO_Rib ** 1.785);
                    errorIterationO_Rib = lambda1OIteration_Rib - lambda1O_Rib;
                    alphaIterationO_Rib = alphaIterationO_Rib + 0.00001
                }
                alphaO_Rib = alphaIterationO_Rib
            }
            var leffncO_Column = alphaO_Rib * mh;
            var lambda1U_Rib = mh / (mh + ec);
            var lambda2U_Rib = mvU_Rib / (mh + ec);
            var alphaU_Rib = 1.25 / lambda1U_Rib + 2.75;
            var lambda2limU_Rib = 0.5 * lambda1U_Rib * alphaU_Rib;

            if (lambda2limU_Rib > lambda2U_Rib || alphaU_Rib > 8 || alphaU_Rib < 4.45) {
                var alphaIterationU_Rib = 4.45;
                var lambda1UlimIteration_Rib = (1.25 / (alphaIterationU_Rib - 2.75));
                var lambda2UlimIteration_Rib = 0.5 * alphaIterationU_Rib * lambda1UlimIteration_Rib;
                var lambda1UIteration_Rib = lambda1UlimIteration_Rib + (1 - lambda1UlimIteration_Rib) * ((lambda2UlimIteration_Rib - lambda2U_Rib) / lambda2UlimIteration_Rib) ** (0.185 * alphaIterationU_Rib ** 1.785);
                var errorIterationU_Rib = lambda1UIteration_Rib - lambda1U_Rib;

                if (errorIterationU_Rib < 0.0001) {
                    alphaU_Rib = alphaIterationU_Rib;
                    iterationDoneU_Rib = 1
                }
                while (errorIterationU_Rib > 0.00001) {
                    lambda1UlimIteration_Rib = (1.25 / (alphaIterationU_Rib - 2.75));
                    lambda2UlimIteration_Rib = 0.5 * alphaIterationU_Rib * lambda1UlimIteration_Rib;
                    lambda2UlimIteration_Rib = 0.5 * alphaIterationU_Rib * lambda1UlimIteration_Rib;
                    lambda1UIteration_Rib = lambda1UlimIteration_Rib + (1 - lambda1UlimIteration_Rib) * ((lambda2UlimIteration_Rib - lambda2U_Rib) / lambda2UlimIteration_Rib) ** (0.185 * alphaIterationU_Rib ** 1.785);
                    errorIterationU_Rib = lambda1UIteration_Rib - lambda1U_Rib;
                    alphaIterationU_Rib = alphaIterationU_Rib + 0.00001
                }
                alphaU_Rib = alphaIterationU_Rib
            }
            var leffncU_Column = alphaU_Rib * mh
        }
        var leff1O_Column = Math.min(leffncO_Column, leffcpO_Column);
        var leff2O_Column = leffncO;
        var leff1U_Column = Math.min(leffncU_Column, leffcpU_Column);
        var leff2U_Column = leffncU;

        window.leff1O_Column = leff1O_Column
        window.leff2O_Column = leff2O_Column
        window.leff1U_Column = leff1U_Column
        window.leff2U_Column = leff2U_Column

        var Mpl1rdO_Column = 0.25 * leff1O_Column * tf_Column ** 2 * fy_Column;
        var Mpl2rdO_Column = 0.25 * leff2O_Column * tf_Column ** 2 * fy_Column;
        var Mpl1rdU_Column = 0.25 * leff1U_Column * tf_Column ** 2 * fy_Column;
        var Mpl2rdU_Column = 0.25 * leff2U_Column * tf_Column ** 2 * fy_Column;
        var nRest = Math.min(ec, 1.25 * mh)
        var nO = nRest

        var Ft1rdO_Column = ((8 * nRest - 2 * ew) * Mpl1rdO_Column) / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdO_Column = 2 * As * 0.9 * fub / 1.25
        var Ft2rdO_Column = (2 * Mpl2rdO_Column + nRest * Ft3rdO_Column) / (mh + nRest)

        var Ft1rdU_Column = (8 * nRest - 2 * ew) * Mpl1rdU_Column / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdU_Column = 2 * As * 0.9 * fub / 1.25
        var Ft2rdU_Column = (2 * Mpl2rdU_Column + nRest * Ft3rdU_Column) / (mh + nRest)

        window.Ft1rdO_Column = Ft1rdO_Column
        window.Ft2rdO_Column = Ft2rdO_Column
        window.Ft3rdO_Column = Ft3rdO_Column
        window.Ft1rdU_Column = Ft1rdU_Column
        window.Ft2rdU_Column = Ft2rdU_Column
        window.Ft3rdU_Column = Ft3rdU_Column

        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("evidenceColumnflange").innerHTML = "Verification Flange in bending"
            document.getElementById("Screwresult1C").innerHTML = "Results of upper Screwrow: ";
            document.getElementById("Screwresult2C").innerHTML = ""
            document.getElementById("Screwresult3C").innerHTML = "Results of lower Screwrow: ";
        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("evidenceColumnflange").innerHTML = "NW Stützenflansch auf Biegung"
            document.getElementById("Screwresult1C").innerHTML = "Ergebnisse oberer Schraubenreihe: ";
            document.getElementById("Screwresult2C").innerHTML = ""
            document.getElementById("Screwresult3C").innerHTML = "Ergebnisse unterer Schraubenreihe: ";
        }
        if (language_spanish == 1) {
            document.getElementById("evidenceColumnflange").innerHTML = "verificacion ala bajo ..."
            document.getElementById("Screwresult1C").innerHTML = "Resultos de los tornillos altos: ";
            document.getElementById("Screwresult2C").innerHTML = ""
            document.getElementById("Screwresult3C").innerHTML = "Resultos de los tornillos bajos: ";
        }

        document.getElementById("mxresultC").innerText = "m2: " + " mm " + mvO.toFixed(2);
        document.getElementById("m1OresultC").innerText = "m1: " + " mm " + mh.toFixed(2);
        document.getElementById("m2MresultC").innerText = "";
        document.getElementById("m1MresultC").innerText = "";
        document.getElementById("m1UresultC").innerText = "m1: " + " mm " + mh.toFixed(2);
        document.getElementById("m2UresultC").innerText = "m2: " + " mm " + mvU.toFixed(2);

        document.getElementById("leffcpresult1C").innerText = "leffcp: " + " mm " + leffcpO_Column.toFixed(2);
        document.getElementById("leffncresult1C").innerText = "leffnc: " + " mm " + leffncO_Column.toFixed(2);
        document.getElementById("Mpl1rdresult1C").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdO_Column / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult1C").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdO_Column / 1000000).toFixed(2);
        document.getElementById("Ft1rd1C").innerText = "Ft1rd: " + " kN " + (Ft1rdO_Column / 1000).toFixed(2);
        document.getElementById("Ft2rd1C").innerText = "Ft2rd: " + " kN " + (Ft2rdO_Column / 1000).toFixed(2);
        document.getElementById("Ft3rd1C").innerText = "Ft3rd: " + " kN " + (Ft3rdO_Column / 1000).toFixed(2);

        document.getElementById("leffcpresult3C").innerText = "leffcp: " + " mm " + leffcpU_Column.toFixed(2);
        document.getElementById("leffncresult3C").innerText = "leffnc: " + " mm " + leffncU_Column.toFixed(2);
        document.getElementById("Mpl1rdresult3C").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdU_Column / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult3C").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdU_Column / 1000000).toFixed(2);
        document.getElementById("Ft1rd3C").innerText = "Ft1rd: " + " kN " + (Ft1rdU_Column / 1000).toFixed(2);
        document.getElementById("Ft2rd3C").innerText = "Ft2rd: " + " kN " + (Ft2rdU_Column / 1000).toFixed(2);
        document.getElementById("Ft3rd3C").innerText = "Ft3rd: " + " kN " + (Ft3rdU_Column / 1000).toFixed(2);

        document.getElementById("leffcpresult2C").innerText = "";
        document.getElementById("leffncresult2C").innerText = "";
        document.getElementById("Mpl1rdresult2C").innerText = "";
        document.getElementById("Mpl2rdresult2C").innerText = "";
        document.getElementById("Ft1rd2C").innerText = "";
        document.getElementById("Ft2rd2C").innerText = "";
        document.getElementById("Ft3rd2C").innerText = "";
    }
    if (selectedScrewRows == 3) {

        eO = ex + u2
        var leffcpO_Column = Math.min(2 * 3.1415926535897932384626433832795 * mh, 3.1415926535897932384626433832795 * mh + 2 * eO, 3.1415926535897932384626433832795 * mh + h - go - gu);
        var leffncO_Column = Math.min(4 * mh + 1.25 * ec, 2 * mh + 0.625 * ec + eO);

        var leffcpM_Column = Math.min(2 * 3.1415926535897932384626433832795 * mh, 2 * (h - go - gu));
        var leffncM_Column = Math.min(4 * mh + 1.25 * ec, 2 * mh + 1.25 * ec + u2 + u1, h - go - gu);

        var leffcpU_Column = Math.min(2 * 3.1415926535897932384626433832795 * mh, 2 * (h - go - gu))
        var leffncU_Column = Math.min(4 * mh + 1.25 * ec, h - go - gu);

        if (RibSelection == "yes") {
            var mvO_Rib = u1 - ex + 0.5 * tf - 0.5 * ts_Rib - 0.8 * 2 ** 0.5 * a_Rib

            leffcpO_Column = Math.min(2 * Math.PI * mh, Math.PI * mh + 2 * eO)

            var iterationDoneO_Rib = 0;
            var iterationDoneM_Rib = 0;
            var iterationDoneU_Rib = 0;

            var lambda1O_Rib = mh / (mh + ec);
            var lambda2O_Rib = mvO_Rib / (mh + ec);
            var alphaO_Rib = 1.25 / lambda1O_Rib + 2.75;
            var lambda2limO_Rib = 0.5 * lambda1O_Rib * alphaO_Rib;

            if (lambda2limO_Rib > lambda2O_Rib || alphaO_Rib > 8 || alphaO_Rib < 4.45) {
                var alphaIterationO_Rib = 4.45;
                var lambda1OlimIteration_Rib = (1.25 / (alphaIterationO_Rib - 2.75));
                var lambda2OlimIteration_Rib = 0.5 * alphaIterationO_Rib * lambda1OlimIteration_Rib;
                var lambda1OIteration_Rib = lambda1OlimIteration_Rib + (1 - lambda1OlimIteration_Rib) * ((lambda2OlimIteration_Rib - lambda2O_Rib) / lambda2OlimIteration_Rib) ** (0.185 * alphaIterationO_Rib ** 1.785);
                var errorIterationO_Rib = lambda1OIteration_Rib - lambda1O_Rib;

                if (errorIterationO_Rib < 0.0001) {
                    alphaO_Rib = alphaIterationO_Rib;
                    iterationDoneO_Rib = 1
                }
                while (errorIterationO_Rib > 0.00001) {
                    lambda1OlimIteration_Rib = (1.25 / (alphaIterationO_Rib - 2.75));
                    lambda2OlimIteration_Rib = 0.5 * alphaIterationO_Rib * lambda1OlimIteration_Rib;
                    lambda2OlimIteration_Rib = 0.5 * alphaIterationO_Rib * lambda1OlimIteration_Rib;
                    lambda1OIteration_Rib = lambda1OlimIteration_Rib + (1 - lambda1OlimIteration_Rib) * ((lambda2OlimIteration_Rib - lambda2O_Rib) / lambda2OlimIteration_Rib) ** (0.185 * alphaIterationO_Rib ** 1.785);
                    errorIterationO_Rib = lambda1OIteration_Rib - lambda1O_Rib;
                    alphaIterationO_Rib = alphaIterationO_Rib + 0.00001
                }
                alphaO_Rib = alphaIterationO_Rib
            }
            leffncO_Column = Math.min(eO + alphaO_Rib * mh - (2 * mh + 0.625 * ec))
            leffcpM_Column = 2 * Math.PI * mh

            var mvM_Rib = go - 0.5 * tf - 0.5 * ts_Rib - 0.8 * 2 ** 0.5 * a_Rib

            var lambda1M_Rib = mh / (mh + ec);
            var lambda2M_Rib = mvM_Rib / (mh + ec);
            var alphaM_Rib = 1.25 / lambda1M_Rib + 2.75;
            var lambda2limM_Rib = 0.5 * lambda1M_Rib * alphaM_Rib;

            if (lambda2limM_Rib > lambda2M_Rib || alphaM_Rib > 8 || alphaM_Rib < 4.45) {
                var alphaIterationM_Rib = 4.45;
                var lambda1MlimIteration_Rib = (1.25 / (alphaIterationM_Rib - 2.75));
                var lambda2MlimIteration_Rib = 0.5 * alphaIterationM_Rib * lambda1MlimIteration_Rib;
                var lambda1MIteration_Rib = lambda1MlimIteration_Rib + (1 - lambda1MlimIteration_Rib) * ((lambda2MlimIteration_Rib - lambda2M_Rib) / lambda2MlimIteration_Rib) ** (0.185 * alphaIterationM_Rib ** 1.785);
                var errorIterationM_Rib = lambda1MIteration_Rib - lambda1M_Rib;

                if (errorIterationM_Rib < 0.0001) {
                    alphaM_Rib = alphaIterationM_Rib;
                    iterationDoneM_Rib = 1
                }
                while (errorIterationM_Rib > 0.00001) {
                    lambda1MlimIteration_Rib = (1.25 / (alphaIterationM_Rib - 2.75));
                    lambda2MlimIteration_Rib = 0.5 * alphaIterationM_Rib * lambda1MlimIteration_Rib;
                    lambda2MlimIteration_Rib = 0.5 * alphaIterationM_Rib * lambda1MlimIteration_Rib;
                    lambda1MIteration_Rib = lambda1MlimIteration_Rib + (1 - lambda1MlimIteration_Rib) * ((lambda2MlimIteration_Rib - lambda2M_Rib) / lambda2MlimIteration_Rib) ** (0.185 * alphaIterationM_Rib ** 1.785);
                    errorIterationM_Rib = lambda1MIteration_Rib - lambda1M_Rib;
                    alphaIterationM_Rib = alphaIterationM_Rib + 0.00001
                }
                alphaM_Rib = alphaIterationM_Rib
            }
            leffncM_Column = alphaM_Rib * mh;

            leffcpU_Column = leffcpM_Column;
            var mvU_Rib = gu - 0.5 * tf - 0.5 * ts_Rib - 0.8 * 2 ** 0.5 * a_Rib

            var lambda1U_Rib = mh / (mh + ec);
            var lambda2U_Rib = mvU_Rib / (mh + ec);
            var alphaU_Rib = 1.25 / lambda1U_Rib + 2.75;
            var lambda2limU_Rib = 0.5 * lambda1U_Rib * alphaU_Rib;

            if (lambda2limU_Rib > lambda2U_Rib || alphaU_Rib > 8 || alphaU_Rib < 4.45) {
                var alphaIterationU_Rib = 4.45;
                var lambda1UlimIteration_Rib = (1.25 / (alphaIterationU_Rib - 2.75));
                var lambda2UlimIteration_Rib = 0.5 * alphaIterationU_Rib * lambda1UlimIteration_Rib;
                var lambda1UIteration_Rib = lambda1UlimIteration_Rib + (1 - lambda1UlimIteration_Rib) * ((lambda2UlimIteration_Rib - lambda2U_Rib) / lambda2UlimIteration_Rib) ** (0.185 * alphaIterationU_Rib ** 1.785);
                var errorIterationU_Rib = lambda1UIteration_Rib - lambda1U_Rib;

                if (errorIterationU_Rib < 0.0001) {
                    alphaU_Rib = alphaIterationU_Rib;
                    iterationDoneU_Rib = 1
                }
                while (errorIterationU_Rib > 0.00001) {
                    lambda1UlimIteration_Rib = (1.25 / (alphaIterationU_Rib - 2.75));
                    lambda2UlimIteration_Rib = 0.5 * alphaIterationU_Rib * lambda1UlimIteration_Rib;
                    lambda2UlimIteration_Rib = 0.5 * alphaIterationU_Rib * lambda1UlimIteration_Rib;
                    lambda1UIteration_Rib = lambda1UlimIteration_Rib + (1 - lambda1UlimIteration_Rib) * ((lambda2UlimIteration_Rib - lambda2U_Rib) / lambda2UlimIteration_Rib) ** (0.185 * alphaIterationU_Rib ** 1.785);
                    errorIterationU_Rib = lambda1UIteration_Rib - lambda1U_Rib;
                    alphaIterationU_Rib = alphaIterationU_Rib + 0.00001
                }
                alphaU_Rib = alphaIterationU_Rib
            }
            var leffncU_Column = alphaU_Rib * mh


        }

        var leff1O_Column = Math.min(leffncO_Column, leffcpO_Column)
        var leff2O_Column = leffncO_Column;
        var leff1M_Column = Math.min(leffncM_Column, leffcpM_Column);
        var leff2M_Column = leffncM_Column;
        var leff1U_Column = Math.min(leffncU_Column, leffcpU_Column);
        var leff2U_Column = leffncU_Column;

        window.leff1O_Column = leff1O_Column
        window.leff2O_Column = leff2O_Column
        window.leff1M_Column = leff1M_Column
        window.leff2M_Column = leff2M_Column
        window.leff1U_Column = leff1U_Column
        window.leff2U_Column = leff2U_Column

        var Mpl1rdO_Column = 0.25 * leff1O_Column * tf_Column ** 2 * fy_Column;
        var Mpl2rdO_Column = 0.25 * leff2O_Column * tf_Column ** 2 * fy_Column;
        var Mpl1rdM_Column = 0.25 * leff1M_Column * tf_Column ** 2 * fy_Column;
        var Mpl2rdM_Column = 0.25 * leff2M_Column * tf_Column ** 2 * fy_Column;
        var Mpl1rdU_Column = 0.25 * leff1U_Column * tf_Column ** 2 * fy_Column;
        var Mpl2rdU_Column = 0.25 * leff2U_Column * tf_Column ** 2 * fy_Column;

        var nO = Math.min(ec, eO, 1.25 * mh)
        var nRest = Math.min(ec, 1.25 * mh)

        var Ft1rdO_Column = (((8 * nO - 2 * ew) * Mpl1rdO_Column) / (2 * mh * nO - ew * (mh + nO)))
        var Ft3rdO_Column = 2 * As * 0.9 * fub / 1.25
        var Ft2rdO_Column = (2 * Mpl2rdO_Column + nO * Ft3rdO_Column) / (mh + nO)

        var Ft1rdM_Column = (8 * nRest - 2 * ew) * Mpl1rdM_Column / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdM_Column = 2 * As * 0.9 * fub / 1.25
        var Ft2rdM_Column = (2 * Mpl2rdM_Column + nRest * Ft3rdM_Column) / (mh + nRest)

        var Ft1rdU_Column = (8 * nRest - 2 * ew) * Mpl1rdU_Column / (2 * mh * nRest - ew * (mh + nRest))
        var Ft3rdU_Column = 2 * As * 0.9 * fub / 1.25
        var Ft2rdU_Column = (2 * Mpl2rdU_Column + nRest * Ft3rdU_Column) / (mh + nRest)

        window.Ft1rdO_Column = Ft1rdO_Column
        window.Ft2rdO_Column = Ft2rdO_Column
        window.Ft3rdO_Column = Ft3rdO_Column

        window.Ft1rdM_Column = Ft1rdM_Column
        window.Ft2rdM_Column = Ft2rdM_Column
        window.Ft3rdM_Column = Ft3rdM_Column

        window.Ft1rdU_Column = Ft1rdU_Column
        window.Ft2rdU_Column = Ft2rdU_Column
        window.Ft3rdU_Column = Ft3rdU_Column

        document.getElementById("mxresult").innerText = "m1    " + " mm " + mh.toFixed(2);
        document.getElementById("m1Oresult").innerText = "";
        document.getElementById("m1Mresult").innerText = "m1 " + " mm " + mh.toFixed(2);
        document.getElementById("m1Uresult").innerText = "m1 " + " mm " + mh.toFixed(2);

        if (language_english == 1 && language_spanish == 0) {
            document.getElementById("evidenceColumnflange").innerHTML = "verifcation Flange in bending"
            document.getElementById("Screwresult1C").innerHTML = "Results of upper Screwrow: ";
            document.getElementById("Screwresult2C").innerHTML = "Results of middle Screwrow ";
            document.getElementById("Screwresult3C").innerHTML = "Results of lower Screwrow: ";

        }
        if (language_english == 0 && language_spanish == 0) {
            document.getElementById("evidenceColumnflange").innerHTML = "NW Stützenflansch auf Biegung"
            document.getElementById("Screwresult1C").innerHTML = "Ergebnisse oberer Schraubenreihe: ";
            document.getElementById("Screwresult2C").innerHTML = "Ergebnisse mittlerer Schraubenreihe ";
            document.getElementById("Screwresult3C").innerHTML = "Ergebnisse unterer Schraubenreihe: ";

        }
        if (language_spanish == 1) {
            document.getElementById("evidenceColumnflange").innerHTML = "verficacion ala bajo ..."
            document.getElementById("Screwresult1C").innerHTML = "Resultos de los tornillos altos: ";
            document.getElementById("Screwresult2C").innerHTML = "Resultos de los tornillos en la mitad: ";
            document.getElementById("Screwresult3C").innerHTML = "Resultos de los tornillos bajos: ";

        }
        document.getElementById("leffcpresult1C").innerText = "leffcp " + " mm " + leffcpO_Column.toFixed(2);
        document.getElementById("leffncresult1C").innerText = "leffnc " + " mm " + leffncO_Column.toFixed(2);
        document.getElementById("Mpl1rdresult1C").innerText = "Mpl1rd " + " kNm " + (Mpl1rdO_Column / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult1C").innerText = "Mpl2rd " + " kNm " + (Mpl2rdO_Column / 1000000).toFixed(2);
        document.getElementById("Ft1rd1C").innerText = "Ft1rd: " + " kNm " + (Ft1rdO_Column / 1000).toFixed(2);
        document.getElementById("Ft2rd1C").innerText = "Ft2rd: " + " kN " + (Ft2rdO_Column / 1000).toFixed(2);
        document.getElementById("Ft3rd1C").innerText = "Ft3rd: " + " kN " + (Ft3rdO_Column / 1000).toFixed(2);

        document.getElementById("leffcpresult2C").innerText = "leffcp: " + " mm " + leffcpM_Column.toFixed(2);
        document.getElementById("leffncresult2C").innerText = "leffnc: " + " mm " + leffncM_Column.toFixed(2);
        document.getElementById("Mpl1rdresult2C").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdM_Column / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult2C").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdM_Column / 1000000).toFixed(2);
        document.getElementById("Ft1rd2C").innerText = "Ft1rd: " + " kN " + (Ft1rdM_Column / 1000).toFixed(2);
        document.getElementById("Ft2rd2C").innerText = "Ft2rd: " + " kN " + (Ft2rdM_Column / 1000).toFixed(2);
        document.getElementById("Ft3rd2C").innerText = "Ft3rd: " + " kN " + (Ft3rdM_Column / 1000).toFixed(2);

        document.getElementById("leffcpresult3C").innerText = "leffcp: " + " mm " + leffcpU_Column.toFixed(2);
        document.getElementById("leffncresult3C").innerText = "leffnc: " + " mm " + leffncU_Column.toFixed(2);
        document.getElementById("Mpl1rdresult3C").innerText = "Mpl1rd: " + " kNm " + (Mpl1rdU_Column / 1000000).toFixed(2);
        document.getElementById("Mpl2rdresult3C").innerText = "Mpl2rd: " + " kNm " + (Mpl2rdU_Column / 1000000).toFixed(2);
        document.getElementById("Ft1rd3C").innerText = "Ft1rd: " + " kN " + (Ft1rdU_Column / 1000).toFixed(2);
        document.getElementById("Ft2rd3C").innerText = "Ft2rd: " + " kN " + (Ft2rdU_Column / 1000).toFixed(2);
        document.getElementById("Ft3rd3C").innerText = "Ft3rd: " + " kN " + (Ft3rdU_Column / 1000).toFixed(2);
    }
    ColumnEvidence()
}