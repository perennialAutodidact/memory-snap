import { useEffect, useState, useReducer } from "react";
import { GAME_STAGES, LOADING_STATUSES } from "@/utils";
import { gameReducer } from "@/contexts/GameContext/reducer";
import { baseState } from "@/contexts";

const useFetchedPhotos = ({ imageSearchQuery = null, perPage }) => {
  const [photos, setPhotos] = useState(null);
  const [photosError, setPhotosError] = useState(null);
  const [status, setStatus] = useState(LOADING_STATUSES.IDLE);
  const [gameState] = useReducer(gameReducer, baseState.game);

  useEffect(() => {
    if (gameState.stage === GAME_STAGES.SETUP) {
      setPhotos(null);
    }
  }, [gameState.stage]);

  useEffect(() => {
    // if (!photos.length && !photosError && imageSearchQuery !== null) {
    if (!photos && !photosError && imageSearchQuery !== null) {
      (async () => {
        try {
          setStatus(LOADING_STATUSES.PENDING);
          const params = new URLSearchParams({ perPage, imageSearchQuery });
          const url = `${import.meta.env.VITE_API_URL}/photos/?${params}`;
          const response = await fetch(url, {
            method: "GET",
          });

          console.log("ok:", response.ok);
          setStatus(LOADING_STATUSES.IDLE);
          if (!response.ok) throw new Error(response.statusText);
          const data = await response.json();

          if (!data.error) {
            if (!photos) {
              setStatus(LOADING_STATUSES.SUCCESS);
              setPhotos(data.photos);
            }
          } else {
            if (!photosError) {
              setStatus(LOADING_STATUSES.ERROR);
              setPhotosError(data.error.message);
            }
          }
        } catch (error) {
          console.error(error);
          if (!photosError) {
            setStatus(LOADING_STATUSES.ERROR);
            setPhotosError(error.message);
          }
        }
      })();
    }
  }, [photosError, photos, perPage, status, imageSearchQuery]);
  return { photos, error: photosError, status };
};

export default useFetchedPhotos;
