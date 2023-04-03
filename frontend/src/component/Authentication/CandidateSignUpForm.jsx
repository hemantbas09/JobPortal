import { React, useState } from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { storeToken } from '../../Service/localStorageService';
import { useRegisterUserMutation } from '../../Service/userAuth'

const CandidateSignUpForm = () => {
  const [showPassword, setshowPassword] = useState(true);
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();




  const [user, setUser] = useState({
    fullName: "", email: "", password: "", passwordConfirmation: "", role: "user"
  })

  let name, value;
  const handleInputs = async (e) => {
    name = e.target.name;
    value = e.target.value
    setUser({ ...user, [name]: value })
    console.log('name', user)



  }
  console.log(user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // code to submit form data to server or handle form validation goes here
    if (user.fullName && user.email && user.password && user.passwordConfirmation) {
      console.log('first')
      const res = await registerUser(user);
      console.log('Second', res)
      if (res.data.success === true) {
        console.log("Pitai Khanxas")
        storeToken(res.data.token)
        navigate("/")
      }
    } else {
      console.log("Please add all input")
    }
  };


  return (
    <>
      <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" method='POST' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
          <input type="text" id='fullName' name='fullName' placeholder="Hemant Basnet" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

            value={user.fullName}
            onChange={handleInputs}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
          <input type="email" id='email' name='email' placeholder="hemantbasnet61@gmail.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={user.email}
            onChange={handleInputs}
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              value={user.password}
              onChange={handleInputs}
              required
            />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3   text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" onClick={(event) => {
              event.preventDefault();
              setshowPassword(!showPassword);
            }}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

        </div>

        <div className="relative">
          <label htmlFor="passwordConfirmation" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} id="passwordConfirmation" name="passwordConfirmation" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              value={user.confirmPassword}
              onChange={handleInputs}
              required

            />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3   text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" onClick={(event) => {
              event.preventDefault();
              setshowPassword(!showPassword);
            }}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

        </div>




        <button
          className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          <span>Sign Up </span>


          <IoIosArrowDropright className="w-5 h-5 rtl:-scale-x-100" size={20} />
        </button>
      </form>
    </>
  )
}

export default CandidateSignUpForm