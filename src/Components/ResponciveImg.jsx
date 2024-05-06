// import Images from './/Images/Screenshot 2024-02-16 135413.png';
import React from 'react'
// import { Image } from 'react-bootstrap'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image from '../Images/Untitled-1.png';
import { Image } from 'react-bootstrap';
import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';


export default function ResponciveImj() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      
      <Carousel activeIndex={index} onSelect={handleSelect} style={{animation:'backwards'}}>
      <Carousel.Item>
         <Image style={{width:"100%",height:"480px"}} img src="../Image01/HomePagepic.jpg"/>  
        <div style={{width:"100%",height:"150px", backgroundColor:"#333", }}></div>
        <Carousel.Caption style={{color:'#E9C46A'}}>
        <h3 style={{fontSize:'80px',color:'orange',width:'400px',height:'200px',backgroundColor:'white',margin:'2.5rem -1em 2em',fontFamily:"sans-serif"}}><b>UK IRON </b>WORKS</h3>
          <div style={{marginBottom:"-30px"}}>
            <h3 >We Provide Excellent Service For You</h3>
            <p><b>UK</b> IRON WORK 0771293002</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <Image style={{width:"100%",height:"480px"}}   src={slide1}/>
        <div style={{width:"100%",height:"150px", backgroundColor:"#333"}}></div>
        <Carousel.Caption style={{color:'#E9C46A',marginBottom:"-30px"}}>
          <h3>Customer Is The King</h3>
          <p><b>UK</b> IRON WORK 0771293002</p>                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <Image style={{width:"100%",height:"480px"}} src={slide2}/>
        <div style={{width:"100%",height:"150px", backgroundColor:"#333"}}></div>
        <Carousel.Caption style={{color:'#E9C46A',marginBottom:"-30px"}}>
          <h3>We Provide Best Customer Services </h3>
          <p>
          <b>UK</b> IRON WORK 0771293002
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
