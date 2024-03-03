import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/operations";
import { useId } from "react";
import css from "../EditForm/EditForm.module.css";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Enter 3 to 50 characters")
//     .max(50, "Enter 3 to 50 characters")
//     .required("Field cant be empty!"),
//     number: Yup.string()
//     .min(3, "Enter 3 to 15 characters")
//     .max(15, "Enter 3 to 15 characters")
//     .required("Field cant be empty!"),
// });

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
    setIsEditNow();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <h3 className={css.title}>Edit contact</h3>
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
            <Field className={css.input} id={numberFieldId} name="number" />
            <ErrorMessage className={css.error} name="number" as="span" />
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
            <button className={css.btnCancel} type="button" onClick={() => setIsEditNow(false)}>
              Cancel
            </button>
            <button className={css.btnSave} type="submit">
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
