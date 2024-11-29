import React from "react";
import { renderHook } from "@testing-library/react";
import usePhotosContext from "./usePhotosContext";
import { FormProvider, PhotosProvider } from "@/components/Providers";
import { baseState } from "@/contexts";
import { mockPhotos } from "@memory-snap/common/__mocks__";

describe("usePhotosContext hook", () => {
  /* eslint-disable no-console */
  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });
  /* eslint-enable no-console */

  it("throws an error if not wrapped in necessary context providers", () => {
    expect(() => renderHook(usePhotosContext)).toThrow();
  });

  it("renders component without error when wrapped in necessary context providers", () => {
    // eslint-disable-next-line react/prop-types
    const Providers = ({ children }) => (
      <FormProvider providedState={{ ...baseState.form }}>
        <PhotosProvider
          providedState={{ ...baseState.photos, photos: mockPhotos }}
        >
          {children}
        </PhotosProvider>
      </FormProvider>
    );

    expect(() =>
      renderHook(usePhotosContext, { wrapper: Providers }),
    ).not.toThrow();
  });
});
