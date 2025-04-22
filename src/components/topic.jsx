import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{margin:"8px"}}>
      <Container>
        <Navbar.Brand href="#" className="mx-auto" >Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;