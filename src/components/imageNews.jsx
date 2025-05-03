import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function ImgOverlayExample({ title, description, image, mydate }) {
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(showModal({
            title: title,
            description: description,
            image: image,
            mydate:mydate
        }));
    };

    return (
        <Card
            className="bg-dark text-white"
            onClick={openModal}
            style={{ cursor: "pointer", height: "200px", overflow: 'hidden' }}
        >
            <Card.Img
                src={image}
                alt="Card image"
                style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    minHeight: '150px',
                    overflow: 'hidden',
                }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-start">
                <Card.Title
                    style={{
                      fontSize: '1.0rem',
                      lineHeight: '1.0em',
                      fontWeight: 'bold',
                      zIndex: 10,
                      background: 'rgba(0, 0, 0, 0.4)',
                      padding: '5px',
                      borderRadius: '5px',
                      position: 'absolute', // Changed to absolute
                      bottom: 0,           // Positioned at the bottom
                      left: 0,             // Align to the left
                      right: 0,            // Align to the right to take full width
                    }}
                >
                    {mydate}<br></br>
                    {title?.length > 50 ? title.slice(0, 100) + "..." : title}
                </Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}

export default ImgOverlayExample;