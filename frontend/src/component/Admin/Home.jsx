import React from 'react'
import Category from '../category/Category'
import Box from './Box'
const Home = () => {
  return (
    <>



      <div className="flex justify-between gap-6 mt-6 mb-6  ">
        <div class=""> <Box /></div>
        <div class=" "> <Box /></div>
        <div class=" "> <Box /></div>
      </div>

      <div className='flex  justify-between gap-8'>
        <div className='h-screen text-gray-600 bg-white w-3/4 p-4'>
          <h1 className="text-2xl font-semibold ">Chart</h1>
        </div>
        <div className='h-screen text-gray-600 bg-white w-96 p-4'>
          <h1 className="text-2xl font-semibold ">Notification</h1>
        </div>
      </div>


    </>
  )
}

export default Home