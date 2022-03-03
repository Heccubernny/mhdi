export default function Pricing(){
    return(
        <div>
            <section>
                <div className="skew skew-top mr-forRadius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
                    </svg>
                </div>
                <div className="skew skew-top ml-forRadius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
                    </svg>
                </div>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <span className="text-green-600 font-bold">Dolor sit amet consectutar</span>
                        <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">Choose your best plan</h2>
                        <p className="mb-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="inline-block py-1 px-1 bg-white rounded-lg">
                        <button className="mr-1 text-sm py-2 px-4 text-gray-500 hover:text-gray-900 font-bold active:bg-purple-200 active:bg-pink-200">Monthly</button>
                        <button className="text-sm py-2 px-4 text-gray-900 bg-gray-50 rounded-lg shadow font-bold">Yearly</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
                        <div className="p-8 bg-white shadow rounded shadow-2xl rounded-2xl">
                            <h4 className="mb-2 text-2xl font-bold font-heading">Beginner</h4>
                            <span className="text-6xl font-bold">Free</span>
                            <p className="mt-3 mb-6 text-gray-500 leading-loose">Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.</p>
                            <ul className="mb-6 text-gray-500">
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Vestibulum viverra</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Morbi mollis metus pretium</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Etiam lectus nunc, commodo</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Ut quam nisl mollis id pretium</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Suspendisse bibendum</span>
                            </li>
                            </ul>
                            <a className="inline-block text-center py-2 px-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200 rounded-6xl" href="#">Get Started</a>
                        </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
                        <div className="p-8 bg-green-600 shadow rounded shadow-xl rounded-4xl">
                            <h4 className="mb-2 text-2xl font-bold text-white">Intermediate</h4>
                            <span className="text-6xl font-bold text-white">$24</span>
                            <span className="text-gray-50 text-xs">/month</span>
                            <p className="mt-3 mb-6 leading-loose text-gray-50">Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.</p>
                            <ul className="mb-6 text-gray-50">
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Vestibulum viverra</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Morbi mollis metus pretium</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Etiam lectus nunc, commodo</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Ut quam nisl mollis id pretium</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Suspendisse bibendum</span>
                            </li>
                            </ul>
                            <a className="inline-block text-center py-2 px-4 w-full bg-white hover:bg-gray-50 font-bold leading-loose transition duration-200 rounded-6xl" href="#">Get Started</a>
                        </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                        <div className="p-8 bg-white shadow rounded shadow-2xl rounded-2xl">
                            <h4 className="mb-2 text-2xl font-bold font-heading">Professional</h4>
                            <span className="text-6xl font-bold">$48</span>
                            <span className="text-gray-400 text-xs">/month</span>
                            <p className="mt-3 mb-6 text-gray-500 leading-loose">Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.</p>
                            <ul className="mb-6 text-gray-500">
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Vestibulum viverra</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Morbi mollis metus pretium</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Etiam lectus nunc, commodo</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Ut quam nisl mollis id pretium</span>
                            </li>
                            <li className="mb-2 flex">
                                <svg className="mr-2 w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Suspendisse bibendum</span>
                            </li>
                            </ul>
                            <a className="inline-block text-center py-2 px-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200 rounded-6xl" href="#">Get Started</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="skew skew-bottom mr-forRadius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
                    </svg>
                </div>
                <div className="skew skew-bottom ml-forRadius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
                    </svg>
                </div>
            </section>
        </div>
    )
}