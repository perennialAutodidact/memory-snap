import { setupTests } from 'helpers/tests';
import Tile from '.';

describe('Tile component', () => {
  it('renders', () => {
    const { screen } = setupTests(Tile);
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });

  it('renders', () => {
    const { screen } = setupTests(Tile);
    const tileDiv = screen.toHaveClass('faceDown')
    expect(screen.getByText('faceDown')).toBeInTheDocument();
  });
});
