import React, { useState } from "react";
import { useSendPasswordResetEmailMutation } from "../../Service/userAuth";

const SendPasswordResetEmail = () => {
  const [sendPasswordResetEmail, { isLoading }] =
    useSendPasswordResetEmailMutation();
  const [user, setUser] = useState({
    email: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email) {
      const res = await sendPasswordResetEmail(user);
      console.log(res);
      if (res.data.success === true) {
        navigate("/newpassword");
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
              Forgot your password?
            </h1>
            <p class="font-light text-gray-500 dark:text-gray-400 text-xl">
              Don't fret! Just type in your email and we will send you a code to
              reset your password!
            </p>
            <form
              class="mt-8 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handleInputs}
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-4 text-xl py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="text-center font-bold text-xl mt-6 mb-5 w-full px-6 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SendPasswordResetEmail;
