import React from 'react'

const HomeComponent = () => {
  return (
    <div className="flex  pl-10" id='home'>

      <div className="flex flex-col justify-center w-7xl text-white sm:text-lg ">



        <div className="flex flex-col text-white mt-5">

          <h1 className="text-3xl lg:text-6xl  font-bold">
            THE WIND IS <br /> NOT EVEN CLOSE TO US
          </h1>

        </div>
        <p className="mt-4 md:w-[52%]">
          We have everything your car needs! We provide best solution for cars.
        </p>
        <div className="mt-4">
          <button className='bg-red-800 hover:bg-red-700  outline-none text-white  py-2 px-4 rounded'>Discover More</button>

        </div>

      </div>
    </div>
  )
}

export default HomeComponent
