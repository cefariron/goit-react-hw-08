import { useSelector, useDispatch } from 'react-redux';
import { closeContactModal } from '../../redux/modal/slice';

export const Modal = () => {
  const isModalOpen = useSelector(state => state.modal.isContactModalOpen);
  const selectedContactId = useSelector(state => state.modal.selectedContactId);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeContactModal());
  };

  return (
    <div style={{ display: isModalOpen ? 'block' : 'none' }}>
      <h1>Modal</h1>
      <p>Selected Contact ID: {selectedContactId}</p>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};


