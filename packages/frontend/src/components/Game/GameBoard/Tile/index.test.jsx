import { setupTests } from 'helpers/tests';
import Tile from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTiles } from 'helpers';

describe('Tile component', () => {
  it('renders', () => {
    const { screen } = setupTests(Tile);
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });

  it('has alt text if faceUp is true', () => {
    const tile = createTiles(mockPhotos)[0]
    const props = {...tile, faceUp: true};
    
    const { screen } = setupTests(Tile, {props: {...props, faceUp: true}});

    expect(screen.getByAltText(props.photo.alt)).toBeInTheDocument();
  });

  it('does not have alt text if faceUp is false', () => {
    const tile = createTiles(mockPhotos)[0]
    const props = {...tile, faceUp: true};
    
    const { screen } = setupTests(Tile, {props: {...props, faceUp: false}});

    const element = screen.queryByAltText(props.photo.alt)

    expect(element).toBeNull()
    
  });
});
