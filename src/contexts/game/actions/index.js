import types from "./types";

export const setPhotos = (photos) => {
  if (!Array.isArray(photos)) throw new TypeError("photos must be an array");
  return {
    type: types.SET_PHOTOS,
    payload: { photos },
  };
};
