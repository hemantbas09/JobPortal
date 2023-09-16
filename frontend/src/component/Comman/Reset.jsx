import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePasswordResetMutation } from "../../Service/userAuth";
import { toast } from "react-toastify";
const role = localStorage.getItem("role");

const Reset = () => {
  const [passwordReset] = usePasswordResetMutation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const id = decodedToken.userID;
  const [user, setUser] = useState({
    password: "",
    passwordConfirmation: "",
    oldpassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password && user.passwordConfirmation && user.oldpassword) {
      const res = await passwordReset({ id, user });

      if (res.error) {
        toast.error(res.error.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: " text-xl",
        });
      }

      if (res.data) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: " text-xl",
        });
        if (role === "company") {
          navigate("/company");
        } else if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    }
  };

  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="bg-gray-50 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create new password
            </h1>
            <p className="font-light text-gray-500 dark:text-gray-400 text-xl">
              Simply enter your current password, along with your new password
              and confirm the new password. We'll handle the rest and update
              your password accordingly!
            </p>
            <form
              className="mt-8 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit}
            >
              {/* Password */}
              <div>
                <label htmlFor="oldpassword" className="block mb-3">
                  Old Password
                </label>
                <input
                  onChange={handleInputs}
                  type="password"
                  id="oldpassword"
                  name="oldpassword"
                  className="focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10"
                  placeholder="Enter Password..."
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block mb-3">
                  New Password
                </label>
                <input
                  onChange={handleInputs}
                  type="password"
                  id="password"
                  name="password"
                  className="focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10"
                  placeholder="Enter Password..."
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="passwordConfirmation" className="block mb-3">
                  Confirm Password
                </label>
                <input
                  onChange={handleInputs}
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  className="focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10"
                  placeholder="Enter Password..."
                  required
                />
              </div>
              <button
                type="submit"
                className="text-center font-bold text-xl mt-6 mb-5 w-full px-6 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Change password
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reset;
