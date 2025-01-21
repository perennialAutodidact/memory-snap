import proptypes from '@/proptypes';

const Input = ({ register, name, errors, value, label, id }) => {
  return (
    <label htmlFor={name}>
      <h3>{label}</h3>
      <input
        type="name"
        className="form-control"
        placeholder="enter name"
        defaultValue={value}
        id={id}
        {...register(name)}
      />
      <p>{errors[name]?.message}</p>
    </label>
  );
};
Input.propTypes = proptypes.Form.Input;

export default Input;
