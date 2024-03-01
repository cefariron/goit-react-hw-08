import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Enter 3 to 50 characters")
    .max(50, "Enter 3 to 50 characters")
    .required("Field cant be empty!"),
  password: Yup.string()
    .min(3, "Enter 3 to 15 characters")
    .max(25, "Enter 3 to 25 characters")
    .required("Field cant be empty!"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    actions.resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.wContainer}>
            <span className={css.wSpan}>Welcome back 👋</span>
          </div>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={emailFieldId}>
              Email *
            </label>
            <Field className={css.input} id={emailFieldId} name="email" />
            <ErrorMessage className={css.error} name="email" as="span" />
          </div>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={passwordFieldId}>
              Password *
            </label>
            <div className={css.passwordContainer}>
            <Field className={css.input} id={passwordFieldId} name="password" type={showPassword ? "text" : "password"}/>
            <span
                className={css.togglePassword}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BsEye className={css.eyeIcon}/> : <BsEyeSlash className={css.eyeIcon} />}
              </span>
            </div>
            <ErrorMessage className={css.error} name="password" as="span" />
          </div>
          <div className={css.option}>
            <div>
              <label className={css.checkboxContainer}>
                <input type="checkbox" id="rememberMeCheckbox" />
                <span className={css.checkmark}></span>
                Remember me
              </label>
            </div>
            <a
              className={css.forgotPassLink}
              href="https://google.com/"
            >
              Forgot your password?
            </a>
          </div>
          <button className={css.btn} type="submit">
            Login
          </button>
          <div className={css.privacy}>
            <a
              className={css.privacyLink}
              href="https://google.com/"
            >
              How it works?
            </a>
            <a
              className={css.privacyLink}
              href="https://google.com/"
            >
              Privacy Policy
            </a>
          </div>
        </Form>
      </Formik>
    </>
  );
};
