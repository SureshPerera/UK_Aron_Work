import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import images from './Images/Screenshot 2024-02-16 135413.png';
import { Image,Container} from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import gate084 from '../Images/gate084.jpg';
import gate081 from '../Images/gate081.jpg';
import window01 from '../Images/window01.jpg';
import "../Components/Css/bestArcWorkers.css";
import '../Components/Css/home.css'
import '../Components/Css/main.css'
import"./Css/bestArcIronWorkers.css";
export default function BestArcIronWokers() {
  return (
    <div >
        <Card body style={{width:"",height:"",backgroundColor:"#333", border: '3px outset white',padding:'0',margin: '10px',}}>
            <b style={{color:"#F4A261", fontSize:"25px"}}>BEST ARC IRON WORKS</b>
        <p style={{color:"#E76F51",fontSize:"20px"}}>While you are  Searching the Internet you visit our site because you want to have some kind of an iron work done by us, we are very glad to welcome you here!</p>
        </Card>
        <hr/>
      {/* <Container>
        <Accordion >
        <Accordion.Item eventKey="0" style={{background:"#EBBE9B"}}>
          <Accordion.Header ><b style={{color:"#F4A261",fontSize:"22px",width:'100%', height:'2rem', padding:'0'}}>Gate Design Sri Lanka</b></Accordion.Header>
          <Accordion.Body>
          <Figure>
        <Figure.Image className='image-list-relax'
          width={300}
          height={180}
          alt="300x180"
          src={gate084}
        />
        <Figure.Caption className='text-borderLine-background'>
        You may want to create your own gate for your home, institute, or for your workshop, and it’s important to carefully understand the gate design, having a good design is more important. If the design is not fit for today, then the expenditure for the gate will be in vain.
        If you want  the gate is in a state without decay for a period of time, then it is best to use the high-quality raw materials,
        When we talk about Gate designs in Sri Lanka, best arc iron works is in the first companies you will find, And also we are among the founders of giant gates with delicate engraving patterns instead of normal gates. <div><a href='GateDesigns'>Read more..</a></div>
        
        </Figure.Caption>
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background:"#EBBE9B"}}>
          <Accordion.Header><b style={{color:"#F4A261",fontSize:"22px",width:'100%', height:'2rem', padding:'0'}}>Iron Window Designs Sri Lanka</b></Accordion.Header>
          <Accordion.Body>
          <Figure>
        <Figure.Image className='image-list-relax'
          width={300}
          height={180}
          alt="300x180"
          src={gate081}
        />
        <Figure.Caption className='text-borderLine-background'>
        Even if you have a very nice home if there is an old outdated window in the home. the look and value of your house abate because of your old window.
        As we make the window, we use most of the time to design the windows, because we really think about the appearance of your home.
        We also care about the design of the windows as well as the security of the house because we are using high-quality materials in the production of windows. Therefore, we will give you a good warranty for the windows that we fabricate in our workshop<div><a href="WindowDesigning">Read more..</a></div>
        </Figure.Caption>
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={{background:"#EBBE9B"}}>
          <Accordion.Header><b style={{color:"#F4A261",fontSize:"22px",width:'100%', height:'2rem', padding:'0'}}>Roof Designs Sri Lanka</b></Accordion.Header>
          <Accordion.Body >
          <Figure>
        <Figure.Image className='image-list-relax'
          width={300}
          height={180}
          alt="300x180"
          src={window01}
        />
        <Figure.Caption className='text-borderLine-background'>
        Most of the time, where houses, Garages, workshops are made by using iron and Amano sheets for constructing roofs.
        It is not easy to make a roof from iron,  it needs a great experience to do such a job.
            Since our company staff has many years of experience in making iron roof, we can make any type of iron roofs with the full structure of the building.<div><a href='RoofDesigning'>Read more..</a></div>
        </Figure.Caption>
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
            </Accordion>
      </Container> */}
      <div className=" paragraph" style={{padding:10}}>
        <h3>Gate Design Sri Lanka</h3>
        <br/>
        <p>
        <Figure.Image className='image-list-relax'
          width={300}
          height={180}
          alt="Gate Img"
          src={gate084}
        />
        You may want to create your own gate for your home, institute, or for your workshop, and it’s important to carefully understand the gate design, having a good design is more important. If the design is not fit for today, then the expenditure for the gate will be in vain.
        If you want  the gate is in a state without decay for a period of time, then it is best to use the high-quality raw materials,
        When we talk about Gate designs in Sri Lanka, best arc iron works is in the first companies you will find, And also we are among the founders of giant gates with delicate engraving patterns instead of normal gates. <div><a href='GateDesigns'>Read more..</a></div>

        </p>
        <br/>
        <h3> 
        Iron Window Designs Sri Lanka
        </h3>
        <br/>
        <p>
        <Figure.Image className='image-list-relax'
          width={300}
          height={180}
          alt="300x180"
          src={window01}
        />
        Even if you have a very nice home if there is an old outdated window in the home. the look and value of your house abate because of your old window.
        As we make the window, we use most of the time to design the windows, because we really think about the appearance of your home.
        We also care about the design of the windows as well as the security of the house because we are using high-quality materials in the production of windows. Therefore, we will give you a good warranty for the windows that we fabricate in our workshop<div><a href="WindowDesigning">Read more..</a></div>
        
        </p>
        <br/>
        <h3>
        Roof Designs Sri Lanka
        </h3>
        <br/>
        <p>
        <Figure.Image className='image-list-relax'
          width={300}
          height={180}
          alt="300x180"
          src={{}}/>
        Most of the time, where houses, Garages, workshops are made by using iron and Amano sheets for constructing roofs.
        It is not easy to make a roof from iron,  it needs a great experience to do such a job.
            Since our company staff has many years of experience in making iron roof, we can make any type of iron roofs with the full structure of the building.<div><a href='RoofDesigning'>Read more..</a></div>
       
        </p>
      </div>

    </div>
  )
}
