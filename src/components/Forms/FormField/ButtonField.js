const ButtonField = ({ id = "", type = "button", inputChange, value = "" }) => {
  return (
    <>
      <div>
        <button type={type} onClick={inputChange} value={value}>
          by {value}
        </button>
      </div>
    </>
  );
};

export default ButtonField;
