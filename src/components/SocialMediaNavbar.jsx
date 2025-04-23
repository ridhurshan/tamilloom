import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook,FaWhatsapp, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

function SocialMediaNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{
        margin: "8px",
        padding: "5px 10px",
        borderRadius: "28px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#" className="mx-2">
          <FaFacebook 
            size={24} 
            style={{ color: "#fff", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.8))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand href="#" className="mx-2">
          <FaWhatsapp 
            size={24} 
            style={{ color: "#fff", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.8))" }} 
          />
        </Navbar.Brand>  
        <Navbar.Brand href="#" className="mx-2">
          <FaTwitter 
            size={24} 
            style={{ color: "#fff", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.8))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand href="#" className="mx-2">
          <FaInstagram 
            size={24} 
            style={{ color: "#fff", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.8))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand href="#" className="mx-2">
          <FaYoutube 
            size={24} 
            style={{ color: "#fff", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.8))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand href="#" className="mx-2">
          <FaLinkedin 
            size={24} 
            style={{ color: "#fff", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.8))" }} 
          />
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
          animation: shine 3s infinite linear;
        }
        .navbar-brand:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>
    </Navbar>
  );
}

export default SocialMediaNavbar;