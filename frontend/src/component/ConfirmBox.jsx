import { React, useState } from 'react'
import { IoMdWarning } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const ConfirmBox = () => {
    return (

        <>

            <div className="p-20">
                <div className="flex gap-8 items-center">
                    <div className="bg-gray-700 text-white w-16 h-16 rounded-full flex item-center justify-center">
                        ok
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className='font-bold text-3xl'>Hemant Basnet</h1>
                        <p className='text-gray-700'>I am a Web Developer</p>
                    </div>

                </div>
                <button className='outline outline-1 px-3 py-2'>Open Modal</button>
            </div>
        </>
    )
}

export default ConfirmBox