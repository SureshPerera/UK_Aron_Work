import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import '../Components/Css/navbars.css';
import Home from '../Components/PagesMain/Home'
import App from '../App'
import AboutUs from '../Components/PagesMain/AboutUs'
import MainLayout from '../MainLayout'
import ContactUs from '../Components/PagesMain/ContactUs'
import "../Components/Css/main.css"
import Calculator from '../Components/PagesMain/Calculator';
import GateDesigns from '../Components/ProductPage/GateDesigns'
import HandGrillsDesigns from '../Components/ProductPage/HandGrillsDesigns'
import LorryBodyBulders from '../Components/ProductPage/LorryBodyBulders'
import RoofDesigning from '../Components/ProductPage/RoofDesigning'
import WindowDesignsInSrilanka from '../Components/ProductPage/WindowDesignsInSrilanka'
import ArchitechuralSteel from '../Components/ServicePage/ArchitechuralSteel'
import BestArcIronWokers from '../Components/BestArcIronWokers'
import BestArcRepair from '../Components/ServicePage/BestArcRepair'

const MainRouter = () => {
   
  return (
    <div >

      <BrowserRouter>
        <Routes>
            <Route path='/' Component={MainLayout}> 
            <Route index Component={Home}/>
            <Route path='AboutUs' Component={AboutUs}/>
            <Route path='ContactUs' Component={ContactUs}/>
            <Route path='calculator' Component={Calculator}/>
           
            <Route path='GateDesigns' Component={GateDesigns}/>
            <Route path='HandDrillsDesigns' Component={HandGrillsDesigns}/>
            <Route path='LorryBodyBulders' Component={LorryBodyBulders}/>
            <Route path='Roofdesigning' Component={RoofDesigning}/>
            <Route path="WindowDesigning" Component={WindowDesignsInSrilanka}/>
            <Route path='ArchitechuralSteel'Component={ArchitechuralSteel}/>
            <Route path='BestArcRepair' Component={BestArcRepair}/>
        </Route>
        </Routes>
      </BrowserRouter>
      <b>
        
        
        <div className='located'>WE ARE LOCATED IN HIRIPITIYA. 
        <h5>Copyright © 2023 UK Iron Workers | Designed by Suresh</h5>
        <div style={{}}> 
          <a href='' >Facebook</a> <bn/> <bn/>
          <a href=''>Gmail</a> <bn/>
          <a href='https://wa.me/+94741021167 '>Whatsapp</a> <bn/>
        </div>
        </div>
        
        </b>
    </div>
  )
}

export default MainRouter

