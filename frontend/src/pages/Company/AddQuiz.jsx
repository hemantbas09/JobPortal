import { React, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useAddquizQuestionMutation } from '../../Service/QuizApi';

const AddQuiz = () => {
    const { id } = useParams();
    console.log(id)
    const [addquizQuestion, { isLoading }] = useAddquizQuestionMutation();

    const [questions, setQuestions] = useState([
        {
            question: "",
            options: ["", "", "", ""],
            answer: "",
        },
    ]);
    const [time, setTime] = useState('');
    const [passMark, setPassMark] = useState('');



    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            {
                question: "",
                options: ["", "", "", ""],
                answer: "",

            },
        ]);
    };
    const handleInputChange = (event, i, j) => {
        const newQuestions = [...questions];
        const { name, value } = event.target;
        if (name === "question") {
            newQuestions[i].question = value;
        } else if (name === "option") {
            newQuestions[i].options[j] = value;
        } else if (name === "answer") {
            newQuestions[i].answer = value;
        }
        setQuestions(newQuestions);
        console.log(newQuestions)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (questions.length !== 20) {
            alert("Please add 20 questions before submitting the form.");
            return;
        }
        const formData = new FormData();
        formData.append('time', time);
        formData.append('passMark', passMark);
        formData.append('questions', JSON.stringify(questions));

    }

    return (
        <>
            <div className="max-w-6xl mx-auto  p-16 w-11/12 bg-white shadow-2xl">
                <form action="" onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">

                        <input
                            type="text"
                            placeholder="Time in minutes"
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <input
                            type="text"
                            placeholder="Pass Mark"
                            name="passmark"
                            value={passMark}
                            onChange={(e) => setPassMark(e.target.value)}
                            className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>



                    {questions.map((q, i) => (
                        <div key={i} className="flex flex-col space-y-4 mb-4">
                            <h3 className="text-lg font-bold">Question {i + 1}</h3>
                            <input
                                type="text"
                                placeholder="Question"
                                name="question"

                                onChange={(e) => handleInputChange(e, i)}
                                className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                {q.options.map((o, j) => (
                                    <div key={j} className="flex items-center space-x-4">

                                        <input
                                            type="text"
                                            placeholder={`Option ${j + 1}`}
                                            name="option"
                                            value={o}
                                            onChange={(e) => handleInputChange(e, i, j)}
                                            className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Entering for correct Answer */}
                            <input type="text" placeholder="Enter Your Correct Answer" name="answer"
                                onChange={(e) => handleInputChange(e, i)}
                                className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    ))}
                    {/* Button For Add Question */}
                    <button
                        onClick={handleAddQuestion}
                        className=" items-center justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Submit </span>
                    </button>
                </form>
                <button
                    onClick={handleAddQuestion}
                    className="flex items-center mt-10 justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Add Question </span>
                </button>
            </div>
        </>
    )
}

export default AddQuiz