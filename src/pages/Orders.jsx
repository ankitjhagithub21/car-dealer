import React, { useEffect, useState } from 'react'

import Lscar from '../components/Lscar'

const Orders = () => {
   
  const lscars = JSON.parse(localStorage.getItem('cars')) || []
  const [cars,setCars] = useState(lscars)

  const removeCar = (id) =>{
      const updatedCars = cars.filter((car)=>car.id!==id)
      setCars(updatedCars)        
  }

  useEffect(()=>{
      localStorage.setItem('cars',JSON.stringify(cars))
     
  },[cars])

   

    if(cars.length==0){
      return <div className='py-32 bg-gray-200 text-center'>
        <p className='text-xl'>Your order List is empty</p>
      </div>
    }

  return (
    
       <div className="flex gap-3 p-4 flex-wrap">
       {
        cars.map((car)=>{
          return(
            <>
            <Lscar key={car.id} car={car} removeCar={removeCar}/>
            
            </>
          )
        })
       }
        
       
      </div>
    
  )
}

export default Orders
