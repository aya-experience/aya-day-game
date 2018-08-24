const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/87c0289e", (req, res) => {
  res.render("step-2", { name: "Swiip" });
});

app.listen(1234);
