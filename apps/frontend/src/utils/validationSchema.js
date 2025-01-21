import * as yup from 'yup';

const player1Name = yup.object().shape({
  player1Name: yup.string().min(3).required("Please enter first player's name"),
});

const player2Name = yup.object().shape({
  player2Name: yup.string().required("Please enter second player's name"),
});

const tileQuantity = yup.object().shape({
  tileQuantity: yup.string().required(''),
});

const imageSearchQuery = yup.object().shape({
  imageSearchQuery: yup
    .string()
    .min(3)
    .max(30)
    .required("please enter a word that's at least 3 letters"),
});

export const validationSchema = {
  player1Name,
  player2Name,
  tileQuantity,
  imageSearchQuery,
};
