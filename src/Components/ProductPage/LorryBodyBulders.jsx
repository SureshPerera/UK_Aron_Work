import React from 'react'
// import image from '../Images/Screenshot 2024-02-16 135413.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

export default function LorryBodyBulders() {
  return (
    <div>
      <h3>
      <b>LORRY BODY BUILDERS</b> IN SRI LANKA
      </h3>
      {/* <Image src={image} fluid/> */}
      <p>
      We manufacture different types of truck body suited for every business need.
<br/>We have garnered the trust of Automobile brands by providing them with quality products and excellent service for every delivery of our new Truck Body design. We build bodies to meet your specifications.
<br/>Customers are included in every step of the process in order to make sure they are receiving exactly what they need.
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
        </Col>
      </Row>
    </Container>
    </span>
    </div>
  )
}
