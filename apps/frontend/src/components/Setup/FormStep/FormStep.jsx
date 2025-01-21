import proptypes from '@/proptypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import { useFormContext } from '@/hooks/useFormContext';

const FormStep = ({
  label,
  buttonText,
  FormElement,
  buttonColorClass,
  name,
  schema,
  id,
}) => {
  const {
    formState: { values },
    formDispatch,
    formActions,
  } = useFormContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    formDispatch(formActions.updateForm(data));
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} aria-labelledby="form-header">
        <FormElement
          value={values[name]}
          register={register}
          id={id}
          name={name}
          errors={errors}
          label={label}
        />
        <Button
          type="submit"
          buttonText={buttonText}
          bgColor={buttonColorClass}
        />
      </form>
    </>
  );
};

FormStep.propTypes = proptypes.Form.FormStep;

export default FormStep;
