import React, { useEffect, useReducer } from 'react';
import { PhotosContext } from '@/contexts/PhotosContext';
import { baseState } from '@/contexts';
import useFetchedPhotos from '@/hooks/useFetchedPhotos/useFetchedPhotos';
import { useFormContext } from '@/hooks/useFormContext';
import proptypes from '@/proptypes';

const PhotosProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.photos;
  const [photosState, photosDispatch] = useReducer(
    PhotosContext.reducer,
    initialState,
  );
  const { photosActions } = PhotosContext;

  const {
    formState: {
      values: { imageSearchQuery, tileQuantity },
    },
  } = useFormContext();

  const { fetchedPhotosError, fetchedPhotos, fetchedPhotosStatus } =
    useFetchedPhotos({
      imageSearchQuery: imageSearchQuery,
      perPage: tileQuantity / 2,
    });

  console.log({ fetchedPhotosStatus });

  useEffect(() => {
    photosDispatch(photosActions.setPhotosStatus(fetchedPhotosStatus));
    if (fetchedPhotos) {
      photosDispatch(photosActions.setPhotos(fetchedPhotos));
    }
    if (fetchedPhotosError) {
      photosDispatch(photosActions.setPhotosError(fetchedPhotosError));
    }
  }, [fetchedPhotosError, fetchedPhotos, fetchedPhotosStatus]);

  return (
    <PhotosContext.Provider
      value={{ photosActions, photosState, photosDispatch }}
    >
      {children}
    </PhotosContext.Provider>
  );
};

PhotosProvider.propTypes = proptypes.App.Providers.PhotosProvider;

export default PhotosProvider;
