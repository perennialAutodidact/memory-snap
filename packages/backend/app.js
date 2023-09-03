import express from 'express';
import { createClient } from 'pexels';
import dotenv from 'dotenv';

const app = express();
const port = 3001;

dotenv.config({ path: '../../.env.local' });

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const pexelsClient = createClient(process.env.PEXELS_API_KEY);
    const response = await pexelsClient.photos.search('cat');

    if (!response.photos) {
      res.status(400).json({
        message: 'There was a problem fetching photos from the Pexels API',
      });
    } else {
      res.status(200).json(response);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
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
