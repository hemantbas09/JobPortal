import { Link } from "react-router-dom";
import Hero from "../component/Hero/Hero";
import { Category, Job } from "../component/index";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-y-10 mt-40">
      <Hero />
      <hr />
      <div className="flex flex-col w-full">
        <div className="items-center justify-center text-center mb-10">
          <h1 className="py-2 text-3xl text-indigo-500 font-medium">
            Job Categories
          </h1>
          <p className="py-2 text-base text-gray-600">
            Your Career Starts With Us
          </p>
        </div>
        <Category />
      </div>
      <hr />
      <div className="flex flex-col">
        <div className="items-center justify-center text-center mb-10">
          <h1 className="py-2 text-3xl text-indigo-500 font-medium">
            Featured Jobs
          </h1>
          <p className="py-2 text-base text-gray-600">
            Know Your Worth And Find The Job That Quality Your Life
          </p>
        </div>
        <Job />
      </div>
      <hr />
      <div className="flex flex-col w-full gap-y-8">
        <div className="flex flex-col md:flex-row items-center justify-start gap-x-48 gap-y-10 mb-5">
          <div className="w-full md:w-1/2">
            <img
              className="w-full rounded-lg sm:mx-0 sm:shrink-0"
              src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684954139/DefaultImage/TrulyHired_Career_Blog_-_11_Steps_to_a_Successful_Job_Search_hflu14.jpg"
              alt="Featured Job"
            />
          </div>
          <div className="flex flex-col items-center gap-y-10 md:w-4/12 text-center">
            <h1 className="text-gray-600 mb-2 text-3xl">
              Million of jobs. Find the one that Suits You.
            </h1>
            <p className="mb-5 text-lg text-gray-600 text-center md:text-justify">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide.
              <br />
              <li className="mt-3">Bring to the table win-win survival</li>
              <br />
              <li>Capitalize on low hanging fruit to identify</li>
              <br />
              <li>But I must explain to you how all this</li>
            </p>
            <Link to="/search">
              <button className="uppercase mx-2.5 px-5 rounded-lg py-4 text-white bg-[rgb(65,88,208)] font-bold w-fit">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-y-10">
          <div className="flex flex-col items-center gap-y-5">
            <span className="uppercase text-gray-600 text-5xl font-bold">
              4500
            </span>
            <p className="uppercase text-gray-600 text-3xl">job seeker</p>
          </div>

          <div className="flex flex-col items-center gap-y-5">
            <span className="uppercase text-gray-600 text-5xl font-bold">
              4M
            </span>
            <p className="uppercase text-gray-600 text-3xl">Job</p>
          </div>

          <div className="flex flex-col items-center gap-y-5">
            <span className="uppercase text-gray-600 text-5xl font-bold">
              1M
            </span>
            <p className="uppercase text-gray-600 text-3xl">Company</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center md:flex-row gap-y-16 md:gap-x-32 md:ml-32 md:mr-32 overflow-hidden w-full">
        <img src="image/brand.png" alt="Brand" />
        <img src="image/brand3.jpeg" alt="Brand" />
        <img src="image/brand4.jpeg" alt="Brand" />
        <img src="image/brand5.png" alt="Brand" />
        <img src="image/brand1.png" alt="Brand" />
      </div>
      <div className="bg-zinc-50 flex flex-col-reverse md:flex-row justify-between items-center  rounded-lg shadow-lg border-2 border-zinc-100 w-full">
        <div className="md:w-6/12 flex flex-col items-center md:items-start justify-start md:pl-3">
          <h1 className="text-gray-600 mb-2 text-4xl font-bold">Recruiting?</h1>
          <p className="mt-7 w-11/12 mb-5 text-xl text-gray-600 md:text-justify text-center">
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs in our database.
          </p>
          <div>
            <Link to="/login">
              <button className="max-[780px] w-full my-4 px-5 py-3 rounded-md bg-indigo-700 text-white font-bold text-xl">
                Start Recruiting Now
              </button>
            </Link>
          </div>
        </div>
        <div className="mb-3 pt-3 pr-6">
          <img
            className="pl-8 p-3 w-96 h-full l sm:mx-0 sm:shrink-0"
            src="image/employee.png"
            alt="Employee"
          />
        </div>
      </div>
      <div className="mt-7"></div>
      <hr />
    </div>
  );
};

export default Home;
