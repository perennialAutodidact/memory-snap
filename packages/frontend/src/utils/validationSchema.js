import * as yup from 'yup';

const schema = yup.object().shape({
  playerNames: yup
    .array()
    .of(yup.string().required().min(1).max(30))
    .required()
    .min(2)
    .max(2),
  numberOfTiles: yup.number().required().min(2).max(16),
  photoQuery: yup.string().required().min(2).max(30),
});

export default schema;
