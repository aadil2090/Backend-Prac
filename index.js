require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h3>Hello from Youtube</h3>");
});

app.get("/github", (req, res) => {
  res.json({
    name: "Test",
    message: "Hello World!",
    count: 0,
    status: true,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
