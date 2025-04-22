import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function UncontrolledCarousel({ world }) {
  const dispatch = useDispatch();

  return (
    <Carousel>
      {world.slice(0, 3).map((i, index) => {
        const openModal = () => {
          dispatch(showModal({
            title: i.title,
            description: i.description,
            image: i.image
          }));
        };

        return (
          <Carousel.Item
            key={index}
            onClick={openModal}
            style={{ cursor: 'pointer' }} // ✅ fixed spelling
          >
            <img
              className="d-block w-100"
              src={i.image ? i.image.trim() : 'https://via.placeholder.com/800x400'}
              alt={`Slide ${index}`}
              style={{    aspectRatio: '5 / 3', objectFit: 'cover',
              width: '100%',  maxHeight: '400px' }}
            />
            <Carousel.Caption>
              <h3>{i.title}</h3>
              <p>{i.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default UncontrolledCarousel;
