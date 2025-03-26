import {
  useFetchedPhotos,
  useFormContext,
  useGameContext,
  usePhotosContext,
} from '@/hooks';
import { useLocation } from 'react-router-dom';

const TestComponent = () => {
  const location = useLocation();
  const { state: formState } = useFormContext();
  const { state: photosState } = usePhotosContext();
  const { state: gameState } = useGameContext();
  const params = { imageSearchQuery: 'test', perPage: 5 };
  const { photos, error, status } = useFetchedPhotos(params);

  return (
    <div data-testid="testComponent">
      <div data-testid="appState">
        {JSON.stringify({
          form: formState,
          photos: photosState,
          game: gameState,
        })}
      </div>
      <div data-testid="fetchedPhotos">
        <div data-testid="photos">{JSON.stringify(photos)}</div>
        <div data-testid="error">{JSON.stringify(error)}</div>
        <div data-testid="status">{JSON.stringify(status)}</div>
      </div>
      <div data-testid="locationDisplay">{location.pathname}</div>
    </div>
  );
};

export default TestComponent;
