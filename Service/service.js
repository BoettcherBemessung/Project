function addText() {
    var text = document.getElementById("textInput").value;

    fetch('/addText', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.getElementById("output").appendChild(paragraph);


};