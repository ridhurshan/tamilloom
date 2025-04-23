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
      size={"false"}
      dialogClassName="custom-modal"
      style={{width:"100vw"}}
      contentStyle={{
        background: 'rgba(0, 0, 0, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        width: '100%' // Ensures content fills the modal
      }}
    >
      <Modal.Header closeButton style={{ borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
        <Modal.Title style={{ color: '#fff' }}>{modalContent?.title || 'Modal Title'}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={glassStyle}>
        {modalContent?.image && (
          <img
            src={modalContent.image}
            alt={modalContent.title}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              marginBottom: '1rem',
              borderRadius: '8px'
            }}
          />
        )}
        <p style={{ color: 'rgba(255,255,255,0.8)' }}>
          {modalContent?.description || 'Modal Content goes here.'}
        </p>
      </Modal.Body>

      <Modal.Footer style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
        <Button 
          variant="secondary" 
          onClick={() => dispatch(hideModal())}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}
        >
          Close
        </Button>
      </Modal.Footer>

      {/* Add this CSS to your global styles or component */}
      <style jsx global>{`
        .modal-content {
          background: rgba(0, 0, 0, 0.7) !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 800px !important;
          max-width: 90vw !important;
        }
        .modal-header .btn-close {
          filter: invert(1);
        }
      `}</style>
    </Modal>
  );
}

export default ModalWrapper;