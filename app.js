console.log("Web server is running...");
const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require("mongodb");

const db = require("./server"); // ✅ NO .db()

let user;
fs.readFile("user.json", "utf-8", (err, data) => {
  if (!err) user = JSON.parse(data);
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", async (req, res) => {
  try {
    const new_reja = req.body.reja;

    const result = await db.collection("plans").insertOne({
      reja: new_reja
    });

    // ✅ NO ops
    res.json({
      _id: result.insertedId,
      reja: new_reja
    });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id)
 db.collection("plans").deleteOne(
  {_id: new mongodb.ObjectId(id)}, 
function(err, response) {
  res.json ({state: "success"})
})
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data)
  db.collection("plans").findOneAndUpdate(
  {_id: new mongodb.ObjectId(data.id)},
  {$set: {reja: data.new_input}},
  function (err, response) {
    res.json({state: "success"})
  }
  );
});

app.post("/delete-all", (req, res) => {
  if(req.body.delete_all) [
    db.collection("plans").deleteMany(function() {
      res.json({state: "All plans have deleted"})
    })
  ]
});

app.get("/", (req, res) => {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) return res.end("Something went wrong");
      res.render("reja", { items: data });
    });
});

module.exports = app;