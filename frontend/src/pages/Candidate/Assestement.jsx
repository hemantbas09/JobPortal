import React from 'react'
import { useGetquizbyjobIdQuery } from '../../Service/QuizApi'
import { useParams } from 'react-router-dom';
const Assestement = () => {
    const { id } = useParams();
    const quizQuestion = useGetquizbyjobIdQuery(id);
    let questions
    console.log(id)
    console.log("Name", quizQuestion.data);
    if (quizQuestion.data) {
        questions = quizQuestion.data.quiz
        console.log("CHal bay chal", questions)


    } else {
        console.log("Ramro sanga lakh")
    }
    return (
        <>

            <div class="container mx-auto p-10">
                <h1 class="text-4xl font-bold mb-10">Quiz Questions</h1>

                <form class="space-y-10">

                    <div class="bg-white rounded-lg shadow-md p-10">

                        {

                            questions ?

                                questions.map((question, index) => {
                                    return (
                                        <div key={index}>
                                            <h2 class="text-xl font-bold mb-4">Question {index + 1}</h2>
                                            <p class="mb-4">{question.question}</p>
                                            <p className='bg-red-400'>{question.firstOption}</p>
                                            <div class="space-y-2">
                                                <div>
                                                    <input type="radio" id={`firstOptionid${index}`} name="answer" value={question.firstOption} />
                                                    <label htmlFor={`firstOption${index}`} class="ml-2"> {question.firstOption}</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id={`secondOptionid${index}`} name="answer" value={question.secondOption} />
                                                    <label htmlFor={`secondOption${index}`} class="ml-2"> {question.secondOption}</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id={`thirdOptionid${index}`} name="answer" value={question.thirdOption} />
                                                    <label htmlFor={`thirdOption${index}`} class="ml-2"> {question.thirdOption}</label>
                                                </div>

                                                <div>
                                                    <input type="radio" id={`fourthOptionid${index}`} name="answer" value={question.fourthOption} />
                                                    <label htmlFor={`fourthOption${index}`} class="ml-2"> {question.fourthOption}</label>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                                :
                                console.log("Nepal")


                        }

                    </div>



                    <button type="submit" class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">Submit Answers</button>

                </form>
            </div>



        </>
    )
}

export default Assestement