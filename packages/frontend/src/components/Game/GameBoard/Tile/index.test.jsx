import { setupTests } from 'helpers/tests';
import Tile from '.';

describe('Tile component', () => {
  it('renders', () => {
    const { screen } = setupTests(Tile);
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });
});
