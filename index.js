const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["my-name-is-aya"],
    maxAge: 24 * 60 * 60 * 1000
  })
);

app.get("/87c0289e", (req, res) => {
  res.render("step-2");
});

app.get("/580e5872", (req, res) => {
  res.render("step-3-1");
});

app.post("/aa5480bc", (req, res) => {
  req.session.name = req.body.name;
  res.redirect("/ea8c0a1e");
});

app.get("/step-3-2.css", (req, res) => {
  res.set("Content-Type", "text/css");
  res.render("step-3-2-css", req.session);
});

app.get("/ea8c0a1e", (req, res) => {
  res.render("step-3-2", req.session);
});

app.get("/e69b9e73", (req, res) => {
  res.render("step-4", req.session);
});

app.get("/sa87ui24", (req, res) => {
  res.render("step-5", req.session);
});

app.get("/step-6.css", (req, res) => {
  res.set("Content-Type", "text/css");
  res.render("step-6-css", req.session);
});

app.get("/03e463f8", (req, res) => {
  res.render("step-6", req.session);
});

app.listen(1234);
