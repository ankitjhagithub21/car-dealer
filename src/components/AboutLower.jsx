import React from 'react'
import boxes from '../api/AboutApi'
import AboutCompo from './AboutCompo'
const AboutLower = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto">
      <div className="flex flex-wrap -m-4">
       {
          boxes.map((box)=>{
            return(
              <AboutCompo key={box.title} title={box.title} desc={box.desc}/>
            )
          })
       }
      </div>
    </div>
  </section>
  )
}

export default AboutLower
