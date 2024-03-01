import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { LuPhone } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import css from "../Contact/Contact.module.css";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div>
        <p className={css.name}>
          <RiContactsLine className={css.iconInfo} /> {name}
        </p>
        <p>
          <LuPhone className={css.iconInfo} /> {number}
        </p>
      </div>
      <div className={css.btnContainer}>
        <button className={css.btn} type="button" onClick={handleRemove}>
          <FaRegEdit className={css.icon} />
        </button>
        <button className={css.btn} type="button" onClick={handleRemove}>
          <RiDeleteBin6Line className={css.icon} />
        </button>
      </div>
    </div>
  );
};
