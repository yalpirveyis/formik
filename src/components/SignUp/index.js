import React from "react";
import { useFormik } from "formik";

function SignUp() {
  const { handleBlur, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <br />
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        value={values.password}
      />
      <br />
      <label htmlFor="passwordConfirm">Password Confirm</label>
      <br />
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        type="passwordConfirm"
        onChange={handleChange}
        value={values.passwordConfirm}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
