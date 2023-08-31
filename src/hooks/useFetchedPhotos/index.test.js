import { renderHook, screen, waitFor } from '@testing-library/react';
import { mockPhotos } from 'components/__mocks__/mockPhotos';
import { createClient } from 'pexels';
import useFetchedPhotos from '.';

jest.mock('pexels');

describe('useFetchedImamges hook', () => {
  it('returns an array of fetched images', async () => {
    createClient.mockImplementation(() => ({
      photos: {
        search: jest.fn().mockReturnValue(
          new Promise((resolve) => {
            return resolve({
              photos: {
                photos: mockPhotos,
              },
            });
          })
        ),
      },
    }));

    const params = { query: 'test', perPage: 5 };
    const { result } = renderHook(() => useFetchedPhotos(params));
    await waitFor(() => {
      expect(result.current.photos.photos).toEqual(mockPhotos);
    });
  });
});
