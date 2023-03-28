
import React, { useEffect, useState } from 'react'
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { Link } from 'react-router-dom';

Link
const JobDetails = () => {

  return (
    <>

      <div>

        {/* Upper Part */}
        <div class="bg-zinc-100 w-full rounded-lg">
          <div class="flex justify-evenly ">
            <div class="mt-9  flex justify-start  my-10">
              <img class="pl-8 p-3 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="image/heroImage.svg" alt="category Pic" />
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
                <div className='flex gap-8'>
                  <p className='bg-orange-100 p-1 rounded-lg'>Full Time</p>
                  <p className='bg-orange-100 p-1 rounded-lg'>Urgent</p>

                </div>


              </div>
            </div>

            <div class="flex items-center">
              <Link to='/quiz'><button class="bg-red-300 ">Apply Job</button></Link>
              <BsFillBookmarkHeartFill class="h-6 w-6 mr-2 ml-10" />
            </div>

          </div>
        </div>

        {/* Second Part */}

        <div>
          <div>
            <h2 class="text-2xl mb-2">Job Description</h2>
            <p>As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
          </div>

          <div>
            <h2 class="text-2xl mb-2">Key Responsibilities</h2>
            <p>
              Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.
              Work with BAs, product managers and tech teams to lead the Product Design
              Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.
              Accurately estimate design tickets during planning sessions.
              Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.
              Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.
              Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel
              Present your work to the wider business at Show & Tell sessions.
            </p>
          </div>

          <div>
            <h2 class="text-2xl mb-2">Skill and Experience</h2>
            <p>You have at least 3 years’ experience working as a Product Designer.
              You have experience using Sketch and InVision or Framer X
              You have some previous experience working in an agile environment – Think two-week sprints.
              You are familiar using Jira and Confluence in your workflow</p>
          </div>

          <div>
            <h2 class="text-2xl mb-2">Share this post</h2>
          </div>

          <div>
            <h2 class="text-2xl mb-2">Photos</h2>
          </div>

          <div>
            <h2 class="text-2xl mb-2">Videos</h2>
          </div>
          <div>
            <h2 class="text-2xl mb-2">Related Jobs</h2>
          </div>


        </div>

      </div>

    </>
  )
}

export default JobDetails