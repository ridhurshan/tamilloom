import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function NewsCard({ title, description, image }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({
      title:title,
      description:description,
      image:image
    }));
  };

  // if (!item) return null; // Prevent crash if item is undefined

  return (
    <Card
      onClick={openModal}
      style={{ marginBottom: '10px', cursor: 'pointer' }}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
