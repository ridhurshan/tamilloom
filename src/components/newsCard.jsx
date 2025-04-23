import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function BorderExample({ title, description, image }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({
      title: title,
      description: description,
      image: image
    }));
  };

  return (
    <Card
      onClick={openModal}
      border="primary"
      style={{
        width: '100%',
        height: '150px',
        marginBottom: '10px',
        cursor: 'pointer',
        overflow: 'hidden',
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
            }}
          />
        </Col>
        <Col md={8}>
          <div
            style={{
              height: '100%',
              overflowY: 'auto', // ✅ allow scroll inside
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Card.Header
              style={{
                fontSize: '1.0rem',
                lineHeight: '1.0em',
                fontWeight: 'bold',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backgroundColor: '#fff', // ✅ Required for sticky
              }}
            >
              {title?.length > 100? title.slice(0, 100) + "...": title}
            </Card.Header>
            <div
              style={{
                fontSize: '0.9rem',
                lineHeight: '1.4em',
                padding: '5px 10px',
              }}
            >
              {description?.length > 100?description.slice(0, 100) + "...": description}
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default BorderExample;
