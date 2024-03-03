import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import '../Components/Css/navbars.css';
import Home from '../Components/PagesMain/Home'
import App from '../App'
import AboutUs from '../Components/PagesMain/AboutUs'
import MainLayout from '../MainLayout'
import ContactUs from '../Components/PagesMain/ContactUs'


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
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={MainLayout}> 
            <Route index Component={Home}/>
            <Route path='AboutUs' Component={AboutUs}/>
            <Route path='ContactUs' Component={ContactUs}/>
            
           
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
    </div>
  )
}

export default MainRouter

