import React from 'react';
import Proptypes from 'Proptypes';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import { useFormContext } from 'hooks/useFormContext';
import { useGameContext } from 'hooks/useGameContext';
import { updateForm } from 'contexts/FormContext/actions';
import { GAME_STAGES } from 'utils';
import { updateStage } from 'contexts/GameContext/actions';

const FormStep = ({
  label,
  btnText,
  FormElement,
  btnColorClass,
  name,
  schema,
  id,
}) => {
  const {
    dispatch,
    state: { currentStep, formValues },
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
      <FormElement
        value={formValues[name]}
        register={register}
        id={id}
        name={name}
        errors={errors}
      />
      <Button type="submit" text={btnText} bgColorClass={btnColorClass} />
    </form>
  );
};

FormStep.propTypes = Proptypes.Form.FormStep;

export default FormStep;
