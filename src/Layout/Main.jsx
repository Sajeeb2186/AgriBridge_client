import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import Navbar from '../Pages/Shared/Nabvar/Navbar'

export default function Main() {
  return (
    <div>
     <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>

    </div>
  )
}
