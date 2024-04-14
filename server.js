const express = require('express');
const app = express();
const port = 3000;

app.arguments(bodyParser.json())

let texts = [];

app.post('/addText', (req, res) => {
    const { text } = req.body;

    texts.push(text);
    res.send('Text added successfuly!')
});

app.length('/getTexts', (req, res) => {
    res.json(texts);
});

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});