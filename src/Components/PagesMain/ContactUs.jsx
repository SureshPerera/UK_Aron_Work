import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Images from '../contact.webp';
import { Carousel, Image, Container } from 'react-bootstrap';
import "../Css/contactUs.css";
import '../Css/main.css';
import '../Css/main.css'
export default function ContactUs() {

 
  return (
    <div>
      <hr/>
      <Carousel>
          <Carousel.Item>
                 <img style={{width:"100%",height:'480px'}}src='./Image01/ContactUs/desktop-wallpaper-contact-contact-us.jpg'/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'150px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>CONTACT</b> US</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>   
         
      <hr/>

        <Container>
          <div className='borderCss'>
            <h5 style={{color:"#F4A261", fontSize:'25px'}}>Adress</h5>
            <p style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}}>Hiripitiya,Nikadalupotha</p>
            <h5 style={{color:"#F4A261", fontSize:'25px'}}>Contact No</h5>
            <p style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}}>076854125</p>
            <h5 style={{color:"#F4A261", fontSize:'25px'}}>Email</h5>
            <p style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}}>ukironworks850@gmail.com</p>
          </div>
                <hr/>
              
              <div className="borderCss" >
                <Form>
                <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{color:"#F4A261", fontSize:'25px'}}>Email</Form.Label>
            <Form.Control style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}} type="email" placeholder="Enter email"/>
          </Form.Group>
                
          
                <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{color:"#F4A261", fontSize:'25px'}}>Name</Form.Label>
          <Form.Control style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}} placeholder="Enter Your Name" />
                </Form.Group>
          
                </Row>
          
                <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label style={{color:"#F4A261", fontSize:'25px'}}>Contact No</Form.Label>
            <Form.Control style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}} placeholder='Enter phone number' />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label  style={{color:"#F4A261", fontSize:'25px'}}>Massage</Form.Label>
            <Form.Control style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}} placeholder='Enter Your Comment'/>
          </Form.Group>
                </Row>
          
                <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check  style={{color:"#F4A261", fontSize:'25px'}} type="checkbox" label="Check me out" />
                </Form.Group>
          
                <Button variant="primary" type="submit" >
          Submit
                </Button>
              </Form>
                </div >
        </Container>
      
    </div>
  )
  
}
