import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AboutUpper = ({car}) => {
  const lscars = JSON.parse(localStorage.getItem('cars')) || []
  const [cars,setCars] = useState(lscars)

  const addToCart = (car) =>{
    
      let isPresent = cars.find((c)=>c.id===car.id)
      if(isPresent){
        alert("Car is already present")
      }else{
        setCars([...cars,car])
        alert("car is added")
      }
      
      
    
  }
  useEffect(()=>{

    localStorage.setItem('cars',JSON.stringify(cars))

  },[cars])
  return (
    <section className="text-gray-600 body-font" key={car.id}>
        <div className="container px-5 py-20  mx-auto flex flex-wrap-reverse">
          <div className="flex  flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-2 ">
                {car.name}
              </h1>
              <div className="leading-relaxed">
                <h2 className=' md:text-xl mb-4'>{car.price}</h2>
                <p className='text-violet-600'>Car Dealer is the best premium HTML5 Template. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers. You can use this template for creating website based on any framework and any languages</p>
              </div>
              {
                car.name === "About Us" ? <Link to="/contact"><button className='bg-gray-600 px-4 py-2 rounded text-white mt-5' >Contact Us</button></Link> : <button className='bg-gray-600 px-4 py-2 rounded text-white mt-5' onClick={()=>addToCart(car)}>Buy Now</button> 
      
                  
              }
             
              <Link to="/orders"><button className='bg-gray-600 px-4 py-2 rounded text-white mx-2'>Your Orders</button></Link>
            </div>

          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-contain object-center w-full h-full"
              src={car.src}
              alt="stats"
            />
          </div>
        </div>
      </section>
  )
}

export default AboutUpper
