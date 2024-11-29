import { rest } from 'msw';

export const handlers = [
  rest.get('/photos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'success' }));
  }),
];
