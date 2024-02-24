import React from 'react'
// import image from '../Images/Screenshot 2024-02-16 135413.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

export default function RoofDesigning() {
  return (
    <div>
      <h3>
      <b>ROOF DESIGN</b> IN SRI LANKA
      </h3>
      {/* <Image src={image} fluid/> */}
      <p>
      We provide Sri Lanka’s finest Steel Roofing to meet the need of Sri Lankan industrial and domestic steel roofing requirements, We understand the actual need and offers a complete solution from Design, Manufacture, Installation to Completion.
      <br/>We provide cost-effective solutions, Which are Sound, Leak proof & give an attractive look to the Building.
      <br/>Roof & wall cladding System designed using latest technology & economical products with features such as longevity & durability, Besides providing a new rich look to the building.
      Our experienced engineers are one of the best team to satisfy your project requirement with safety, speed and quality. and always happy to talk with you about the idea or design that you have in your mind.

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
