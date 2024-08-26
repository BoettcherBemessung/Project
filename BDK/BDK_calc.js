function BDK() {
    var profileselection = document.getElementById("BeamSelection");
    var selectedProfile = BeamSelection.options[BeamSelection.selectedIndex].value;

    var steelselection = document.getElementById("YieldStrength");
    var selectedSteel = YieldStrength.options[YieldStrength.selectedIndex].value;

    var chosenL = document.getElementById("length");
    var L = length.options[length.selectedIndex].value;

    var chosenzg = document.getElementById("zg");
    var zg = zg.options[zg.selectedIndex].value;


    Beamdata()

    var Iz = window.Iz
    var Iy = window.Iy
    var Wely = window.Wely
    var Wply = window.Wply
    var IW_b = window.IW_b
    var It = window.It
    var h = window.h


    if (zg = "topz") {
        var zg_number = -0.5 * h
    }
    if (zg = "middlez") {
        var zg_number = 0
    }
    if (zg = "bottomz") {
        var zg_number = 0.5 * h
    }

    var Mcr = 1.12 * (Math.Pi) ** 2 * 210000 ** Iz * ((((IW_b + 0.039 * L ** 2 * It) / Iz) + (0.5 * zg_number) ** 2) ** 0.5 + 0.5 * zg_number)

    console.log(Mcr)
}