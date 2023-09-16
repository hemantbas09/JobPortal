import AdminSidebar from "../Sidebar/AdminSidebar";
import AdminNavbar from "../Navbar/AdminNavbar";
const AdminProfile = () => {
  return (
    <div className="flex mt-28 space-x-6 md:space-x-32 min-h-screen antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <AdminNavbar />
      <AdminSidebar /> 
      <div className="p-7 flex-1 dark:bg-gray-800 h-screen left-30 mb-10">
        <form>
          {/* Cover Photo */}
          <div className="mx-auto h-96 relative">
            <img
              src={
                "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680327700/cld-sample-2.jpg"
              }
              alt="Cover Photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Picture */}
          <div className="mx-auto ">
            <div className="flex items-end justify-between ">
              <div className="flex justify-between">
                <img
                  src={
                    "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680327700/cld-sample.jpg"
                  }
                  alt="Profile Picture"
                  className="rounded-full w-24 h-24 border-4 border-white shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mx-auto w-2/3">
            <div className="">
              <h3 className="text-2xl font-semibold">Admin Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="text-lg">Admin Name</label>
                  <h2 className="w-full px-4 py-2 mt-2   ">Hemant basnet</h2>
                </div>
                <div>
                  <label className="text-lg">Email</label>
                  <h2>hemantbasnet61@gmail.com</h2>
                </div>

                <div>
                  <label className="text-lg">Phone Number</label>

                  <h2 className="w-full px-4 py-2 mt-2   ">9841119798</h2>
                </div>
                <div>
                  <label className="text-lg">Address</label>

                  <h2 className="w-full px-4 py-2 mt-2 mb-20   ">Samakhusi</h2>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
