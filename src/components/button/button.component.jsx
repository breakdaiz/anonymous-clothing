import "./button.styles.scss";

const BUTTON_CLASS_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_CLASS_TYPE[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
