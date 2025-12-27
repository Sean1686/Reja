console.log("Web server is running...");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

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
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});