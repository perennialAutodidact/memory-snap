import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import pexels from "pexels";

const useFetchedPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const pexelsClient = createClient(process.env.REACT_APP_PEXELS_API_KEY);
    if (!pexelsClient) return;

    if (!photos.length) {
      (async () => {
        const query = "nature";
        try {
          const photos = await pexelsClient.photos.search({
            query,
            per_page: 5,
            size: "small",
            orientation: "square",
          });

          console.log({ photos: photos.photos });
          setPhotos(photos.photos);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [photos.length]);

  return { photos };
};

export default useFetchedPhotos;
