function concretecolumn() {
    // === 0.1 registration of selected profils, steels...===
    var concreteselection = document.getElementById("ColumnConcreteSelection");
    var selectedConcrete = ColumnConcreteSelection.options[ColumnConcreteSelection.selectedIndex].value;



    // === 1.2 Data of Profiles and obtaining of fitting values of variables===
    var limstress = 0
    if (selectedConcrete == "B_25") {
        limstress = 13.46
    }
    if (selectedConcrete == "B_35") {
        limstress = 17.69
    }
    if (selectedConcrete == "C20_25") {
        limstress = 11.33
    }
    if (selectedConcrete == "C20_25") {
        limstress = 14.17
    }
    if (selectedConcrete == "C20_25") {
        limstress = 17
    }


}