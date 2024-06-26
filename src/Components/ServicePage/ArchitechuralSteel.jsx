import React from 'react'
// import image from '../Images/Screenshot 2024-02-16 135413.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Css/main.css'
import {Row,Carousel} from 'react-bootstrap';

export default function ArchitechuralSteel() {
  return (
    <div style={{padding:50, paddingLeft:10, paddingRight:10,}}>
      <hr/>
      <Carousel>
          <Carousel.Item>
                 <img style={{width:"100%",height:'480px'}}src='Image01/Architecter/background.jpg'/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'250px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>ARCHITECTURAL STEEL </b>STRUCTURES</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>   
      <hr/>
      <Container>
      <p className='text-borderLine-background'>
      We can help you with everything from advice, proposals, design, development, delivery and final installation. This A to Z solution means that your project can run smoothly.
      <br/>You can leave the technical and logistical aspects of your steel structure safely in our hands.
We’re happy to work with contractors, architects or any other building professional and on any type of steel design project,
<br/>from traditional build to more modern, modular projects where offsite manufacturing has been utilised. We pride ourselves on our positive and friendly approach’ we always put the customer’s needs at the fore. We rise to every challenge we’re given and are always happy to share our expertise and knowledge.

      </p>
      <span>
        <Container>
      <Row className='image-list-relax'>
        <Col xs={6} md={4}>
        <img style={{margin: "5px",border: "1px solid #ccc",float: "left",width: "350px"}} src='./Image01/Architecter/Image001.jpg'/>
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
