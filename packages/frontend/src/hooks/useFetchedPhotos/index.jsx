// import { useEffect, useState } from 'react';
import { useEffect } from 'react';

// const useFetchedPhotos = ({ query = 'nature', perPage }) => {
const useFetchedPhotos = () => {
  // const [photos, setPhotos] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/', {
          method: 'GET',
        });
        console.log({ response });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return {};
};

export default useFetchedPhotos;
