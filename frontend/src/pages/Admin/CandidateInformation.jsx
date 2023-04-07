import React from 'react'
import { useGetallUserQuery, useAcceptRejectMutation } from '../../Service/userAuth'
const CandidateInformation = () => {
  
    const [acceptReject, { isLoading, error }] = useAcceptRejectMutation();
    console.log("isloading", isLoading)
    const handleApprove = async (companyId, status) => {
        const formData = new FormData();
        formData.append('companyId', companyId);
        formData.append('status', status);
        const res = await acceptReject({ formData, companyId });
        console.log(res)
        // if (res.data.success) {
        //     window.location.reload();
        // }
        console.log("This is companyId", companyId)
        console.log("This is companyId", status)
    };




    const getAllUser = useGetallUserQuery();
    let userData
    if (getAllUser.data) {
        userData = getAllUser.data.user
        console.log("This is the data i got")
    } else {
        console.log("The Data are not found")
    }
    // console.log(getAllUser.data.user)

    console.log(userData)
    const handleDownload = (url, filename) => {
        console.log(url)
        download(url, filename);

    };


    return (

        <>

            <section class="container px-4 mx-auto">
                

                <div class="flex flex-col mt-6">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr className=''>
                                            <th scope="col" class=" pl-48 pr-36 py-3.5 text-xl font-bold  text-left rtl:text-right text-gray-500 dark:text-gray-400">job Seeker Name</th>
                                            <th scope="col" class=" px-48 ml-72 py-3.5 text-xl font-bold  text-left rtl:text-right text-gray-500 dark:text-gray-400">Email</th>

                                           

                                           
                                            <th scope="col" class=" px-48 py-3.5 text-xl font-bold  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            userData && userData.map(company => {
                                                // console.log("This is the company", company)
                                                if (company.role === 'user') {
                                                    return (
                                                        <>

                                                          
                                                            <tr className=''>
                                                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                    <div class="inline-flex items-center gap-x-3">


                                                                        <div class="flex items-center gap-x-2">

                                                                            <div>
                                                                                <h2 class=" text-xl  font-medium text-gray-800 dark:text-white ">{company.fullName}</h2>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class=" text-xl   text-gray-500 dark:text-gray-300 whitespace-nowrap">{company.email}</td>
                                                                <td class="px-48 pl-20 py-4 text-sm whitespace-nowrap">
                                                                    <div class="flex items-center gap-x-6">

                                                                        <button className=" pl-32 text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fb2600" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr >

                                                        </>
                                                    )
                                                }

                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-6">
                    <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        <span>
                            previous
                        </span>
                    </a>

                    <div class="items-center hidden lg:flex gap-x-3">
                        <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                    </div>

                    <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <span>
                            Next
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </section >
        </>
    )
}
export default CandidateInformation