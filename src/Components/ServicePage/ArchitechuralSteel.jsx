import React from 'react'
// import image from '../Images/Screenshot 2024-02-16 135413.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

export default function ArchitechuralSteel() {
  return (
    <div>
      <h3>
      <b>ARCHITECTURAL STEEL</b> STRUCTURES
      </h3>
      {/* <Image src={image} fluid="true"/> */}
      <p>
      We can help you with everything from advice, proposals, design, development, delivery and final installation. This A to Z solution means that your project can run smoothly.
      <br/>You can leave the technical and logistical aspects of your steel structure safely in our hands.
We’re happy to work with contractors, architects or any other building professional and on any type of steel design project,
<br/>from traditional build to more modern, modular projects where offsite manufacturing has been utilised. We pride ourselves on our positive and friendly approach’ we always put the customer’s needs at the fore. We rise to every challenge we’re given and are always happy to share our expertise and knowledge.

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
