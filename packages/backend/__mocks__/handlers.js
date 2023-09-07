import { rest } from 'msw';
import { mockPhotos } from './mockPhotos';

export const handlers = [
  rest.get('/photos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'success' }));
  }),
];
