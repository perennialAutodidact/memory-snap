import { setPhotos } from ".";
import { mockPhotos } from "__mocks__/mockPhotos";

describe("GameContext action creator functions", () => {
  describe("setPhotos", () => {
    it("returns an action object with an array of photos", () => {
      expect(setPhotos());
    });

    it("throws an error if no photos array is passed", () => {
      expect(() => setPhotos()).toThrow();
    });
  });
});
