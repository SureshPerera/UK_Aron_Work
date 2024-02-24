import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbars from './Components/nav/Navbars'

function MainLayout() {
  return (
    <div>
      
      <Navbars/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
