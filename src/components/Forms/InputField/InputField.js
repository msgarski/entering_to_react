const InputField = ({ id, placeholder, type, inputChange }) => {
  return (
    <>
      <div>
        <label htmlFor={id}>{id}</label>
        <input type={type} placeholder={placeholder} onChange={inputChange} />
      </div>
    </>
  );
};

export default InputField;
