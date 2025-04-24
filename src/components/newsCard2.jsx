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
    <Card xs={3} sm={6} md={12}
      onClick={openModal}
      style={{
        width: '100%',
        height: '300px',
        marginBottom: '10px',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      <Card.Img xs={3} sm={6} md={12}
        variant="top"
        src={image}
        alt={title}
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <Card.Body >
        <Card.Title               
        style={{
                fontSize: '1.0rem',                
                padding: '0px 10px',
                fontWeight: 'bold',
              }}>{title}
         </Card.Title>
        <Card.Text          
        style={{
                fontSize: '0.9rem',
                padding: '5px 10px',
              }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
