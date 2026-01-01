console.log("Web server is running...");
const express = require("express");
const app = express();
const fs = require("fs");
const db = require("./server").db();

let user;
fs.readFile("user.json", "utf-8", (err, data) => {
    if (!err) {
        user = JSON.parse(data);
    } else {
        console.log("Error reading user.json:", err);
    }
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get('/', function (req, res) {
    res.render("reja");
});

module.exports = app;

