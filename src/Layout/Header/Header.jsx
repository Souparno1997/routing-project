import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const HeaderPart = () => {
  const fullname="Webskitters"
  return (
    <header>
        {/* <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                <a href="/">About</a>
                </li>
                <li>
                <a href="/">Features</a>
                </li>
            </ul>
        </nav> */}
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as= {Link} to="/">Routing Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {/* <Nav.Link href="/Home">Home</Nav.Link> */}
            <Nav.Link as= {Link} to={`/About/${fullname}`}>About</Nav.Link>
            <Nav.Link as= {Link} to="/Features">Features</Nav.Link>
            <Nav.Link as= {Link} to="/Users">Users</Nav.Link>
            <Nav.Link as= {Link} to="/Users">Users</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default HeaderPart