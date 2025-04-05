const Select = (props) => {
  return (
    <div className="mb-3">
      <lable htmlFor={props.name} className="form-lable">
        {props.title}
      </lable>
      <select
        className="form-select"
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="">{props.placeHolder}</option>
        {props.option.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
