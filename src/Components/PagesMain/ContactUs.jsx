import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Images from '../contact.webp';
import { Carousel, Image } from 'react-bootstrap';

export default function ContactUs() {

 
  return (
    <div>
      
      <Carousel>
          <Carousel.Item>
                 <Image style={{width:"100%",height:'480px'}}src={Images}/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'150px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>CONTACT</b> US</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>   
         
      <hr/>

        <span>
          <h5>Adress</h5>
          <p>Hiripitiya,Nikadalupotha</p>
          <h5>Contact No</h5>
          <p>076854125</p>
          <h5>Email</h5>
          <p>ukironworks850@gmail.com</p>
        </span>
      <hr/>
    
    <span>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter Your Name" />
      </Form.Group>

      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Contact No</Form.Label>
          <Form.Control placeholder='Enter phone number' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Massage</Form.Label>
          <Form.Control placeholder='Enter Your Comment '/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </span>
      
    </div>
  )
  
}
