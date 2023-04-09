// All Import

import { React, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";
import { useRegisterUserMutation } from '../../Service/userAuth'
import { useNavigate } from 'react-router-dom';
import { storeToken } from '../../Service/localStorageService';
import { toast } from 'react-toastify';
import '../../App.css'


const CompanySignUpForm = () => {

    // create Intial state variable using useState Hook:
    const [showPassword, setshowPassword] = useState(true);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(true);
    const [user, setUser] = useState({
        fullName: "", email: "", password: "", passwordConfirmation: "", role: "company"
    })
    const [document, setDocument] = useState("");
    const [image, setimage] = useState("");
    /* This line uses the useRegisterUserMutation hook to create a function for 
    registering a user and sets a isLoading flag to show loading state. */
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    
    /*navigate is function created using useNavigate 
    hook for navigate to different route:*/
    const navigate = useNavigate();



    /* handle input changes with extract of name and value of the input field and 
    update the user state by spreading the previous  state and replace by new value*/
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value })

    }

    // Thi function is used read the file and change into base64 formate to file:
    function previewFiles(document) {
        const reader = new FileReader();
        reader.readAsDataURL(document)
        reader.onloadend = () => {
            setimage(reader.result)

        }
    }
    // This function is used to handle the input:
    const handleFileInput = (e) => {
        const document = e.target.files[0];
        setDocument(document);
        previewFiles(document)

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
            if (user.password.length < minLength && user.passwordConfirmation.length < minLength) {


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

                toast.error("Password can't match email or name", {
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
            // if password is well Formated:
            else {
                // create a formData and send to backedn because of file also submitted.
                const formData = new FormData();
                formData.append('fullName', user.fullName);
                formData.append('email', user.email);
                formData.append('password', user.password);
                formData.append('passwordConfirmation', user.passwordConfirmation);
                formData.append('role', user.role);
                formData.append('document', image);

                // Asynchronously registers the user with the provided user data.
                const res = await registerUser(formData);
                
                // check after register is success or not: if success get res.data otherwise res.error:
                if (res.data) {
                    // Give Success message to user:
                    toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        className: "text-xl",
                    });
                    navigate("/")
                    storeToken(res.data.token)
                    

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
                        className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
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
            {/* Form for the Compeny Register with the handleSubmit function */}

            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" method='POST' onSubmit={handleSubmit} encType='multipart/form-data' action="/uploadmultiple" >

                {/* Input For the Company Name */}
                <div>
                    <label htmlFor="fullName" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Company Name:</label>
                    <input id="fullName" name="fullName" type="text" placeholder="Apple" className="block w-full px-5 text-xl py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={handleInputs}
                        required
                    />
                </div>

                {/* Input For the Company Email */}
                <div>
                    <label htmlFor="email" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Email address</label>
                    <input email="email" name="email" type="email" placeholder="company@gmail.com" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={handleInputs}
                        required
                    />
                </div>

                {/* Input For the Password  */}
                <div className="relative">
                    <label htmlFor="password" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Password</label>
                    <div className="relative">
                        <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={handleInputs}
                            required
                        />

                        {/* Eye for the password hide or seen */}
                        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3   text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" onClick={(event) => {
                            event.preventDefault();
                            setshowPassword(!showPassword);
                        }}>
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </button>
                    </div>

                </div>

                {/* Input for the Conformation Password */}
                <div className="relative">
                    <label htmlFor="passwordConfirmation" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Confirm password</label>
                    <div className="relative">
                        <input id="passwordConfirmation" name="passwordConfirmation" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

                            onChange={handleInputs}
                            required
                        />

                        {/* Hide the password or seen by the user */}
                        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3   text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" onClick={(event) => {
                            event.preventDefault();
                            setShowPasswordConfirmation(!showPasswordConfirmation);
                        }}>
                            {showPasswordConfirmation ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                </div>
                <br />
                {/* document input for the user upload company document */}
                <div className='md:-ml-72'>
                    <label htmlFor="document" className="block text-xl text-gray-500 dark:text-gray-300">Company Document</label>

                    <label htmlFor="document" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>

                        <h2 className="mt-1 text-xl font-medium tracking-wide text-gray-700 dark:text-gray-200">Upload Document</h2>

                        <p className="mt-2  tracking-wide text-xl text-gray-500 dark:text-gray-400"> {document ? document.name : "Upload your compeny Register Document in pdf"} </p>

                        <input id="document" type="file" className="hidden" name="document"
                            onChange={handleFileInput}
                            required />

                        <span className="sr-only">Choose file</span>
                    </label>
                </div>

                {/* Sign Up button for the Comapny */}
                <button
                    className="flex items-center justify-between w-full px-6 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Sign Up </span>
                    <IoIosArrowDropright className="w-5 h-5 rtl:-scale-x-100" size={20} />
                </button>
            </form>

        </>
    )
}

export default CompanySignUpForm