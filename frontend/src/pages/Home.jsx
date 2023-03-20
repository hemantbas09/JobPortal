import React from 'react'
import Hero from "../component/Hero/Hero";
import { Category, Job } from '../component/index';

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <div >
                    <h1>Job Categories</h1>
                    <p>Your Career Starts with Us</p>


                    <div class="grid grid-cols-3 gap-5">

                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>

                    </div>

                </div>
                <div >
                    <h1>Job Categories</h1>
                    <p>Your Career Starts with Us</p>


                    <div class="grid grid-cols-3 gap-5">

                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>
                        <div class="bg-gray-100 w-80 "> <Job /></div>

                    </div>

                </div>
            </div>
     
        </>
    )
}

export default Home