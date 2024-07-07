function Biegung() {
    loadCement()

    var fck = window.fck
    var fckCube = window.fckCube
    var fcm = window.fcm
    var fcd = window.fcd
    var fctm = window.fctm
    var fctk_zeroOfive = window.fctk_zeroOfive
    var fctk_zero9five = window.fctk_zero9five
    var Ecm = window.Ecm
    var ec2 = window.ec2
    var ecu2 = window.ecu2
    var Xc_class = document.getElementById('XCType').value;
    var Xd_class = document.getElementById('XDType').value;
    var Xs_class = document.getElementById('XSType').value;
    var Xf_class = document.getElementById('XFType').value;
    var Xa_class = document.getElementById('XAType').value;
    var Xm_class = document.getElementById('XAType').value;
    var Xw_class = document.getElementById('XAType').value;

    var h = parseFloat(document.getElementById('h_concrete').value);
    if (isNaN(h)) {
        h = 80
    }
    var b = parseFloat(document.getElementById('b_concrete').value);
    if (isNaN(b)) {
        b = 40
    }

    var tw = parseFloat(document.getElementById('Stegdicke').value);
    if (isNaN(tw)) {
        tw = 20
    }

    var tf = parseFloat(document.getElementById('t_Platte').value);
    if (isNaN(tf)) {
        tf = 10
    }

    var b_doubleslab_top = (document.getElementById('t_Platte').value);
    if (isNaN(b_doubleslab_top)) {
        b_doubleslab_top = 100
    }
    var b_doubleslab_bottom = (document.getElementById('b_down').value);
    if (isNaN(b_doubleslab_bottom)) {
        b_doubleslab_bottom = 80
    }

    var t_li = parseFloat(document.getElementById('Plat_Li').value);
    if (isNaN(t_li)) {
        t_li = 20
    }

    var t_re = parseFloat(document.getElementById('Plat_Re').value);
    if (isNaN(t_re)) {
        t_re = 20
    }

    var Med = parseFloat(document.getElementById('ValueMed').value);
    var Ned = parseFloat(document.getElementById('ValueNed').value);

    //Ermittlung Druckzonenbreite
    var selectedQuerschnitt = document.getElementById("Querschnitt").value;

    if (selectedQuerschnitt == "slabbottom") {

        var A = tw * (h - tf) + tf * b
        var z_middle = (tw * (h - tf) ** 2 * 0.5 + tf * b * (h - 0.5 * tf)) / (tw * (h - tf) + tf * b)
        var Iy = (1 / 12) * (tw * (h - tf) ** 3 + b * tf ** 3) + tw * (h - tf) * (z_middle - (h - tf) / 2) ** 2 + tf * b * (z_middle - (h - 0.5 * tf)) ** 2
        var b_compression = 1
            //Spannungsnulllinie als Abstand zur Oberkante des Querschnitt

        var stress_zero_line = Ned / (A * Med) * Iy + z_middle
        if (stress_zero_line <= (h - tf)) {
            b_compression = tw
        }

        if (stress_zero_line >= (h - tf)) {
            b_compression = b
        }
    }
    if (selectedQuerschnitt == "slabtop") {

        var A = tw * (h - tf) + tf * b
        var z_middle = (tw * (h - tf) * (tf + 0.5 * (h - tf)) + tf * b * 0.5 * tf) / (tw * (h - tf) + tf * b)
        var Iy = (1 / 12) * (tw * (h - tf) ** 3 + b * tf ** 3) + tw * (h - tf) * (z_middle - (tf + 0.5 * (h - tf))) ** 2 + tf * b * (z_middle - (0.5 * tf)) ** 2
        var b_compression = 1
            //Spannungsnulllinie als Abstand zur Oberkante des Querschnitt
        var stress_zero_line = Ned / (A * Med) * Iy + z_middle
        if (stress_zero_line <= (tf)) {
            b_compression = b
        }
        if (stress_zero_line >= (tf)) {
            b_compression = tw
        }
    }

    if (selectedQuerschnitt == "rectangle") {
        b_compression = b
    }

    if (selectedQuerschnitt == "slabdouble") {
        if (Med >= 0) {
            b_compression = b_doubleslab_top
        }
        if (Med <= 0) {
            b_compression = b_doubleslab_bottom
        }
    }

    if (selectedQuerschnitt == "slabhorizontal") {

        b_compression = t_li + t_re

    }

    //erste Annahme Stabstahl von 20mm und Querbewehrung von 10 mm;

    var c_minb = 20
    var delta_c = 10

    var c_min_dur = 10;
    var delta_c_dev = 0
    if (Xc_class == "XC1") {
        c_mind_dur = 10
        delta_c_dev = 10
    }
    if (Xc_class == "XC2") {
        c_min_dur = 20
        delta_c_dev = 15
    }
    if (Xc_class == "XC3") {
        c_min_dur = 20
        delta_c_dev = 15
    }
    if (Xc_class == "XC4") {
        c_min_dur = 25
        delta_c_dev = 15
    }
    if (Xd_class != "XD0") {
        c_min_dur = 40
    }
    if (Xs_class != "XSO") {
        c_min_dur = 40
    }
    if (Xm_class == "XM1") {
        c_min_dur = c_min_dur + 5
    }
    if (Xm_class == "XM2") {
        c_min_dur = c_min_dur + 10
    }
    if (Xm_class == "XM3") {
        c_min_dur = c_min_dur + 15
    }
    var c_min = Math.min(c_minb, c_min_dur, 10);

    var cnom = c_min + delta_c_dev;
    cnom = Math.ceil(cnom * 2) / 2;

    var d1 = (cnom + 10 + 10) / 10;
    var d_length = h * 10 - d1;
    var z_length = 0.5 * h * 10 - d1;

    var Meds = (Med - Ned * z_length / 1000) / 1000

    var mueh_exact = (Meds) / ((b_compression / 100) * (d_length / 1000) ** 2 * fcd);

    var muehds_higher_interpolation = Math.ceil(mueh_exact * 100) / 100;
    window.muehds_higher_interpolation = muehds_higher_interpolation
    loadOmega_high()

    var muehds_lower_interpolation = muehds_higher_interpolation - 0.01;
    window.muehds_lower_interpolation = muehds_lower_interpolation
    loadOmega_low()

    omega_high = window.omega_high;
    omega_low = window.omega_low;

    omega_exact = omega_low + ((omega_high - omega_low) / (muehds_higher_interpolation - muehds_lower_interpolation)) * (mueh_exact - muehds_lower_interpolation);

    As1 = (10 ** 4 / 435) * (omega_exact * b * d_length * fcd + Ned / 1000);

    console.log("welcher Querschnitt wurde gewählt" + selectedQuerschnitt)
    console.log("fcd ist:" + fcd)
    console.log("Meds ist " + Meds)
    console.log("druckzonenbreite ist " + b_compression)
    console.log("statische Nutzhöhe ist " + d_length)
    console.log("b ist " + b)
    console.log("d ist " + d_length)

    console.log("mueh genau ist" + mueh_exact)
    console.log("mueh oberer Wert interpolation ist:" + muehds_higher_interpolation)
    console.log("mueh unterer Wert interpolation ist:" + muehds_lower_interpolation)

    console.log("omega unterer WErt ist:" + omega_low)
    console.log("omega utnerer Wert ist:" + omega_high)
    console.log("oega interpoliert ist:" + omega_exact)
    console.log("As2 ist" + As1)
}