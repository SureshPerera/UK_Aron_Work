
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'
import '../Css/navbars.css';
import { Link} from 'react-router-dom';




import React from 'react'

function Navbars() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
     <Container fluid>
             <Navbar.Brand style={{backgroundColor:"darkgrey"} } href="#"><b>UK</b> IRON WORKS</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
         <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <Nav.Link > <Link to="/" > HOME </Link></Nav.Link>
         <Nav.Link > <Link to="AboutUs">ABOUTUS</Link></Nav.Link>
         <Nav.Link > <Link to="ContactUs">CONTACTUS</Link></Nav.Link>
         <NavDropdown title="PRODUCT" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to="GateDesigns">GATES</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="HandDrillsDesigns">HAND GRILLS</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="WindowDesigning">WINDOWS</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to="Roofdesigning">ROOFS</Link> </NavDropdown.Item>  
              <NavDropdown.Item><Link to="LorryBodyBulders">LORRY BODIES</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="SERVICE" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to="ArchitechuralSteel">DESIGN</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="BestArcRepair">REPAIR</Link> </NavDropdown.Item> 
              </NavDropdown>  
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
      
    </div>
  )
}

export default Navbars
