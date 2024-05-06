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
import '../Css/main.css';

export default function Home() {
  return (
    <div style={{padding:50, paddingLeft:10, paddingRight:10,}}>
     
      
        <hr/>
        <ResponciveImj/>
        <hr/>
        <BestArcIronWokers/>
        <hr/>
        <Container>
       
        </Container>
        
      
    </div>
  )
}
