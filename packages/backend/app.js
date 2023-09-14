import express from 'express';
import { createClient } from 'pexels';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json());

dotenv.config({ path: '../../.env.local' });

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
    console.log(error.stack)
    res.status(500).json({ message: error.message, foo: 'bar' });
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
