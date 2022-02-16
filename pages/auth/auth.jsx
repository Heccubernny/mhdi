import Image from 'next/image'
export default function Auth(){
    return(
        <div>
            <section className="bg-gray-900">
                <div className="flex flexWrap">
                    <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
                    <div className="maxW-md mx-auto">
                        <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
                        <a className="textWhite text-3xl font-bold leading-none" href="#">
                            <Image className="h-12" src="atis-assets/logo/atis/atis-colorWhite.svg" alt="" width="auto"></Image>
                        </a>
                        <a className="py-2 px-6 text-xs roundedL-xl rounded-t-xl bg-purple-600 hover:bg-purple-700 textWhite font-bold transition duration-200" href="#">Sign In</a>
                        </div>
                        <div>
                        <div className="mb-6 px-3">
                            <span className="text-gray-500">Sign Up</span>
                            <h3 className="text-2xl font-bold textWhite">Create an account</h3>
                        </div>
                        <form action="">
                            <div className="flex flexWrap">
                            <div className="mb-3 w-full lg:w-1/2 px-2">
                                <input className="w-full p-4 text-xs text-gray-50 bg-gray-800 outline-none rounded" type="text" placeholder="First Name"/>
                            </div>
                            <div className="mb-3 w-full lg:w-1/2 px-2">
                                <input className="w-full p-4 text-xs text-gray-50 bg-gray-800 outline-none rounded" type="text" placeholder="Last Name"/>
                            </div>
                            </div>
                            <div className="mb-3 flex p-4 mx-2 bg-gray-800 rounded">
                            <input className="w-full text-xs text-gray-50 bg-gray-800 outline-none" type="email" placeholder="name@email.com"/>
                            <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                            </svg>
                            </div>
                            <div className="mb-6 flex p-4 mx-2 bg-gray-800 rounded">
                            <input className="w-full text-xs text-gray-50 bg-gray-800 outline-none" type="password" placeholder="Enter your password"/>
                            <button>
                                <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </button>
                            </div>
                            <div className="px-3 text-center">
                            <button className="mb-2 w-full py-4 bg-pink-600 hover:bg-pink-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign Up</button>
                            <span className="text-gray-400 text-xs">
                                <span>Already have an account?</span>
                                <a className="text-pink-600 hover:underline" href="#">Sign In</a>
                            </span>
                            <p className="mt-16 text-xs text-gray-400"><a className="underline hover:text-gray-500" href="#">Policy privacy</a> and <a className="underline hover:text-gray-500" href="#">Terms of Use</a></p>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="hidden lg:block relative w-full lg:w-1/2 bg-purple-600">
                    <div className="absolute bottom-0 inset-x-0 mx-auto mb-12 maxW-xl text-center" style="z-index: 10;">
                        <Image className="lg:maxW-xl mx-auto" src="atis-assets/illustrations/pablo-coming-soon-flat-color.png" alt=""></Image>
                        <h2 className="mb-2 text-2xl textWhite font-bold">So much more than a business analytics tool</h2>
                        <div className="maxWLg mx-auto">
                        <p className="mb-6 text-gray-50 leadingLoose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                        </div>
                        <a className="inline-block py-2 px-6 leadingLoose rounded-t-xl roundedL-xl bgWhite hover:bg-gray-100 transition duration-200 font-bold" href="#">Get Started</a>
                        <div className="mt-12 flex justify-center space-x-3">
                        <button className="p-1 bg-purple-500 rounded-full"></button>
                        <button className="p-1 bg-purple-500 rounded-full"></button>
                        <button className="p-1 bgWhite rounded-full"></button>
                        <button className="p-1 bg-purple-500 rounded-full"></button>
                        </div>
                    </div>
                    </div>
                    <div className="lg:hidden bg-green-600 w-full">
                    <div className="relative w-full">
                        <Image className="relative mx-auto maxW-sm mt-4 mb-4 block" src="atis-assets/illustrations/pablo-coming-soon-flat-color.png" alt=""></Image>
                        <div className="flex justify-center space-x-3">
                        <button className="p-1 bg-purple-500 rounded-full"></button>
                        <button className="p-1 bg-purple-500 rounded-full"></button>
                        <button className="p-1 bgWhite rounded-full"></button>
                        <button className="p-1 bg-purple-500 rounded-full"></button>
                        </div>
                    </div>
                    <div className="py-10 px-3 text-center" style="z-index: 10;">
                        <h2 className="mb-2 text-2xl textWhite font-bold">So much more than a business analytics tool</h2>
                        <p className="mb-6 text-gray-50 leadingLoose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                        <a className="py-2 px-6 rounded-t-xl roundedL-xl roundedL-xl bgWhite hover:bg-gray-500 text-gray-600 hover:textWhite transition duration-200 font-bold" href="#">Get Started</a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}