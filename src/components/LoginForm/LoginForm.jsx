import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/operations';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Enter 3 to 50 characters")
    .max(50, "Enter 3 to 50 characters")
    .required("Field cant be empty!"),
  password: Yup.string()
    .min(3, "Enter 3 to 15 characters")
    .max(15, "Enter 3 to 15 characters")
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={emailFieldId}>
              Email
            </label>
            <Field className={css.input} id={emailFieldId} name="email" />
            <ErrorMessage className={css.error} name="email" as="span" />
          </div>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={passwordFieldId}>
              Password
            </label>
            <Field className={css.input} id={passwordFieldId} name="password" />
            <ErrorMessage className={css.error} name="password" as="span" />
          </div>
          <button className={css.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};
