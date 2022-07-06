const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
  fs.readFile("./products.json", "utf-8", (err, data) => {
    if (data) {
      const produtcs = JSON.parse(data);
      res.send(produtcs);
    }
  });
});
app.get("/profile", (req, res) => {
  fs.readFile("./profile.json", "utf-8", (err, data) => {
    if (data) {
      const produtcs = JSON.parse(data);
      res.send(produtcs);
    }
  });
});
app.listen(8000);
