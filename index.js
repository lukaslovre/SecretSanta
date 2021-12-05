const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/create-group", (req, res) => {
  res.render("create-group");
});
app.post("/create-group", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/results", (req, res) => {
  res.render("results");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
