console.log("Web server is running...");
const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("harid")
});

const server = http.createServer(app);
let PORT = 30000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});