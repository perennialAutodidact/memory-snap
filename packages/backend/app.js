const express = require("express");
const cors = require("cors");
const app = express();
const { mockPhotos } = require("./__mocks__/mockPhotos");

const allowedOrigins = ["http://localhost:3000", "https://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    allowedOrigins.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error(`${origin} is not a trusted origin`));
  },
};
app.use(cors(corsOptions));

const port = process.env.API_PORT || 8080;

require("dotenv").config();

app.get("/photos", (req, res) => {
  // TODO: add search params from req.query into image request on
  //       branch 22-endpoint-for-returning-pexels-image-array

  const { query, perPage } = req.query;
  const apiKey = process.env.PEXELS_API_KEY;

  res.status(200).json({ photos: mockPhotos, query, perPage, apiKey });
});

app.listen(port, (error) => {
  if (error) {
    throw new Error(error);
  } else {
    console.log(`App is listening on port ${port}`);
  }
});
