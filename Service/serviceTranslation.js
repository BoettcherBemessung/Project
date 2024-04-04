function englishnmenu() {
    document.getElementById("startpage").innerText = "home"
    document.getElementById("products").innerText = "products"
    document.getElementById("service").innerText = "service"
    document.getElementById("Berechnungsgrundlagen").innerText = "Calculation Basis"
}

function germannmenu() {
    document.getElementById("startpage").innerText = "Startseite"
    document.getElementById("products").innerText = "Produkte"
    document.getElementById("service").innerText = "service"
    document.getElementById("Berechnungsgrundlagen").innerText = "Berechnungsgrundlagen"
}

function spanishnmenu() {
    document.getElementById("startpage").innerText = "Pagina Principal"
    document.getElementById("products").innerText = "Productos"
    document.getElementById("service").innerText = "servicio"
    document.getElementById("Berechnungsgrundlagen").innerText = "Basis de calculacion"
}

function deutsch() {
    germannmenu()

    var language_english = 0;
    var language_spanish = 0;
    var language_german = 1;
    window.language_english = 0;
    window.language_spanish = 0;
    window.language_german = 1;
    document.getElementById("criticheading").innerText = "Hinterlassen Sie hier Kritik oder Stellen Fragen und geben Anregung auf Verbesserung unserer Programme/Website"
    document.getElementById("addingbutton").innerText = "Hinzufügen"
    document.getElementById("companycity").innerText = "Hauptsitz Bretten"
    document.getElementById("companyname").innerText = "BöttcherBemessungSoftware Gmbh"



}

function englisch() {
    englishnmenu()

    var language_spanish = 0;
    var language_english = 1;
    var language_german = 0;
    window.language_english = 1;
    window.language_spanish = 0;
    window.language_german = 0;
    document.getElementById("criticheading").innerText = "Leave your feedback, ask questions, and provide suggestions for improving our programs/website here."
    document.getElementById("addingbutton").innerText = "Add"
    document.getElementById("companycity").innerText = "Headquarter in Bretten"
    document.getElementById("companyname").innerText = "BöttcherBemessungSoftware Gmbh"

}

function spanisch() {
    spanishnmenu()

    var language_spanish = 1;
    var language_german = 0;
    var language_english = 0;
    window.language_spanish = 1;
    window.language_english = 0;
    window.language_german = 0;
    document.getElementById("criticheading").innerText = "Deja tus comentarios, haz preguntas y proporciona sugerencias para mejorar nuestros programas/sitio web aquí."
    document.getElementById("addingbutton").innerText = "A" + '\u00F1' + "adir"
    document.getElementById("companycity").innerText = "Oficina central en Bretten"
    document.getElementById("companyname").innerText = "BöttcherBemessungSoftware Gmbh"
}