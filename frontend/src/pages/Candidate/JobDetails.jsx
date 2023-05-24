import React, { useEffect, useState } from "react";
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { TbFileCertificate } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useGetJobByJobIdQuery } from "../../Service/jobApi";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const jobInfo = useGetJobByJobIdQuery(id);
  let jobDetails;
  console.log(jobInfo);
  if (jobInfo.status === "fulfilled") {
    jobDetails = jobInfo.data.jobs;
  }

  console.log("This is id", id);
  console.log(jobDetails);
  return (
    <>
      <div className="mt-32 flex flex-col items-center justify-center">

        {/* Upper Part */}
        <div className="bg-zinc-50 w-9/12 rounded-lg">
          <div class="flex justify-evenly ">
            <div class="mt-9  flex justify-start  my-10">
              <img
                class="pl-8 p-3 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684642066/DefaultImage/undraw_finance_re_gnv2_hbf6ye.svg"
                alt="category Pic"
              />
              <div class="text-gray-600 ml-10">
                <h2 class="text-2xl mb-2">Junior Graphic Design</h2>

                <div class="flex pb-4 gap-x-5 py-2 text-xs text-gray-600">
                  <div class="flex items-center">
                    <BsHandbag class="h-6 w-6 mr-2" />
                    <p class="text-sm">Information Technology</p>
                  </div>
                  <div class="flex items-center">
                    <HiOutlineLocationMarker class="h-6 w-6 mr-2" />
                    <p class="text-sm">Kathmandu</p>
                  </div>
                  <div class="flex items-center">
                    <BiTime class="h-6 w-6 mr-2" />
                    <p class="text-sm">January 26</p>
                  </div>
                  <div class="flex items-center">
                    <GiMoneyStack class="h-6 w-6 mr-2" />
                    <p class="text-sm">Rs.25000</p>
                  </div>
                </div>

                <p className="bg-blue-100 w-fit p-2 rounded-lg">Full Time</p>

              </div>
            </div>

            <div class="flex items-center">
              <Link to={`/quiz/${id}`}>
                <button class="flex items-center justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ">Apply Job</button>
              </Link>

            </div>
          </div>
        </div>

        {/* Second Part */}

        <div className=" flex gap-20 bg-green-100 justify-center  ">
          <div className="mt-10 mb-32 w-1/2">
            <div className="mt-4">
              <h2 class="text-2xl mb-2 ">Job Description</h2>
              <p className="text-justify mt-6">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You will
                help the team design beautiful interfaces that solve business
                challenges for our clients. We work with a number of Tier 1 banks
                on building web-based applications for AML, KYC and Sanctions List
                management workflows. This role is ideal if you are looking to
                segue your career into the FinTech or Big Data arenas.
              </p>
            </div>

            <div className="mt-4">
              <h2 class="text-2xl">Key Responsibilities</h2>
              <p className="text-justify mt-6">
                Be involved in every step of the product design cycle from
                discovery to developer handoff and user acceptance testing. Work
                with BAs, product managers and tech teams to lead the Product
                Design Maintain quality of the design process and ensure that when
                designs are translated into code they accurately reflect the
                design specifications. Accurately estimate design tickets during
                planning sessions. Contribute to sketching sessions involving
                non-designersCreate, iterate and maintain UI deliverables
                including sketch files, style guides, high fidelity prototypes,
                micro interaction specifications and pattern libraries. Ensure
                design choices are data led by identifying assumptions to test
                each sprint, and work with the analysts in your team to plan
                moderated usability test sessions. Design pixel perfect responsive
                UI’s and understand that adopting common interface patterns is
                better for UX than reinventing the wheel Present your work to the
                wider business at Show & Tell sessions.
              </p>
            </div>

            <div className="mt-4">
              <h2 class="text-2xl mb-2">Skill and Experience</h2>
              <p className="text-justify mt-6">
                You have at least 3 years’ experience working as a Product
                Designer. You have experience using Sketch and InVision or Framer
                X You have some previous experience working in an agile
                environment – Think two-week sprints. You are familiar using Jira
                and Confluence in your workflow
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start bg-red-200 w-2/12">
            <div className="flex items-center mt-4 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 0v2h2.586l-3.861 3.846c-1.246-1.143-2.902-1.846-4.725-1.846-1.824 0-3.479.703-4.726 1.846l-1.209-1.204 1.288-1.288-.707-.708-1.289 1.29-1.943-1.936h2.586v-2h-6v6h2v-2.586l1.943 1.936-1.297 1.296.707.707 1.298-1.298 1.353 1.347c-.633 1.053-1.004 2.281-1.004 3.598 0 3.526 2.609 6.434 6 6.92v2.08h-3v2h3v2h2v-2h3v-2h-3v-2.08c3.391-.486 6-3.395 6-6.92 0-1.317-.371-2.545-1.004-3.598l4.004-3.988v2.586h2v-6h-6zm-6 16c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" /></svg>
              Gender:
              <p className="ml-6">Male</p>
            </div>
            <div className="flex gap-6 items-center mt-4 gap-2">
              <TbFileCertificate size={20} />
              <p className="ml-6">Experience:</p></div>
            <div className="flex gap-6 items-center mt-4 gap-2"><BsCalendarDate size={20}  /><p className="ml-6">createDate:</p></div>
            <div className="flex gap-6 items-center mt-4 gap-2"><BsCalendarDate size={20} /><p className="ml-6">Deadline Date:</p></div>
            <div className="flex gap-6 items-center mt-4 gap-2"><AiOutlineMail size={20} /><p className="ml-6">for Enquiry:</p> </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default JobDetails;
