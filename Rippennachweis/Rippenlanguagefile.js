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
    var language_german = window.language_german
    language_english = 0
    language_spanish = 0
    language_german = 1
    window.language_english = language_english
    window.language_spanish = language_spanish
    window.language_german = language_german
    document.getElementById("Website_Heading").innerText = "Willkommen zum online Rippennachweis !"
    document.getElementById("Attention!").innerText = "Bitte nutzen Sie dieses Tool nicht für Reale Bemessung! es handelt sich um ein Experiment und dient nur Lernzwecken"
    document.getElementById("Beamconfiguration").innerText = "Wählen Sie hier die Kenndaten des Trägers"
    document.getElementById("ProfilConfiguration").innerText = "I-Profil:"
    document.getElementById("Steeltype").innerText = "Stahlgüte:"
    document.getElementById("Beamdata").innerText = "Anzeigen der Trägerkenndaten"
    document.getElementById('Forcelocation').innerText = "Ort der Lasteinwirkung"
    document.getElementById('locatinForce').innerText = "Ort:"
    document.getElementById('ActingForces').innerText = "Eingabe wirkender last"

    document.getElementById("CalculationsComplete").innerText = "hier klicken Für Ergebnisse"
}

function englishpage() {
    englishnmenu()
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    var language_german = window.language_german
    language_spanish = 0
    language_english = 1
    language_german = 0
    window.language_english = language_english
    window.language_spanish = language_spanish
    window.language_german = language_german
    document.getElementById("Website_Heading").innerText = "welcome to the first online rigid frame calculator"
    document.getElementById("Attention!").innerText = "Attention! Dont use this Tool for Real Projects! It's just an education tool and Experiment!!!"
    document.getElementById("Beamconfiguration").innerText = "configure the beam:"
    document.getElementById("ProfilConfiguration").innerText = " profile:"
    document.getElementById("Steeltype").innerText = "steel type:"
    document.getElementById("Beamdata").innerText = "show Beaminformation"
    document.getElementById('Forcelocation').innerText = "Location of acting forces"
    document.getElementById('locatinForce').innerText = "Location:"
    document.getElementById('ActingForces').innerText = "insert Acting Forces"


    document.getElementById("ActingForces").innerText = "Insert Acting forces:"
    document.getElementById("CalculationsComplete").innerText = " Start Calculations"
}

function spanishpage() {
    spanishnmenu()
    var language_english = window.language_english
    var language_german = window.language_german
    var language_spanish = window.language_spanish
    var language_spanish = 1
    var language_german = 0
    var language_english = 0
    window.language_spanish = language_spanish
    window.language_english = language_english
    window.language_german = language_german
    document.getElementById("Website_Heading").innerText = "bienvenido al pimer programa de cálculo de conexiones en linea"
    document.getElementById("Attention!").innerText = "Attencion! No usa ese programa por proyectos reales! solamente es hecho para experimentar y estudiar!!"
    document.getElementById("Beamconfiguration").innerText = "elige la viga:"
    document.getElementById("ProfilConfiguration").innerText = " perfil:"
    document.getElementById("Steeltype").innerText = "tipo de acero:"
    document.getElementById("Beamdata").innerText = "muestra informaciones de la viga"
    document.getElementById('Forcelocation').innerText = "Locacion de la actuanda Fuerza"
    document.getElementById('locatinForce').innerText = "Locacion"
    document.getElementById('ActingForces').innerText = "Inserta actuandas fuerzas"


    document.getElementById("ActingForces").innerText = "elige actuandas fuerzas:"
    document.getElementById("CalculationsComplete").innerText = " empiza las calculaciones"
}