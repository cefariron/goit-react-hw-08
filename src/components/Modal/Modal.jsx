import { useSelector, useDispatch } from "react-redux";
import { closeContactModal } from "../../redux/modal/slice";
import {
  selectContactIdForModal,
  selectContactById,
  selectModal,
} from "../../redux/modal/selectors";
import { deleteContact } from "../../redux/operations";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import css from "./Modal.module.css";
import { useState } from "react";
import { EditForm } from "../EditForm/EditForm";

export const Modal = () => {
  const dispatch = useDispatch();
  const [isEditNow, setIsEditNow] = useState(false);

  const isModalOpen = useSelector(selectModal);
  const selectedContactId = useSelector(selectContactIdForModal);
  const selectedContact = useSelector((state) =>
    selectContactById(state, selectedContactId)
  );

  const closeModal = () => {
    dispatch(closeContactModal());
  };

  const handleRemove = () => {
    dispatch(deleteContact(selectedContactId));
    dispatch(closeContactModal());
  };

  return (
    <div
      style={{ display: isModalOpen ? "flex" : "none" }}
      className={css.modalOverlay}
    >
      {selectedContact && (
        <div className={css.wrapper}>
          <div className={css.container}>
            <div className={css.userInfoContainer}>
              <img
                className={css.avatar}
                src="src\components\Modal\avatar.png"
                alt="avatar"
              />
              <div className={css.contactInfo}>
                <div>
                  <p className={css.userName}>Name: {selectedContact.name}</p>
                  <p>Number:</p>
                  <p>{selectedContact.number}</p>
                </div>
              </div>
            </div>
            <div className={css.btnContainer}>
              <button className={css.btn} onClick={closeModal}>
                <IoMdClose size={20} />
              </button>
              <button className={css.btn} type="button">
                <FaRegEdit className={css.btnIcon} size={16} onClick={setIsEditNow}/>
              </button>
              <button className={css.btn} type="button" onClick={handleRemove}>
                <RiDeleteBin6Line className={css.btnIcon} size={18} />
              </button>
            </div>
          </div>
          {isEditNow && <EditForm id={selectedContact.id} name={selectedContact.name} number={selectedContact.number}/>}
        </div>
      )}
    </div>
  );
};
