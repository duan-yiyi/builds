const path = require('path');
const express = require('express');
const ROOT_PATH = path.resolve(__dirname, '..');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

const app = express();

app.use(express.static(DIST_PATH));

app.get(`/*`, function(req, res) {
    res.sendFile(DIST_PATH + '/index.html');
});

app.use((req, res) => {
    res.status(404).send('找不到对应的页面');
});

app.set('port', 3000);

module.exports = app;
