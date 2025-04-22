import Card from 'react-bootstrap/Card';
import ExampleCarouselImage from '../Images/img1.jpg';

function ImgOverlayExample({ title, description, image }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={image} alt="Card image" />
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