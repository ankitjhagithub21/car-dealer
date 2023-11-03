import React from 'react'
import services from '../api/ServiceApi'
import ServiceCompo from '../components/ServiceCompo'

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">

            <h1 className="md:text-4xl text-2xl lg:text-4xl font-bold mb-2">
              OUR SERVICES
            </h1>
            <h2 className='text-sm md:text-xl mb-4'>We provide best services for cars.</h2>

            <div className="flex flex-wrap justify-center">
                {
                  services.map((service)=>{
                    return(
                      <ServiceCompo key={service.id} service = {service}/>
                    )
                  })
                }
            </div>



          </div>
          <img
            className=" lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="/services.jpg"
            alt="step"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
