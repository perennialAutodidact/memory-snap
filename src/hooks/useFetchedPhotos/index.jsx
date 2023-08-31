import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';

const useFetchedPhotos = ({ query = 'nature', perPage }) => {
  const [photos, setPhotos] = useState(undefined);

  useEffect(() => {
    const pexelsClient = createClient(process.env.REACT_APP_PEXELS_API_KEY);
    if (!pexelsClient) return;

    if (!photos) {
      (async () => {
        try {
          const photos = await pexelsClient.photos.search({
            query,
            per_page: perPage,
            size: 'small',
            orientation: 'square',
          });

          setPhotos(photos.photos);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [photos]);

  return { photos };
};

export default useFetchedPhotos;
