import { renderHook, waitFor } from '@testing-library/react';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { mswServer } from '__mocks__/api';
import {
  fetchPhotos_success,
  fetchPhotos_fail_400,
  fetchPhotos_fail_500,
} from '__mocks__/api/handlers';
import useFetchedPhotos from './useFetchedPhotos';

describe('useFetchedImamges hook', () => {
  let defaultWindowLocation = window.location;
  let consoleError = console.error;

  beforeEach(() => {
    delete window.location;
    window.location = { href: 'http://localhost' };

    console.error = jest.fn();
  });

  afterEach(() => {
    window.location = defaultWindowLocation;
    console.error = consoleError;
  });

  it('returns an array of fetched images', async () => {
    mswServer.use(fetchPhotos_success);

    const params = { query: 'test', perPage: 5, photos: mockPhotos };
    const { result } = renderHook(() => useFetchedPhotos(params));
    await waitFor(() => {
      expect(result.current.photos).toStrictEqual(mockPhotos);
    });
  });

  it('returns an error if the request fails', async () => {
    mswServer.use(fetchPhotos_fail_400);
    const params = { query: 'test', perPage: 5, photos: null };

    const { result: result400 } = renderHook(() => useFetchedPhotos(params));
    await waitFor(() => {
      expect(result400.current.error).toBe('Bad Request');
    });

    mswServer.use(fetchPhotos_fail_500);
    const { result: result500 } = renderHook(() => useFetchedPhotos(params));
    await waitFor(() => {
      expect(result500.current.error).toBe('Internal Server Error');
    });
  });
});
