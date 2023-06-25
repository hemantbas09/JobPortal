import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../Service/userAuth";

const ResetPassword = () => {
  const [resetPassword] = useResetPasswordMutation();
  const { id, token } = useParams();
  const [user, setUser] = useState({
    password: "",
    passwordConfirmation: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password && user.passwordConfirmation) {
      const res = await resetPassword({ user, id, token });

      if (res.data.success === true) {
        navigate("/home");
      }
    } else {
      console.log("Please add all inputs");
    }
  };

  return (
    <>
      <section class=" dark:bg-gray-900">
        <div class="bg-gray-50 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create new password
            </h1>
            <p class="font-light text-gray-500 dark:text-gray-400 text-xl">
              Simply enter your current password, along with your new password
              and confirm the new password. We'll handle the rest and update
              your password accordingly!
            </p>
            <form
              class="mt-8 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit}
            >
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

export default ResetPassword;
