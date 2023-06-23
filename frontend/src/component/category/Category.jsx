import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const data = [
    {
      title: "Information Technology and Engineering",
      link: "/informationtechnology",
      imageSrc:
        "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684642066/DefaultImage/undraw_qa_engineers_dg-5-p_yshg6m.svg",
    },

    {
      title: "Health Care and Medical",
      link: "/healthcare",
      imageSrc:
        "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684642066/DefaultImage/undraw_medicine_b-1-ol_tbuvc5.svg",
    },
    {
      title: "Finance and Accounting",
      link: "/finance",
      imageSrc:
        "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684642066/DefaultImage/undraw_finance_re_gnv2_hbf6ye.svg",
    },
    {
      title: "Administrative and Support",
      link: "/administrative",
      imageSrc:
        "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684642065/DefaultImage/undraw_work_time_re_hdyv_c5au1o.svg",
    },
    {
      title: "Education and Training",
      link: "/education",
      imageSrc:
        "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684642004/DefaultImage/undraw_education_f8ru_c8ypvz.svg",
    },
    {
      title: "Other",
      link: "/other",
      imageSrc:
        "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684660717/DefaultImage/undraw_crypto_portfolio_2jy5_kln9iv.svg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border-red-50 gap-y-10 gap-x-20  ">
        {data.map((item, index) => (
          <Link key={index} to={item.link}>
            <div className="flex flex-col md:flex-row  items-center justify-center md:justify-between p-3 gap-y-10 rounded-lg shadow-lg border-2 border-zinc-100 pr-10">
              <img className="h-36" src={item.imageSrc} alt="category Pic" />
              <h2>{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
