import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import { baseState } from '@/contexts';
import {
  FormProvider,
  GameProvider,
  PhotosProvider,
} from '@/components/Providers';

const ProvidersWrapper = ({ children, state = baseState, route = '/' }) => (
  <MemoryRouter initialEntries={[route]}>
    <FormProvider providedState={{ ...state.form }}>
      <PhotosProvider providedState={{ ...state.photos }}>
        <GameProvider providedState={{ ...state.game }}>
          {children}
        </GameProvider>
      </PhotosProvider>
    </FormProvider>
  </MemoryRouter>
);

ProvidersWrapper.propTypes = {
  children: PropTypes.node,
  state: PropTypes.object,
  route: PropTypes.string,
};

export default ProvidersWrapper;
