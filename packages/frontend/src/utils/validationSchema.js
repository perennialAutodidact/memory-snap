import * as yup from 'yup';

export const player1Name = yup.object().shape({
  player1Name: yup
    .string()
    .min(3, 'Please enter at least three characters')
    .required(),
});

export const player2Name = yup.object().shape({
  player2Name: yup
    .string()
    .min(3, 'Please enter at least three characters')
    .required(),
});

export const tileNumber = yup.object().shape({
  tileNumber: yup.string().required(''),
});

export const imageSearchTerm = yup.object().shape({
  imageSearchTerm: yup
    .string()
    .min(3, "Please enter a word that's at least 3 letters")
    .max(30, "Please enter a word that's less than 30 letters")
    .required("Please enter a word that's at least 3 letters"),
});
