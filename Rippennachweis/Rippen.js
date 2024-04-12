function startCalc() {
    dataload()

    var LocationSelection = document.getElementById('LocationForce');
    var selectedlocation = LocationForce.options[LocationForce.selectedIndex].value;

    var ss = parseFloat(document.getElementById('distanceu1n').value);

    var Fed = parseFloat(document.getElementById('ValueVed').value);

    var hw = h - 2 * tf

    if (selectedlocation == "typeA") {

        var kf = 6
        var m1 = b / tw
        var m2 = 0.02 * (hw / tf) ** 2
        var ly = ss + 2 * tf * (1 + (m1 + m2) ** 0.5)

    }

    if (selectedlocation == "typeB") {

        var kf = 3.5



    }
    if (selectedlocation == "typeC") {

        var kf = 2 + 6 * ((ss + c) / hw)
        if (kf > 6) {
            kf = 6
        }




    }




}