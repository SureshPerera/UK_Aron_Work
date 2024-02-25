import React from 'react'
// import images from '../Images/Screenshot 2024-02-16 135238.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import image from '../WindowDesingCover.jpeg';
import Row from 'react-bootstrap/Row';
import { Image,Carousel } from 'react-bootstrap';


export default function WindowDesignsInSrilanka() {
   
  return (
    <div>
     <Carousel>
          <Carousel.Item>
                 <img src='./Image01/Window Desing/WF557054191-Windown-Sticker-Glass-29-1030x686.jpg' style={{width:"100%",height:'480px'}}/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'200px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>WINDOW DESIGNS </b> SRILANKA</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>   
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
