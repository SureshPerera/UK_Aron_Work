import React from 'react'
// import image from '../Images/Screenshot 2024-02-16 135413.png';
// import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Carousel,Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

export default function RoofDesigning() {
  return (
    <div>
      <hr/>
      <Carousel>
          <Carousel.Item>
                 <img src='./Image01/Roof/i-roof-gemlight-hotel.jpg' style={{width:"100%",height:'480px'}}/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'150px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'50px'}}><b>ROOF</b> DESIGNS</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>   
        <hr/>
        
      <Container>
        <p style={{width:"",height:"",backgroundColor:"#333",fontSize:"20px",color:"#E76F51",fontSize:"20px"}}>
        We provide Sri Lanka’s finest Steel Roofing to meet the need of Sri Lankan industrial and domestic steel roofing requirements, We understand the actual need and offers a complete solution from Design, Manufacture, Installation to Completion.
        <br/>We provide cost-effective solutions, Which are Sound, Leak proof & give an attractive look to the Building.
        <br/>Roof & wall cladding System designed using latest technology & economical products with features such as longevity & durability, Besides providing a new rich look to the building.
        Our experienced engineers are one of the best team to satisfy your project requirement with safety, speed and quality. and always happy to talk with you about the idea or design that you have in your mind.
        </p>
        <span>
          <Container>
        <Row>
          <Col xs={6} md={4}>
           <img style={{margin: "5px",border: "1px solid #ccc",float: "left",width: "350px"}} src='./Image01/Roof/roofing001.jpg'/>
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
