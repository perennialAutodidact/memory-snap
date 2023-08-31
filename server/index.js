const express = require("express");
const app = express();
const port = 3001;

require("dotenv").config();

app.get("/pexels-key", (req, res) => {
  res.send({ apiKey: process.env.PEXELS_API_KEY });
});
