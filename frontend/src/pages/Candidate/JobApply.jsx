import { React, useState } from 'react'
import { useParams } from 'react-router';
import { useJobApplyMutation } from '../../Service/jobApi';
const JobApply = () => {
    const [jobApply, { isLoading }] = useJobApplyMutation();
    const [resume, setResume] = useState("");
    const { id } = useParams();

    console.log("This is job id", id)
    const companyId = "this is id"
    const [finalResume, setFinalResume] = useState("");
    // Thi function is used read the file and change into base64 formate to file:
    function previewFiles(resume) {
        const reader = new FileReader();
        reader.readAsDataURL(resume)
        reader.onloadend = () => {
            setFinalResume(reader.result)
            console.log(reader)
        }
    }
    console.log(finalResume)
    // This function is used to handle the input:
    const handleFileInput = (e) => {
        const resume = e.target.files[0];
        setResume(resume);
        previewFiles(resume)
        console.log(resume)

    }

    // This function is used to hanlde the form submission:
    const handleSubmit = async (e) => {
        e.preventDefault();

        // create a formData and send to backedn because of file also submitted.
        const jobApplyForm = new FormData();
        jobApplyForm.append('company', companyId);
        jobApplyForm.append('resume', finalResume);

        // Asynchronously registers the user with the provided user data.
        const res = await jobApply({ id, jobApplyForm });
        console.log(res)
    }


        ;

    return (

        <>
            <div className="  p-16 w-11/12 bg-white shadow-2xl">
                <p className='text-xl mt-4'>This is your <span className='bg-red-500 shadow-2xl px-3 py-1'>2</span>  attempt </p>
                <p className='text-xl mt-4 mb-4'>You Get  <span className='bg-red-500 shadow-2xl px-3 py-1'>9</span>  points</p>
                <p className='text-xl text-justify'> <span className='text-green-500 text-2xl'>Congratulations!</span>  You passed the quiz with flying colors! Your hard work has paid off, and we're thrilled to tell you that you've qualified for the next stage of the job application process. Now you can apply for the job!</p>
                <p className='text-xl text-justify'><span className='text-red-500 text-2xl '>Sorry!</span> to say that you didn't pass the quiz. Keep working on your skills and learning in this area. This is a chance to learn from your mistakes and get better. Thank you for your interest, we wish you the best of luck in your future plans.</p>

                <form method='POST' onSubmit={handleSubmit}>


                    <div>


                        <label htmlFor="resume" class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>

                            <h2 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200 text-xl">{resume ? `${resume.name}` : "Upload a recent resume or CV"} </h2>

                            <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or darg & drop your pdf file </p>

                            <input onChange={handleFileInput} id="resume" type="file" class="hidden" required />
                        </label>
                    </div>
                    <button
                        className=" items-center mt-10 justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Submit Application </span>

                    </button>

                </form>

            </div>
        </>

    )
}

export default JobApply