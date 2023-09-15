import { useEffect, useState } from 'react';
const useFetchedPhotos = ({ query = 'nature', perPage }) => {
  const [photos, setPhotos] = useState(undefined);
  const [photosError, setPhotosError] = useState(undefined);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!photos && !photosError) {
      (async () => {
        try {
          setStatus('pending');
          const url = `${process.env.REACT_APP_API_URL}/photos/?`;
          const params = new URLSearchParams({ perPage, query });
          const response = await fetch(url + params, {
            method: 'GET',
            mode: 'cors',
          });

          const data = await response.json();

          if (!data.error) {
            if (!photos) {
              setStatus('success');
              setPhotos(data.photos);
            }
          } else {
            if (!photosError) {
              setStatus('error');
              throw new Error(data.error.message);
            }
          }
        } catch (error) {
          if (!photosError) {
            setStatus('error');
            setPhotosError(error.message);
          }
        }
      })();
    }
  }, [photos, photosError, status]);

  return { photos, error: photosError, status };
};

export default useFetchedPhotos;
