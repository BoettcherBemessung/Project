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

    var Med = parseFloat(document.getElementById('ValueMed').value);
    var Ned = parseFloat(document.getElementById('ValueNed').value);


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
    var d_length = h - d1;
    var z_length = 0.5 * h - d1;

    var Meds = Med - Ned * z_length / 1000

    var mueh_exact = (Meds / 1000) / ((b / 100) * (d_length / 100) ** 2 * fcd);

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

    console.log("fcd ist:" + fcd)
    console.log("mueh interpoliertist:" + mueh_exact)
    console.log("mueh oberer Wert interpolation ist:" + muehds_higher_interpolation)
    console.log("mueh unterer Wert interpolation ist:" + muehds_lower_interpolation)

    console.log("omega unterer WErt ist:" + omega_low)
    console.log("omega utnerer Wert ist:" + omega_high)
    console.log("oega interpoliert ist:" + omega_exact)
    console.log("As2 ist" + As1)
}