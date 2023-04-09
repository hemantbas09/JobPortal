// All Import:

import { React, useState } from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { storeToken } from '../../Service/localStorageService';
import { useRegisterUserMutation } from '../../Service/userAuth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css'


const CandidateSignUpForm = () => {

  // create Intial state variable using useState Hook:
  const [showPassword, setshowPassword] = useState(true);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(true);
  const [user, setUser] = useState({
    fullName: "", email: "", password: "", passwordConfirmation: "", role: "user"
  })

  // Initial navigate using useNavigate Hook which helps to navigate in another page:
  const navigate = useNavigate();


  /* This line uses the useRegisterUserMutation hook to create a function for 
  registering a user and sets a isLoading flag to show loading state. */
  const [registerUser, { isLoading }] = useRegisterUserMutation();



  /* handle input changes with extract of name and value of the input field and 
  update the user state by spreading the previous  state and replace by new value*/

  let name, value;
  const handleInputs = async (e) => {
    name = e.target.name;
    value = e.target.value
    setUser({ ...user, [name]: value })
  }

  // Code for the Password validation written in regular expression:
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(user.password);
  const hasLowercase = /[a-z]/.test(user.password);
  const hasNumber = /\d/.test(user.password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(user.password);

  // check the Shared the similarty of the password with name and email
  const emailChars = new Set(user.email.toLowerCase().split(""));
  const nameChars = new Set(user.fullName.toLowerCase().split(""));
  const passwordChars = new Set(user.password.toLowerCase().split(""));
  const sharedChars = new Set(
    [...emailChars, ...nameChars].filter((char) => passwordChars.has(char))
  );
  const threshold = 0.7; // if character is similarity in greater than 0.7
  const similarity = sharedChars.size / passwordChars.size;
  const hasPersonalInfo = similarity >= threshold;


  // This function is used to hanlde the form submission:
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check whether all Fields are complete or not:
    if (user.fullName && user.email && user.password && user.passwordConfirmation) {

      // Check the password is greater than the 8 digits
      if (user.password.length < minLength || user.passwordConfirmation.length < minLength) {


        toast.error("Password must have of 8 digits", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
        });
      }
      // Check Password field must containe lowercase,uppercase, number and specail character: 
      else if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {


        toast.error("Password must contain lowercase, uppercase, number, and special characters", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "my-toast-body  mt-28 lg:ml-72 -ml-44 text-xl",
        });
      }
      // check Password should not contain similar as email and user:
      else if (hasPersonalInfo === true) {

        toast.error("Password can't match email or name.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
        });
      }
      else {
        // Asynchronously registers the user with the provided user data.
        const res = await registerUser(user);

        // check after register is success or not: if success get res.data otherwise res.error:
        if (res.data) {
          // Give sucess message to user:
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: " text-xl"
          });
          storeToken(res.data.token)
          navigate("/")
        } else {

          // Give error message to user:
          toast.error(res.error.data.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            bodyClassName: "my-toast-body",
            className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl"
          });

        }
      }
    } else {
      // for give error message to the user if all field are not fill:
      toast.success("Please Fill all the Field", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl"
      });

    }
  };


  return (
    <>
      {/* User Registration Form with the handleSubmit function */}
      <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" method='POST' onSubmit={handleSubmit}>

        {/* This is Input For the Full name of the User: */}
        <div>
          <label htmlFor="fullName" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Full Name</label>
          <input type="text" id='fullName' name='fullName' placeholder="Hemant Basnet" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

            value={user.fullName}
            onChange={handleInputs}
            required
          />
        </div>

        {/* This is Input fot the Email of the User */}
        <div>
          <label htmlFor="email" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Email address</label>
          <input type="email" id='email' name='email' placeholder="hemantbasnet61@gmail.com" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={user.email}
            onChange={handleInputs}
            required
          />
        </div>

        {/* This is Input for the Password  */}
        <div className="relative">
          <label htmlFor="password" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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

        {/* This is for the Conformation Password */}
        <div className="relative">
          <label htmlFor="passwordConfirmation" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Confirm Password</label>
          <div className="relative">
            <input type={showConfirmationPassword ? "text" : "password"} id="passwordConfirmation" name="passwordConfirmation" placeholder="Enter your password" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              value={user.confirmPassword}
              onChange={handleInputs}
              required

            />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3   text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" onClick={(event) => {
              event.preventDefault();
              setShowConfirmationPassword(!showConfirmationPassword);
            }}>
              {showConfirmationPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>

        </div>

        {/* This is Submit Buttton for the User Registration Form */}
        <button
          className="flex items-center justify-between w-full px-6 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          <span>Sign Up </span>


          <IoIosArrowDropright className="w-5 h-5 rtl:-scale-x-100" size={20} />
        </button>
      </form>
    </>
  )
}

export default CandidateSignUpForm