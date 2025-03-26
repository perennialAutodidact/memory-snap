import { createClient } from 'pexels';

const getPhotos = async (req, res) => {
  try {
    const { imageSearchQuery, perPage: per_page } = req.query;
    const pexelsClient = createClient(process.env.PEXELS_API_KEY);
    const response = await pexelsClient.photos.search({
      query: imageSearchQuery,
      per_page,
      orientation: 'square',
    });

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
};

export { getPhotos };
