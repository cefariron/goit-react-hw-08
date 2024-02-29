// import { ContactForm } from "./ContactForm/ContactForm";
// import { SearchBox } from "./SearchBox/SearchBox";
// import { ContactList } from "./ContactList/ContactList";
// import { fetchContacts } from "../redux/operations";
import { useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks';
import "./App.css";
import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    // <>
    //   <div>
    //     <h1 className="title">Phonebook</h1>
    //     <ContactForm />
    //     <SearchBox />
    //     <ContactList />
    //   </div>
    // </>
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/registration"
            element={
              // <RestrictedRoute redirectTo="/tasks" component={<RegistrationPage />} />
              <RegistrationPage />
            }
          />
          <Route
            path="/login"
            element={
              // <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              <LoginPage />
            }
          />
          <Route
            path="/contacts"
            element={
              // <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              <ContactsPage />
            }
          />
        </Route>
      </Routes>
      {/* <Toaster /> */}
    </>
  );
};
