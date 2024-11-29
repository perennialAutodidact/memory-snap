import React from "react";
import { produce } from "immer";
import { setupTests, createSetupTestsForRoute, ui } from "@/utils";
import { LOADING_STATUSES } from "@/utils/loadingStatuses";
import { useGameContext } from "@/hooks/useGameContext";
import { useFormContext } from "@/hooks/useFormContext";
import { usePhotosContext } from "@/hooks/usePhotosContext";
import { baseState } from "@/contexts";

describe("test setup helper functions", () => {
  const TestComponent = () => {
    const { state: formState } = useFormContext();
    const { state: photosState } = usePhotosContext();
    const { state: gameState } = useGameContext();
    return (
      <div data-testid="testComponent">
        {JSON.stringify({
          form: formState,
          photos: photosState,
          game: gameState,
        })}
      </div>
    );
  };

  describe("setupTests()", () => {
    it("renders a component wrapped in context providers", () => {
      const expectedPostRenderState = produce(baseState, (draft) => {
        draft.photos.status = LOADING_STATUSES.PENDING;
      });

      setupTests(TestComponent);

      const testComponent = ui.test.component.get();
      const componentState = JSON.parse(testComponent.textContent);

      expect(testComponent).toBeInTheDocument();
      expect(componentState).toStrictEqual(expectedPostRenderState);
    });
  });

  describe("createSetupTestsForRoute()", () => {
    it("returns a setupTests component for a designated route", () => {
      const testRoute = "/test-route";
      const setupTestsForTestRoute = createSetupTestsForRoute(testRoute);

      setupTestsForTestRoute(TestComponent);

      console.log(window.history);
    });
  });
});
