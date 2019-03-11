const { app, BrowserWindow } = require('electron');

let win;

function start() {
    win = new BrowserWindow({ height: 500, width: 600 });

    win.loadFile("index.html");
}

app.on("ready", start);