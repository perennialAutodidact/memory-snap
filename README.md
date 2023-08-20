# Memory Snap
Flip tiles to find matching images. The player who finds the most pairs wins!

## Project Setup
- Run `git clone https://github.com/perennialAutodidact/memory-snap.git`
- Run
`cd memory-snap`
- Run `yarn install`
- Run `yarn start` to start the local dev server

The repo is setup to use absolute imports with the `src` as the base directory.
Any relative import that traverses more than one parent directory should be
changed to use absolute import syntax.

```javascript
// bad
import MyComponent from '../../../../components/MyComponent';

//good
import MyComponent from 'components/MyComponent';
```

## Styling
Styles are written in SCSS and are located in the `src/styles` directory. 

## Testing
Tests are written in Jest with React Testing Library. There is a helper
function
 named `setupTests` in `src/helpers/tests` which will render components
wrapped in the necessary context providers. This function should be used instead
of React Test Library's `render` function for rendering components within tests.

Run `yarn test` to start the test suite in watch mode.