import React from 'react'
import '../Style/Header.css'
import {Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>

            <Navbar expand="lg" className="head-p">
                <Container fluid>
                    <Navbar.Brand href="#" id='logo'>PetAlley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">


                        <Form className="d-flex ">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 inp"
                                aria-label="Search"
                            />
                            <Button variant="" className='btn' >Search</Button>
                        </Form>
                        <Nav
                            className="me-auto mx-5 my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/Login' className='ms-5' href="#action1">Login</Nav.Link>
                            <Nav.Link className='ms-4' href="#action2">About Us</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* second Nav..  */}

            <Navbar bg="" className='head-pp'>
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>  */}
                    <Nav className="me-auto mx-2" id='nav-nav'>
                        <Nav.Link as={Link} to='/' className='mx-2' href="#">Home</Nav.Link>
                        <Nav.Link as={Link} to='/Shopping' className='mx-2' href="#">Shopping</Nav.Link>
                        <Nav.Link as={Link} to='/Services' className='mx-2' href="#">Service</Nav.Link>
                        <Nav.Link as={Link} to='/Petfun' className='mx-2' href="#">Pet Fun</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
