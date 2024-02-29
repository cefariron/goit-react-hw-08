import { useSelector } from "react-redux";
import { selectContacts, selectSearchQuery } from "../../redux/selectors.js";
import { Contact } from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectSearchQuery);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleContacts.map(({ id, name, phone }) => {
          return (
            <li className={css.item} key={id}>
              <Contact id={id} name={name} phone={phone} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
