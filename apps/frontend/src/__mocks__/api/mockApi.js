// import { setupWorker } from 'msw/browser';
import { setupServer } from 'msw/lib/node';

import { handlers } from './handlers';

export const worker = setupServer(...handlers);
