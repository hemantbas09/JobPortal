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

export default menuItems;
