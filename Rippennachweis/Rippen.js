function startCalc() {
    dataload()
    var LocationSelection = document.getElementById('LocationForce');
    var selectedlocation = LocationForce.options[LocationForce.selectedIndex].value;
    var ss = parseFloat(document.getElementById('distanceu1n').value);
    var Fed = parseFloat(document.getElementById('ValueVed').value);
    var hw = h - 2 * tf
    var m1 = b / tw
    var m2 = 0
    var language_english = window.language_english
    var language_german = window.language_german
    var language_spanish = window.language_spanish

    if (selectedlocation == "typeA") {
        var kf = 6
        var ly = ss + 2 * tf * (1 + (m1 + m2) ** 0.5)
        var Fcr = 0.9 * kf * 210000 * tw ** 3 / hw
        var lambdaF = (ly * tw * fy / Fcr) ** 0.5
        if (lambdaF > 0.5) {
            m2 = 0.02 * (hw / tf) ** 2
            ly = ss + 2 * tf * (1 + (m1 + m2) ** 0.5)
            Fcr = 0.9 * kf * 210000 * tw ** 3 / hw
            lambdaF = (ly * tw * fy / Fcr) ** 0.5
        }
        var SchiF = 0.5 / lambdaF
        if (SchiF > 1) { SchiF = 1 }
        var Leff = SchiF * ly
        var Frd = fy * Leff * tw / 1.1
    }
    if (selectedlocation == "typeB") {
        var kf = 3.5
        var ly = ss + 2 * tf * (1 + (m1 + m2) ** 0.5)
        var Fcr = 0.9 * kf * 210000 * tw ** 3 / hw
        var lambdaF = (ly * tw * fy / Fcr) ** 0.5

        if (lambdaF > 0.5) {
            m2 = 0.02 * (hw / tf) ** 2
            ly = ss + 2 * tf * (1 + (m1 + m2) ** 0.5)
            Fcr = 0.9 * kf * 210000 * tw ** 3 / hw
            lambdaF = (ly * tw * fy / Fcr) ** 0.5
        }
        var SchiF = 0.5 / lambdaF
        if (SchiF > 1) { SchiF = 1 }
        var Leff = SchiF * ly
        var Frd = fy * Leff * tw / 1.1
    }
    if (selectedlocation == "typeC") {

        var c = parseFloat(document.getElementById("distanceu1n").value);
        var kf = 2 + 6 * ((ss + c) / hw)
        if (kf > 6) {
            kf = 6
        }
        var le = kf * 210000 * tw ** 2 / (2 * fy * hw)
        if (le > ss + c) { le = ss + c }
        var ly = le + tf * (m1 / m2 + (le / tf) ** 2 + m2) ** 0.5
        if (ly > le + tf * (m1 + m2) ** 0.5) {
            ly = le + tf * (m1 + m2) ** 0.5
        }
        var Fcr = 0.9 * kf * 210000 * tw ** 3 / hw
        var lambdaF = (ly * tw * fy / Fcr) ** 0.5

        if (lambdaF > 0.5) {

            m2 = 0.02 * (hw / tf) ** 2
            var ly = le + tf * (m1 / m2 + (le / tf) ** 2 + m2) ** 0.5
            if (ly > le + tf * (m1 + m2) ** 0.5) {
                ly = le + tf * (m1 + m2) ** 0.5
            }
            var lambdaF = (ly * tw * fy / Fcr) ** 0.5
        }
        var SchiF = 0.5 / lambdaF
        if (SchiF > 1) { SchiF = 1 }
        var Leff = SchiF * ly
        var Frd = fy * Leff * tw / 1.1
    }

    var eta = Fed * 1000 / Frd

    document.getElementById('m1Result').innerText = "m1 : " + m1.toFixed(2) + "mm"

    document.getElementById('m2Result').innerText = "m2 : " + m2.toFixed(2) + "mm"

    document.getElementById('kfResult').innerText = "kf : " + kf.toFixed(2) + "mm"

    document.getElementById('lyResult').innerText = "ly : " + ly.toFixed(2) + "mm"

    if (selectedlocation == "typeC") {
        document.getElementById('leResult').innerText = "le : " + le.toFixed(2) + "mm"
    }
    document.getElementById('FcrResult').innerText = "Fcr : " + (Fcr / 1000).toFixed(2) + "kN"

    document.getElementById('lambdaFResult').innerText = "lambdaF : " + lambdaF.toFixed(2)

    document.getElementById('SchiFResult').innerText = "SchiF : " + SchiF.toFixed(2)

    document.getElementById('LeffResult').innerText = "Leff : " + Leff.toFixed(2) + "mm"

    document.getElementById('FrdResult').innerText = "Frd : " + (Frd / 1000).toFixed(2) + "kN"

    document.getElementById('EtaResult').innerText = "eta : " + eta.toFixed(4)

    if (language_english == 1) {

        if (eta < 1) {
            document.getElementById('MessageResult').innerText = "No Ribs necessary"
        }

        if (eta > 1) {
            document.getElementById('MessageResult').innerText = "Ribs necessary"
        }
    }
    if (language_german == 1) {

        if (eta < 1) {
            document.getElementById('MessageResult').innerText = "keine Rippen notwendig"
        }

        if (eta > 1) {
            document.getElementById('MessageResult').innerText = "Rippen notwendig"
        }
    }
    if (language_spanish == 1) {

        if (eta < 1) {
            document.getElementById('MessageResult').innerText = "no costillas necesarias "
        }

        if (eta > 1) {
            document.getElementById('MessageResult').innerText = "costillas necesarias"
        }
    }
}