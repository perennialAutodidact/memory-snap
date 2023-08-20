## Components
### Tile
The Tile component will be rendered for each Tile in the game. Each Tile will have a "back", which will render as a plain color, and a "front", which will render the Tile's image. Based on the value of the component's faceUp prop, either the back or the front will be rendered. The logic for toggling the faceUp boolean will be managed in a parent component.

The Tile component will receive props:

- `image`: **object** - Data about the image to be displayed on the Tile
  - `src`: **string** - url of the image
  - `altText`: **string** - alt text for the image should contain some kind of human-readable, unique identification for accessibilty
  - `size`: **number** - pixel amount to be used as height and width for the image. The image may have a container, but ideally the container add any additional width or height.

- `faceUp`: **boolean** - indicates if the Tile is face up or face down

- `toggleFaceUp`: **function** - This can just be an empty function for now. () => {}, but will eventually be used to change the faceUp boolean within the GameContext

