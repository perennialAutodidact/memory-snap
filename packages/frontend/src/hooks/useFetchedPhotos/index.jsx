import { useEffect, useState, useReducer } from 'react';
import { baseState } from 'contexts';
import { setPhotos, resetPhotos } from 'contexts/photos/actions';
import { photosReducer } from 'contexts/photos/reducer';

const useFetchedPhotos = ({ query = null, perPage }) => {
  const [photosError, setPhotosError] = useState(null);
  const [status, setStatus] = useState('IDLE');
  const initialState = baseState.photos;
  const [state, dispatch] = useReducer(photosReducer, initialState);

  const photos = state.photos;

  useEffect(() => {
    if (query === null) {
      dispatch(resetPhotos());
    }
  }, [photos, query]);

  useEffect(() => {
    if (!photos && !photosError && query !== null) {
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
              dispatch(setPhotos(data.photos));
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
  }, [photosError, photos, perPage, status, query, state]);
  return { photos, error: photosError, status };
};

export default useFetchedPhotos;
