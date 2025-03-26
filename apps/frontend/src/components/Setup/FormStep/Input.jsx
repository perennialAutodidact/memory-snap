import proptypes from '@/proptypes';

const Input = ({ register, name, errors, value, label, id, placeholder }) => {
  const hasError = errors[name];
  return (
    <label
      htmlFor={name}
      className="w-100 d-flex flex-column align-items-center"
    >
      <h3>{label}</h3>
      <input
        type="name"
        className={`form-control ${hasError ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        {...register(name)}
      />
      {hasError ? (
        <div
          aria-describedby={id}
          className={`mt-2 ${hasError ? 'invalid-feedback' : ''}`}
        >
          {errors[name].message}
        </div>
      ) : null}
    </label>
  );
};
Input.propTypes = proptypes.Form.Input;

export default Input;
