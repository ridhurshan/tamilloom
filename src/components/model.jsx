import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../redux/store/modalSlice';

function ModalWrapper() {
  const dispatch = useDispatch();
  const { isOpen, modalContent } = useSelector((state) => state.modal);

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.13)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3.4px)',
    WebkitBackdropFilter: 'blur(3.4px)',
    border: '1px solid rgba(255, 255, 255, 0.96)',
    padding: '1rem'
  };

  return (
    <Modal
      show={isOpen}
      onHide={() => dispatch(hideModal())}
      centered
      size="lg"
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalContent?.title || 'Modal Title'}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={glassStyle}>
        {modalContent?.image && (
          <img
            src={modalContent.image}
            alt={modalContent.title}
            style={{
              width: 'auto',
              maxWidth: '300px',
              height: 'auto',
              minHeight: '300px',
              objectFit: 'cover',
              marginBottom: '1rem'
            }}
          />
        )}
        <p>{modalContent?.description || 'Modal Content goes here.'}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(hideModal())}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWrapper;
