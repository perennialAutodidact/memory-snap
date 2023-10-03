import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import { createClient } from 'pexels';
import { getDirName } from './helpers.js';

// config
dotenv.config({ path: '../../.env.local' });
const __dirname = getDirName(import.meta.url);
const port = process.env.PORT || 8080;

if (!process.env.PORT) {
  console.warn(`PORT is ${process.env.PORT}, using default of 8080`);
}

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

const allowedOrigins = ['http://localhost:3000', 'https://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    origin === undefined || allowedOrigins.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error(`${origin} is not a trusted origin`));
  },
};
app.use(cors(corsOptions));

// routes
app.get('/api/photos', async (req, res) => {
  try {
    const { query, perPage: per_page } = req.query;
    const pexelsClient = createClient(process.env.PEXELS_API_KEY);
    const response = await pexelsClient.photos.search({ query, per_page });

    if (!response.photos) {
      res.status(400).json({
        message: 'There was a problem fetching photos from the Pexels API',
      });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

// launch
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`App is listening on port ${port}`);
    }
  });
}

export default app;
