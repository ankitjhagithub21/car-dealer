import React from 'react'
import HomeComponent from "../components/HomeComponent"
import Service from "./Services"
import About from "./About"
import Gallery from "./Gallery"
import Contact from "./Contact"
import BuyCar from '../components/BuyCar'
const Home = () => {
  return (
    <>
      <HomeComponent/>
      <BuyCar/>
       <Service/>
      <About/>
      <Gallery/>
      <Contact/>
     
    </>
  )
}

export default Home
