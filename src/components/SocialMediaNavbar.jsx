import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook,FaWhatsapp, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Navbar.Brand as={Link} to="https://www.facebook.com/share/12HoYNac9mN/"    
         target="_blank"  rel="noopener noreferrer" className="mx-2">
          <FaFacebook  
            size={24} 
            style={{ color: "rgb(18, 52, 88)1B56FD", filter: "drop-shadow(0 0 5px rgba(245, 238, 220,1.2))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="https://chat.whatsapp.com/Jtk8rVSAPXjGzktVsZMMaa" 
         target="_blank"  rel="noopener noreferrer" className="mx-2">
          <FaWhatsapp 
            size={24} 
            style={{ color: "#123458", filter: "drop-shadow(0 0 5px rgba(245, 238, 220,1.2))" }} 
          />
        </Navbar.Brand>  
        <Navbar.Brand as={Link} to="https://x.com/Tamilloom?t=dWfbg2qtofToXQ4IiwQhLA&s=08" 
         target="_blank"  rel="noopener noreferrer" className="mx-2">
          <FaTwitter 
            size={24} 
            style={{ color: "#123458", filter: "drop-shadow(0 0 5px rgba(245, 238, 220,1.2))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="https://www.instagram.com/tamilloom?igsh=aHFvY2d6MG5saWJ5" 
        className="mx-2"   target="_blank"  rel="noopener noreferrer">
          <FaInstagram 
            size={24} 
            style={{ color: "#123458", filter: "drop-shadow(0 0 5px rgba(245, 238, 220,1.2))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="https://youtube.com/@tamilloom?si=yG3yl3WD9niWsPCb" 
         target="_blank"  rel="noopener noreferrer" className="mx-2">
          <FaYoutube 
            size={24} 
            style={{ color: "#123458", filter: "drop-shadow(0 0 5px rgba(245, 238, 220,1.2))" }} 
          />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="https://www.linkedin.com/in/tamil-loom-47a753361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
         target="_blank"  rel="noopener noreferrer" className="mx-2">
          <FaLinkedin 
            size={24} 
            style={{ color: "#123458", filter: "drop-shadow(0 0 5px rgba(D4C9BE,0.8))" }} 
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