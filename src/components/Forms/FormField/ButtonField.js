const ButtonField = ({
  id = "",
  type = "button",
  inputChange,
  value = "",
  className,
}) => {
  return (
    <>
      <span className={className}>
        <button type={type} className="btn" onClick={inputChange} value={value}>
          {">"}
        </button>
      </span>
    </>
  );
};

export default ButtonField;
