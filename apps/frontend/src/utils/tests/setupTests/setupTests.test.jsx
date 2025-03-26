import { setupTests, ui } from '@/utils/tests';
import { useGameContext } from '@/hooks/useGameContext';
import { useFormContext } from '@/hooks/useFormContext';
import { usePhotosContext } from '@/hooks/usePhotosContext';
import { useLocation } from 'react-router-dom';

describe('test setup helper functions', () => {
  const TestComponent = () => {
    const location = useLocation();
    const { formState } = useFormContext();
    const { photosState } = usePhotosContext();
    const { gameState } = useGameContext();
    return (
      <div data-testid="testComponent">
        <div data-testid="stateDisplay">
          {JSON.stringify({
            form: formState,
            photos: photosState,
            game: gameState,
          })}
        </div>
        <div data-testid="locationDisplay">{location.pathname}</div>
      </div>
    );
  };

  describe('setupTests()', () => {
    it('renders a component wrapped in context providers', async () => {
      setupTests(TestComponent);

      const stateDisplay = ui.testComponent.stateDisplay.get();

      expect(stateDisplay).toBeInTheDocument();
    });
  });
});
