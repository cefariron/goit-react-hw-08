import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { LuPhone } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import css from "../Contact/Contact.module.css";

export const Contact = ({ id, name, number, handleContactClick }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div className={css.wrapper} onClick={() => handleContactClick(id)}>
        <img
          className={css.avatar}
          src="https://i.ibb.co/BzLGK40/avatar.png"
          alt="avatar"
        />
        <div className={css.userInfoContainer}>
          <p className={css.name}>
            <RiContactsLine className={css.iconInfo} /> {name}
          </p>
          <p className={css.number}>
            <LuPhone className={css.iconInfo} /> {number}
          </p>
        </div>
      </div>
      <div className={css.btnContainer}>
        <button
          className={css.btn}
          type="button"
          onClick={() => handleContactClick(id)}
        >
          <RxHamburgerMenu className={css.icon} />
        </button>
        <button className={css.btn} type="button" onClick={handleRemove}>
          <RiDeleteBin6Line className={css.icon} />
        </button>
      </div>
    </div>
  );
};
