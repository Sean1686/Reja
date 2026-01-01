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

// app.get("/author", (req, res) => {
//     res.render("author", { user: user });
// });

app.post("/create-item", (req, res) => {
    console.log("user entered /create item");
console.log(req.body);
const new_reja = req.body.reja;
db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    if(err) {
        console.log(err);
        res.end("Something went wrong");
    } else {
        res.end("seccessfully added");
    };
});
});

app.get('/', function (req, res) {
        console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err)
            res.end('something went wrong')
        } else {
            console.log(data);
                res.render("reja", {items: data});
        }
    });
});

module.exports = app;

