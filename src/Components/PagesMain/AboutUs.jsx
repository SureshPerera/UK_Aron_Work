import React from 'react';
import Ratio from 'react-bootstrap/Ratio';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import '../Css/aboutUs.css';
export default function AboutUs() {
  return (
    <div>
       <hr/> 
        <Carousel>
          <Carousel.Item>
                 <img style={{width:"100%",height:'480px'}}src='./Image01/AboutUs/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg'/>
           <Carousel.Caption style={{color:'orange',width:'400px',height:'150px',backgroundColor:'white'}}>
              <h3 style={{fontSize:'55px'}}><b>ABOUT</b> US</h3>
              <p><b>UK</b> IRON WORK 0771293002</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        {/* <h3>Hi</h3> */}
        
          <hr/>
          <Container>
                 
          <div style={{color:"#E76F51",fontSize:"20px",width:"",height:"",backgroundColor:"#333", border: '3px outset white',padding:'0',margin: '10px'}}>
            <h4>
                <b style={{color:"#F4A261", fontSize:"25px"}}>Best arc ironworks</b>
            </h4>
            <p  >
            as a modern steel fabricating company, We love coming up with new ways to beautify your home or workspace. Best Arc Ironworks is funded by Mr Douglus 20 years ago and he has 25 years of experience in manufacturing, Installing and repairing custom-made steel and glass railings, stair casings, gates, fencings, Industrial and Parking sheds, Modular House and much more. In addition, we provide structure fabrication service to the Residential and Commercial Construction projects.
            </p>
          </div>
          <hr/>
          <div style={{color:"#E76F51",fontSize:"20px",width:"",height:"",backgroundColor:"#333", border: '3px outset white',padding:'0',margin: '10px'}}>
            <h4>
                 <b style={{color:"#F4A261", fontSize:"25px"}}>Why Choose Us?</b>
            </h4>
            <p >We do fabricate / Manufacture and repair in our shop or on-site. At Best arc iron works, we strive to make every customer happy… Our focus is to offer professional service with a smile, and leave you feeling good about the work we did for you. Our commitment is to provide high-quality products, on-time delivery and great service at a competitive price.
               <br/> We want to ensure that our customers are satisfied with the quality and value of the products and services they buy from us.
            </p>
          </div>
          <hr/>
                 
        </Container>

    </div>
  )

}
