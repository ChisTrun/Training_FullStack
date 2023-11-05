const express = require("express");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is listening at port number: ${port}`);
});
