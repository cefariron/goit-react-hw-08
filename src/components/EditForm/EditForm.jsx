import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/operations";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "../EditForm/EditForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Enter 1 to 30 characters")
    .max(30, "Enter 3 to 30 characters")
    .required("Field cant be empty!"),
  number: Yup.string()
    .matches(/^\+?\d{1,15}[\d()+]*$/, "Digits and symbols! 1-15 characters")
    .required("Field can't be empty!"),
});

export const EditForm = ({ id, name, number, setIsEditNow }) => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name,
    number,
  };

  const handleSubmit = (values) => {
    dispatch(editContact({ contact: values, contactId: id }));
    toast.success("You have successfully update contact!");
    setIsEditNow();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form className={css.form}>
            <h3 className={css.title}>Edit contact</h3>
            <div
              className={css.inputContainer}
              style={{ marginBottom: touched.name && errors.name && "16px" }}
            >
              <label className={css.label} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={`${css.input} ${
                  touched.name && errors.name
                    ? css.errorInput
                    : touched.name && !errors.name
                    ? css.successInput
                    : ""
                }`}
                id={nameFieldId}
                name="name"
                autoFocus
                {...getFieldProps("name")}
              />
              {touched.name && errors.name && (
                <span className={css.error}>{errors.name}</span>
              )}
            </div>
            <div
              className={css.inputContainer}
              style={{ marginBottom: touched.number && errors.number && "8px" }}
            >
              <label className={css.label} htmlFor={numberFieldId}>
                Number
              </label>
              <Field
                className={`${css.input} ${
                  touched.number && errors.number
                    ? css.errorInput
                    : touched.number && !errors.number
                    ? css.successInput
                    : ""
                }`}
                id={numberFieldId}
                name="number"
                {...getFieldProps("number")}
              />
              {touched.number && errors.number && (
                <span className={css.error}>{errors.number}</span>
              )}
            </div>
            <div className={css.option}>
              <div>
                <label className={css.checkboxContainer}>
                  <input type="checkbox" id="rememberMeCheckbox" />
                  <span className={css.checkmark}></span>
                  Sync with all devices
                </label>
              </div>
            </div>
            <div className={css.editBtnContainer}>
              <button
                className={css.btnCancel}
                type="button"
                onClick={() => setIsEditNow(false)}
              >
                Cancel
              </button>
              <button className={css.btnSave} type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
