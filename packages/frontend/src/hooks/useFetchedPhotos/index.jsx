import { useEffect, useState } from 'react';
import useFormContext from 'hooks/useFormContext';

const useFetchedPhotos = ({ query = 'nature', perPage }) => {
  const [photos, setPhotos] = useState(null);
  const [photosError, setPhotosError] = useState(null);
  const [status, setStatus] = useState('IDLE');

  const formData = useFormContext();

  const enteredQuery = formData.state.formValues.photoQuery;

  useEffect(() => {
    if (!photos && !photosError && enteredQuery !== null) {
      (async () => {
        try {
          setStatus('PENDING');
          const params = new URLSearchParams({ perPage, query });
          const url = `${process.env.REACT_APP_API_URL}/photos/?${params}`;
          const response = await fetch(url, {
            method: 'GET',
          });

          const data = await response.json();

          if (!data.error) {
            if (!photos) {
              setStatus('SUCCESS');
              setPhotos(data.photos);
            }
          } else {
            if (!photosError) {
              setStatus('ERROR');
              setPhotosError(data.error.message);
            }
          }
        } catch (error) {
          if (!photosError) {
            setStatus('ERROR');
            setPhotosError(error.message);
          }
        }
      })();
    }
  }, [photosError, status, enteredQuery, perPage, photos, query]);

  return { photos, error: photosError, status };
};

export default useFetchedPhotos;
