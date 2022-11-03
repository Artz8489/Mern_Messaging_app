const express = require("express");
const dummy_data = require("./dummy_data");
const dotenv = require("dotenv");
const _ = require("lodash");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`my listing port is ${PORT}`));

app.get("/", (req, res) => res.send("Api is working"));

app.get("/api/chat", (req, res) => res.send(dummy_data));

app.get("/all", (req, res) => res.send(dummy_data));

app.get("/:id", (req, res) => res.send(req.params.id));
app.get("/api/chat/:id", (req, res) =>
  res.send(dummy_data.find((item) => item.id == req.params.id))
);
