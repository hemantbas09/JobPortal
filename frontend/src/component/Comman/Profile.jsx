import React, { useState } from "react";
import CompanySidebar from "../Sidebar/CompanySidebar";
import { useUserProfileMutation } from "../../Service/userAuth";
const Profile = () => {
  const [userProfile] = useUserProfileMutation();
  const [skillFields, setSkillFields] = useState([""]);
  const addSkillField = () => {
    setSkillFields([...skillFields, ""]);
  };

  const handleSkillChange = (index, value) => {
    const updatedFields = [...skillFields];
    updatedFields[index] = value;
    setSkillFields(updatedFields);

    setFormData({
      ...formData,
      skills: updatedFields,
    });
  };

  const [workExperienceFields, setWorkExperienceFields] = useState([
    {
      company: "",
      jobTitle: "",
      joinDate: "",
      endDate: "",
    },
  ]);

  const addWorkExperienceField = () => {
    setWorkExperienceFields([
      ...workExperienceFields,
      {
        company: "",
        jobTitle: "",
        joinDate: "",
        endDate: "",
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFields = [...workExperienceFields];
    updatedFields[index][field] = value;
    setWorkExperienceFields(updatedFields);

    setFormData({
      ...formData,
      workExperience: updatedFields,
    });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    details: "",
    address: {
      country: "",
      state: "",
      city: "",
      postalCode: "",
    },
    workExperience: [
      {
        company: "",
        jobTitle: "",
        joinDate: "",
        endDate: "",
      },
    ],
    skills: [""],
    github: "",
    profilePicture: null,
    coverPicture: null, // Added coverPicture field
  });

  const handleExperienceChange = (index, field, value) => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience[index][field] = value;
    setFormData({ ...formData, workExperience: updatedWorkExperience });
  };

  const handleAddressChange = (field, value) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [field]: value,
      },
    });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverPictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          coverPicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new FormData object
    const formDataToSend = new FormData();
    console.log("this",userProfile);

    // Append the text data to the FormData object
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("middleName", formData.middleName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("dateOfBirth", formData.dateOfBirth);
    formDataToSend.append("details", formData.details);
    formDataToSend.append("address.country", formData.address.country);
    formDataToSend.append("address.state", formData.address.state);
    formDataToSend.append("address.city", formData.address.city);
    formDataToSend.append("address.postalCode", formData.address.postalCode);
    formDataToSend.append("github", formData.github);

    // Append the profile picture and cover picture files to the FormData object
    formDataToSend.append("profilePicture", formData.profilePicture);
    formDataToSend.append("coverPicture", formData.coverPicture);

    // Append the work experience data to the FormData object
    formData.workExperience.forEach((experience, index) => {
      formDataToSend.append(
        `workExperience[${index}].company`,
        experience.company
      );
      formDataToSend.append(
        `workExperience[${index}].jobTitle`,
        experience.jobTitle
      );
      formDataToSend.append(
        `workExperience[${index}].joinDate`,
        experience.joinDate
      );
      formDataToSend.append(
        `workExperience[${index}].endDate`,
        experience.endDate
      );
    });

    // Append the skills data to the FormData object
    formData.skills.forEach((skill, index) => {
      formDataToSend.append(`skills[${index}]`, skill);
    });
  };

  console.log(formData);
  return (
    <>
      <div className="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="">
          <CompanySidebar />
        </div>
        <div className="p-7 flex-1 dark:bg-gray-800 h-screen left-30">
          {/* Profile Picture and Cover Photo */}
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <div class=" mx-auto h-96  ">
                  <img
                    src={formData.coverPicture}
                    alt="Cover Photo"
                    class="w-full h-full object-cover"
                  />
                  <input
                    className="ml-96"
                    type="file"
                    onChange={handleCoverPictureChange}
                  />
                </div>

                <div class=" mx-auto mt-4 ">
                  <div class="flex items-end justify-between mb-4">
                    <div class="flex justify-between">
                      <img
                        src={formData.profilePicture}
                        alt="Profile Picture"
                        class="rounded-full w-24 h-24 border-4 border-white shadow-md"
                      />
                      <input
                        type="file"
                        onChange={handleProfilePictureChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ... */}
              <div className="mx-auto w-2/3">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label className="text-lg">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-lg">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-lg">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-lg">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-lg">Date of Birth</label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dateOfBirth: e.target.value,
                          })
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
                  <h3 className="text-2xl font-semibold">Work Experience</h3>
                  {workExperienceFields.map((field, index) => (
                    <div key={index} className="mt-4">
                      <div>
                        <label className="text-lg">Company</label>
                        <input
                          type="text"
                          value={field.company}
                          onChange={(e) =>
                            handleInputChange(index, "company", e.target.value)
                          }
                          className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-lg">Job Title</label>
                        <input
                          type="text"
                          value={field.jobTitle}
                          onChange={(e) =>
                            handleInputChange(index, "jobTitle", e.target.value)
                          }
                          className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-lg">Join Date</label>
                        <input
                          type="date"
                          value={field.joinDate}
                          onChange={(e) =>
                            handleInputChange(index, "joinDate", e.target.value)
                          }
                          className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-lg">End Date</label>
                        <input
                          type="date"
                          value={field.endDate}
                          onChange={(e) =>
                            handleInputChange(index, "endDate", e.target.value)
                          }
                          className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addWorkExperienceField}
                    className="px-4 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Add Work Experience
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold">Skills</h3>
                  {skillFields.map((field, index) => (
                    <div key={index} className="mt-4">
                      <input
                        type="text"
                        value={field}
                        onChange={(e) =>
                          handleSkillChange(index, e.target.value)
                        }
                        className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Skill"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSkillField}
                    className="px-4 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Add Skill
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold">Github</h3>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) =>
                      setFormData({ ...formData, github: e.target.value })
                    }
                    className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Github Link"
                  />
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
      </div>
    </>
  );
};

export default Profile;
