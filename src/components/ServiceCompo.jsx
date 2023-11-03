import React from 'react'

const ServiceCompo = ({service}) => {
  
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 rounded-md hover:bg-slate-400 hover:text-white cursor-pointer">
  <div className="p-4">
  <i className={`${service.classes} text-2xl text-red-600 mb-2`}></i>
    <h2 className="text-xl font-bold mb-2">{service.title}</h2>
    <p className="">{service.desc}</p>
  </div>
</div>
  )
}

export default ServiceCompo
