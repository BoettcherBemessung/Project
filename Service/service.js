function addText() {
    var text = document.getElementById("textInput").value;
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.getElementById("output").appendChild(paragraph);

    var savedTexts = JSON.parse(localStorage.getItem("savedTexte")) || [];

    savedTexts.push(text);

    localStorage.setItem("savedTexts", JSON.stringify(savedTexts));

};

window.onload = function() {
    var savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];
    savedTexts.forEach(function(text) {
        var paragraph = document.createElement("p");
        paragraph.textContent = text;
        document.getElementById("output").appendChild(paragraph);
    });
};