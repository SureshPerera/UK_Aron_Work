import React from 'react'
// import images from '../Images/Screenshot 2024-02-16 135238.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';



export default function WindowDesignsInSrilanka() {
   
  return (
    <div>
      <h3><b>Window Designs</b> in Srilanka</h3>
      {/* <Image src={images} fluid/> */}
      <p>We are one of the prominent manufacturers of an array of Metal windows. all the windows are manufactured using high-quality raw materials.
      <br/>we are capable of fabricating any type of a window, especially modern window designs. 
      <br/>our professionals are always varied helpful and always happy to talk with you about the idea or design that you have in your mind.
      </p> 
      <span>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          {/* <Image src={images} rounded /> */}
        </Col>
        <Col xs={6} md={4}>
          {/* <Image src={images}roundedCircle /> */}
        </Col>
        <Col xs={6} md={4}>
          {/* <Image src={images} thumbnail /> */}
        </Col>
      </Row>
    </Container>
        </span>

    </div>

  )
}
