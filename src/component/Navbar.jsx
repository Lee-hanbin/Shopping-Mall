import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function NavbarUi() {
  let navigate = useNavigate();       // 페이지 이동 도와주는 함수

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}} >Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarUi;