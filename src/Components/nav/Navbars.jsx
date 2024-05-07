
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'
import '../Css/navbars.css';
import { Link} from 'react-router-dom';




import React from 'react'
import { hover } from '@testing-library/user-event/dist/hover';

function Navbars() {
  return (
    
    <div  className='nav'  style={{padding:5, paddingLeft:0, paddingRight:40,}}>
      <Navbar expand="lg" className="bg-body-tertiary" >
     <Container fluid style={{backgroundColor:'#dddddd'}}>
             <Navbar.Brand className='navbarBrand' style={{color:'white', fontFamily:'cursive'}}><div className='uk'><a href='#'><b  style={{fontSize:'40px', color:'red'}}>UK</b></a></div> IRON WORKS</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"/>
       <Navbar.Collapse id="navbarScroll">
         <Nav
          className="me-auto my-2 my-lg-0"
        
          style={{ maxHeight: '100px'}}
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
              <Nav.Link > <Link to="Calculator">CALCULATOR</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id='btnSearch'
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
