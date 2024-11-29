import { PhotosContext } from "@/contexts/PhotosContext";
import { useContext } from "react";

const usePhotosContext = () => {
  const context = useContext(PhotosContext);

  if (context.state === undefined && context.dispatch === undefined) {
    throw new Error(
      "Component must be rendered as a child of the PhotosProvider component",
    );
  }

  return context;
};

export default usePhotosContext;
