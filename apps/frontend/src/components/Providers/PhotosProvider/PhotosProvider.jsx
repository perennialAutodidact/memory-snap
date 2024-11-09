import React, { useEffect, useReducer } from 'react';
import { PhotosContext } from 'contexts/PhotosContext';
import { baseState } from 'contexts';
import { photosReducer } from 'contexts/PhotosContext/reducer';
import useFetchedPhotos from 'hooks/useFetchedPhotos/useFetchedPhotos';
import { useFormContext } from 'hooks/useFormContext';
import { setError, setPhotos, setStatus } from 'contexts/PhotosContext/actions';
import Proptypes from 'Proptypes';

const PhotosProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.photos;
  const [state, dispatch] = useReducer(photosReducer, initialState);

  const {
    state: { formValues },
  } = useFormContext();

  const { error, photos, status } = useFetchedPhotos({
    imageSearchQuery: formValues.imageSearchQuery,
    perPage: formValues.tileNumber / 2,
    photos: state.photos,
  });

  useEffect(() => {
    dispatch(setStatus(status));
    if (photos) dispatch(setPhotos(photos));
    if (error) dispatch(setError(error));
  }, [error, photos, status]);

  return (
    <PhotosContext.Provider value={{ state, dispatch }}>
      {children}
    </PhotosContext.Provider>
  );
};

PhotosProvider.propTypes = Proptypes.App.Providers.PhotosProvider;

export default PhotosProvider;
