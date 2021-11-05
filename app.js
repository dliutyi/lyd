const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const livereloadServer = livereload.createServer();
livereloadServer.watch(path.join(__dirname, 'public'));

livereloadServer.server.once("connection", () => {
    setTimeout(() => {
        livereloadServer.refresh("/");
    }, 100);
});

const express = require('express');
const app = express();
const port = 3000;

app.use(connectLivereload());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('LYD');
});