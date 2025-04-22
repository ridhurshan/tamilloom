import Image from 'react-bootstrap/Image';
import ExampleCarouselImage from '../Images/img1.jpg';

function FluidExample() {
  return <Image src={ExampleCarouselImage} fluid            
             style={{
              height: '150px',
              width: '850px',
              objectFit: 'cover',
              display: 'block',
              margin:"0 0 8px 0 "
            }}/>;
}

export default FluidExample;