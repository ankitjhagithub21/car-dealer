import React from 'react'

const BuyCar = () => {
    return (
        <div className="container my-10  flex flex-wrap mx-auto bg-gray-100 p-10   shadow-md">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    htmlFor="make"
                >
                    Select Make
                </label>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="make"
                    >
                        <option>Make</option>
                        <option>Toyota</option>
                        <option>Honda</option>
                        <option>Nissan</option>
                        <option>Ford</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>


            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    htmlFor="model"
                >
                    Select Model
                </label>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="model"
                    >
                        <option>Model</option>
                        <option>Corolla</option>
                        <option>Civic</option>
                        <option>Altima</option>
                        <option>Fusion</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    htmlFor="model"
                >
                    Select Year
                </label>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="model"
                    >
                        <option>Year</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    htmlFor="price-range"
                >
                    Select Price Range
                </label>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="price-range"
                    >
                        <option>Price Range</option>
                        <option>$0 - $10,000</option>
                        <option>$10,000 - $20,000</option>
                        <option>$20,000 - $30,000</option>
                        <option>$30,000 - $40,000</option>
                        <option>$40,000 - $50,000</option>
                        <option>$50,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <div className=" px-4">
                <button className='bg-red-500 hover:bg-red-700 lg:mt-10 md:mt-10 outline-none text-white  py-2 px-4 rounded'>Search For Vehicle</button>
               
            </div>

        </div>

    )
}

export default BuyCar
