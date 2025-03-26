import { useEffect, useState } from 'react';
import { LOADING_STATUSES } from '@/utils/loadingStatuses';
import { isDevEnv } from '@/utils/tests';
import { mockPhotos } from '@memory-snap/common/__mocks__';

const { IDLE, PENDING, SUCCESS, FAIL } = LOADING_STATUSES;

const useFetchedPhotos = ({ imageSearchQuery, perPage }) => {
  const [photos, setPhotos] = useState(null);
  const [photosError, setPhotosError] = useState(null);
  const [status, setPhotosStatus] = useState(IDLE);
  const useTestData = isDevEnv(import.meta.env);

  useEffect(() => {
    if (!photos && useTestData) {
      const tileQuantity = Number(import.meta.env.VITE_TILE_QUANTITY);
      let initialPhotos = null;
      initialPhotos = [];
      let i = 0;
      while (i < tileQuantity / 2) {
        initialPhotos.push(mockPhotos[i % mockPhotos.length]);
        i++;
      }
      setPhotos(initialPhotos);
    } else if (imageSearchQuery && !photos && !photosError && status === IDLE) {
      (async () => {
        if (status === FAIL) throw new Error(photosError);
        try {
          setPhotosStatus(PENDING);
          const params = new URLSearchParams({ perPage, imageSearchQuery });
          const url = `${import.meta.env.VITE_API_URL}/photos/?${params}`;
          const response = await fetch(url, {
            method: 'GET',
          });
          const data = await response.json();

          if (!response.ok) {
            setPhotosStatus(FAIL);
            setPhotosError(response.statusText);
          } else {
            if (!data.error && !photos) {
              setPhotosStatus(SUCCESS);
              setPhotos(data.photos);
            } else {
              setPhotosStatus(FAIL);
              if (!photosError) {
                setPhotosError(data.error.message);
              }
            }
          }
        } catch (error) {
          console.error({ error });
          if (!photosError) {
            setPhotosError(error.message);
          }
        }
      })();
    }
  }, [photosError, photos, perPage, status, imageSearchQuery]);

  return {
    fetchedPhotos: photos,
    fetchedPhotosError: photosError,
    fetchedPhotosStatus: status,
  };
};

export default useFetchedPhotos;
