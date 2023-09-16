import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { getToken } from "../../Service/localStorageService";

const CandidateNavbar = () => {
  const token = getToken("token");
  const role = getToken("role");
  const [dropdownOpen, setDropdownOpen] = useState({});
  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen({});
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Find Job",
      path: "/",
      dropdownItems: [
        {
          label: "Information Technology and Engineering",
          path: "/informationTechnology",
        },
        { label: "Healthcare and Medical", path: "/healthcare" },
        { label: "Finance and Accounting", path: "/finance" },
        { label: "Administrative and Office Support", path: "/administrative" },
        { label: "Education and Training", path: "/education" },
        { label: "Other", path: "/other" },
      ],
    },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen({});
  };

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="z-50 bg-white fixed top-0 w-full xl:max-w-[1750px]">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img className="w-52" src="image/logo.svg" alt="logo" />
        </Link>

        <div className="flex gap-72">
          <div className="hidden xl:flex items-center text-xl md:gap-x-10">
            <ul className="flex gap-x-10 items-center">
              {menuItems.map((item, index) => (
                <li
                  className="text-2xl text-center active:text-blue-600/100"
                  key={index}
                >
                  {item.dropdownItems ? (
                    <div
                      className="text-xl flex flex-col items-center gap-3"
                      ref={dropdownRef}
                    >
                      <button
                        className="relative flex items-center gap-4"
                        onClick={() => toggleDropdown(index)}
                      >
                        <span className="active:text-blue-600 text-2xl">
                          {item.label}
                        </span>

                        {dropdownOpen[index] ? (
                          <IoMdArrowDropdown />
                        ) : (
                          <IoMdArrowDropup />
                        )}
                      </button>

                      {dropdownOpen[index] && (
                        <div className="bg-white absolute top-full m-auto w-full z-20 border-none">
                          <ul className="flex flex-col gap-8 py-12">
                            {item.dropdownItems.map(
                              (dropdownItem, dropdownIndex) => (
                                <li
                                  key={dropdownIndex}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setDropdownOpen({});
                                  }}
                                  className="hover:text-blue-600/100 text-2xl"
                                >
                                  <Link to={dropdownItem.path}>
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={item.path}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 relative mr-4 md:mr-14">
            <div>
              {!token ? (
                <Link to="/login">
                  <button className="text-center font-bold text-xl mt-6 mb-5 px-8 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hidden xl:flex">
                    Sign In
                  </button>
                </Link>
              ) : (
                <Link to="/logout">
                  <button className="text-center font-bold text-xl mt-6 mb-5 px-8 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hidden xl:flex">
                    Dashboard
                  </button>
                </Link>
              )}
            </div>
            {/* <button className=" w-6 md:w-8">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687549087/11859183171606260004_wma3em.svg"
                alt="notification"
              />
            </button> */}
            <button className="w-8 xl:hidden" onClick={toggleMobileMenu}>
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687503134/hamburgerIcon_bxy35q.svg"
                alt="hamburger-menu"
              />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-white w-full border-b ">
          <ul className="flex flex-col items-start gap-6 py-4 overflow-x-auto">
            {menuItems.map((item, index) => (
              <li key={index} className="text-2xl text-left">
                {item.dropdownItems ? (
                  <div
                    className="text-xl flex flex-col items-start gap-3"
                    ref={dropdownRef}
                  >
                    <button
                      className="relative flex items-center gap-4"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="active:text-blue-600 text-2xl">
                        {item.label}
                      </span>
                      {dropdownOpen[index] ? (
                        <IoMdArrowDropdown />
                      ) : (
                        <IoMdArrowDropup />
                      )}
                    </button>
                    {dropdownOpen[index] && (
                      <div className="bg-white w-full z-20 border-none">
                        <ul className="flex flex-col gap-8 py-2">
                          {item.dropdownItems.map(
                            (dropdownItem, dropdownIndex) => (
                              <li
                                key={dropdownIndex}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setDropdownOpen({});
                                }}
                                className="hover:text-blue-600/100 text-2xl"
                              >
                                <Link to={dropdownItem.path}>
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.path}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CandidateNavbar;
