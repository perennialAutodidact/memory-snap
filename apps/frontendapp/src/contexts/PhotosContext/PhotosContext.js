import { createContext } from "react";
import { LOADING_STATUSES } from "@/utils/loadingStatuses";

export const initialPhotosState = {
  error: null,
  photos: null,
  status: LOADING_STATUSES.IDLE,
  quantity: 2,
};

export const PhotosContext = createContext(initialPhotosState);
