import React from 'react'
import Home from './Components/PagesMain/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/nav/Navbars';
import { Outlet } from 'react-router-dom';
import MainRouter from './router/MainRouter';
import '../src/Components/Css/main.css';
import './Components/Config/firebase';
import Authenticator from './Components/Auth/authenticator';
import Calculator from './Components/PagesMain/Calculator';


export default function App() {
  return (
    <div  >
      {/* <Authenticator/> */}
      <MainRouter/>
      {/* <Calculator/> */}
    </div>
  )
}
  