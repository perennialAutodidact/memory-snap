import { useEffect, useState } from 'react';
const useFetchedPhotos = ({ query = 'nature', perPage }) => {
  const [photos, setPhotos] = useState(undefined);
  const [photosError, setPhotosError] = useState(undefined);

  useEffect(() => {
    if (!photos && !photosError) {
      (async () => {
        try {
          const params = new URLSearchParams({ perPage, query });
          const url = `/api/photos/?${params}`;
          const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
          });

          const data = await response.json();

          if (!data.error) {
            if (!photos) {
              setPhotos(data.photos);
            }
          } else {
            if (!photosError) {
              throw new Error(data.error.message);
            }
          }
        } catch (error) {
          if (!photosError) {
            setPhotosError(error.message);
          }
        }
      })();
    }
  }, [photos, photosError]);

  return { photos, error: photosError };
};

export default useFetchedPhotos;
