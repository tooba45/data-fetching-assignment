"use client"
import React, {useState, useEffect} from 'react'
import Navbar from '../component/navbar'
import Image from 'next/image'

interface data {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    
}


const Page = () => {
    const [data, setData] = useState<data[]>([]); //set to hold fetch data
    const [loading, setLoading] = useState(false); //loading state
   

    useEffect(() => {
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        }, 2000);

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data : data[] = await response.json()
        setData(data)
    }
     fetchData()
    } , [] )


  return (
    <div>
      <Navbar/>
      {loading? (
        <div className='flex items-center justify-center h-screen'>
        <h1 className='text-2xl text-gray-500'>&quot;Loading.....&quot;</h1>
        </div>
      ) : (
        <div className=' pt-[50px] '> 
            <h1 className='text-center tracking-wide text-3xl font-bold text-[#24282ccc] '>CLIENT SIDE DATA FETCHING</h1>
            <div className='grid lg:ml-6 mx-10 mt-[40px] lg:grid-cols-3 sm:girl-cols-1'>
            {data.map ((product, index) => (
                <div key={index} className='bg-white p-4 mb-8 w-[300px] ml-4 hover:shadow-2xl hover:scale-100 rounded-[10px] shadow-lg ' >
                    <div className='h-[200px]'><Image
                                       src={product.image} 
                                        alt={product.title} 
                                        width={140} 
                                        height={100}
                                        className='mx-auto' /></div>
                    <p className='text-stone-400 mt-2'> {product.category}</p> 
                    <p className='font-bold text-xl mt-2 '> {product.title}</p> 
                    <p className='text-stone-400 line-clamp-3 w-[250px] mt-2'> {product.description}</p> 
                    <p className='font-bold mt-2'> ${product.price}</p>

                   <div className='flex justify-end'>
                    <button className=" font-bold rounded-[8px] hover:bg-[#85c7db] ml-3 px-6 py-[12px] mt-5 text-white bg-[#2ba5ca]">Shop Now</button>
                   </div>

                    </div>
            ))}
            
            
            </div>
            
            
            <div>

            </div>
        </div>
      )}

    </div>
  )
}

export default Page
