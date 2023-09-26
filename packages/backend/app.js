import express from 'express';
import path from 'path';
import { createClient } from 'pexels';
import dotenv from 'dotenv';
import cors from 'cors';
import { getDirName } from './helpers.js';

const __dirname = getDirName(import.meta.url);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use(express.static(path.join(__dirname, '../frontend/public')));

dotenv.config({ path: '../../.env.local' });

const allowedOrigins = ['http://localhost:3000', 'https://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    origin === undefined || allowedOrigins.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error(`${origin} is not a trusted origin`));
  },
};
app.use(cors(corsOptions));

const port = process.env.API_PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

app.get('/photos', async (req, res) => {
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
