import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAddquizQuestionMutation } from "../../Service/QuizApi";
import { toast } from "react-toastify";
import CompanyNavbar from "../../component/Navbar/CompanyNavbar";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";
const AddQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addquizQuestion, { isLoading }] = useAddquizQuestionMutation();

  const initialQuestion = {
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  };

  const [questions, setQuestions] = useState([initialQuestion]);
  const [time, setTime] = useState("");
  const [passMark, setPassMark] = useState("");

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, { ...initialQuestion }]);
  };

  const handleInputChange = (event, i, j) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, index) => {
        if (index === i) {
          if (name === "options") {
            const updatedOptions = [...question.options];
            updatedOptions[j] = value;
            return {
              ...question,
              options: updatedOptions,
            };
          } else {
            return {
              ...question,
              [name]: value,
            };
          }
        }
        return question;
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (questions.length <= 1) {
      alert("Please add at least 3 questions before submitting the form.");
      return;
    }
    const quizForm = {
      time,
      passMark,
      questions,
    };
    const addQuestion = await addquizQuestion({ quizForm, id });
    if (addQuestion.data.success) {
      toast.success("Quiz Add Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: " text-xl",
      });
      navigate(`/company`);
    } else {
      toast.error("Quiz is Not Add", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: " text-xl",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-16 w-11/12 bg-white shadow-2xl ">
      <div>
        <CompanyNavbar />

        <CompanySidebar />
      </div>
      <form onSubmit={handleSubmit} className="mt-32">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          {/* Input for time */}
          <input
            type="number"
            placeholder="Time in minutes"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          {/* Input for pass mark */}
          <input
            type="number"
            placeholder="Pass Mark"
            name="passMark"
            value={passMark}
            onChange={(e) => setPassMark(e.target.value)}
            required
            className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {questions.map((q, i) => (
          <div key={i} className="flex flex-col space-y-4 mb-4">
            <h3 className="text-lg font-bold">Question {i + 1}</h3>
            {/* Input for question */}
            <input
              type="text"
              placeholder="Question"
              name="question"
              required
              value={q.question}
              onChange={(e) => handleInputChange(e, i)}
              className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              {/* Inputs for options */}
              {q.options.map((o, j) => (
                <div key={j} className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder={`Option ${j + 1}`}
                    name="options" // Change the name to "options"
                    value={o}
                    required
                    onChange={(e) => handleInputChange(e, i, j)}
                    className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              ))}
            </div>
            {/* Input for correct answer */}
            <input
              type="text"
              placeholder="Enter Your Correct Answer"
              name="correctAnswer"
              onChange={(e) => handleInputChange(e, i)}
              required
              className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        ))}
        {/* Button for form submission */}
        <button
          type="submit"
          className="items-center justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
      {/* Button for adding a new question */}
      <button
        onClick={handleAddQuestion}
        className="flex items-center mt-10 justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddQuiz;
