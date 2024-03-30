function germanpage() {
    var language_english = window.language_english
    language_english = 0
    window.language_english = language_english
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
    var language_english = window.language_english
    language_english = 1
    window.language_english = language_english
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