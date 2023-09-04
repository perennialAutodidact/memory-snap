import { mockPhotos } from '__mocks__/api/mockPhotos';
import { rest } from 'msw';

export const fetchPhotos_success = rest.get(
  process.env.REACT_APP_API_URL + '/photos',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ photos: mockPhotos }));
  }
);

export const fetchPhotos_fail = rest.get(
  process.env.REACT_APP_API_URL + '/photos',
  (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: { message: 'failed to fetch photos' } })
    );
  }
);

export const handlers = [fetchPhotos_success, fetchPhotos_fail];
