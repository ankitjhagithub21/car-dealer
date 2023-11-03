import React from 'react'

const AboutCompo = ({title,desc}) => {
  return (
    <div className="p-4 lg:w-1/4 cursor-pointer">
          <div className="h-full px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative box hover:bg-slate-500 hover:text-white">

            <h1 className="title-font sm:text-2xl text-2xl font-bold mb-3 tracking-wide">
             {title}
            </h1>
            <p className="leading-relaxed">
              {desc}
            </p>


          </div>
        </div>
  )
}

export default AboutCompo
