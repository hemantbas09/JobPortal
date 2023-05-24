import { React, useEffect } from "react";
import { useGetquizResultbyIdQuery } from "../../Service/QuizApi";
import { useParams } from "react-router-dom";
// import congratulation.jpg as congratulation from "images"
const QuizResult = () => {
  const { id } = useParams();
  let quizResult;
  let passMark, score;
  const quizQuestion = useGetquizResultbyIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (quizQuestion.isUninitialized) {
      quizQuestion.refetch();
    }
  }, []);

  if (quizQuestion.status === "fulfilled") {
    quizResult = quizQuestion.data.quizResultById[0];
    passMark = quizResult["passMark"];
    score = quizResult["score"];
    console.log(passMark);
    console.log(score);
  }
  return (
    <>
      <div className="bg-zinc-50 h-1/2 m-auto mt-32 md:mt-56 flex flex-col justify-center md:w-7/12  p-8 text-justify shadow-lg border-2 border-zinc-100 ">
        {passMark < score ? (
          <>
            <div className="md:flex gap-16">
              <div className="mb-10  ">
                <img
                  className="rounded-xl"
                  src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684482050/DefaultImage/congratulation_nzueke.jpg"
                  alt="Congratulation Image"
                />
              </div>

              <div className="">
                {" "}
                <p className="text-lg">
                  <span className="text-3xl text-blue-500 font-bold">
                    {" "}
                    Congratulations{" "}
                  </span>{" "}
                  on passing the job assessment with an impressive score of{" "}
                  <span className="text-3xl text-blue-500 font-bold ">
                    {score}
                  </span>{" "}
                  You did a great job! Now, you can apply for this position on
                  our website. Make sure to update your profile to show your
                  assessment results and highlight your skills. To apply, just
                  follow the instructions on the job listing. Create a
                  customized resume and cover letter that emphasize your skills
                  and achievement in the assessment. Don't forget to explore
                  other job opportunities on our website too. Your impressive
                  score opens up new doors for you!
                </p>
                <form action="" className=" mt-8 w-full flex flex-col  ">
                  <label
                    htmlFor="document"
                    className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/1000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>

                    <h2 className="mt-1 text-xl font-medium tracking-wide text-gray-700 dark:text-gray-200">
                      Upload Resume
                    </h2>

                    <p className="mt-2  tracking-wide text-xl text-gray-500 dark:text-gray-400">
                      This is nepal
                    </p>

                    <input
                      id="document"
                      type="file"
                      className="hidden"
                      name="document"
                      // onChange={handleFileInput}
                      required
                    />
                  </label>
                  <a
                    className=" self-center  w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 mt-10"
                    href="#"
                  >
                    Apply Job
                  </a>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="md:flex gap-10">
              <div className="mb-10">
                <img
                  src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1684482860/DefaultImage/pexels-brett-jordan-10628657_b5milt.jpg"
                  alt="Fail Photo"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg ">
                  <span className="text-3xl text-blue-500 font-bold ">
                    Sorry!
                  </span>{" "}
                  We regret to inform you that you did not pass the job
                  assessment with a score of{" "}
                  <span className="text-3xl text-blue-500 font-bold ">
                    {score}
                  </span>{" "}
                  . While this may be disappointing, please remember that
                  setbacks are part of the learning process. Take this as a
                  chance to reflect and improve your skills. Although you cannot
                  apply for the job now, we encourage you to try again in the
                  future. Keep learning, growing, and exploring new
                  opportunities. Your potential is still strong, and we believe
                  in your ability to succeed.
                </p>
                <a
                  className=" self-center  w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 mt-14"
                  href="#"
                >
                  Go To Home Page
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default QuizResult;
