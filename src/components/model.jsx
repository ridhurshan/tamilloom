import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../redux/store/modalSlice';

function ModalWrapper() {
  const dispatch = useDispatch();
  const { isOpen, modalContent } = useSelector((state) => state.modal);

    const glassStyle = {
      modal: {
        maxWidth: '90vw',
        margin: '0 auto'
      },
      dialog: {
        maxWidth: '90vw',
        width: '90vw',
        margin: '0 auto'
      },
      content: {
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)',
        color: '#fff'
      },
      header: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      },
      body: {
        padding: '20px'
      },
      image: {
        width: '100%',
        maxHeight: '60vh',
        objectFit: 'contain',
        marginBottom: '20px',
        borderRadius: '4px'
      }
    };
  return (

    <Modal
    show={isOpen}
    onHide={() => dispatch(hideModal())}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    dialogClassName="modal-90w"
    //aria-labelledby="example-custom-modal-styling-title"
  >

{/*  <Button variant="primary">Share News</Button> */}
      <Modal.Header closeButton style={{ borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
        <Modal.Title style={{ color: '#fff' }}>
          {modalContent?.mydate ? `${modalContent.mydate} - ` : ''}
          {modalContent?.title || 'Title not available'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{backgroundColor:"white"}}>
        {modalContent?.image && (
          <img
            src={modalContent.image}
            alt={modalContent.title}
            style={{
              width: '100%',
              objectFit: 'cover',
              marginBottom: '1rem',
              borderRadius: '8px'
            }}
          />
        )}
        <p style={{ color: "black" }}>
          {modalContent?.description || ' News '}
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