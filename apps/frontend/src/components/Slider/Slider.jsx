import proptypes from '@/proptypes';

const Slider = ({ register, name, value, label, onChange }) => {
  return (
    <label
      htmlFor={name}
      className="w-100 d-flex flex-column align-items-center"
    >
      <h3>{label}</h3>
      <h2>{value}</h2>
      <input
        type="range"
        min="8"
        max="32"
        className="form-range"
        id={name}
        step="2"
        defaultValue={value}
        onChange={onChange}
        autoFocus={true}
        {...register(name)}
      />
    </label>
  );
};

Slider.propTypes = proptypes.Form.Slider;

export default Slider;
