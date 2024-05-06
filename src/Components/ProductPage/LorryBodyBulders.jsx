import React from 'react'
// import image from '../Images/Screenshot 2024-02-16 135413.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Carousel,Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import '../Css/main.css';

export default function LorryBodyBulders() {
  return (
    <div style={{padding:50, paddingLeft:10, paddingRight:10,}}>
      <hr/>
      <Carousel>
          <Carousel.Item>
                 <img src='./Image01/Lory body/g-15.jpg' style={{width:"100%",height:'480px'}}/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'250px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>LORRY BODY BUILDERS</b> IN SRILANKA</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel> 
        <hr/>
          
      <Container>
        <p className='text-borderLine-background'>
        We manufacture different types of truck body suited for every business need.
        <br/>We have garnered the trust of Automobile brands by providing them with quality products and excellent service for every delivery of our new Truck Body design. We build bodies to meet your specifications.
        <br/>Customers are included in every step of the process in order to make sure they are receiving exactly what they need.
        </p>
        <span>
          <Container>
        <Row className='image-list-relax'>
          <Col xs={6} md={4}>
           <img style={{margin: "5px",border: "1px solid #ccc",float: "left",width: "350px"}} src='./Image01/Lory body/images01.jpeg'/>
          </Col>
          <Col xs={6} md={4}>
            {/* <Image src={image}roundedCircle /> */}
          </Col>
          <Col xs={6} md={4}>
            {/* <Image src={image} thumbnail /> */}
          </Col>
        </Row>
            </Container>
            </span>
      </Container>
    </div>
  )
}
