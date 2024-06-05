/**
 * takes an array of players and the playerIndex
 * @param {Number} currentStep the current form step
 * @returns the current form step incremented by one
 */
const advanceStep = currentStep => {
  return currentStep + 1;
};

export { advanceStep };
