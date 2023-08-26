import React, { useState } from "react";
import { act, screen, waitFor } from "@testing-library/react";
import { setupTests } from "helpers/tests";
import useFetchedPhotos from ".";

const Component = () => {
  const { photos } = useFetchedPhotos();
  console.log({ photos });
  return <div data-testid="photos">{JSON.stringify(photos)}</div>;
};

describe("useFetchedImamges hook", () => {
  it("returns an array of fetched images", async () => {
    await act(async () => setupTests(Component));
    await waitFor(async () => {
      screen.debug(await screen.findByTestId("photos"));
    });
  });
});
