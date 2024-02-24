import React from 'react'
import Home from './Components/PagesMain/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbars from './Components/nav/Navbars';
import { Outlet } from 'react-router-dom';
import MainRouter from './router/MainRouter';



export default function App() {
  return (
    <div>
      
  
      <MainRouter/>
    </div>
  )
}
