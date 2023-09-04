import { useEffect, useState } from 'react';
const useFetchedPhotos = ({ query = 'nature', perPage }) => {
  const [photos, setPhotos] = useState(undefined);
  const [photosError, setPhotosError] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const url = `${process.env.REACT_APP_BACKEND_API_URL}/photos/?`;
        const params = new URLSearchParams({ perPage, query });
        const response = await fetch(url + params, {
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
  }, [photos, photosError]);

  return { photos, error: photosError };
};

export default useFetchedPhotos;
