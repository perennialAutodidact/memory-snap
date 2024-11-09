import * as request from 'supertest';
import app from './app';
import { mockPhotos } from './__mocks__/mockPhotos';
import dotenv from 'dotenv';
import { createClient } from 'pexels';

dotenv.config({ path: '.env.local' });

describe('app', () => {
  let server;
  let agent;

  beforeEach((done) => {
    server = app.listen(4000, (error) => {
      if (error) return done();

      agent = request.agent(server);
      agent
        .set('Origin', 'http://localhost:3000')
        .set('Accept', 'application/json');
      done();
    });
  });

  afterEach(async () => {
    if (server) {
      await server.close();
    }
  });

  it('returns photos array', async () => {
    createClient.mockImplementationOnce(() => ({
      photos: {
        search: jest.fn().mockResolvedValue({ photos: mockPhotos }),
      },
    }));

    await agent
      .get('/api/photos')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ photos: mockPhotos });
      })
      .catch((error) => console.error({ error }));
  });

  it('returns error on fail', async () => {
    createClient.mockImplementationOnce(() => ({
      photos: {
        search: jest.fn().mockRejectedValueOnce({ message: 'oops!' }),
      },
    }));

    await agent
      .get('/api/photos')
      .expect(500)
      .then((response) => {
        expect(response.body).toStrictEqual({ message: 'oops!' });
      });
  });
});
