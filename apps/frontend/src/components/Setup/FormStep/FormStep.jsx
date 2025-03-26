import proptypes from '@/proptypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
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
  placeholder,
}) => {
  const { formState, formDispatch, formActions } = useFormContext();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values: formState.values,
  });

  const onSubmit = (data) => {
    formDispatch(formActions.updateForm(data));
  };

  console.log(getValues(name));

  return (
    <div className="p-4">
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit(onSubmit)}
        aria-labelledby="form-header"
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <FormElement
                register={register}
                value={getValues(name)}
                id={id}
                name={field.name}
                errors={errors}
                label={label}
                placeholder={placeholder}
                onChange={({ value }) => setValue(name, value)}
              />
              <div className="mt-3 align-self-end">
                <Button
                  type="submit"
                  buttonText={buttonText}
                  bgColor={buttonColorClass}
                />
              </div>
            </>
          )}
        />
      </form>
    </div>
  );
};

FormStep.propTypes = proptypes.Form.FormStep;

export default FormStep;
