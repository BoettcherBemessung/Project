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
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    language_english = 0
    language_spanish = 0
    window.language_english = language_english
    window.language_spanish = language_spanish
    document.getElementById("Website_Heading").innerText = "Willkommen bei BöttcherBemessungSoftware!"
    document.getElementById("Stirnstoß").innerText = "Teste unseren online Stirnplattenstoßrechner!"
    document.getElementById("RigidFrame").innerText = "Teste unser Programm zur Biegesteifen Rahmenecke!"


}

function englisch() {
    englishnmenu()
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    language_spanish = 0
    language_english = 1
    window.language_english = language_english
    window.language_spanish = language_spanish
    document.getElementById("Website_Heading").innerText = "welcome to BöttcherBemessungSoftware"
    document.getElementById("Stirnstoß").innerText = "Test the faceplate joint calculator!"
    document.getElementById("RigidFrame").innerText = "Test our Program for the Rigid Frame structure analysis!"

}

function spanisch() {
    spanishnmenu()
    var language_english = window.language_english
    var language_spanish = 1
    window.language_spanish = language_spanish
    window.language_english = language_english
    document.getElementById("Website_Heading").innerText = "bienvenido a BöttcherBemessungSoftware"
    document.getElementById("Stirnstoß").innerText = "Prueba el calculador en linea de empalmes de placas frontales"
    document.getElementById("RigidFrame").innerText = "Prueba la programa por  analisis de esquinas rigidas a flexiones"

}