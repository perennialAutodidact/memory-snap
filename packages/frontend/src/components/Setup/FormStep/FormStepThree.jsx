import React from 'react';
import { useForm } from 'react-hook-form';

const FormStepThree = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Number of Tiles</label>
      <input id="number" {...register('name', { required: true, max: 20 })} />
      {errors.name && errors.name.type === 'required' && (
        <span>This is required</span>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <span>Max length exceeded</span>
      )}
      <input type="submit" />
    </form>
  );
};

export default FormStepThree;
