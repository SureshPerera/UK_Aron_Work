import React from 'react'
// import image from '../Images/Screenshot 2024-02-16 135413.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import '../Css/main.css';

export default function BestArcRepair() {
  return (
    <div>
      <hr/>
       <Carousel>
          <Carousel.Item>
                 <img style={{width:"100%",height:'480px'}}src='Image01/Repair/background01.webp'/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'250px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>BEST ARC REPAIR </b>SERVICE</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>   
        <hr/>
        <Container>
      {/* <Image src={image} fluid="true"/> */}
      <p className='text-borderLine-background'>Usually, all the iron products that we manufacture in our company are using very good raw material, so we do not receive calls for repair those products from our customers
      <br/>But if you have iron made products made with low-quality materials in your home or your working place, you may soon have to find a repair service to fix those items
      <br/>However, if you have produced some iron products from another company, if you look forward to our repair service, we would gladly provide you with the service.
      <br/>We will be happy to give our service to fix your broken door, a roof, a window, your gate or something else. Our experienced repairing team will work to ensure that the maintenance work is completed in time and with good quality.
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
    </Container>
    </div>
  )
}
