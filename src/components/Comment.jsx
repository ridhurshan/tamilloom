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
    setIsSubmitting(true);
    setMessage('');

    const data = {
      name,
      message: comment, // Formspree standard field is "message"
    };

    try {
      const response = await fetch("https://formspree.io/f/mblojaya", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setMessage("✅ கருத்து வெற்றிகரமாக அனுப்பப்பட்டது!");
        setName('');
        setComment('');
        setTimeout(() => {
          setMessage('');
          handleClose();
        }, 2000);
      } else {
        setMessage("❌ பிழை: மீண்டும் முயற்சிக்கவும்.");
      }
    } catch (error) {
      setMessage("❌ பிழை: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      centered
      style={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>கருத்து தெரிவிக்கவும்</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>பெயர்</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="உங்கள் பெயரை உள்ளிடவும்"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>உங்கள் கருத்து</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="உங்கள் கருத்தை உள்ளிடவும்"
              required
            />
          </Form.Group>

          {message && (
            <div
              className={`alert ${message.includes("✅") ? "alert-success" : "alert-danger"}`}
              style={{ marginTop: "10px" }}
            >
              {message}
            </div>
          )}

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "அனுப்பப்படுகிறது..." : "சமர்ப்பிக்கவும்"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Comment;
