import React from 'react'
import AdminSidebar from '../../component/Admin/AdminSidebar';
const AddJob = () => {
    return (
        <>
      
        <div className='flex relative '>
          <div>
          <AdminSidebar />
          </div>
  
          <div className="fixed overflow-y-scroll top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">
  
            <h1 className="text-2xl font-semibold ">Post New Job</h1>

            <div className='bg-white w-11/12 m-10 overflow-y-auto '>
                <form action="" className='m-10' >

                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Featured Image</label> <br />
                        <input className=' border p-2 m-3 bg-zinc-100' type="file" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Job Title</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Job Description</label> <br />
                        <textarea className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' rows="8" required></textarea>

                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Category</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Type</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Gender</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Salary Type</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Minimum Salary</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Maximum Salary</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Qualification</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Experience</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Location</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Applications Deadline Date</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Photo</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="file" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">Video</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="file" required />
                    </div>
                    <div className='p-3 '>
                        <label className='p-3' htmlFor="">For Enquiry</label> <br />
                        <input className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                    </div>
                    



                  
                </form>

            </div>
           
  
          </div>
  
  
  
        </div>
  
  
      </>

    )
}

export default AddJob