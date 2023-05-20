import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const data = [
    {
      title: "Account 1",
      link: "/account1",
      imageSrc: "image/heroImage1.svg",
    },
    {
      title: "Account 2",
      link: "/account2",
      imageSrc: "image/heroImage2.svg",
    },
    {
      title: "Account 3",
      link: "/account3",
      imageSrc: "image/heroImage3.svg",
    },
  ];

  return (
    <>
      <div>
        {data.map((item, index) => (
          <Link key={index} to={item.link}>
            <div className="w-80 md:w-96 rounded-lg flex justify-center items-center space-x-20 rounded-lg shadow-lg border-2 border-zinc-100">
              <img
                className="p-3 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                src={item.imageSrc}
                alt="category Pic"
              />
              <h2 className="pr-8 p-3 ">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
