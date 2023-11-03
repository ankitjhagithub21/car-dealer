import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  
  
    <div className="flex flex-wrap md:text-left  -mb-10 -mx-4">
    
    <div className="lg:w-1/2 md:w-1/2 sm:w-full px-4">
        <h2 className="title-font font-medium text-red-900 tracking-widest text-xl mb-3">
          ABOUT US
        </h2>
        <p className='md:pr-10'>Car Dealer is the best premium HTML5 Template. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers. You can use this template for creating website.</p>
      </div>  
        
      <div className="lg:w-1/6 md:w-1/2 w-full m-5">
        <h2 className="title-font font-medium text-red-900 tracking-widest text-xl mb-3">
          USEFULL LINKS
        </h2>
        <nav className="list-none flex flex-col gap-2">
          <li>
            <a className="text-gray-600 hover:text-gray-800"><i className="fa-solid fa-greater-than text-sm text-red-500"></i> Change</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"><i className="fa-solid fa-greater-than text-sm text-red-500"></i> Replacement</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"><i className="fa-solid fa-greater-than text-sm text-red-500"></i> Contact Us</a>
          </li>
         
        </nav>
      </div>
     
     
      
    </div>
  </div>
  
  <div className="bg-gray-100">
    <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500  text-center sm:text-left">
      Designed and Developed by <a href="https://ankitjha.vercel.app" target='_blank' className='underline text-blue-600'>Ankit Jha</a>
        
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500">
      Privacy Policy | Terms And Conditions | Contact Us

      </span>
    </div>
  </div>
</footer>

  )
}

export default Footer
