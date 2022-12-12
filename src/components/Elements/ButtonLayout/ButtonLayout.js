const CustomButton = ({ type = "button", text, handleSort }) => {
  return (
    <div>
      <button type={type} onClick={handleSort}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
