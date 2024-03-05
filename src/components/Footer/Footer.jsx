import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useId } from "react";
import * as Yup from "yup";
import css from "./Footer.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .min(3, "Enter 3 to 50 characters")
    .max(50, "Enter 3 to 50 characters")
    .required("Field can't be empty!"),
});

export const Footer = () => {
  const emailFieldId = useId();

  const initialValues = {
    email: "",
  };

  const handleSubmit = (values, actions) => {
    toast.success("You are now subscribed to our newsletter!");
    actions.resetForm();
  };

  return (
    <>
      <footer className={css.footer}>
        <div className={css.container}>
          <div className={css.subscription}>
            <div className={css.logoContainer}>
              <img
                className={css.logo}
                src="https://play-lh.googleusercontent.com/reWUjxXDgPjx-1rU3zMZBNMnzIpXXKKwd7Tl08RYrNH91Gmmd7BMob2uCVmzbAjh1Bw"
                alt="logo"
              />
              <p className={css.logoText}>
                <strong>Cloud Contacts</strong>
              </p>
            </div>
            <h4 className={css.subTitle}>About us</h4>
            <p className={css.subText}>
              The Cloud Contacts web app was developed by our team to easily
              store, edit and search your contacts. Wherever you are, anywhere
              in the world where there is internet, using any device, you will
              always be able to access your contacts book!
            </p>
          </div>
          <div className={css.contactsWrapper}>
            <div className={css.socialContainer}>
              <ul className={css.socialList}>
                <li className={css.socialItem}>
                  <a href="https://www.instagram.com/">
                    <img
                      className={css.logo}
                      src="https://nationalzoo.com.au/wp-content/uploads/2018/11/instagram-png-instagram-png-logo-1455-1024x1024.png"
                      alt="logo"
                    />
                  </a>
                </li>
                <li className={css.socialItem}>
                  <a href="https://www.facebook.com/">
                    <img
                      className={css.logo}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/800px-Facebook_icon.svg.png"
                      alt="logo"
                    />
                  </a>
                </li>
                <li className={css.socialItem}>
                  <a href="https://web.telegram.org/">
                    <img
                      className={css.logo}
                      src="https://www.freepnglogos.com/uploads/telegram-logo-4.png"
                      alt="logo"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.contactsContainer}>
              <h4 className={css.contactsTitle}>Contacts</h4>
              <ul className={css.contactsList}>
                <li className={css.contactsItem}>
                  <address>Adress: Shevchenko st., 28A, Kyiv, Ukraine</address>
                </li>
                <li className={`${css.contactsItem} ${css.phone}`}>
                  <a className={css.contactsLink} href="tel:+380971112233">
                    +38(097)1112233
                  </a>
                </li>
                <li className={`${css.contactsItem} ${css.email}`}>
                  <a
                    className={css.contactsLink}
                    href="mailto:info@cloudcontacts.com"
                  >
                    info@cloudcontacts.com
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.newsContainer}>
              <h4 className={css.newsTitle}>Newsletter</h4>
              <Toaster position="top-right" reverseOrder={false} />
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ getFieldProps, errors, touched }) => (
                  <Form className={css.form}>
                    <div
                      className={css.inputContainer}
                      style={{
                        marginBottom: touched.email && errors.email && "12px",
                      }}
                    >
                      <label className={css.label} htmlFor={emailFieldId}>
                        Email *
                      </label>
                      <Field
                        className={`${css.input} ${
                          touched.email && errors.email
                            ? css.errorInput
                            : touched.email && !errors.email
                            ? css.successInput
                            : ""
                        }`}
                        id={emailFieldId}
                        name="email"
                        {...getFieldProps("email")}
                      />
                      {touched.email && errors.email && (
                        <span className={css.error}>{errors.email}</span>
                      )}
                    </div>
                    <button className={css.btn} type="submit">
                      Subscribe
                    </button>
                  </Form>
                )}
              </Formik>

              {/* <form className={css.newsForm}>
                <input
                  className={css.newsInput}
                  type="email"
                  placeholder="Введите ваш email"
                  required
                />
                <button className={css.newsBtn} type="submit">
                  Подписаться
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
