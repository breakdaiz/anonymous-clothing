import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value, name } = event.target;
    // console.log("name", name);
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetForm();
      //   console.log("response:", email, password);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user!, email already in used!");
      } else {
        console.log("error", error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account yet? </h2>
      <span>Signup with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Signup</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
