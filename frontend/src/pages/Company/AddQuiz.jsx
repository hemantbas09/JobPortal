import { React, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useAddquizQuestionMutation } from '../../Service/QuizApi';

const AddQuiz = () => {
    const { id } = useParams();
    console.log(id)
    const [ addquizQuestion, { isLoading }] = useAddquizQuestionMutation();

    const [quiz, setquiz] = useState({
       question:"",
       firstOption:"",
       secondOption:"",
       thirdOption:"",
       fourthOption:"",
       correctAnswer:"",
       time:""
    })

    let name, value;
    const handleInputs = async (e) => {
        name = e.target.name;
        value = e.target.value
        setquiz({ ...quiz, [name]: value })
        console.log('name', quiz)


    }
    console.log(quiz)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // code to submit form data to server or handle form validation goes here
        if (question && firstOption && secondOption && thirdOption && fourthOption && correctAnswer && time) {
            console.log("This is Nepal");
            const res = await  addquizQuestion({id,quiz});
            console.log('Second', res)
            if (res.data.success === true) {
                console.log("Pitai Khanxas")
                navigate("/home")
            }
        } else {
            console.log("Please add all input")
        }
    };
    return (
        <>
            <div className="container mx-auto p-10">
                <h1 className="text-4xl font-bold mb-10">Quiz Questions</h1>

                <form className="space-y-10" onSubmit={handleSubmit}>

                    <div className="bg-white rounded-lg shadow-md p-10">
                        <div className='p-3 '>
                            <label className='p-3' htmlFor="question">Question</label> <br />
                            <input onChange={handleInputs} id="question" name='question' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                        </div>
                        <div className='p-3 '>
                            <label className='p-3' htmlFor="firstOption">Option:A</label> <br />
                            <input onChange={handleInputs} id="firstOption" name='firstOption' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                        </div>
                        <div className='p-3 '>
                            <label className='p-3' htmlFor="secondOption">Option: B</label> <br />
                            <input onChange={handleInputs} id="secondOption" name='secondOption' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                        </div>
                        <div className='p-3 '>
                            <label className='p-3' htmlFor="thirdOption">Option: C</label> <br />
                            <input onChange={handleInputs} id="thirdOption" name='thirdOption' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                        </div>
                        <div className='p-3 '>
                            <label className='p-3' htmlFor="fourthOption">Option: D</label> <br />
                            <input onChange={handleInputs} id="fourthOption" name='fourthOption' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                        </div>
                        <div className='p-3 '>
                            <label className='p-3' htmlFor="correctAnswer">Answer:</label> <br />
                            <input onChange={handleInputs} id="correctAnswer" name='correctAnswer' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                        </div>
                        <div className='p-3 '>
                            <label className='p-3' htmlFor="time">Time:</label> <br />
                            <input onChange={handleInputs} id="time" name='time' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                        </div>

                        <button type="submit" class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mt-5">Submit Answers</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddQuiz