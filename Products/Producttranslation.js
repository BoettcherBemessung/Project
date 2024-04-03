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
    document.getElementById("introductionheading").innerText = "Statik im Netz mit uns bemesst ihr auch in Situ!"
    document.getElementById("introductiontext").innerText = "Als erstes Unternehmen ermöglicht BöttcherBemessung Statiken direkt im Browser berechnen zu lassen sämtliche Produkte sind nutzbar direkt im Web ohne Download, Plugins oder Vorinstallationen. Am Handy, Am Computer am Tablet womöglich bald an eurem Kühlschrank wenn ihr einen smartfridge habt ;D Als junges Unternehmen wollen wir natürlich besonders auf Transparenz der Rechenprozesse und Ergebnisse setzen, weshalb in sämtlichen Anwendungen die Zwischenergebnisse und Ergebnisse per Mausklick(am handy display berühren) anklickbar sind, sodass die Rechenwege mit Formel und eingesetzen Parametern angezeigt werden."
    document.getElementById("Program1heading").innerText = "Stirnplattenstoß"
    document.getElementById("programdescription").innerText = "mit diesem Programm kannst du online Stirnplattenstöße oder auch bekannt als biegesteife Trägerstöße bzw. Momententragfähige Anschlüsse des Typus Riegel-Riegel bemessen Dabei stehen dir 150 Profile zur Auswahl sowie die gängigen Schraubentypenetc. Bemessen wird nach der Komponentenmethode und in der aktuellen Version immer nach dem Plastischen Nachweisverfahren Wichtig: die Querkraft dieses Programms ist begrenzt auf die Hälfte der plastischen Querkrafttragfähigkeit des Trägers, sodass es nie zu einer Interaktion M/V kommt."
    document.getElementById("productlink1").innerText = "Klicke hier um zum Stirnplattenstoßrechner zu kommen"
    document.getElementById("Program2heading").innerText = "Biegesteife Rahmenecke"
    document.getElementById("Program2description").innerText = "mit diesem Programm kannst du online Biegesteife Rahmenecken bzw. Momententragfähige Anschlüsse des Typus Riegel-Stütze bemessen Dabei stehen dir 150 Profile zur Auswahl sowie die gängigen Schraubentypen etc. Bemessen wird nach der Komponentenmethode und in der aktuellen Version immer nach dem Plastischen Nachweisverfahren Wichtig: die Querkraft dieses Programms ist begrenzt auf die Hälfte der plastischen Querkrafttragfähigkeit des Trägers, sodass es nie zu einer Interaktion M/V kommt."
    document.getElementById("productlink2").innerText = "Klicke hier zur Bemessung Biegesteifer Rahmenecken"

}

function englisch() {
    englishnmenu()
    var language_english = window.language_english
    var language_spanish = window.language_spanish
    language_spanish = 0
    language_english = 1
    window.language_english = language_english
    window.language_spanish = language_spanish
    document.getElementById("introductionheading").innerText = "Statics online with us, and you can also measure in situ!"
    document.getElementById("introductiontext").innerText = "The first company, BöttcherBemessung, enables the direct calculation of statics in the browser. All products are usable directly on the web without the need for download, plugins, or pre-installations. On mobile phones, computers, tablets, and possibly soon on your fridge if you have a smart fridge ;D As a young company, we naturally aim for transparency in the calculation processes and results. Therefore, in all applications, the intermediate results and final results are clickable with a mouse click (or touch on mobile displays), allowing the calculation paths with formulas and input parameters to be displayed."
    document.getElementById("Program1heading").innerText = "Unión de placa frontal Empalme de placa frontal"
    document.getElementById("programdescription").innerText = "With this program, you can dimension online end-plate joints, also known as moment-resisting beam connections or moment-resisting connections of the type beam-to-beam. You have a choice of 150 profiles as well as common screw types, etc. Dimensioning is done according to the component method and in the current version always according to the plastic design method. Important: The shear capacity of this program is limited to half of the plastic shear capacity of the beam, ensuring that there is never an interaction M/V."
    document.getElementById("productlink1").innerText = "Click here to access the end-plate joint calculator"
    document.getElementById("Program2heading").innerText = "Rigid Frame Connection Analysis"
    document.getElementById("Program2description").innerText = "With this program, you can dimension online moment-resisting frame corners or moment-resisting connections of the beam-to-column type. You have a choice of 150 profiles as well as common screw types, etc. Dimensioning is done according to the component method and in the current version always according to the plastic design method. Important: The shear capacity of this program is limited to half of the plastic shear capacity of the beam, ensuring that there is never an interaction M/V."
    document.getElementById("productlink2").innerText = "Click here to dimension moment-resisting frame corners"
}

function spanisch() {
    spanishnmenu()
    var language_english = window.language_english
    var language_spanish = 1
    window.language_spanish = language_spanish
    window.language_english = language_english
    document.getElementById("introductionheading").innerText = "¡Con nosotros, puedes calcular la estática en línea e in situ!"
    document.getElementById("introductiontext").innerText = "La primera empresa, BöttcherBemessung, permite el cálculo directo de la estática en el navegador. Todos los productos son utilizables directamente en la web sin necesidad de descargas, complementos o preinstalaciones. En teléfonos móviles, computadoras, tabletas y posiblemente pronto en tu nevera si tienes una nevera inteligente ;D Como empresa joven, naturalmente buscamos la transparencia en los procesos de cálculo y resultados. Por lo tanto, en todas las aplicaciones, los resultados intermedios y finales son clicables con un clic del mouse (o toque en pantallas móviles), lo que permite mostrar los caminos de cálculo con fórmulas y parámetros de entrada."
    document.getElementById("Program1heading").innerText = "Esquine"
    document.getElementById("Program1heading").innerText = "Unión de placa frontal Empalme de placa frontal"
    document.getElementById("programdescription").innerText = "Con este programa, puedes dimensionar en línea las uniones de placa frontal, también conocidas como conexiones de vigas resistentes al momento o conexiones resistentes al momento del tipo viga a viga. Tienes la opción de elegir entre 150 perfiles, así como tipos comunes de tornillos, etc. El dimensionamiento se realiza según el método de componentes y, en la versión actual, siempre según el método de diseño plástico. Importante: La capacidad de corte de este programa está limitada a la mitad de la capacidad de corte plástica de la viga, asegurando que nunca haya una interacción M/V."
    document.getElementById("productlink1").innerText = "Haz clic aquí para acceder al calculador de uniones de placa frontal."
    document.getElementById("Program2heading").innerText = "Análisis de Conexión de Marco Rígido"
    document.getElementById("Program2description").innerText = "Con este programa, puedes dimensionar en línea las esquinas de marco resistentes al momento o las conexiones resistentes al momento del tipo viga a columna. Tienes la opción de elegir entre 150 perfiles, así como tipos comunes de tornillos, etc. El dimensionamiento se realiza según el método de componentes y, en la versión actual, siempre según el método de diseño plástico. Importante: La capacidad de corte de este programa está limitada a la mitad de la capacidad de corte plástica de la viga, asegurando que nunca haya una interacción M/V."
    document.getElementById("productlink2").innerText = "Haz clic aquí para dimensionar las esquinas de marco resistentes al momento."

}