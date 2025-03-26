import { PhotosContext } from '@/contexts';
import { useContext } from 'react';

const usePhotosContext = () => {
  const photosContext = useContext(PhotosContext);

  if (!photosContext.photosState || !photosContext.photosDispatch) {
    throw new Error(
      'Component must be rendered as a child of the PhotosProvider component',
    );
  }

  return photosContext;
};

export default usePhotosContext;
