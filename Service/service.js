function addText() {
    var text = document.getElementById("textInput").value;
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.getElementById("output").appendChild(paragraph);

    localStorage.setItem("savedText", text);

}

window.onload = function() {
    var savedText = localStorage.getItem("savedText");
    if (savedText) {
        var paragraph = document.createElement("p");
        paragraph.textContent = savedText;
        document.getElementById("output").appendChild(paragraph);
    }
};