import React from 'react'
import cars from"../api/GalleryApi"
import CarCompo from '../components/CarCompo'
const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <p className='text-gray-600 text-center'>check out our recent cars</p>
      <h1 className='text-center mb-2  text-4xl font-bold '>FEATURE CAR</h1>
   <hr className='mb-2 w-10 mx-auto bg-red-600 border-none h-0.5'></hr>
   <hr className='mb-10 w-20 mx-auto bg-red-600 border-none h-0.5'></hr>
      <div className="flex flex-wrap -m-4">
       {
        cars.map((car)=>{
          return(
            <CarCompo key={car.id} car={car}/>
          )
        })
       }
        
       
      </div>
    </div>
  </section>
  )
}

export default Gallery
