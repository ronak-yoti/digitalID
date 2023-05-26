// const shareUrl = import("./index.js");
const https = require("https");
const express = require("express");
const app = express();
const fs = require("fs");
const pkg = require("body-parser");
const { urlencoded, json } = pkg;

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", function (req, res) {
  res.sendFile("/Users/khangro/Documents/dynamicqr/index.html");
});

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};
https.createServer(options, app).listen(3000);
