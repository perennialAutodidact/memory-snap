import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { PhotosContext } from 'contexts/photos';
import { baseState } from 'contexts';
import { photosReducer } from 'contexts/photos/reducer';
import useFetchedPhotos from 'hooks/useFetchedPhotos';
import { setPhotos, setStatus } from 'contexts/photos/actions';

const PhotosProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.photos;
  const [state, dispatch] = useReducer(photosReducer, initialState);

  // TODO: add 'loading' value to indicate if the photos have loaded from the api
  const { photos, status } = useFetchedPhotos({ query: 'cats', perPage: 3 });

  useEffect(() => {
    console.log('photos provider:', { status });
    dispatch(setStatus(status));
    if (photos) {
      dispatch(setPhotos(photos));
    }
  }, [photos, status]);

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
