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
            image: i.image,
            mydate:i.mydate,
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
              <h3         
              style={{
                fontSize: '1.0rem',                
                padding: '0px 10px',
                fontWeight: 'bold',
                background: 'rgba(0, 0, 0, 0.6)',
              }}>
                {i.mydate}<br></br>
                {i.title?.length > 100? i.title.slice(0, 100) + "...": i.title}
              </h3>
              <p
                style={{
                        fontSize: '0.9rem',
                        padding: '5px 10px',
                        background: 'rgba(0, 0, 0, 0.6)',
                      }}>
                      {i.description?.length > 100? i.description.slice(0, 100) + "...": i.description}
                      </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default UncontrolledCarousel;
