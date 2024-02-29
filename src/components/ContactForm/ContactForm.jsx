import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import { useId } from "react";
import css from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Enter 3 to 50 characters")
    .max(50, "Enter 3 to 50 characters")
    .required("Field cant be empty!"),
  phone: Yup.string()
    .min(3, "Enter 3 to 15 characters")
    .max(15, "Enter 3 to 15 characters")
    .required("Field cant be empty!"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
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
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field className={css.input} id={nameFieldId} name="name" />
            <ErrorMessage className={css.error} name="name" as="span" />
          </div>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field className={css.input} id={numberFieldId} name="phone" />
            <ErrorMessage className={css.error} name="phone" as="span" />
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
