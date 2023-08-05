import { Link } from "react-router-dom";

const Sidebar = ({ Menus }) => {
  return (
    <>
      <div class="fixed overflow-auto flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-gray-800 text-white transition-all duration-300 border-none z-10 sidebar h-5/6 group">
        <div class="overflow-y-auto overflow-hidden flex flex-col justify-between flex-grow">
          <ul class="flex-col py-4 space-y-1">
            <div class="flex flex-col items-center mt-6 -mx-2">
              <img
                class="object-cover w-10 h-10 md:w-24 md:h-24 mx-2 rounded-full opacity-100 group-hover:opacity-100"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />

              <h4 class="opacity-0 md:opacity-100 group-hover:opacity-100 mx-2 text-xl mt-2 font-medium text-gray-800 dark:text-gray-200">
                Hemant Basnet
              </h4>
              <p class="opacity-0 md:opacity-100 group-hover:opacity-100 mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                hemantbasnet61@gmail.com
              </p>
            </div>

            <hr />
            {Menus.map((Menu, index) => (
              <li key={index}>
                <Link
                  to={Menu.link}
                  className="mt-14 py-8  flex flex-row text-black items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 border-l-4 border-transparent dark:hover:border-gray-800 pr-6"
                >
                  <img className="h-8 w-8 mr-4 ml-3" src={Menu.src} alt="" />
                  <span className="ml-2 font-normal text-xl leading-5 text-gray-500 ">
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
