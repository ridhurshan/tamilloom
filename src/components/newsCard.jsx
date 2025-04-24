import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/store/modalSlice';

function BorderExample({ title, description, image ,mydate}) {
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
    <Col xs={12} sm={6} md={12} style={{ padding: '5px' }}>
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
          <Col xs={4} md={4} style={{ overflow: 'hidden' }}>
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
          <Col xs={8} md={8}>
            <div
              style={{
                height: '100%',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  color:"white",
                  fontSize: '1.0rem',
                  lineHeight: '1.0em',
                  fontWeight: 'bold',
                  zIndex: 10,
                  background: 'rgba(0, 0, 0, 0.6)',
                  padding: '5px',
                  borderRadius: '5px',
                  position: 'absolute', // Changed to absolute
                  top: 0,           // Positioned at the bottom
                  left: 0,             // Align to the left
                  right: 0,            // Align to the right to take full width
                }}
              >
                {mydate}
              </div>
              <Card.Header
                style={{
                  fontSize: 'clamp(0.8rem, 2vw, 1.0rem)',
                  lineHeight: '1.0em',
                  fontWeight: 'bold',
                  position: 'sticky',
                  top: 0,
                  zIndex: 10,
                  backgroundColor: '#fff',
                }}
              >
                {title?.length > 100 ? title.slice(0, 100) + "..." : title}
              </Card.Header>
              <div
                style={{
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  lineHeight: '1.4em',
                  padding: '5px 10px',
                }}
              >
                {description?.length > 100 ? description.slice(0, 100) + "..." : description}
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default BorderExample;


// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useDispatch } from 'react-redux';
// import { showModal } from '../redux/store/modalSlice';

// function BorderExample({ title, description, image,mydate }) {
//   const dispatch = useDispatch();

//   const openModal = () => {
//     dispatch(showModal({
//       title,
//       description,
//       image,
//       time
//     }));
//   };

//   return (
//     <>
//       <Col sm={6} md={12} style={{ padding: '5px' }}>
//         <Card
//           onClick={openModal}
//           border="primary"
//           className="responsive-card" 
//           style={{
//             width: '100%',
//             height: '150px', // ✅ desktop default
//             marginBottom: '10px',
//             cursor: 'pointer',
//             overflow: 'hidden',
//           }}
//         >
//           <Row className="g-0" style={{ height: '100%' }}>
//           <Col xs={4} md={4} style={{ overflow: 'hidden', position: 'relative' }}>
//               <Card.Img
//                 src={image}
//                 alt="Card side"
//                 style={{
//                   height: '100%',
//                   width: '100%',
//                   objectFit: 'cover',
//                 }}
//               />
//               <div
//                 style={{
//                   color:"white",
//                   fontSize: '1.0rem',
//                   lineHeight: '1.0em',
//                   fontWeight: 'bold',
//                   zIndex: 10,
//                   background: 'rgba(0, 0, 0, 0.6)',
//                   padding: '5px',
//                   borderRadius: '5px',
//                   position: 'absolute', // Changed to absolute
//                   top: 0,           // Positioned at the bottom
//                   left: 0,             // Align to the left
//                   right: 0,            // Align to the right to take full width
//                 }}
//               >
//                 {mydate}
//               </div>
//             </Col>
//             <Col xs={8} md={8}>
//               <div
//                 style={{
//                   height: '100%',
//                   overflowY: 'auto',
//                   display: 'flex',
//                   flexDirection: 'column',
//                 }}
//               >
//                 <Card.Header
//                   style={{
//                     fontSize: 'clamp(0.8rem, 2vw, 1.0rem)',
//                     lineHeight: '1.0em',
//                     fontWeight: 'bold',
//                     position: 'sticky',
//                     top: 0,
//                     zIndex: 10,
//                     backgroundColor: '#fff',
//                   }}
//                 >
//                   {title?.length > 100 ? title.slice(0, 100) + "..." : title}
//                 </Card.Header>
//                 <div
//                   style={{
//                     fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
//                     lineHeight: '1.4em',
//                     padding: '5px 10px',
//                   }}
//                 >
//                   {description?.length > 100 ? description.slice(0, 100) + "..." : description}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Card>
//       </Col>

//       {/* ✅ Put <style> inside return to apply in DOM */}
//       <style>{`
//         @media (max-width: 576px) {
//           .responsive-card {
//             height: auto !important;
//             width:auto
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default BorderExample;
