import { setupTests } from 'helpers/tests';
import Tile from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers';
import userEvent from '@testing-library/user-event'

describe('Tile component', () => {
  it('renders', () => {
    const { screen } = setupTests(Tile);
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });

  it('has alt text if faceUp is true', () => {
    const tile = createTilesFromPhotos(mockPhotos, true)[0]
    const props = {...tile, faceUp: true};
    
    const { screen } = setupTests(Tile, {props: {...props, faceUp: true}});

    expect(screen.getByAltText(props.photo.alt)).toBeInTheDocument();
  });

  it('does not have alt text if faceUp is false', () => {
    const tile = createTilesFromPhotos(mockPhotos, true)[0]
    const props = {...tile, faceUp: true};
    
    const { screen } = setupTests(Tile, {props: {...props, faceUp: false}});

    const element = screen.queryByAltText(props.photo.alt)

    expect(element).not.toBeInTheDocument()
    
  });

  it('calls onFlip when clicked', async () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    
    const user = userEvent.setup()

    const onFlip = jest.fn();

    const {screen} = setupTests(Tile, { props: {...tile, onFlip } });

    await user.click(screen.getByTestId(/tile/));

    expect(onFlip).toHaveBeenCalledTimes(1); 
    
  })
});
