import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import useFormContext from 'hooks/useFormContext';
import useGameContext from 'hooks/useGameContext';
import { updateForm } from 'contexts/form/actions';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { GAME_STAGES } from 'utils';
import { updateStage } from 'contexts/game/actions';

const FormStep = ({ label, btnText, FormElement, btnColor, name, schema }) => {
  const {
    dispatch,
    state: { currentStep },
  } = useFormContext();

  const gameValues = useGameContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    dispatch(updateForm(data));
    reset();
    if (currentStep === 4) {
      gameValues.dispatch(updateStage(GAME_STAGES.PLAYING));
    } else {
      navigate(`/setup/step-${currentStep + 1}`);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>{label}</h3>
      <FormElement register={register} name={name} ref={null} />
      <p>{errors.player1Name?.message}</p>
      <p>{errors.player2Name?.message}</p>
      <p>{errors.tileNumber?.message}</p>
      <p>{errors.searchTerm?.message}</p>
      <Button type="submit" text={btnText} color={btnColor} />
    </form>
  );
};

FormStep.propTypes = {
  label: PropTypes.string,
  btnText: PropTypes.string,
  FormElement: PropTypes.func,
  btnColor: PropTypes.string,
  schema: PropTypes.object,
  name: PropTypes.string,
};

export default FormStep;
