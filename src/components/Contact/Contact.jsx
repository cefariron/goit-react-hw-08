import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { MdLocalPhone } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import css from "../Contact/Contact.module.css";

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div>
        <p>
          <IoMdContact className={css.icon} /> {name}
        </p>
        <p>
          <MdLocalPhone className={css.icon} /> {phone}
        </p>
      </div>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
};
