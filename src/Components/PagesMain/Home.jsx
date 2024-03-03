import React from 'react'
import Navbars from '../nav/Navbars'
import "bootstrap/dist/css/bootstrap.min.css";
import ResponciveImj from '../ResponciveImg'
import BestArcIronWokers from '../BestArcIronWokers'
import '../Css/home.css';
import AboutUs from './AboutUs';
import GateDesigns from '../ProductPage/GateDesigns';
import HandGrillsDesigns from '../ProductPage/HandGrillsDesigns';
import WindowDesignsInSrilanka from '../ProductPage/WindowDesignsInSrilanka';
import RoofDesigning from '../ProductPage/RoofDesigning';
import LorryBodyBulders from '../ProductPage/LorryBodyBulders';
import ArchitechuralSteel from '../ServicePage/ArchitechuralSteel';
import BestArcRepair from '../ServicePage/BestArcRepair';
import ContactUs from './ContactUs';
import { Container } from 'react-bootstrap';
import '../Css/home.css';

export default function Home() {
  return (
    <div>
     
      
        <hr/>
        <ResponciveImj/>
        <hr/>
        <BestArcIronWokers/>
        <hr/>
        <Container>
        
        </Container>
        <b>
        <div className='located'>WE ARE LOCATED IN HIRIPITIYA</div>
        </b>
        {/* <hr/>
        <AboutUs/>  
        {/* <GateDesigns/> */}
        {/* <HandGrillsDesigns/> */}
        {/* <WindowDesignsInSrilanka/> */}
        {/* <RoofDesigning/> */}
        {/* <LorryBodyBulders/> */}
        {/* <ArchitechuralSteel/> */}
        {/* <BestArcRepair/> */}
        {/* <span>
          <BrowserRouter>
          <Routers>
            <Route path ='/' element={<Home/>}/>
            <Route path ='/aboutUs' element={<AboutUs/>}/>
            </Routers>
            </BrowserRouter>
        </span> */}
        {/* <ContactUs/> */}
      

    </div>
  )
}
