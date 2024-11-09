import { createSetupTestsForRoute } from 'utils/tests';
import Game from './Game';
import { produce } from 'immer';
import { baseState } from 'contexts';
import { GAME_STAGES } from 'utils';
import { LOADING_STATUSES } from 'utils/loadingStatuses';
import { mswServer } from '__mocks__/api';
import { fetchPhotos_success } from '__mocks__/api/handlers';
import { mockPhotos } from '__mocks__/api/mockPhotos';

const setupTests = createSetupTestsForRoute('/play');
describe('Game component', () => {
  // let defaultWindowLocation = window.location;

  beforeEach(() => {
    // delete window.location;
    // window.location = { href: 'http://localhost' };
  });

  afterEach(() => {
    // window.location = defaultWindowLocation;
  });

  it('renders', async () => {
    mswServer.use(fetchPhotos_success);

    const state = produce(baseState, draft => {
      draft.form.formValues.query = 'test';
      draft.photos.status = LOADING_STATUSES.SUCCESS;
      draft.photos.photos = mockPhotos;
      draft.game.stage = GAME_STAGES.PLAYING;
    });

    const { screen } = await setupTests(Game, { state });
    expect(screen.getByLabelText('memory snap game')).toBeInTheDocument();
  });
});
