import * as yup from 'yup';

export const StepOne = yup.object().shape({
  Step_1: yup.string().required("Please enter first player's name"),
});

export const StepTwo = yup.object().shape({
  Step_2: yup.string().required("Please enter second player's name"),
});

export const StepThree = yup.object().shape({
  Step_3: yup.string().required(''),
});

export const StepFour = yup.object().shape({
  Step_4: yup
    .string()
    .min(3)
    .max(30)
    .required("please enter a word that's at least 3 letters"),
});
