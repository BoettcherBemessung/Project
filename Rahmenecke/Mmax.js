function Mmax() {
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

    var Vwprd = window.Vwprd
    var Fcwcrd = window.Fcwcrd
    var Fcfbrd = window.Fcfbrd
    var Ftwbrd = window.Ftwbrd

    var Ft1rdO = window.Ft1rdO
    var Ft2rdO = window.Ft2rdO
    var Ft3rdO = window.Ft3rdO
    var Ft1rdM = window.Ft1rdM
    var Ft2rdM = window.Ft2rdM
    var Ft3rdM = window.Ft3rdM
    var Ft1rdU = window.Ft1rdU
    var Ft2rdU = window.Ft2rdU
    var Ft3rdU = window.Ft3rdU

    var Ft1rdO_Column = window.Ft1rdO_Column
    var Ft2rdO_Column = window.Ft1rdO_Column
    var Ft3rdO_Column = window.Ft3rdO_Column

    var Ft1rdM_Column = window.Ft1rdM_Column
    var Ft2rdM_Column = window.Ft1rdM_Column
    var Ft3rdM_Column = window.Ft3rdM_Column

    var Ft1rdU_Column = window.Ft1rdU_Column
    var Ft2rdU_Column = window.Ft2rdU_Column
    var Ft3rdU_Column = window.Ft3rdU_Column

    if (selectedScrewRows == 2) {
        var FtO = Math.min(Ft1rdO, Ft2rdO, Ft3rdO, Ft1rdO_Column, Ft2rdO_Column, Ft3rdO_Column, FtwcrdO, Ftwbrd);
        var FtU = Math.min(Ft1rdU, Ft2rdU, Ft3rdU, Ft1rdU_Column, Ft2rdU_Column, Ft3rdU_Column, FtwcrdU, Ftwbrd);

        var Fglobal = Math.min(Vwprd, Fcwcrd, Fcfbrd)
        var sumFtrd = FtO + FtU

    }

    if (selectedScrewRows == 3) {
        var FtO = Math.min(Ft1rdO, Ft2rdO, Ft3rdO, Ft1rdO_Column, Ft2rdO_Column, Ft3rdO_Column, FtwcrdO, Ftwbrd);
        var FtM = Math.min(Ft1rdM, Ft2rdM, Ft3rdM, Ft1rdM_Column, Ft2rdM_Column, Ft3rdM_Column, FtwcrdM, Ftwbrd);
        var FtU = Math.min(Ft1rdU, Ft2rdU, Ft3rdU, Ft1rdU_Column, Ft2rdU_Column, Ft3rdU_Column, FtwcrdU, Ftwbrd);

        var Fglobal = Math.min(Vwprd, Fcwcrd, Fcfbrd)
        var sumFtrd = FtO + FtM + FtU

    }



}