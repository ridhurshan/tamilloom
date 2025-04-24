import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function NewsCard({ title, description, image,mydate }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({
      title:title,
      description:description,
      image:image,
      mydate:mydate
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
        <div
                style={{
                  color:"white",
                  fontSize: '1.0rem',
                  lineHeight: '1.0em',
                  fontWeight: 'bold',
                  zIndex: 10,
                  background: 'rgba(0, 0, 0, 0.6)',
                  padding: '5px',
                  borderRadius: '5px',
                  position: 'absolute', // Changed to absolute
                  top: 0,           // Positioned at the bottom
                  left: 0,             // Align to the left
                  right: 0,            // Align to the right to take full width
                }}
              >
                {mydate}
              </div>
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
