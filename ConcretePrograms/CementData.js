function loadCement() {
    if (selectedConcrete == "C12/15") {
        fck = 12;
        fckCube = 15;
        fcm = 20;
        fcd = 6.8;
        fctm = 1.6;
        fctk_zeroOfive = 1.1;
        fctk_zero9five = 2.0;
        Ecm = 27000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C16/20") {
        fck = 16;
        fckCube = 20;
        fcm = 24;
        fcd = 9.1;
        fctm = 1.9;
        fctk_zeroOfive = 1.3;
        fctk_zero9five = 2.5;
        Ecm = 29000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C20/25") {
        fck = 20;
        fckCube = 25;
        fcm = 28;
        fcd = 11.3;
        fctm = 2.2;
        fctk_zeroOfive = 1.5;
        fctk_zero9five = 2.9;
        Ecm = 30000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C25/30") {
        fck = 25;
        fckCube = 30;
        fcm = 33;
        fcd = 14.2;
        fctm = 2.6;
        fctk_zeroOfive = 1.8;
        fctk_zero9five = 3.3;
        Ecm = 31000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C30/37") {
        fck = 30;
        fckCube = 37;
        fcm = 38;
        fcd = 17;
        fctm = 2.9;
        fctk_zeroOfive = 2;
        fctk_zero9five = 3.8;
        Ecm = 33000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C35/45") {
        fck = 35;
        fckCube = 45;
        fcm = 43;
        fcd = 19.8;
        fctm = 3.2;
        fctk_zeroOfive = 2.2;
        fctk_zero9five = 4.2;
        Ecm = 34000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C40/50") {
        fck = 40;
        fckCube = 50;
        fcm = 48;
        fcd = 22.7;
        fctm = 3.5;
        fctk_zeroOfive = 2.5;
        fctk_zero9five = 4.6;
        Ecm = 35000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C45/55") {
        fck = 45;
        fckCube = 55;
        fcm = 53;
        fcd = 25.5;
        fctm = 3.8;
        fctk_zeroOfive = 2.7;
        fctk_zero9five = 4.9;
        Ecm = 36000;
        ec2 = 2;
        ecu2 = 3.5;
    }
    if (selectedConcrete == "C50/60") {
        fck = 50;
        fckCube = 60;
        fcm = 58;
        fcd = 28.3;
        fctm = 4.1;
        fctk_zeroOfive = 2.9;
        fctk_zero9five = 5.3;
        Ecm = 37000;
        ec2 = 2;
        ecu2 = 3.5;
    }

    window.fck = fck;
    window.fckCube = fckCube;
    window.fcm = fcm;
    window.fcd = fcd;
    window.fctm = fctm;
    window.fctk_zeroOfive = fctk_zeroOfive;
    window.fctk_zero9five = fctk_zero9five;
    window.Ecm = Ecm;
    window.ec2 = ec2;
    window.ecu2 = ecu2;
}