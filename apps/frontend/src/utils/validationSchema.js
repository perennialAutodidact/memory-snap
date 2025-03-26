import * as yup from 'yup';

const player1Name = yup.object().shape({
  player1Name: yup
    .string()
    .min(3, 'Please enter at least three characters')
    .required('Please enter a name'),
});

const player2Name = yup.object().shape({
  player2Name: yup
    .string()
    .min(3, 'Please enter at least three characters')
    .required('Please enter a name'),
});

const tileQuantity = yup.object().shape({
  tileQuantity: yup.string(),
});

const imageSearchQuery = yup.object().shape({
  imageSearchQuery: yup
    .string()
    .min(3, 'Please enter at least three characters')
    .max(30, 'Please enter less than thirty characters')
    .required('Please enter at least three characters'),
});

export const validationSchema = {
  player1Name,
  player2Name,
  tileQuantity,
  imageSearchQuery,
};
