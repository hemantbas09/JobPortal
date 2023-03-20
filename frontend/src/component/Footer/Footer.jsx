import React from 'react'
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaInstagram, FaBehance, FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className='mx-40 -mt-11'>
                
                <div className='w-full  py-24'>
                    <div className=' md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]'>

                        <div className='col-span-2'>
                            <img src="image/logo.svg" alt="logo" className="h-24 w-24 -mt-8" />
                            <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                            <h3 className='py-2 text-[#6D737A]'>Call : 9841119798</h3>
                            <h3 className='py-2 text-[#6D737A]'>Samakhusi, Kathmandu</h3>
                            <h3 className='py-2 text-[#363A3D]'>Email: hemantbasnet61@mail.com</h3>
                        </div>

                        <div>
                            <h3 className='text-2xl font-bold text-gray-600'>Explore</h3>
                            <ul className='py-6 text-[#6D737A]'>
                                <li className='py-2'>Home</li>
                                <li className='py-2'>About</li>
                                <li className='py-2'>Course</li>
                                <li className='py-2'>Blog</li>
                                <li className='py-2'>Contact</li>

                            </ul>
                        </div>

                        <div>
                            <h3 className='text-2xl font-bold text-gray-600'>Category</h3>
                            <ul className='py-6 text-[#6D737A]'>
                                <li className='py-2'>Design</li>
                                <li className='py-2'>Development</li>
                                <li className='py-2'>Marketing</li>
                                <li className='py-2'>Business</li>
                                <li className='py-2'>Lifestyle</li>
                                <li className='py-2'>Photography</li>
                                <li className='py-2'>Music</li>

                            </ul>
                        </div>

                        <div className='max-[780px]:col-span-2'>
                            <h3 className='text-2xl font-bold text-gray-600'>Social Media</h3>
                            <div className=' gap-y-4 mt-5 '>
                                <div className='p-4  w-fit rounded-xl'><FaFacebookF size={25} /></div>
                                <div className='p-4 w-fit rounded-xl'><FaDribbble size={25} /></div>
                                <div className='p-4 w-fit rounded-xl'><FaLinkedinIn size={25} /></div>
                                <div className='p-4 w-fit rounded-xl'><FaInstagram size={25} /></div>
                                <div className='p-4 w-fit rounded-xl'><FaGithub size={25} /></div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer