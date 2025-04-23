import Card from 'react-bootstrap/Card';
import ExampleCarouselImage from '../Images/img1.jpg';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function ImgOverlayExample({ title, description, image }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({
      title:title,
      description:description,
      image:image
    }));
  };

  return (
    <Card className="bg-dark text-white" onClick={openModal} style={{curseer:"pointer", height:"200px",overflow: 'hidden',}}>
      <Card.Img src={image} alt="Card image"           
      style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            display: 'block',
            minHeight: '150px',
            overflow: 'hidden',
          }}/>
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;