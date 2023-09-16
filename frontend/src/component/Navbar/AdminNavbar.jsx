import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="z-50 bg-white fixed top-0 w-full xl:max-w-[1750px]">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img className="w-52" src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1691677613/logo_m1v7zw.svg" alt="logo" />
        </Link>

        <div className="flex gap-72">
          <div className="hidden xl:flex items-center text-xl md:gap-x-10"></div>
          <div className="flex items-center gap-4 relative mr-4 md:mr-14">
            <div>
              <Link to="/admin">
                <button className="text-center font-bold text-xl mt-6 mb-5 px-8 py-3 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 xl:flex mr-10 mt-2">
                  Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
