import { mockPhotos } from '@memory-snap/common/__mocks__';
import { http, HttpResponse } from 'msw';

export const fetchPhotosSuccess = http.get(
  `${import.meta.env.VITE_API_URL}/photos`,
  () => HttpResponse.json({ photos: mockPhotos }, { status: 200 }),
);

export const fetchPhotosFail400 = http.get(
  `${import.meta.env.VITE_API_URL}/photos`,
  () =>
    HttpResponse.json(
      { error: { message: 'failed to fetch photos' } },
      { status: 400 },
    ),
);

export const fetchPhotosFail500 = http.get(
  `${import.meta.env.VITE_API_URL}/photos`,
  () =>
    HttpResponse.json(
      { error: { message: 'failed to fetch photos' } },
      { status: 500 },
    ),
);

export const handlers = [
  fetchPhotosSuccess,
  fetchPhotosFail400,
  fetchPhotosFail500,
];
