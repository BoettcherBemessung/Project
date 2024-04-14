const express = require('express');
const app = express();
const port = 3000;

app.post('/addText', (req, res) => {


    res.send('Text hinzugefügt!');
});

app.listen(port, () => {
    console.log('Server läuft auf http://localhost:${port}');
});