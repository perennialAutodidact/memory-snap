import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { PhotosContext } from 'contexts/photos';
import { baseState } from 'contexts';
import { photosReducer } from 'contexts/photos/reducer';
import useFetchedPhotos from 'hooks/useFetchedPhotos';
import useFormContext from 'hooks/useFormContext';
import { setError, setPhotos, setStatus } from 'contexts/photos/actions';

const PhotosProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.photos;
  const [state, dispatch] = useReducer(photosReducer, initialState);

  const formData = useFormContext();

  // TODO: add 'loading' value to indicate if the photos have loaded from the api
  const { error, photos, status } = useFetchedPhotos({
    query: formData.state.formValues.photoQuery,
    perPage: formData.state.formValues.numberOfTiles,
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

PhotosProvider.propTypes = {
  children: PropTypes.node.isRequired,
  providedState: PropTypes.object,
};

export default PhotosProvider;
