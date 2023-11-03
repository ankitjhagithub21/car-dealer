import React from 'react';
import { Link } from 'react-router-dom';

const CarCompo = ({ car }) => {
  return (
   
    <Link className="p-2 md:w-1/2 lg:w-1/4 sm:w-1/2 mx-auto" to={`/cardetails/${car.id}`}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
            src={car.src}
            alt="blog"
          />
        </div>
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{car.name}</h1> 
          <b className="text-red-900 text-xl mt-5">{car.price}</b>
          <br />
          
        </div>
      </div>
    </Link>
  );
};

export default CarCompo;
