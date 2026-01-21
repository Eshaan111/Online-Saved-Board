const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/sendData", require("../routers/clientRouter"));
app.use("/db", require("../routers/databaseRouter"));

app.get("/check", (req, res) => {
  res.json({ data: "HI" });
});

module.exports = app;
