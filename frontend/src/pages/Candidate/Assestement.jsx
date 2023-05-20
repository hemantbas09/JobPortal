import { React, useState, useEffect } from "react";

import {
  useGetquizbyIdQuery,
  useQuizAttemtQuestionMutation,
} from "../../Service/QuizApi";
import { Link, useParams, useNavigate } from "react-router-dom";
// import {  } from 'react-router-dom';

const Assestement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const quizQuestion = useGetquizbyIdQuery(id);
  const quizQuestion = useGetquizbyIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (quizQuestion.isUninitialized) {
      quizQuestion.refetch();
    }
  }, []);

  const [quizAttemtQuestion, { isLoading }] = useQuizAttemtQuestionMutation();

  let quizId;
  let questions = [];
  if (quizQuestion.data) {
    quizId = quizQuestion.data.quizId;
    console.log("This is quiz question", quizQuestion.data.quizId);
    questions = quizQuestion.data.selectedQuestions.map((question) => {
      return { ...question, id: question._id };
    });
  } else {
    console.log("Quiz questions not found");
  }

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = {
      option: value,
      questionId: questions[questionIndex].id,
    }; // store both the selected option and the question ID
    setSelectedOptions(newSelectedOptions);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    selectedOptions.forEach((selectedOption, index) => {
      if (selectedOption) {
        // check if the selectedOption object is defined and has the 'option' property
        formData.append(
          `attemptAnswer[${index}][option]`,
          selectedOption.option
        );
        formData.append(
          `attemptAnswer[${index}][questionId]`,
          selectedOption.questionId
        );
      }
    });

    formData.append("quizId", quizId);
    const quizAttempt = await quizAttemtQuestion({ id, formData });
    if (quizAttempt.data) {
      navigate(`/quizresult/6465e9395e2aa774f88e956b`);
    }
  };

  return (
    <>
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold mb-10">Quiz Questions</h1>

        <form className="space-y-10" method="POST" onSubmit={handleFormSubmit}>
          <div className="bg-white rounded-lg shadow-md p-10">
            {questions.map((question, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold mb-4">Question {index + 1}</h2>
                <p className="mb-4">{question.question}</p>

                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="radio"
                      id={`question${index}-option${optionIndex}`}
                      name={`question${index}`}
                      value={option}
                      checked={selectedOptions[index]?.option === option} // use optional chaining to check if the selected option exists
                      onChange={() =>
                        handleOptionChange(index, optionIndex, option)
                      }
                    />
                    <label
                      htmlFor={`question${index}-option${optionIndex}`}
                      className="ml-2"
                    >
                      {option}
                    </label>
                    <input
                      type="hidden"
                      name={`question${index}_id`}
                      value={question.id}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* <Link to={"/"}> */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
          >
            Submit Answers
          </button>
          {/* <Link/> */}
        </form>
      </div>
    </>
  );
};

export default Assestement;
