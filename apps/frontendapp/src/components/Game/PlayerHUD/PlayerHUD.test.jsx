import { setupTests, ui } from "@/utils";
import PlayerHUD from "./PlayerHUD";
import { baseState } from "@/contexts";
import { produce } from "immer";

const defaultProps = {
  player: baseState.game.currentPlayer,
  isActive: true,
};

const {
  game: {
    scoreBoard: { player },
  },
} = ui;

describe("PlayerHUD component", () => {
  it("renders player name and score from props", () => {
    const props = { ...defaultProps };
    setupTests(PlayerHUD, { props });

    const playerName = player.name(props.player).get();
    const playerScore = player.HUD(props.player).get();

    expect(playerName).toBeInTheDocument();
    expect(playerName).toHaveTextContent(props.player.name);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore).toHaveTextContent(props.player.score);
  });

  it("indicates the active player", () => {
    const props = {
      player: baseState.game.players[0],
      isActive: true,
    };
    setupTests(PlayerHUD, { props });

    const turnIndicator = player.turnIndicator(props.player).get();
    const activePlayerScore = player.score(props.player).get();

    expect(turnIndicator).toHaveTextContent("Player 1");
    expect(activePlayerScore).toHaveClass("active");
  });
});
