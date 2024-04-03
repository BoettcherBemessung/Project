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

function germanpage() {
    germannmenu()
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    language_english = 0
    language_spanish = 0
    window.language_english = language_english
    window.language_spanish = language_spanish
    document.getElementById("Website_Heading").innerText = "Willkommen zum Ersten Online Stirnplattenstoßrechner !"
    document.getElementById("Attention!").innerText = "Bitte nutzen Sie dieses Tool nicht für Reale Bemessung! es handelt sich um ein Experiment und dient nur Lernzwecken"
    document.getElementById("Beamconfiguration").innerText = "Wählen Sie hier die Kenndaten des Trägers"
    document.getElementById("ProfilConfiguration").innerText = "I-Profil:"
    document.getElementById("Steeltype").innerText = "Stahlgüte:"
    document.getElementById("Beamdata").innerText = "Anzeigen der Trägerkenndaten"
    document.getElementById("Weldingmeasures").innerText = "Schweißnahtabmessungen:"
    document.getElementById("ScrewselectionText").innerText = "Wahl der Schrauben:"
    document.getElementById("ScrewshapeText").innerText = "Schraubentyp:"
    document.getElementById("ScrewStrength").innerText = "Schraubenfestigkeitsklasse:"
    document.getElementById("Screwrowstext").innerText = "Anzahl Schraubenreihen:"
    document.getElementById("faceplatemeasures").innerText = "Eingabe der Stirnplattenmaße:"
    document.getElementById("Screwconfiguration").innerText = "Eingabe der Schraubenabstände:"
    document.getElementById("ActingForces").innerText = "Eingabe der Belastung:"
    document.getElementById("CalculationsComplete").innerText = "hier klicken Für Ergebnisse"
}

function englishpage() {
    englishnmenu()
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    language_spanish = 0
    language_english = 1
    window.language_english = language_english
    window.language_spanish = language_spanish
    document.getElementById("Website_Heading").innerText = "welcome to the first online faceplate joint calculator"
    document.getElementById("Attention!").innerText = "Attention! Dont use this Tool for Real Projects! It's just an education tool and Experiment!!!"
    document.getElementById("Beamconfiguration").innerText = "configure the beam:"
    document.getElementById("ProfilConfiguration").innerText = " profile:"
    document.getElementById("Steeltype").innerText = "steel type:"
    document.getElementById("Beamdata").innerText = "show Beaminformation"
    document.getElementById("Weldingmeasures").innerText = "weldingmeasures:"
    document.getElementById("ScrewselectionText").innerText = "select Screws:"
    document.getElementById("ScrewshapeText").innerText = "screw type:"
    document.getElementById("ScrewStrength").innerText = "strength class:"
    document.getElementById("Screwrowstext").innerText = "screwrows:"
    document.getElementById("faceplatemeasures").innerText = "Insert faceplatemeasures: "
    document.getElementById("Screwconfiguration").innerText = "Insert Screwconfiguration:"
    document.getElementById("ActingForces").innerText = "Insert Acting forces:"
    document.getElementById("CalculationsComplete").innerText = " Start Calculations"
}

function spanishpage() {
    spanishnmenu()
    var language_english = window.language_english
    var language_spanish = 1
    window.language_spanish = language_spanish
    window.language_english = language_english
    document.getElementById("Website_Heading").innerText = "bienvenido al pimer programa de cálculo de conexiones en linea"
    document.getElementById("Attention!").innerText = "Attencion! No usa ese programa por proyectos reales! solamente es hecho para experimentar y estudiar!!"
    document.getElementById("Beamconfiguration").innerText = "elige la viga:"
    document.getElementById("ProfilConfiguration").innerText = " perfil:"
    document.getElementById("Steeltype").innerText = "tipo de acero:"
    document.getElementById("Beamdata").innerText = "muestra informaciones de la viga"
    document.getElementById("Weldingmeasures").innerText = "dimensiones de la soldadura:"
    document.getElementById("ScrewselectionText").innerText = "elige tornillos:"
    document.getElementById("ScrewshapeText").innerText = "tipo de tornillo:"
    document.getElementById("ScrewStrength").innerText = "clase de resistencia:"
    document.getElementById("Screwrowstext").innerText = "filas de tornillos:"
    document.getElementById("faceplatemeasures").innerText = "elige dimensiones de la placa frontal: "
    document.getElementById("Screwconfiguration").innerText = "elige distancias de los tornillos:"
    document.getElementById("ActingForces").innerText = "elige actuandas fuerzas:"
    document.getElementById("CalculationsComplete").innerText = " empiza las calculaciones"
}