import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const Authentication = () => {
  return (
    <div>
      <h2>Sign In Page</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
