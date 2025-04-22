import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExampleCarouselImage from '../Images/img1.jpg';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function BorderExample({ title, description, image }) {
    const dispatch = useDispatch();

    const openModal = () => {
      dispatch(showModal({
        title:title,
        description:description,
        image:image
      }));
    };

  return (
    <Card
    onClick={openModal}
    border="primary"
    style={{
      width: '100%',height:"auto",marginBottom: '10px',display: 'block', minHeight: '150px',
      overflow: "hidden", cursor: 'pointer'
    }}
  >
    <Row className="g-0" style={{ height: '100%' }}>
      <Col md={4} style={{ overflow: 'hidden' }}>
        <Card.Img
          src={image}
          alt="Card side"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            display: 'block',
            minHeight: '150px',
          }}
        />
      </Col>
      <Col md={8}>
        <div
          style={{
            height: '100%',
            padding: '10px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* <div
            style={{
              fontWeight: 'bold',
              fontSize: '0.9rem',
              marginBottom: '5px',
            }}
          >
            Header
          </div> */}
          <Card.Header as="h5" >{title}</Card.Header>
          <div style={{ fontSize: '0.8rem', lineHeight: '1.2em' }}>
            {description}
          </div>
        </div>
      </Col>
    </Row>
  </Card>
  
  );
}

export default BorderExample;
