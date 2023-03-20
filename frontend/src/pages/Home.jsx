import React from 'react'
import Hero from "../component/Hero/Hero";
import { Category, Job } from '../component/index';
// import {workImage} from '../images/download.png'

const Home = () => {
    return (
        <>
            <div className=' mx-40  -mt-10'>
                <Hero />
                <hr />
                {/* Job Category:  */}
                <div >

                    <div className='  items-center justify-center text-center mb-10'>
                        <h1 className=' py-2 text-3xl text-indigo-500 font-medium' >Job Categories</h1>
                        <p className=' py-2 text-base text-gray-600'>Your Career Starts With Us</p>
                    </div>

                    <div className="grid grid-cols-3  gap-x-28 ml-1.5">

                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>
                        <div class="bg-gray-100 w-60 mb-10 "> <Category /></div>

                    </div>

                </div>
                <hr />
                {/* Feature Job */}
                <div >
                    <div className='  items-center justify-center text-center mb-10'>
                        <h1 className=' py-2 text-3xl text-indigo-500 font-medium' >Featured Jobs</h1>
                        <p className=' py-2 text-base text-gray-600'>Know Your Worth And Find The Job That Quality Your Life</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-28 ml-1.5">

                        <div class="bg-gray-100  mb-10 "> <Job /></div>
                        <div class="bg-gray-100  mb-10 "> <Job /></div>
                        <div class="bg-gray-100  mb-10 "> <Job /></div>
                        <div class="bg-gray-100  mb-10 "> <Job /></div>
                        <div class="bg-gray-100  mb-10 "> <Job /></div>
                        <div class="bg-gray-100  mb-10 "> <Job /></div>
                        <div class="bg-gray-100  mb-10 "> <Job /></div>
                        <div class="bg-gray-100  mb-10 "> <Job /></div>


                    </div>

                </div>
                <hr />
                {/* Totla COmpany and Job */}
                <div className=''>
                    <div className='flex justify-between'>
                        <img className='pl-8 p-3 block mx-auto h-100 w-80 rounded-full sm:mx-0 sm:shrink-0' src="image/download.png" alt="" />
                        <div className='w-96 mr-16  mt-10 pl-10 p-4 mb-5 '>
                            <h1 className=' text-gray-600 mb-2 text-3xl'>Million of jobs. Find the one that Suits You.</h1>
                            <p className='mb-5 text-xs text-gray-600 text-justify'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000companies worldwide.
                                <br /> <li className='mt-3'> Bring to the table win-win survival</li>
                                <br /> <li> Capitalize on low hanging fruit to identify</li>
                                <br /> <li> But I must explain to you how all this </li></p>
                            <button className='uppercase mx-2.5 px-5 rounded-lg py-2.5 text-white bg-[rgb(65,88,208)] font-bold'>Get Started</button>
                        </div>
                    </div>
                    <hr />
                    <div className=' p-4 ml-10 flex justify-between  '>
                        <div className='ml-10'>
                            <span className='uppercase text-gray-600 text-5xl font-bold mb-10 '>4500</span>
                            <p className='uppercase text-gray-600 text-3xl -ml-10 mt-10 '>job seeker</p>
                        </div>

                        <div>
                            <span className='uppercase text-gray-600 text-5xl font-bold mb-10 '>4M</span>
                            <p className='uppercase text-gray-600 text-3xl ml-2 mt-10 '>job </p>

                        </div>

                        <div className='mr-4'>
                            <span className='uppercase text-gray-600 text-5xl font-bold mb-10 '>1M</span>
                            <p className='uppercase text-gray-600 text-3xl -ml-10 mt-10 '>Company</p>
                        </div>

                    </div>
                </div>
                <hr />
                {/* Top COmpany */}
                <div className='flex justify-between p-3 px-4 gap-x-5 mt-6'>
                    <img className='w-32 h-32 rounded-lg' src="image/download.png" alt="" />
                    <img className='w-32 h-32 rounded-lg' src="image/download.png" alt="" />
                    <img className='w-32 h-32 rounded-lg' src="image/download.png" alt="" />
                    <img className='w-32 h-32 rounded-lg' src="image/download.png" alt="" />
                    <img className='w-32 h-32 rounded-lg' src="image/download.png" alt="" />
                    <img className='w-32 h-32 rounded-lg' src="image/download.png" alt="" />
                    <img className='w-32 h-32 rounded-lg' src="image/download.png" alt="" />

                </div>

                <hr />
                <div className='mt-8 bg-zinc-100 flex justify-between'>
                    <div className='mt-10 ml-10 w-80'>
                        <h1 className=' text-gray-600 mb-2 text-3xl'>Recruiting?</h1>
                        <p className='mt-7 mb-5 text-xs text-gray-600 text-justify'>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database. </p>
                        <div>
                        <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-indigo-700 text-white font-bold'>Start Recruting Now</button>
                           
                        </div>
                    </div>
                    <div className='mb-3 pt-3 pr-6'>
                        <img className=' pl-8 p-3 rounded-3xl w-64 l sm:mx-0 sm:shrink-0' src="image/download.png" alt="" />
                    </div>
                </div>
                <hr />
                <div className='mt-7'>

                </div>
                <hr />
            </div>
            

        </>
    )
}

export default Home