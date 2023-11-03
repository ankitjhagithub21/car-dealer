import React from 'react'
import AboutUpper from '../components/AboutUpper'
import AboutLower from '../components/AboutLower'

const About = () => {
  const car = {
    name:"About Us",
    price:"Everything you need to build an amazing dealership website.",
    src:"/car2.png"
  }
  return (
    <>
    
    <AboutLower/>
     <AboutUpper car={car}/>
    
    </>
  )
}

export default About
