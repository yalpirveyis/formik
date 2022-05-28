import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function SignUp() {
  const {
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>

      <input
        style={errors.email && touched.email && { borderColor: "red" }}
        id="email"
        name="email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <pre style={{ color: "red", fontSize: 10 }}>{errors.email}</pre>
      )}
      <label htmlFor="password">Password</label>

      <input
        style={errors.password && touched.password && { borderColor: "red" }}
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password && (
        <pre style={{ color: "red", fontSize: 10 }}>{errors.password}</pre>
      )}

      <label htmlFor="passwordConfirm">Password Confirm</label>

      <input
        style={
          errors.passwordConfirm &&
          touched.passwordConfirm && { borderColor: "red" }
        }
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        onChange={handleChange}
        value={values.passwordConfirm}
        onBlur={handleBlur}
      />
      {errors.passwordConfirm && touched.passwordConfirm && (
        <pre
          style={{
            color: "red",
            fontSize: 10,
          }}
        >
          {errors.passwordConfirm}
        </pre>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
