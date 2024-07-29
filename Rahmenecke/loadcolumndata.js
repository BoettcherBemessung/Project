function loadColumndata() {
    // === 0.1 registration of selected profils, steels...===
    var profileselection = document.getElementById("ColumnSelection");
    var selectedProfile = ColumnSelection.options[ColumnSelection.selectedIndex].value;

    var steelselection = document.getElementById("ColumnYieldStrength");
    var selectedSteel = ColumnYieldStrength.options[ColumnYieldStrength.selectedIndex].value;

    var Screwshapeselection = document.getElementById("ScrewShape");
    var selectedScrewshape = ScrewShape.options[ScrewShape.selectedIndex].value;

    var Screwstrengthselection = document.getElementById("StrengthClass");
    var selectedScrewstrength = StrengthClass.options[StrengthClass.selectedIndex].value;

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

    // === 1.1 Data of Screws and obtaining of fitting values of variables===
    if (selectedScrewshape == "M12") {
        d = 12;
        dw = 24;
        ew = 6;
        As = 84.3;
        dzero = 13;
    }
    if (selectedScrewshape == "M16") {
        d = 16;
        dw = 30;
        ew = 7.5;
        As = 157;
        dzero = 18;
    }
    if (selectedScrewshape == "M20") {
        d = 20;
        dw = 37;
        ew = 9.25;
        As = 245;
        dzero = 22;
    }
    if (selectedScrewshape == "M22") {
        d = 22;
        dw = 39;
        ew = 9.75;
        As = 303;
        dzero = 24;
    }
    if (selectedScrewshape == "M24") {
        d = 24;
        dw = 44;
        ew = 11;
        As = 353;
        dzero = 26;
    }
    if (selectedScrewshape == "M27") {
        d = 27;
        dw = 50;
        ew = 12.5;
        As = 459;
        dzero = 30;

    }
    if (selectedScrewshape == "M30") {
        d = 30;
        dw = 56;
        ew = 14;
        As = 561;
        dzero = 33;
    }
    if (selectedScrewshape == "M36") {
        d = 36;
        dw = 66;
        ew = 16.5;
        As = 817;
        dzero = 39;
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

    window.hc = h;
    window.bc = b;
    window.twc = tw;
    window.tfc = tf;
    window.rc = r;

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

    var Iw_alpha = (0.07 * r / tf + 0.076) * tw / tf
    var D_w = ((tf + r) ** 2 + tw * (r + tw / 4)) / (2 * r + tf)
    var It = 2 * (1 / 3 * b ** tf ** 3 * (1 - 0.63 * tf / b)) + 1 / 3 * (h - 2 * tf) * tw ** 3 + 2 * Iw_alpha * D_w ** 4
    var IW = 1 / 24 * tf * b ** 3 * (h - tf) ** 2
    console.log(IW)

    window.It = It
    window.IW = IW

    window.fy_Column = fy
    window.fu_Column = fu
    window.h_Column = h;
    window.b_Column = b;
    window.tw_Column = tw;
    window.tf_Column = tf;
    window.r_Column = r;
    window.cw_Column = cw
    window.cf_Column = cf
    window.Ab_Column = Ab
    window.Iy_Column = Iy
    window.Wely_Column = Wely
    window.Wply_Column = Wply
    window.Avzb_Column = Avzb
    window.ew_Column = ew
    window.CwTwQSK1_Column = CwTwQSK1
    window.CwTwQSK2_Column = CwTwQSK2
    window.CwTwQSK3_Column = CwTwQSK3
    window.dzero_Column = dzero
    window.d_Column = d
    window.fub_Column = fub
    window.As = As
    window.CfTfQSK1_Column = CfTfQSK1
    window.CfTfQSK2_Column = CfTfQSK2
    window.CfTfQSK3_Column = CfTfQSK3



}