import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerInsideExample({ title }) {
  return (
    <Navbar 
      expand="lg"
      className="custom-navbar"
      style={{
        margin: "0.5rem",
        padding: "0.25rem 0.5rem",
        borderRadius: "1.75rem",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="mx-auto text-center"
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "clamp(1rem, 4vw, 1.25rem)", // Responsive font size
            textShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
            width: "100vw", // Ensure full width on mobile
          }}
        >
          {title || "Navbar"}
        </Navbar.Brand>
      </Container>

      <style >{`
        .custom-navbar {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          background-size: 400% 100%;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(0, 0, 0, 0.3);
          animation: shine 3s infinite linear;
        }
        
        @keyframes shine {
          0% { background-position: -200px; }
          100% { background-position: 200px; }
        }
        
        /* Mobile styles */
        @media (max-width: 576px) {
          .custom-navbar {
            padding: 0.5rem;
            border-radius: 1rem;
            minWidth:"30px"
          }
          
          .custom-navbar .navbar-brand {
            font-size: 1.1rem;
          }
        }
        
        /* Tablet styles */
        @media (min-width: 577px) and (max-width: 992px) {
          .custom-navbar {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default ContainerInsideExample;