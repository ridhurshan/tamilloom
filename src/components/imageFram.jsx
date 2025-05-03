import Image from 'react-bootstrap/Image';
import ExampleCarouselImage from '../Images/img1.jpg';
import Img2 from "../Images/img2.png"

function FluidExample() {
  return (
    <Image
      src={Img2}
      fluid
      style={{
        height: '150px',
        width: '100%', // Make width responsive
        maxWidth: '850px', // Keep a max width if needed
        objectFit: 'cover',
        display: 'block',
        margin: "0 0 8px 0",
      }}
    />
  );
}
