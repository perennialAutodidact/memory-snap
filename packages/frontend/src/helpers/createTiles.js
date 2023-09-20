const shufflePhotos = (photos) => {
  let currentIndex = photos.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [photos[currentIndex], photos[randomIndex]] = [
      photos[randomIndex],
      photos[currentIndex],
    ];
  }
  return photos;
};

const createTiles = (photos) => {
  console.log(photos, 'phOTOS');

  // change this to ladash duplicate *see note
  const unshuffledPhotos = [...photos].concat(photos);
  const tilePhotos = shufflePhotos(unshuffledPhotos);
  console.log(tilePhotos, 'TILE PHOTOS');

  const tiles = [];
  //change this to use map
  tilePhotos.forEach((photo) => {
    tiles.push({
      isMatched: false,
      faceUp: false,
      photo: photo,
    });
  });
  return tiles;
};

export { createTiles };
