import React, { useState } from "react";
import CompanySidebar from "../Sidebar/CompanySidebar";
import { useCompanyProfileMutation } from "../../Service/userAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useGetCompanyProfileQuery } from "../../Service/userAuth";

const CompanyProfile = () => {
  const [companyProfile] = useCompanyProfileMutation();

  const { data, isLoading, isError } = useGetCompanyProfileQuery();
  let ProfileData;
  if (data) {
    ProfileData = data.companyProfile[0];
  }
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: ProfileData.firstName || "",
    email: ProfileData.email || "",
    phoneNumber: ProfileData.phoneNumber || "",
    address: {
      country: ProfileData.address.country || "",
      state: ProfileData.address.state || "",
      city: ProfileData.address.city || "",
      postalCode: ProfileData.address.postalCode || "",
    },
    github: ProfileData.github || "",
    profilePicture: null,
    coverPicture: null,
  });
  const handleAddressChange = (field, value) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [field]: value,
      },
    });
  };

  const handleInputChange = (field, value) => {
    if (field.startsWith("address.")) {
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [field.substring(8)]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };

  const handleFileChange = (fileType, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange(fileType, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      if (key === "address") {
        for (const addrKey in formData.address) {
          formDataToSend.append(
            `address.${addrKey}`,
            formData.address[addrKey]
          );
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const res = await companyProfile(formDataToSend);

      if (res.data) {
        toast.success("Profile Update Successfully", {
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
        navigate("/company/profile");
      }
      if (res.error) {
        toast.error("Profile is Not Update", {
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
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  return (
    <div className="flex mt-28 space-x-16 md:space-x-72 min-h-screen antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <CompanySidebar />
      <div className="p-7 flex-1 dark:bg-gray-800 h-screen left-30">
        <form onSubmit={handleSubmit}>
          {/* Cover Photo */}
          <div className="mx-auto h-96 relative mb-12">
            <input
              type="file"
              onChange={(e) => handleFileChange("coverPicture", e)}
            />
            <img
              src={
                formData.coverPicture ||
                "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680327700/cld-sample-2.jpg"
              }
              alt="Cover Photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Picture */}
          <div className="mx-auto mt-20">
            <div className="flex items-end justify-between mb-4">
              <div className="flex justify-between">
                <img
                  src={
                    formData.profilePicture ||
                    "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680327700/cld-sample.jpg"
                  }
                  alt="Profile Picture"
                  className="rounded-full w-24 h-24 border-4 border-white shadow-md"
                />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("profilePicture", e)}
                  className="mt-6 ml-3"
                />
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mx-auto w-2/3">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Company Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="text-lg">Company Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-lg">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-lg">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-lg">Address</label>
                  <input
                    type="text"
                    value={formData.address.country}
                    onChange={(e) =>
                      handleAddressChange("country", e.target.value)
                    }
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Country"
                  />
                  <input
                    type="text"
                    value={formData.address.state}
                    onChange={(e) =>
                      handleAddressChange("state", e.target.value)
                    }
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="State"
                  />
                  <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) =>
                      handleAddressChange("city", e.target.value)
                    }
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    value={formData.address.postalCode}
                    onChange={(e) =>
                      handleAddressChange("postalCode", e.target.value)
                    }
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">About Company</h3>
              <textarea
                value={formData.github}
                onChange={(e) => handleInputChange("github", e.target.value)}
                className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-center px-4 py-2 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ml-96"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfile;
