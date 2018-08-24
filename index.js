const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/87c0289e", (req, res) => {
  res.render("step-2");
});

app.get("/1gf45g8a", (req, res) => {
  res.render("step-3");
});

app.listen(1234);
