import React from 'react'

const Contact = () => {
  return (
    <section className="mx-auto py-12 px-4" id='contact'>
  
  <div className="bg-white shadow-md rounded-lg p-6 lg:w-1/2 mx-auto">
  <h1 className="text-3xl font-bold mb-1">Contact Us</h1>
  <p className='mb-4 text-red-800'>Please fill this form in a decent manner</p>
    <form method='post' action='https://formspree.io/f/xwkjnngz'>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full border border-gray-300 p-2 rounded-lg"
          id="name"
          name="name"
          type="text"
          required={true}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border border-gray-300 p-2 rounded-lg"
          id="email"
          name="email"
          type="email"
          required={true}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg"
          id="message"
          name="message"
          rows={4}
          required={true}
          defaultValue={""}
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  </div>
</section>
  )
}

export default Contact
