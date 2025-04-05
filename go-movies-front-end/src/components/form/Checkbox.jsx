const CheckBox = (props) => {
  return (
    <div className="form=check">
      <input
        id={props.name}
        className="form-check-input"
        type="text"
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        checked={props.checked}
      />

      <label htmlFor={props.name} className="form-check-lable">
        {props.title}
      </label>
    </div>
  );
};

export default CheckBox;
