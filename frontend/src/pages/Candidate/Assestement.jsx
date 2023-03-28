import React from 'react'

const Assestement = () => {
    return (
        <>

            <div class="container mx-auto p-10">
                <h1 class="text-4xl font-bold mb-10">Quiz Questions</h1>

                <form class="space-y-10">

                    <div class="bg-white rounded-lg shadow-md p-10">
                        <h2 class="text-xl font-bold mb-4">Question 1:</h2>
                        <p class="mb-4">What is the capital of France?</p>
                        <div class="space-y-2">
                            <div>
                                <input type="radio" id="q1a" name="q1" value="a" />
                                <label for="q1a" class="ml-2">a) Paris</label>
                            </div>
                            <div>
                                <input type="radio" id="q1b" name="q1" value="b" />
                                <label for="q1b" class="ml-2">b) London</label>
                            </div>
                            <div>
                                <input type="radio" id="q1c" name="q1" value="c" />
                                <label for="q1c" class="ml-2">c) Rome</label>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-10">
                        <h2 class="text-xl font-bold mb-4">Question 1:</h2>
                        <p class="mb-4">What is the capital of France?</p>
                        <div class="space-y-2">
                            <div>
                                <input type="radio" id="q1a" name="q1" value="a" />
                                <label for="q1a" class="ml-2">a) Paris</label>
                            </div>
                            <div>
                                <input type="radio" id="q1b" name="q1" value="b" />
                                <label for="q1b" class="ml-2">b) London</label>
                            </div>
                            <div>
                                <input type="radio" id="q1c" name="q1" value="c" />
                                <label for="q1c" class="ml-2">c) Rome</label>
                            </div>
                        </div>
                    </div>


                    <div class="bg-white rounded-lg shadow-md p-10">
                        <h2 class="text-xl font-bold mb-4">Question 1:</h2>
                        <p class="mb-4">What is the capital of France?</p>
                        <div class="space-y-2">
                            <div>
                                <input type="radio" id="q1a" name="q1" value="a" />
                                <label for="q1a" class="ml-2">a) Paris</label>
                            </div>
                            <div>
                                <input type="radio" id="q1b" name="q1" value="b" />
                                <label for="q1b" class="ml-2">b) London</label>
                            </div>
                            <div>
                                <input type="radio" id="q1c" name="q1" value="c" />
                                <label for="q1c" class="ml-2">c) Rome</label>
                            </div>
                        </div>
                    </div>



                    <button type="submit" class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">Submit Answers</button>

                </form>
            </div>



        </>
    )
}

export default Assestement