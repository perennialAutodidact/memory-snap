import { renderHook, waitFor } from '@testing-library/react';
import { mockPhotos } from '@memory-snap/common/__mocks__/mockPhotos';
import { mswServer } from '@/__mocks__/api';
import { LOADING_STATUSES } from '@/utils';
import {
  fetchPhotosSuccess,
  fetchPhotosFail400,
  fetchPhotosFail500,
} from '@/__mocks__/api/handlers';
import useFetchedPhotos from './useFetchedPhotos';
import { ProvidersWrapper } from '@/utils';

const { PENDING, SUCCESS, FAIL } = LOADING_STATUSES;

describe('useFetchedPhotos hook', () => {
  let consoleError = console.error;

  beforeEach(() => {
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = consoleError;
  });

  it('returns an array of fetched images', async () => {
    mswServer.use(fetchPhotosSuccess);

    const params = { imageSearchQuery: 'test', perPage: 5 };
    const { result } = renderHook(() => useFetchedPhotos(params));

    expect(result.current.fetchedPhotosStatus).toBe(PENDING);
    await waitFor(() => {
      expect(result.current.fetchedPhotos).toStrictEqual(mockPhotos);
      expect(result.current.fetchedPhotosStatus).toBe(SUCCESS);
    });
  });

  it('returns an error if the request fails with a status code of 400', async () => {
    mswServer.use(fetchPhotosFail400);

    const params = { imageSearchQuery: 'test', perPage: 5, photos: null };
    const { result } = renderHook(() => useFetchedPhotos(params));

    expect(result.current.fetchedPhotosStatus).toBe(PENDING);
    await waitFor(() => {
      expect(result.current.fetchedPhotosError).toBe('Bad Request');
      expect(result.current.fetchedPhotosStatus).toBe(FAIL);
    });
  });

  it('returns an error if the request fails with a status of 500', async () => {
    mswServer.use(fetchPhotosFail500);

    const params = { imageSearchQuery: 'test', perPage: 5, photos: null };
    const { result } = renderHook(() => useFetchedPhotos(params), {
      wrapper: ProvidersWrapper,
    });

    expect(result.current.fetchedPhotosStatus).toBe(PENDING);
    await waitFor(() => {
      expect(result.current.fetchedPhotosError).toBe('Internal Server Error');
      expect(result.current.fetchedPhotosStatus).toBe(FAIL);
    });
  });
});
