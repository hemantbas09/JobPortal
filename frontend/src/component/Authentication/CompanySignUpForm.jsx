import { React, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";
import { useRegisterUserMutation } from '../../Service/userAuth'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { storeToken } from '../../Service/localStorageService';
import { toast } from 'react-toastify';
import '../../App.css'
import { createUser, uploadDocument } from '../../Redux/Action/userApiAction';

const CompanySignUpForm = () => {



    const [showPassword, setshowPassword] = useState(true);

    const [registerUser, { isLoading }] = useRegisterUserMutation();




    /*navigate is function created using useNavigate 
    hook for navigate to different route:*/
    const navigate = useNavigate();
    /* dispatch is function creeated using use dispatch 
    hook used to dispatch actions to the react store and 
    triger the update*/
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        fullName: "", email: "", password: "", passwordConfirmation: "", role: "company"
    })
    const [document, setDocument] = useState("");
    const [image, setimage] = useState("");
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value })
        console.log("This is user", user);
    }
    function previewFiles(document) {
        const reader = new FileReader();
        reader.readAsDataURL(document)

        reader.onloadend = () => {

            setimage(reader.result)
            console.log("This is Image", image)
        }
    }
    const handleFileInput = (e) => {
        const document = e.target.files[0];
        setDocument(document);
        previewFiles(document)
        console.log("this is file", document)
    }
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(user.password);
    const hasLowercase = /[a-z]/.test(user.password);
    const hasNumber = /\d/.test(user.password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(user.password);
    const hasPersonalInfo = user.password.includes(user.fullName) && user.password.includes(user.email);
    const hasSequentialChars = /01234567890qwertyuiopasdfghjklzxcvbnm/.test(user.password.toLowerCase());
    const hasRepeatedChars = /(.)\1\1/.test(user.password);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.fullName && user.email && user.password && user.passwordConfirmation) {
            console.log(user.password.length)
            if (user.password.length < minLength && user.passwordConfirmation.length<minLength) {
                
           
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
            else if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {
                

                toast.error("Password should be combination of uppercase,lowercase,numbers,special characters", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    className: "my-toast-body my-toast-animation mt-28 lg:ml-72 -ml-44 text-xl",
                });
            } else if (!hasPersonalInfo) {

                toast.error("Password should not match name and email", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    className: "my-toast-body my-toast-animation mt-28 lg:ml-72 -ml-44 text-xl",
                });
            } else if (hasSequentialChars || hasRepeatedChars) {

                toast.error("Password should not have sequential or repeated characters", {
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
            } else {
                const formData = new FormData();
                formData.append('fullName', user.fullName);
                formData.append('email', user.email);
                formData.append('password', user.password);
                formData.append('passwordConfirmation', user.passwordConfirmation);
                formData.append('role', user.role);
                formData.append('document', image);
                const res = await registerUser(formData);
                if (res.data) {
                    console.log(res.data.message)

                    toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        // bodyClassName: "my-toast-body",
                        className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
                    });
                    navigate("/")
                    storeToken(res.data.token)

                } else {

                    console.log(res.error.data.message)
                    toast.error(res.error.data.message, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        // bodyClassName: "my-toast-body",
                        className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
                    });

                }
            }

        } else {
            console.log('Please add all input');
        }
    };

    return (
        <>
            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" method='POST' onSubmit={handleSubmit} encType='multipart/form-data' action="/uploadmultiple" >



                <div>
                    <label htmlFor="fullName" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Company Name:</label>
                    <input id="fullName" name="fullName" type="text" placeholder="Apple" className="block w-full px-5 text-xl py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"


                        onChange={handleInputs}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Email address</label>
                    <input email="email" name="email" type="email" placeholder="company@gmail.com" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

                        onChange={handleInputs}
                        required
                    />
                </div>


                <div className="relative">
                    <label htmlFor="password" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Password</label>
                    <div className="relative">
                        <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"


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
                    <label htmlFor="passwordConfirmation" className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Confirm password</label>
                    <div className="relative">
                        <input id="passwordConfirmation" name="passwordConfirmation" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="block text-xl w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

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


                <br />
                <div className='md:-ml-72'>
                    <label htmlFor="document" class="block text-xl text-gray-500 dark:text-gray-300">Company Document</label>

                    <label htmlFor="document" class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>

                        <h2 class="mt-1 text-xl font-medium tracking-wide text-gray-700 dark:text-gray-200">Upload Document</h2>

                        <p class="mt-2  tracking-wide text-xl text-gray-500 dark:text-gray-400"> {document ? document.name : "Upload your compeny Register Document in pdf"} </p>

                        <input id="document" type="file" class="hidden" name="document"
                            onChange={handleFileInput}
                            required />

                        <span class="sr-only">Choose file</span>
                    </label>



                </div>

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