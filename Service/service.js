function addText() {
    var text = document.getElementById("textInput").value;
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.getElementById("output").appendChild(paragraph);
}