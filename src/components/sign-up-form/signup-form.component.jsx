import React from "react";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = event => {
    const { value, name } = event;
    console.log("name", name);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Signup with your email and password </h1>
      <form onSubmit={() => {}}>
        <label> Display Name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <label> Email </label>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        ></input>
        <label> Password </label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        ></input>
        <label> Confirm Password </label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        ></input>
        <button type='submit'> Signup</button>
      </form>
    </div>
  );
};

export default SignUpForm;
