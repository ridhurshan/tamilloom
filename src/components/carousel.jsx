import Carousel from 'react-bootstrap/Carousel';

function UncontrolledCarousel({ world }) {
  return (
    <Carousel>
      {world.slice(0, 3).map((i, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={i.image ? i.image.trim() : 'https://via.placeholder.com/800x400'}
            alt={`Slide ${index}`}
            style={{ objectFit: 'cover', maxHeight: '400px' }}
          />
          <Carousel.Caption>
            <h3>{i.title}</h3>
            <p>{i.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledCarousel;
