function ShowCalculationIy() {
    var Iy = window.Iy;
    var tw = window.tw;
    var b = window.b;
    var tf = window.tf;
    var r = window.r;
    var h = window.h;
    alert("Iy = 1/12 *tw*(h-2*tf)^3 + 2 * 1/12*b*tf^3 + 4*(7,545/1000)*r^4 + 2*b*tf*(0,5*h-0,5*tf)^2 + 4*0,2146*r^2 * (0,5*h-tf-0,2234*r)^2= 1/12*" + tw + "*(" + h + "-2*" + tf + ")^3+2*1/12 * " + b + "*" + tf + "^3 + (7,545/1000)*" + r + "^4 +2*" + tf + "*" + b + "*(0.5*" + h + "-0,5*" + tf + ")^2 + 4*0,2146*" + r + "^2 *(0,5*" + h + "-" + tf + "-0,2234*" + r + ")^2");
}

function leffcpOCalculation() {
    var selectedScrewRows = document.getElementById("ScrewRows").value
    console.log("anzahlSchraubenreihen=" + selectedScrewRows)
    if (selectedScrewRows == 3) {
        var selectedScrewRows = window.selectedScrewRows;
        var mh = window.mh;
        var mvO = window.mvO;
        var mvM = window.mvM;
        var mvU = window.mvU;
        var w = window.w;
        var e = window.e;
        var leffcpO = window.leffcpO
        console.log(mvO)
        console.log(w)
        console.log(e)
        alert("leffcp= min( 2*pi*mx ; pi*mx + w ; pi*mx + 2*e)= min(2*pi*" + mvO.toFixed(2) + "; pi*" + mvO.toFixed(2) + "+" + w + "; pi*" + mvO.toFixed(2) + "+2*" + e);
    }
    if (selectedScrewRows == 2) {
        var selectedScrewRows = window.selectedScrewRows;
        var mh = window.mh;
        var mvO = window.mvO;
        var mvM = window.mvM;
        var mvU = window.mvU;
        var alphaO = window.alphaO;
        var w = window.w
        var e = window.e
        var leffcpO = window.leffcpO
        alert("leffcp=  2*pi*m = 2*pi*" + mh.toFixed(2) + "=" + leffcpO.toFixed(2));
    }
}

function leffncOnew() {
    var selectedScrewRows = document.getElementById("ScrewRows").value
    console.log("anzahlSchraubenreihen=" + selectedScrewRows)
    if (selectedScrewRows == 2) {
        var ex = window.ex;
        var alphaO = window.alphaO;
        var mvO = window.mvO;

        alert("leffnc= alpha*m =" + alphaO.toFixed(2) + "*" + mvO.toFixed(2))
    }
    if (selectedScrewRows == 3) {
        var mx = window.mx;
        var ex = window.ex;
        var emaßgebend = window.e;
        var bsp = window.bsp;
        var mvO = window.mvO;
        console.log(emaßgebend)
        alert("leffnc = min(4*mx+ 1,25*ex ; e+2*mx+0,625*ex ; 0,5*bsp ; 0,5*w+2*mx+0,625*ex = min (4* " + mvO.toFixed(2) + "+1,25 * " + ex + "; " + emaßgebend + "+2*" + mvO.toFixed(2) + "+0,625*" + ex.toFixed(2) + "; 0,5*" + bsp + " ; 0,5*" + w + "+ 2*" + mvO.toFixed(2) + "+0,625*" + ex.toFixed(2))
    }

}

function MplrdO1() {
    var leffcpo = window.leffcpO
    var leffnco = window.leffncO
    var leff1O = Math.min(leffcpo, leffnco)

    alert("Mpl1rd=0,25*leff*tf^2 *fy/1,0= 0,25*" + leff1O.toFixed(2) + "*" + tf + "^2 *" + fy + "/1,0")
}

function MplrdO2() {
    var leffncO = window.leffncO
    alert("Mpl2rd=0,25*leff*tf^2 *fy/1,0= 0,25*" + leffncO.toFixed(2) + "*" + tf + "^2 *" + fy + "/1,0")
}

function Ft1rdOshowResult() {
    var ew = window.ew
    var nO = window.nO
    var mh = window.mh
    var Ft1rdO = window.Ft1rdO
    var Mpl1rdO = window.Mpl1rdO
    console.log(nO)
    alert("Ft1rd= (8*n-2*ew)*Mpl1rd/(2*m*n-ew*(m+n)) = (8*" + nO + "-2*" + ew + ")*" + Mpl1rdO + "/(2*" + mh.toFixed(2)
        " + *" + nO + "-" + ew + "*(" + mh.toFixed(2) + "+" + nO + "))=" + Ft1rdO.tofFixed(2))

}

function Ft2rdOshowcalculationMethod() {
    var ew = window.ew;
    var nO = window.nO;
    var mvO = window.mvO;
    var Mpl2rdO = window.Mpl2rdO;
    var Ft3rdO = window.Ft3rdO;
    var mh = window.mh
    var Ft2rdO = window.Ft2rdO
    console.log(nO)
    alert("Ft2rdO= (2*Mpl2rd+n*Ft3rd)/(m+n) = (2*" + Mpl2rdO.toFixed(2) + "+" + nO + "*" + Ft3rdO.toFixed(2) + ")/(" + mh.toFixed(2) + "+" + nO + ") =" + Ft2rdO.toFixed(2))
}

function Ft3rdOshowCalculationMethod() {
    var As = window.As
    var fub = window.fub
    var Ft3rdO = window.Ft3rdO
    alert("2*As*0,9*fub/1,25 = 2*" + As.toFixed(2) + "*0,9*" + fub + "/1,25= " + Ft3rdO.toFixed(2))
}


///////////=========================================From here the detailled ouput for calculation methods of the lower Screwrow===================

function leffcpMCalculation() {
    var mh = window.mh;
    var mvM = window.mvM;
    var w = window.w
    var e = window.e
    var leffcpO = window.leffcpO
    alert("leffcp=  2*pi*m = 2*pi*" + mh.toFixed(2) + "=" + leffcpO.toFixed(2));
}

function leffncMCalculation() {
    var alphaM = window.alphaM;
    var mh = window.mh
    var leffncM = window.leffncM
    alert("leffnc= alpha*m =" + alphaM.toFixed(2) + "*" + mh.toFixed(2) + "=" + leffncM.toFixed(2))
}

function MplrdM1() {
    var leffcpM = window.leffcpM
    var leffncM = window.leffncM
    var Mpl1rdM = window.Mpl1rdM
    var leff1M = Math.min(leffcpM, leffncM)
    alert("Mpl1rd=0,25*leff*tf^2 *fy/1,0= 0,25*" + leff1M.toFixed(2) + "*" + tf + "^2 *" + fy + "/1,0 = " + Mpl1rdM.toFixed(2))
}

function MplrdM2() {
    var leffncM = window.leffncM
    alert("Mpl2rd=0,25*leff*tf^2 *fy/1,0= 0,25*" + leffncM.toFixed(2) + "*" + tf + "^2 *" + fy + "/1,0")
}

function Ft1rdMShowResult() {
    var ew = window.ew
    var nRest = window.nRest
    var mh = window.mh
    var Mpl1rdM = window.Mpl1rdM
    alert("(8*n-2*ew)*Mpl1rd/(2*m*n-ew*(m+n)) = (8*" + nRest + "-2*" + ew + ")*" + Mpl1rdM.toFixed(2) + "/(2*" + mh.toFixed(2) + "*" + nRest + "-" + ew + "*(" + mh.toFixed(2) + "+" + nRest + "))")
}

function Ft2rdMShowResult() {
    var ew = window.ew;
    var nRest = window.nRest;
    var mvM = window.mvM;
    var Mpl2rdM = window.Mpl2rdM;
    var Ft2rdM = window.Ft2rdM;
    var mh = window.mh
    var Ft3rdM = window.Ft3rdM
    console.log(nRest)
    alert("Ft2rd= (2*Mpl2rd+n*Ft3rd)/(m+n) = (2*" + Mpl2rdM.toFixed(2) + "+" + nRest + "*" + Ft3rdM.toFixed(2) + ")/(" + mh.toFixed(2) + "+" + nRest + ") =" + Ft2rdO.toFixed(2))

}

function Ft3rdMshowCalculationMethod() {
    var As = window.As
    var fub = window.fub
    alert("2*As*0,9*fub/1,25 = 2*" + As.toFixed(2) + "*0,9*" + fub + "/1,25")
}

///////////=========================================From here the detailled output for calculation methods of the lower Screwrow

function leffcpUCalculation() {
    var mh = window.mh;
    var mvU = window.mvU;
    var w = window.w
    var e = window.e
    var leffcpU = window.leffcpU
    alert("leffcp=  2*pi*m = 2*pi*" + mh.toFixed(2) + "=" + leffcpU.toFixed(2));
}

function leffncUCalculation() {
    var alphaU = window.alphaU;
    var mh = window.mh
    alert("leffnc= alpha*m =" + alphaU.toFixed(2) + "*" + mh.toFixed(2))
}

function MplrdU1() {
    var leffcpM = window.leffcpM
    var leffncM = window.leffncM
    var leff1M = Math.min(leffcpM, leffncM)
    alert("Mpl1rd=0,25*leff*tf^2 *fy/1,0= 0,25*" + leff1M.toFixed(2) + "*" + tf + "^2 *" + fy + "/1,0")
}

function MplrdU2() {
    var leffncM = window.leffncM
    alert("Mpl2rd=0,25*leff*tf^2 *fy/1,0= 0,25*" + leffncM.toFixed(2) + "*" + tf + "^2 *" + fy + "/1,0")
}

function Ft1rdUShowResult() {
    var ew = window.ew
    var nRest = window.nRest
    var mh = window.mh
    var Mpl1rdU = window.Mpl1rdU
    alert("(8*n-2*ew)*Mpl1rd/(2*m*n-ew*(m+n)) = (8*" + nRest + "-2*" + ew + ")*" + Mpl1rdU.toFixed(2) + "/(2*" + mh.toFixed(2) + "*" + nRest + "-" + ew + "*(" + mh.toFixed(2) + "+" + nRest + "))")
}

function Ft2rdUShowResult() {
    var ew = window.ew;
    var nRest = window.nRest;
    var mvU = window.mvU;
    var Mpl2rdU = window.Mpl2rdU;
    var Ft2rdU = window.Ft2rdU;
    var mh = window.mh
    var Ft3rdU = window.Ft3rdU
    console.log(nRest)
    alert("Ft2rd= (2*Mpl2rd+n*Ft3rd)/(m+n) = (2*" + Mpl2rdU.toFixed(2) + "+" + nRest + "*" + Ft3rdU.toFixed(2) + ")/(" + mh.toFixed(2) + "+" + nRest + ") =" + Ft2rdU.toFixed(2))
}

function Ft3rdUshowCalculationMethod() {
    var As = window.As
    var fub = window.fub
    var Ft3rdU = window.Ft3rdU

    alert("Ft3rd=2*As*0,9*fub/1,25 = 2*" + As.toFixed(2) + "*0,9*" + fub + "/1,25= " + Ft3rdU.toFixed(2))
}