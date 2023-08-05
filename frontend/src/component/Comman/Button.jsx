import React from "react";

const Button = ({ onClick, buttonName }) => {
  return (
    <>
      <button
        className="text-center font-bold text-xl mt-6 mb-5 px-8 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hidden xl:flex"
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Button;
