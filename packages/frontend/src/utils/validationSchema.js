import * as yup from 'yup';

export const player1Name = yup.object().shape({
  player1Name: yup.string().min(3).required("Please enter first player's name"),
});

export const player2Name = yup.object().shape({
  player2Name: yup.string().required("Please enter second player's name"),
});

export const tileNumber = yup.object().shape({
  tileNumber: yup.string().required(''),
});

export const imageSearchTerm = yup.object().shape({
  imageSearchTerm: yup
    .string()
    .min(3)
    .max(30)
    .required("please enter a word that's at least 3 letters"),
});
