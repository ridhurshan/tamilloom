import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Tamil LOom</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', fontSize: "15px", fontWeight: "bold" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/page/local">உள்ளூர்</Nav.Link>
            <Nav.Link as={Link} to="/page/world">உலகம்</Nav.Link>
            <Nav.Link as={Link} to="/page/business">வணிகம்</Nav.Link>
            <Nav.Link as={Link} to="/page/technology">தொழில்நுட்பம்</Nav.Link>
            <Nav.Link as={Link} to="/page/health">ஆரோக்கியம்</Nav.Link>
            <Nav.Link as={Link} to="/page/events">நிகழ்வு</Nav.Link>
            <Nav.Link as={Link} to="/page/sports">விளையாட்டு</Nav.Link>
            <Nav.Link as={Link} to="/page/cinema">சினிமா</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
