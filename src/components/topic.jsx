import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerInsideExample({title}) {
  return (
    <Navbar
      expand="lg"
      style={{
        margin: "8px",
        padding: "1px 5px",
        borderRadius: "28px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        WebkitBackdropFilter: "blur(10px)",
        animation: "shine 3s infinite linear",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#"
          className="mx-auto"
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
          }}
        >
          {title || "navbar"}
        </Navbar.Brand>
      </Container>

      <style>{`
        @keyframes shine {
          0% { background-position: -200px; }
          100% { background-position: 200px; }
        }
        .navbar {
          background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          background-size: 400% 100%;
        }
      `}</style>
    </Navbar>
  );
}

export default ContainerInsideExample;
