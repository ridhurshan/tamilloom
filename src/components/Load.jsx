import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { ScatterBoxLoader } from "react-awesome-loaders";


function Load() {
  return (
    


          // <>
          //   <ScatterBoxLoader
          //     primaryColor={"#6366F1"}
          //     background={theme.colors["background"]}
          //   />
          // </>


          <Container>
          <Row>
            <Col sm></Col>
            <Col sm>
              <div
                  style={{
                              margin: "20px 10px",
                              padding: "24px",
                              borderRadius: "28px",
                              backdropFilter: "blur(10px)",
                              background: "rgba(255, 255, 255, 0.1)",
                              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                              border: "1px solid rgba(0, 0, 0, 0.3)",
                              maxWidth: "500px",
                              width: "90%",
                              textAlign: "center"
                  }}
                  >
                        <div style={{
                              display: "inline-block",
                              width: "40px",
                              height: "40px",

                          }}><Spinner animation="border" variant="primary" />
                </div>
                  </div>
            </Col>
            <Col sm></Col>
          </Row>
        </Container>

  )
}

export default Load

// const Loading = () => {
//     return (
//       <div style={{
//         margin: "20px 10px",
//         padding: "24px",
//         borderRadius: "28px",
//         backdropFilter: "blur(10px)",
//         background: "rgba(255, 255, 255, 0.1)",
//         boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
//         border: "1px solid rgba(0, 0, 0, 0.3)",
//         maxWidth: "500px",
//         width: "90%",
//         textAlign: "center"
//       }}>
//         <div style={{
//           display: "inline-block",
//           width: "40px",
//           height: "40px",
//           border: "3px solid rgba(1, 24, 216, 0.3)",
//           borderRadius: "50%",
//           borderTopColor: "rgba(1, 24, 216, 0.7)",
//           animation: "spin 1s ease-in-out infinite"
//         }}></div>
//         <p style={{
//           marginTop: "16px",
//           color: "black",
//           fontSize: "16px"
//         }}>செய்திகள் ஏற்றப்படுகின்றன...</p>
//       </div>
//     );
//   };