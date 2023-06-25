import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoginUserMutation } from "../../Service/userAuth";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { storeToken } from "../../Service/localStorageService";
import "../../App.css";
import loginImage from "../../images/login.jpg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.email && user.password) {
      const res = await loginUser(user);

      if (res.data) {
        storeToken([res.data.token, res.data.role]);
        if (res.data.role === "company") {
          navigate("/company");
        }
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
        });
        console.log("Hemant", res.data.token);
      } else {
        toast.error(res.error.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
        });
      }
    } else {
      toast.error("If All Data Are Not Entered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "my-toast-body mt-28 lg:ml-72 -ml-44 text-xl",
      });
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 mt-28 mb-28 ">
        <div className="flex justify-space-evenly h-full">
          <div
            className="hidden bg-cover lg:block lg:w-1/3 border-4 ml-32"
            style={{ backgroundImage: `url(${loginImage})` }}
          >
            <div className="flex items-center h-full px-20 "></div>
          </div>

          <div className="flex items-center w-full max-w-md  mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <p className="text-xl mt-3 text-gray-500 dark:text-gray-300 font-bold">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form method="POST" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-xl  text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      onChange={handleInputs}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block text-xl w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6 relative">
                    <label
                      htmlFor="password"
                      className="text-xl text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <input
                      onChange={handleInputs}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 text-xl py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <button
                      className="mt-5 absolute top-1/2 right-0 transform -translate-y-1/2 pr-3 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      onClick={(event) => {
                        event.preventDefault();
                        setShowPassword(
                          (prevShowPassword) => !prevShowPassword
                        );
                      }}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </button>
                  </div>

                  <button className="text-center font-bold text-xl mt-6 mb-5 w-full px-6 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                  </button>
                </form>
                <Link to={"/forgetpassword"}>
                  <p className="text-xl text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
                    Forgot password?
                  </p>
                </Link>
                <div className="mt-6 text-xl text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <div className="text-blue-500 focus:outline-none focus:underline hover:underline">
                    <Link to={"/signup"}>Sign up</Link>
                  </div>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
