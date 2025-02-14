import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function Header() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Nav.Link href="/"> <img src="https://cdn-icons-png.flaticon.com/512/743/743007.png" alt="" width="30" height="25" /> </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Shoes">Shoes</Nav.Link>
              <Nav.Link href="/Camera">Camera</Nav.Link>

              <Nav.Link href="/Watches">Watches</Nav.Link>
              <Nav.Link href="/Laptop">Laptop</Nav.Link>
            </Nav>
            <Button href="/ConnectTo">ConnectTo</Button>
            <Button className="mx-2" href="/Registration">Registration</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header;
