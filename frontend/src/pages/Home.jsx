import React from 'react'
import Hero from "../component/Hero/Hero";
import { Category, Job } from '../component/index';

const Home = () => {
    return (
        <>
            <div className=' mx-40  -mt-10'>
                <Hero />
                <div >
                    
                    <div className='  items-center justify-center text-center mb-10'>
                        <h1 className=' py-2 text-3xl text-indigo-500 font-medium' >Job Categories</h1>
                        <p className=' py-2 text-base text-gray-600'>Your Career Starts With Us</p>
                    </div>

                    <div class="grid grid-cols-3  gap-x-28 ml-1.5">

                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>

                    </div>

                </div>
                <div >
                    <div className='  items-center justify-center text-center mb-10'>
                        <h1 className=' py-2 text-3xl text-indigo-500 font-medium' >Featured Jobs</h1>
                        <p className=' py-2 text-base text-gray-600'>Know Your Worth And Find The Job That Quality Your Life</p>
                    </div>

                    <div className="grid grid-cols-3 gap-x-28 ml-1.5">

                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Job /></div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Home