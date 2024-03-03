import { renderHook, waitFor } from '@testing-library/react';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { mswServer } from '__mocks__/api';
import { fetchPhotos_success, fetchPhotos_fail } from '__mocks__/api/handlers';
import useFetchedPhotos from '.';

describe('useFetchedImamges hook', () => {
  it('returns an array of fetched images', async () => {
    mswServer.use(fetchPhotos_success);

    const params = { query: 'test', perPage: 5 };
    const { result } = renderHook(() => useFetchedPhotos(params));
    await waitFor(() => {
      expect(result.current.photos).toStrictEqual(mockPhotos);
    });
  });

  it('returns an error if the request fails', async () => {
    mswServer.use(fetchPhotos_fail);

    const params = { query: 'test', perPage: 5 };
    const { result } = renderHook(() => useFetchedPhotos(params));
    await waitFor(() => {
      expect(result.current.error).toBe('failed to fetch photos');
    });
  });
});
