import React from 'react'
import logo from '../../images/logo.svg'
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaInstagram, FaBehance, FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
           

            <footer class="bg-white dark:bg-gray-900">
            <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
                    <div class="lg:flex justify-between">

                        <div class="px-6">
                            <a href="#">
                                <img class="w-auto h-20" src={logo} alt="" />
                            </a>

                            <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400 text-xl">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                            <div class="flex mt-6  gap-28 mb-8">


                                <a href="#"
                                    class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" data-name="Layer 1" viewBox="0 0 32 32" id="gmail"><path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path><path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path><path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path><path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path><path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path></svg>
                                </a>

                                <a href="#"
                                    class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Github">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="126.445 2.281 589 589" id="facebook"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"></path></svg>
                                </a>

                                <a href="#"
                                    class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Github">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="7.025 7.025 497.951 497.95" id="linkedin"><linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2489be"></stop><stop offset="1" stop-color="#0575b3"></stop></linearGradient><path fill="url(#a)" d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path></svg>
                                </a>

                            </div>
                        </div>



                        <div className='px-6 mt-10 '>
                            <h3 class="text-gray-700 text-2xl font-bold uppercase dark:text-white">Contact</h3>
                            <span class="block mt-2 text-xl text-gray-600 dark:text-gray-400 hover:underline">+977-9841119798</span>
                            <span class="block mt-2 text-xl text-gray-600 dark:text-gray-400 hover:underline">hemantbasnet61@gmail.com</span>
                            <span class="block mt-2 text-xl text-gray-600 dark:text-gray-400 hover:underline">Samakhusi, Kathmandu</span>
                        </div>


                    </div>

                    <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
                    <div>
                        <p class="text-center text-gray-500 dark:text-gray-400 text-xl">© Hemant 2020 - All rights reserved</p>
                    </div>
               
            </footer>

        </>
    )
}

export default Footer