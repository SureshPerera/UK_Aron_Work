import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ironwork2 from '../ironwork 2.png';
import { Carousel, Image } from 'react-bootstrap';

export default function GateDesigns() {
  return (
    <div>
      <Carousel>
          <Carousel.Item>
                 <Image style={{width:"100%",height:'480px'}}src={ironwork2}/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'200px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>GATE DESIGNS</b> SRI LANKA</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>   
      <h4>
      <p>Sri Lankan House Gate Designs</p>
      </h4>
      <p>When entering your property, the gate is often the first thing your guests see. Make sure you make the right first impression with a beautiful gate created by Best arc ironwork. Our professional team promises Personalized service every step of the way, always aiming for your complete satisfaction.
      <br/>We craft iron gates, steel and metal gates in Colombo . Each gate is custom designed at our workshop, ensuring a custom job for every client.
      <br/>When you partner with our team, you’ll benefit from an experienced team committed to superior service.
      <br/>Just give us a call to schedule a design consultation and request an estimate for your iron, steel or metal gates.

      </p>
        <span>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          {/* <Image src={image} rounded /> */}
        </Col>
        <Col xs={6} md={4}>
          {/* <Image src={image}roundedCircle /> */}
        </Col>
        <Col xs={6} md={4}>
          {/* <Image src={image} thumbnail /> */}
          {/* <Image src='./public/Image01/gate062-1.jpg'/> */}
          <img src='../public/Image01/gate062-1.jpg'/>
        </Col>
      </Row>
    </Container>
        </span>
    </div>
  )
}
