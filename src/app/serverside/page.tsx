import React from 'react'
import Navbar from '../component/navbar'

interface data {
  id: number,
  name: string,
  type: string,
  available: boolean,
}



const page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/")
  const data : data[] = await response.json();
 
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center '>
      <h1 className=' mt-8 text-center tracking-wide text-3xl font-bold text-[#24282ccc] '>
        SERVER SIDE DATA FETCHING</h1>
        </div>
        <div className='grid ml-6 mr-6 gap-[30px]  mt-[40px] lg:grid-cols-3 sm:girl-cols-1'>
        {data.map ((todo , index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl ease-in-out transition duration-300'>
            <h3 className='text-xl font-semibold mb-4'>{todo.name}</h3>
            <p className='text-gray-700 mb-2'>Type: {todo.type}</p>
            <p className='text-gray-500 mb-2'>{todo.available ? "Available" : "Not Available" } </p>
             <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-blue-600 transition'>Learn More</button>
             </div>
        ))}




      </div>
    </div>
  )
}

export default page



