import * as yup from 'yup';

const schema = yup.object().shape({
  playerOneName: yup.string().min(1).max(30).required(),
});
