function QSK() {
    // === 0.1 registration of selected profils, steels...===
    var profileselection = document.getElementById("BeamSelection");
    var selectedProfile = BeamSelection.options[BeamSelection.selectedIndex].value;

    var steelselection = document.getElementById("YieldStrength");
    var selectedSteel = YieldStrength.options[YieldStrength.selectedIndex].value;

    var Screwshapeselection = document.getElementById("ScrewShape");
    var selectedScrewshape = ScrewShape.options[ScrewShape.selectedIndex].value;

    var Screwstrengthselection = document.getElementById("StrengthClass");
    var selectedScrewstrength = StrengthClass.options[StrengthClass.selectedIndex].value;

    var language_english = window.language_english
    var language_spanish = window.language_spanish

    // === 0.2 Declaration profiledependent variables===
    var h = 0;
    var b = 0;
    var tw = 0;
    var tf = 0;
    var r = 0;
    var fy = 0;
    var fu = 0;
    var CwTwQSK1 = 0;
    var CwTwQSK2 = 0;
    var CwTwQSK3 = 0;
    var CfTfQSK1 = 0;
    var CfTfQSK2 = 0;
    var CfTfQSK3 = 0;

    var d = 0;
    var dw = 0;
    var ew = 0;
    var As = 0;
    var dzero = 0;
    var fub = 0;
    var kScrew = 0;
    var mmaxScrew = 0;
    var tscrew = 0;

    // === 1.1 Data of Screws and obtaining of fitting values of variables===
    if (selectedScrewshape == "M12") {
        d = 12;
        dw = 24;
        ew = 6;
        As = 84.3;
        dzero = 13;
        kScrew = 8;
        mmaxScrew = 10;
        tscrew = 3;
    }
    if (selectedScrewshape == "M16") {
        d = 16;
        dw = 30;
        ew = 7.5;
        As = 157;
        dzero = 18;
        kScrew = 10;
        mmaxScrew = 13;
        tscrew = 4;
    }
    if (selectedScrewshape == "M20") {
        d = 20;
        dw = 37;
        ew = 9.25;
        As = 245;
        dzero = 22;
        kScrew = 13;
        mmaxScrew = 16;
        tscrew = 4;
    }
    if (selectedScrewshape == "M22") {
        d = 22;
        dw = 39;
        ew = 9.75;
        As = 303;
        dzero = 24;
        kScrew = 14;
        mmaxScrew = 18;
        tscrew = 4;
    }
    if (selectedScrewshape == "M24") {
        d = 24;
        dw = 44;
        ew = 11;
        As = 353;
        dzero = 26;
        kScrew = 15;
        mmaxScrew = 19;
        tscrew = 4;
    }
    if (selectedScrewshape == "M27") {
        d = 27;
        dw = 50;
        ew = 12.5;
        As = 459;
        dzero = 30;
        kScrew = 17;
        mmaxScrew = 22;
        tscrew = 5;

    }
    if (selectedScrewshape == "M30") {
        d = 30;
        dw = 56;
        ew = 14;
        As = 561;
        dzero = 33;
        kScrew = 19;
        mmaxScrew = 24;
        tscrew = 5;
    }
    if (selectedScrewshape == "M36") {
        d = 36;
        dw = 66;
        ew = 16.5;
        As = 817;
        dzero = 39;
        kScrew = 23;
        mmaxScrew = 29;
        tscrew = 6;
    }

    if (selectedScrewstrength == "4.6") { fub = 400; }
    if (selectedScrewstrength == "5.6") { fub = 500; }
    if (selectedScrewstrength == "8.8") { fub = 800; }
    if (selectedScrewstrength == "10.9") { fub = 1000; }

    // === 1.2 Data of Profiles and obtaining of fitting values of variables===

    if (selectedProfile == "IPEa120") {
        h = 117.6;
        b = 64;
        tw = 3.8;
        tf = 5.1;
        r = 7;
    }
    if (selectedProfile == "IPEa140") {
        h = 137.4;
        b = 73;
        tw = 3.8;
        tf = 5.6;
        r = 7;
    }
    if (selectedProfile == "IPEa160") {
        h = 157;
        b = 82;
        tw = 4;
        tf = 5.9;
        r = 9;
    }
    if (selectedProfile == "IPEa180") {
        h = 177;
        b = 91;
        tw = 4.3;
        tf = 6.5;
        r = 9;
    }
    if (selectedProfile == "IPEa200") {
        h = 197;
        b = 100;
        tw = 4.5;
        tf = 7;
        r = 12;
    }
    if (selectedProfile == "IPEa220") {
        h = 217;
        b = 110;
        tw = 5;
        tf = 7.7;
        r = 12;
    }
    if (selectedProfile == "IPEa240") {
        h = 237;
        b = 120;
        tw = 5.2;
        tf = 8.3;
        r = 15;
    }
    if (selectedProfile == "IPEa270") {
        h = 267;
        b = 135;
        tw = 5.5;
        tf = 8.7;
        r = 15;
    }
    if (selectedProfile == "IPEa300") {
        h = 297;
        b = 150;
        tw = 6.1;
        tf = 9.2;
        r = 15;
    }
    if (selectedProfile == "IPEa330") {
        h = 327;
        b = 160;
        tw = 6.5;
        tf = 10;
        r = 15;
    }
    if (selectedProfile == "IPEa360") {
        h = 357.6;
        b = 170;
        tw = 6.6;
        tf = 11.5;
        r = 18;
    }
    if (selectedProfile == "IPEa400") {
        h = 397;
        b = 180;
        tw = 7;
        tf = 12;
        r = 21;
    }
    if (selectedProfile == "IPEa450") {
        h = 447;
        b = 190;
        tw = 7.6;
        tf = 13.1;
        r = 21;
    }
    if (selectedProfile == "IPEa500") {
        h = 497;
        b = 190;
        tw = 7.6;
        tf = 13.1;
        r = 21;
    }
    if (selectedProfile == "IPEa550") {
        h = 547;
        b = 210;
        tw = 9;
        tf = 15.7;
        r = 24;
    }
    if (selectedProfile == "IPEa600") {
        h = 597;
        b = 220;
        tw = 9.8;
        tf = 17.5;
        r = 24;
    }
    if (selectedProfile == "IPE100") {
        h = 100;
        b = 55;
        tw = 4.1;
        tf = 5.7;
        r = 7;
    }
    if (selectedProfile == "IPE120") {
        h = 120;
        b = 64;
        tw = 4.4;
        tf = 6.3;
        r = 7;
    }
    if (selectedProfile == "IPE140") {
        h = 140;
        b = 73;
        tw = 4.7;
        tf = 6.9;
        r = 7;
    }
    if (selectedProfile == "IPE160") {
        h = 160;
        b = 82;
        tw = 5;
        tf = 7.4;
        r = 9;
    }
    if (selectedProfile == "IPE180") {
        h = 180;
        b = 91;
        tw = 5.3;
        tf = 8;
        r = 9;
    }
    if (selectedProfile == "IPE200") {
        h = 200;
        b = 100;
        tw = 5.6;
        tf = 8.5;
        r = 12;
    }
    if (selectedProfile == "IPE220") {
        h = 220;
        b = 110;
        tw = 5.9;
        tf = 9.2;
        r = 12;
    }
    if (selectedProfile == "IPE240") {
        h = 240;
        b = 120;
        tw = 6.2;
        tf = 9.8;
        r = 15;
    }
    if (selectedProfile == "IPE270") {
        h = 270;
        b = 135;
        tw = 6.6;
        tf = 10.2;
        r = 15;
    }
    if (selectedProfile == "IPE300") {
        h = 300;
        b = 150;
        tw = 7.1;
        tf = 10.7;
        r = 15;
    }
    if (selectedProfile == "IPE330") {
        h = 330;
        b = 160;
        tw = 7.5;
        tf = 11.5;
        r = 18;
    }
    if (selectedProfile == "IPE360") {
        h = 360;
        b = 170;
        tw = 8;
        tf = 12.7;
        r = 18;
    }
    if (selectedProfile == "IPE400") {
        h = 400;
        b = 180;
        tw = 8.6;
        tf = 13.5;
        r = 21;
    }
    if (selectedProfile == "IPE450") {
        h = 450;
        b = 190;
        tw = 9.4;
        tf = 14.6;
        r = 21;
    }
    if (selectedProfile == "IPE500") {
        h = 500;
        b = 200;
        tw = 10.2;
        tf = 16;
        r = 21;
    }
    if (selectedProfile == "IPE550") {
        h = 550;
        b = 210;
        tw = 11.1;
        tf = 17.2;
        r = 24;
    }
    if (selectedProfile == "IPE600") {
        h = 600;
        b = 220;
        tw = 12;
        tf = 19;
        r = 24;
    }

    if (selectedProfile == "IPEo180") {
        h = 182;
        b = 92;
        tw = 6;
        tf = 9;
        r = 9;
    }
    if (selectedProfile == "IPEo200") {
        h = 202;
        b = 102;
        tw = 6.2;
        tf = 9.5;
        r = 12;
    }
    if (selectedProfile == "IPEo220") {
        h = 222;
        b = 112;
        tw = 6.6;
        tf = 10.2;
        r = 12;
    }
    if (selectedProfile == "IPEo240") {
        h = 242;
        b = 122;
        tw = 7;
        tf = 10.8;
        r = 15;
    }
    if (selectedProfile == "IPEo270") {
        h = 274;
        b = 136;
        tw = 7.5;
        tf = 12.2;
        r = 15;
    }
    if (selectedProfile == "IPEo300") {
        h = 304;
        b = 152;
        tw = 8;
        tf = 12.7;
        r = 15;
    }
    if (selectedProfile == "IPEo330") {
        h = 334;
        b = 162;
        tw = 8.5;
        tf = 13.5;
        r = 18;
    }
    if (selectedProfile == "IPEo360") {
        h = 364;
        b = 172;
        tw = 9.2;
        tf = 14.7;
        r = 18;
    }
    if (selectedProfile == "IPEo400") {
        h = 404;
        b = 182;
        tw = 9.7;
        tf = 15.5;
        r = 21;
    }
    if (selectedProfile == "IPEo450") {
        h = 456;
        b = 192;
        tw = 11;
        tf = 17.6;
        r = 21;
    }
    if (selectedProfile == "IPEo500") {
        h = 506;
        b = 202;
        tw = 12;
        tf = 19;
        r = 21;
    }
    if (selectedProfile == "IPEo550") {
        h = 556;
        b = 212;
        tw = 12.7;
        tf = 20.2;
        r = 24;
    }
    if (selectedProfile == "IPEo600") {
        h = 610;
        b = 224;
        tw = 15;
        tf = 24;
        r = 24;
    }

    if (selectedProfile == "IPEv400") {
        h = 408;
        b = 182;
        tw = 10.6;
        tf = 17.5;
        r = 21;
    }
    if (selectedProfile == "IPEv450") {
        h = 460;
        b = 194;
        tw = 12.4;
        tf = 19.6;
        r = 21;
    }
    if (selectedProfile == "IPEv500") {
        h = 514;
        b = 204;
        tw = 14.2;
        tf = 23;
        r = 21;
    }
    if (selectedProfile == "IPEv550") {
        h = 566;
        b = 216;
        tw = 17.1;
        tf = 25.2;
        r = 24;
    }
    if (selectedProfile == "IPEv600") {
        h = 618;
        b = 228;
        tw = 18;
        tf = 28;
        r = 24;
    }

    if (selectedProfile == "HEAA100") {
        h = 91;
        b = 100;
        tw = 4.2;
        tf = 5.5;
        r = 12;
    }
    if (selectedProfile == "HEAA120") {
        h = 109;
        b = 120;
        tw = 4.2;
        tf = 5.5;
        r = 12;
    }
    if (selectedProfile == "HEAA140") {
        h = 128;
        b = 140;
        tw = 4.3;
        tf = 6;
        r = 12;
    }
    if (selectedProfile == "HEAA160") {
        h = 148;
        b = 160;
        tw = 4.5;
        tf = 7;
        r = 15;
    }
    if (selectedProfile == "HEAA180") {
        h = 167;
        b = 180;
        tw = 5;
        tf = 7.5;
        r = 15;
    }
    if (selectedProfile == "HEAA200") {
        h = 186;
        b = 200;
        tw = 5.5;
        tf = 8;
        r = 18;
    }
    if (selectedProfile == "HEAA220") {
        h = 205;
        b = 220;
        tw = 6;
        tf = 8.5;
        r = 18;
    }
    if (selectedProfile == "HEAA240") {
        h = 224;
        b = 240;
        tw = 6.5;
        tf = 9;
        r = 21;
    }
    if (selectedProfile == "HEAA260") {
        h = 244;
        b = 260;
        tw = 6.5;
        tf = 9.5;
        r = 24;
    }
    if (selectedProfile == "HEAA280") {
        h = 264;
        b = 280;
        tw = 7;
        tf = 10;
        r = 24;
    }
    if (selectedProfile == "HEAA300") {
        h = 283;
        b = 300;
        tw = 7.5;
        tf = 10.5;
        r = 27;
    }
    if (selectedProfile == "HEAA320") {
        h = 301;
        b = 300;
        tw = 8;
        tf = 11;
        r = 27;
    }
    if (selectedProfile == "HEAA340") {
        h = 320;
        b = 300;
        tw = 8.5;
        tf = 11.5;
        r = 27;
    }
    if (selectedProfile == "HEAA360") {
        h = 339;
        b = 300;
        tw = 9;
        tf = 12;
        r = 27;
    }
    if (selectedProfile == "HEAA400") {
        h = 378;
        b = 300;
        tw = 9.5;
        tf = 13;
        r = 27;
    }
    if (selectedProfile == "HEAA450") {
        h = 425;
        b = 300;
        tw = 10;
        tf = 13.5;
        r = 27;
    }
    if (selectedProfile == "HEAA500") {
        h = 472;
        b = 300;
        tw = 10.5;
        tf = 14;
        r = 27;
    }
    if (selectedProfile == "HEAA550") {
        h = 522;
        b = 300;
        tw = 11.5;
        tf = 15;
        r = 27;
    }
    if (selectedProfile == "HEAA600") {
        h = 571;
        b = 300;
        tw = 12.5;
        tf = 15.5;
        r = 24;
    }
    if (selectedProfile == "HEAA650") {
        h = 620;
        b = 300;
        tw = 13;
        tf = 16;
        r = 27;
    }
    if (selectedProfile == "HEAA700") {
        h = 670;
        b = 300;
        tw = 14;
        tf = 17;
        r = 27;
    }
    if (selectedProfile == "HEAA800") {
        h = 770;
        b = 300;
        tw = 14;
        tf = 18;
        r = 30;
    }
    if (selectedProfile == "HEAA900") {
        h = 870;
        b = 300;
        tw = 15;
        tf = 20;
        r = 30;
    }
    if (selectedProfile == "HEAA1000") {
        h = 970;
        b = 300;
        tw = 16;
        tf = 21;
        r = 30;
    }


    if (selectedProfile == "HEA100") {
        h = 96;
        b = 100;
        tw = 5;
        tf = 8;
        r = 12;
    }
    if (selectedProfile == "HEA120") {
        h = 114;
        b = 120;
        tw = 5;
        tf = 8;
        r = 12;
    }
    if (selectedProfile == "HEA140") {
        h = 133;
        b = 140;
        tw = 5.5;
        tf = 8.5;
        r = 12;
    }
    if (selectedProfile == "HEA160") {
        h = 152;
        b = 160;
        tw = 6;
        tf = 9;
        r = 15;
    }
    if (selectedProfile == "HEA180") {
        h = 171;
        b = 180;
        tw = 6;
        tf = 9.5;
        r = 15;
    }
    if (selectedProfile == "HEA200") {
        h = 190;
        b = 200;
        tw = 6.5;
        tf = 10;
        r = 18;
    }
    if (selectedProfile == "HEA220") {
        h = 210;
        b = 220;
        tw = 7;
        tf = 11;
        r = 18;
    }
    if (selectedProfile == "HEA240") {
        h = 230;
        b = 240;
        tw = 7.5;
        tf = 12;
        r = 21;
    }
    if (selectedProfile == "HEA260") {
        h = 250;
        b = 260;
        tw = 7.5;
        tf = 12.5;
        r = 24;
    }
    if (selectedProfile == "HEA280") {
        h = 270;
        b = 280;
        tw = 8;
        tf = 13;
        r = 24;
    }
    if (selectedProfile == "HEA300") {
        h = 290;
        b = 300;
        tw = 8.5;
        tf = 14;
        r = 27;
    }
    if (selectedProfile == "HEA320") {
        h = 310;
        b = 300;
        tw = 9;
        tf = 15.5;
        r = 27;
    }
    if (selectedProfile == "HEA340") {
        h = 330;
        b = 300;
        tw = 9.5;
        tf = 16.5;
        r = 27;
    }
    if (selectedProfile == "HEA360") {
        h = 350;
        b = 300;
        tw = 10;
        tf = 17.5;
        r = 27;
    }
    if (selectedProfile == "HEA400") {
        h = 390;
        b = 300;
        tw = 11;
        tf = 19;
        r = 27;
    }
    if (selectedProfile == "HEA450") {
        h = 440;
        b = 300;
        tw = 11.5;
        tf = 21;
        r = 27;
    }
    if (selectedProfile == "HEA500") {
        h = 490;
        b = 300;
        tw = 12;
        tf = 23;
        r = 27;
    }
    if (selectedProfile == "HEA550") {
        h = 540;
        b = 300;
        tw = 12.5;
        tf = 24;
        r = 27;
    }
    if (selectedProfile == "HEA600") {
        h = 590;
        b = 300;
        tw = 13;
        tf = 25;
        r = 27;
    }
    if (selectedProfile == "HEA650") {
        h = 640;
        b = 300;
        tw = 13.5;
        tf = 26;
        r = 27;
    }
    if (selectedProfile == "HEA700") {
        h = 690;
        b = 300;
        tw = 14.5;
        tf = 27;
        r = 27;
    }
    if (selectedProfile == "HEA800") {
        h = 790;
        b = 300;
        tw = 15;
        tf = 28;
        r = 30;
    }
    if (selectedProfile == "HEA900") {
        h = 890;
        b = 300;
        tw = 16;
        tf = 30;
        r = 30;
    }
    if (selectedProfile == "HEA1000") {
        h = 990;
        b = 300;
        tw = 16.5;
        tf = 31;
        r = 30;
    }

    if (selectedProfile == "HEB100") {
        h = 100;
        b = 100;
        tw = 6;
        tf = 10;
        r = 12;
    }
    if (selectedProfile == "HEB120") {
        h = 120;
        b = 120;
        tw = 6.5;
        tf = 11;
        r = 12;
    }
    if (selectedProfile == "HEB140") {
        h = 120;
        b = 140;
        tw = 7;
        tf = 12;
        r = 12;
    }
    if (selectedProfile == "HEB160") {
        h = 160;
        b = 160;
        tw = 8;
        tf = 13;
        r = 15;
    }
    if (selectedProfile == "HEB180") {
        h = 180;
        b = 180;
        tw = 8.5;
        tf = 14;
        r = 15;
    }
    if (selectedProfile == "HEB200") {
        h = 200;
        b = 200;
        tw = 9;
        tf = 15;
        r = 18;
    }
    if (selectedProfile == "HEB220") {
        h = 220;
        b = 220;
        tw = 9.5;
        tf = 16;
        r = 18;
    }
    if (selectedProfile == "HEB240") {
        h = 240;
        b = 240;
        tw = 10;
        tf = 17;
        r = 21;
    }
    if (selectedProfile == "HEB260") {
        h = 260;
        b = 260;
        tw = 10;
        tf = 17.5;
        r = 24;
    }
    if (selectedProfile == "HEB280") {
        h = 280;
        b = 280;
        tw = 10.5;
        tf = 18;
        r = 24;
    }
    if (selectedProfile == "HEB300") {
        h = 300;
        b = 300;
        tw = 11;
        tf = 19;
        r = 27;
    }
    if (selectedProfile == "HEB320") {
        h = 320;
        b = 300;
        tw = 11.5;
        tf = 20.5;
        r = 27;
    }
    if (selectedProfile == "HEB340") {
        h = 340;
        b = 300;
        tw = 12;
        tf = 21.5;
        r = 27;
    }
    if (selectedProfile == "HEB360") {
        h = 360;
        b = 300;
        tw = 12.5;
        tf = 22.5;
        r = 27;
    }
    if (selectedProfile == "HEB400") {
        h = 400;
        b = 300;
        tw = 13.5;
        tf = 24;
        r = 27;
    }
    if (selectedProfile == "HEB450") {
        h = 450;
        b = 300;
        tw = 14.;
        tf = 26;
        r = 27;
    }
    if (selectedProfile == "HEB500") {
        h = 500;
        b = 300;
        tw = 14.5;
        tf = 28;
        r = 27;
    }
    if (selectedProfile == "HEB550") {
        h = 550;
        b = 300;
        tw = 15;
        tf = 29;
        r = 27;
    }
    if (selectedProfile == "HEB600") {
        h = 600;
        b = 300;
        tw = 15.5;
        tf = 30;
        r = 27;
    }
    if (selectedProfile == "HEB650") {
        h = 650;
        b = 300;
        tw = 16;
        tf = 31;
        r = 27;
    }
    if (selectedProfile == "HEB700") {
        h = 700;
        b = 300;
        tw = 17;
        tf = 32;
        r = 27;
    }
    if (selectedProfile == "HEB800") {
        h = 800;
        b = 300;
        tw = 17.5;
        tf = 33;
        r = 30;
    }
    if (selectedProfile == "HEB900") {
        h = 900;
        b = 300;
        tw = 18.5;
        tf = 35;
        r = 30;
    }
    if (selectedProfile == "HEB1000") {
        h = 1000;
        b = 300;
        tw = 19;
        tf = 36;
        r = 30;
    }

    if (selectedProfile == "HEM100") {
        h = 120;
        b = 106;
        tw = 12;
        tf = 20;
        r = 12;
    }
    if (selectedProfile == "HEM120") {
        h = 140;
        b = 126;
        tw = 12.5;
        tf = 21;
        r = 12;
    }
    if (selectedProfile == "HEM140") {
        h = 160;
        b = 146;
        tw = 13;
        tf = 22;
        r = 12;
    }
    if (selectedProfile == "HEM160") {
        h = 180;
        b = 166;
        tw = 14;
        tf = 23;
        r = 15;
    }
    if (selectedProfile == "HEM180") {
        h = 200;
        b = 186;
        tw = 14.5;
        tf = 24;
        r = 15;
    }
    if (selectedProfile == "HEM200") {
        h = 220;
        b = 206;
        tw = 15;
        tf = 25;
        r = 18;
    }
    if (selectedProfile == "HEM220") {
        h = 240;
        b = 226;
        tw = 15.5;
        tf = 26;
        r = 18;
    }
    if (selectedProfile == "HEM240") {
        h = 270;
        b = 248;
        tw = 18;
        tf = 32;
        r = 21;
    }
    if (selectedProfile == "HEM260") {
        h = 290;
        b = 268;
        tw = 18;
        tf = 32.5;
        r = 24;
    }
    if (selectedProfile == "HEM280") {
        h = 310;
        b = 288;
        tw = 18.5;
        tf = 33;
        r = 24;
    }
    if (selectedProfile == "HEM300") {
        h = 340;
        b = 310;
        tw = 21;
        tf = 39;
        r = 27;
    }
    if (selectedProfile == "HEM320") {
        h = 359;
        b = 309;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM340") {
        h = 377;
        b = 309;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM360") {
        h = 395;
        b = 308;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM400") {
        h = 432;
        b = 307;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM450") {
        h = 478;
        b = 307;
        tw = 21.;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM500") {
        h = 524;
        b = 306;
        tw = 21;
        tf = 408;
        r = 27;
    }
    if (selectedProfile == "HEM550") {
        h = 572;
        b = 306;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM600") {
        h = 620;
        b = 305;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM650") {
        h = 668;
        b = 305;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM700") {
        h = 716;
        b = 304;
        tw = 21;
        tf = 40;
        r = 27;
    }
    if (selectedProfile == "HEM800") {
        h = 814;
        b = 303;
        tw = 21;
        tf = 40;
        r = 30;
    }
    if (selectedProfile == "HEM900") {
        h = 910;
        b = 302;
        tw = 21;
        tf = 40;
        r = 30;
    }
    if (selectedProfile == "HEM1000") {
        h = 1008;
        b = 302;
        tw = 21;
        tf = 40;
        r = 30;
    }

    window.h = h;
    window.b = b;
    window.tw = tw;
    window.tf = tf;
    window.r = r;
    window.d = d;
    window.dw = dw;
    window.ew = ew;
    window.As = As;
    window.dzero = dzero;
    window.fub = fub;


    // === 1.3 Data of Steeltypes and obtaining of fitting values of variables===

    if (selectedSteel == "S235") {
        fy = 235;
        fu = 360;
        CwTwQSK1 = 72;
        CwTwQSK2 = 83;
        CwTwQSK3 = 124;
        CfTfQSK1 = 9;
        CfTfQSK2 = 10;
        CfTfQSK3 = 14;
        betaw = 0.8;
    }

    if (selectedSteel == "S355") {
        fy = 355;
        fu = 490;
        CwTwQSK1 = 58.32;
        CwTwQSK2 = 67.23;
        CwTwQSK3 = 100.44;
        CfTfQSK1 = 7.29;
        CfTfQSK2 = 8.1;
        CfTfQSK3 = 11.34;
        betaw = 0.9
    }

    window.fy = fy
    window.fu = fu

    // === 2.1 Calculation of Profilevalues===
    var cw = h - 2 * tf - 2 * r
    var cf = 0.5 * b - 0.5 * tw - r
    var Ab = 2 * tf * b + tw * (h - 2 * tf) + 4 * 0.2146 * r ** 2
    var IyWithoutSteiner = (1 / 6) * b * tf ** 3 + (1 / 12) * tw * (h - 2 * tf) ** 3 + 4 * (7.545 / 1000) * r ** 4
    var SteinerPart = 2 * b * tf * (0.5 * h - 0.5 * tf) ** 2 + 4 * 0.2146 * r ** 2 * (0.5 * h - tf - 0.2234 * r) ** 2

    var Iy = IyWithoutSteiner + SteinerPart
    var Wely = Iy / (0.5 * h)
    var Sy = tw * (0.5 * h - tf) * 0.5 * (0.5 * h - tf) + b * tf * (0.5 * h - 0.5 * tf) + 2 * 0.2146 * r ** 2 * (0.5 * h - tf - 0.2234 * r)
    var Wply = 2 * Sy
    var Avzb = (h - 2 * tf) * tw + 4 * 0.2146 * r ** 2 + 2 * 0.5 * tf * (tw + 2 * r)

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
        //Calculation of actual acting forces per Screwrow

        var deltaM = Mmax - Med

        if (deltaM >= 0) {
            var aFtrd1_new = aFtrd1
            var aFtrd2_new = aFtrd2 - deltaM / hs2
            if (aFtrd2_new < 0) {
                aFtrd2_new = 0
                aFtrd1_new = aFtrd1 - (deltaM - aFtrd2 * hs2) / hs1
            }
        }

        if (deltaM < 0) {
            var aFtrd2_new = aFtrd2;
            var aFtrd1_new = aFtrd1;
        }
        // === 4.13 calculations max. shear force===

        // max Force due to residual load-bearing capacity

        var Fved1 = (1 - ((aFtrd1_new / 2) / (1.4 * 0.5 * Ft3rdO))) * 2 * Fvrd
        var Fved2 = (1 - ((aFtrd2_new / 2) / (1.4 * 0.5 * Ft3rdU))) * 2 * Fvrd
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


        //Calculation of actual acting forces per Screwrow

        var deltaM = Mmax - Med

        if (deltaM >= 0) {
            var aFtrd3_new = aFtrd3 - deltaM / hs3
            var aFtrd2_new = aFtrd2
            var aFtrd1_new = aFtrd1

            if (aFtrd3_new < 0) {
                aFtrd1_new = aFtrd1
                aFtrd3_new = 0
                aFtrd2_new = aFtrd2 - (deltaM - aFtrd3 * hs3) / hs2
                if (aFtrd2_new < 0) {
                    aFtrd2_new = 0
                    aFtrd1_new = aFtrd1 - (deltaM - aFtrd3 * hs3 - aFtrd2 * hs2) / hs1

                }
            }
        }

        if (deltaM < 0) {
            var aFtrd3_new = aFtrd3
            var aFtrd2_new = aFtrd2;
            var aFtrd1_new = aFtrd1;
        }

        // === 4.13 calculations max. shear force===

        // max Force due to residual load-bearing capacity

        var Fved1 = (1 - ((aFtrd1_new / 2) / (1.4 * 0.5 * Ft3rdO))) * 2 * Fvrd
        var Fved2 = (1 - ((aFtrd2_new / 2) / (1.4 * 0.5 * Ft3rdM))) * 2 * Fvrd
        var Fved3 = (1 - ((aFtrd3_new / 2) / (1.4 * 0.5 * Ft3rdU))) * 2 * Fvrd
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

        //Calculations of Rotationstiffnes

        if (Med < 2 / 3 * Mmax) { var mueh = 1 }

        if (Med > 2 / 3 * Mmax) { var mueh = (1.5 * Med / Mmax) ** 2.7 }

        var k_fourO = 0.9 * Math.min(leff1O, leff2O) * tsp ** 3 / mvO ** 3
        var k_fiveO = 0.9 * Math.min(leff1O, leff2O) * tsp ** 3 / mvO ** 3
        var k_fiveM = 0.9 * Math.min(leff1M, leff2M) * tsp ** 3 / mh ** 3
        var k_fourM = 0.9 * Math.min(leff1M, leff2M) * tsp ** 3 / mh ** 3
        var k_fiveU = 0.9 * Math.min(leff1U, leff2U) * tsp ** 3 / mh ** 3
        var k_fourU = 0.9 * Math.min(leff1U, leff2U) * tsp ** 3 / mh ** 3

        var k_ten = 1.6 * As / (2 * tsp + 0.5 * kScrew + 0.5 * mmaxScrew + 2 * tscrew)
        var k_effO = 1 / (1 / k_fiveO + 1 / k_fourO + 1 / k_ten)
        var k_effM = 1 / (1 / k_fiveM + 1 / k_fourM + 1 / k_ten)
        var k_effU = 1 / (1 / k_fiveU + 1 / k_fourU + 1 / k_ten)
        var zeq = (k_effO * hs1 ** 2 + k_effM * hs2 ** 2) / (k_effO * hs1 + k_effM * hs2)
        var k_eq = (k_effO * hs1 + k_effM * hs2) / zeq

        var Sj = ((210000 * zeq ** 2) / (1 / k_fiveO + 1 / k_fourO + 1 / k_ten + 1 / k_fourM + 1 / k_fiveM + 1 / k_ten)) / 10 ** 6

        console.log("k10=" + k_ten)
        console.log("k4oben=" + k_fourO)
        console.log("k4imtte=" + k_fourM)
        console.log("zeg=" + zeq)
        console.log("keq=" + k_eq)
        console.log("mueh=" + mueh)
        console.log("Sj=" + Sj)

    }
    //utilization

    var etaV = Ved / (Vmax)
    var etaM = Med / (Mmax)
    var eta = Math.max(etaV, etaM)
    console.log("eta =" + eta)
    document.getElementById("Endresults").innerText = "Utilization"
    document.getElementById("UtilizationV").innerText = "Utilization of shearforce:            " + "\u03B7 = " + etaV.toFixed(2);
    document.getElementById("UtiliziationM").innerText = "Utilization of moment:               " + "\u03B7 = " + etaM.toFixed(2);
    document.getElementById("Utilization").innerText = "Utilization authoritive:               " + "\u03B7 = " + eta.toFixed(2);

}