import {
  createSetupTestsForRoute,
  GAME_STAGES,
  LOADING_STATUSES,
} from '@/utils';
import Game from './Game';
import { produce } from 'immer';
import { baseState } from '@/contexts';
import { mswServer } from '@/__mocks__/api';
import { fetchPhotosSuccess } from '@/__mocks__/api/handlers';
import { mockPhotos } from '@memory-snap/common/__mocks__';

const setupTests = createSetupTestsForRoute('/play');
describe('Game component', () => {
  it('renders', async () => {
    mswServer.use(fetchPhotosSuccess);

    const state = produce(baseState, (draft) => {
      draft.form.values.query = 'test';
      draft.photos.status = LOADING_STATUSES.SUCCESS;
      draft.photos.photos = mockPhotos;
      draft.gamecurrentStage = GAME_STAGES.PLAYING;
    });

    const { screen } = await setupTests(Game, { state });
    expect(screen.getByLabelText('memory snap game')).toBeInTheDocument();
  });
});
