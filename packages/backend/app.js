const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

require("dotenv").config();

const corsOptions = { origin: "http://localhost:3000" };

app.use(cors());

app.get("/photos", (req, res) => {
  res.send({ apiKey: process.env.PEXELS_API_KEY });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`App is listening on port ${port}`);
  }
});
