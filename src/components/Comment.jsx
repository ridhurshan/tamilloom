import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Comment = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/l8rkzb2n4knp1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{ name, comment }],
        }),
      });

      if (response.ok) {
        setMessage('கருத்து வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!');
        setName('');
        setComment('');
        setTimeout(() => {
          setMessage('');
          handleClose();
        }, 2000);
      } else {
        setMessage('பிழை: மீண்டும் முயற்சிக்கவும்');
      }
    } catch (error) {
      setMessage('பிழை: ' + error.message);
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      style={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <Modal.Header 
        closeButton
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Modal.Title style={{ fontWeight: "bold", color: "black" }}>
          கருத்து தெரிவிக்கவும்
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "0 0 10px 10px",
          animation: "shine 3s infinite linear",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "500" }}>உங்கள் பெயர்</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(5px)",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "500" }}>உங்கள் கருத்து</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(5px)",
              }}
            />
          </Form.Group>
          {message && (
            <div 
              className={`alert ${message.includes('வெற்றிகரமாக') ? 'alert-success' : 'alert-danger'}`}
              style={{
                background: message.includes('வெற்றிகரமாக') 
                  ? "rgba(40, 167, 69, 0.2)" 
                  : "rgba(220, 53, 69, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
              }}
            >
              {message}
            </div>
          )}
          <Button 
            variant="primary" 
            type="submit" 
            disabled={isSubmitting}
            style={{
              background: "rgba(13, 110, 253, 0.7)",
              border: "none",
              backdropFilter: "blur(5px)",
              fontWeight: "500",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {isSubmitting ? 'சமர்ப்பிக்கிறது...' : 'சமர்ப்பிக்கவும்'}
          </Button>
        </Form>
      </Modal.Body>

      <style>{`
        @keyframes shine {
          0% { background-position: -200px; }
          100% { background-position: 200px; }
        }
        .modal-content {
          background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          background-size: 400% 100%;
          border: 1px solid rgba(0, 0, 0, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          border-radius: 28px;
          overflow: hidden;
        }
        .btn-primary:hover {
          background: rgba(13, 110, 253, 0.9) !important;
        }
      `}</style>
    </Modal>
  );
};

export default Comment;