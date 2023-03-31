import React from 'react'

const Button = (buttonName) => {
    return (
        <>

            <button type="submit" className="px-6 py-2 border-2 border-indigo-700 bg-indigo-700 text-white  w-fit rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold leading-10">Login</button>


            <button class="px-6 py-2 font-medium border-2 border-indigo-600 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Nepal
            </button>
            
        </>
    )
}

export default Button