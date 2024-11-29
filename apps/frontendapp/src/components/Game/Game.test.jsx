import {
  createSetupTestsForRoute,
  GAME_STAGES,
  LOADING_STATUSES,
} from "@/utils";
import Game from "./Game";
import { produce } from "immer";
import { baseState } from "@/contexts";
import { mswServer } from "@/__mocks__/api";
import { fetchPhotos_success } from "@/__mocks__/api/handlers";
import { mockPhotos } from "@memory-snap/common/__mocks__";

const setupTests = createSetupTestsForRoute("/play");
describe("Game component", () => {
  // let defaultWindowLocation = window.location;

  beforeEach(() => {
    // delete window.location;
    // window.location = { href: 'http://localhost' };
  });

  afterEach(() => {
    // window.location = defaultWindowLocation;
  });

  it("renders", async () => {
    mswServer.use(fetchPhotos_success);

    const state = produce(baseState, (draft) => {
      draft.form.formValues.query = "test";
      draft.photos.status = LOADING_STATUSES.SUCCESS;
      draft.photos.photos = mockPhotos;
      draft.game.stage = GAME_STAGES.PLAYING;
    });

    const { screen } = await setupTests(Game, { state });
    expect(screen.getByLabelText("memory snap game")).toBeInTheDocument();
  });
});
