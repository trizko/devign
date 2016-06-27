const express = require('express');
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.send('./dist/index.html');
});

app.listen(8080, function () {
    console.log('server listening on port 8080...');
})
