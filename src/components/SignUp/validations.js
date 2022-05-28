import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("geçerli bir email girin")
    .required("Bu alan zorunludur"),
  password: yup
    .string()
    .min(5, "Minimum 5 karakter olmalıdır")
    .required("Bu alan zorunludur"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "paralolar eşleşmiyor")
    .required("Bu alan zorunludur"),
});

export default validations;
