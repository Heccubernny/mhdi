import Image from "next/image";
import "./GetinTouch.module.css"

export default function GetInTouch(){
    return(
        <div>
            <div>
                <div className="my-3 text-center">
                    <h1 className="sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-3 text-center text-opaEmail-50">Get In Touch With Us.</h1>
                    <p className="mb-5 font-normal md:text-lg text-opaEmail-100  text-center">Will you love to speak with our medical practitioner?</p>
                    <span className="text-sm">Please feel free to fill the form.</span>
                </div>
                <form className="m-7 w-full max-w-lg max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John"/>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Papa"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Email">
                            Email Address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Email" type="email" placeholder="help@mail.com"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Address">
                           Address
                        </label>
                        <div className="relative">
                            <input className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Address">
                            </input>

                        </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Message">
                            Message
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Message" type="text" placeholder="What will your love to share with us?"/>
                        <p className="text-gray-600 text-xs italic">Share all so we can help you.</p>
                        </div>
                    </div>
                    
                    </form>
            </div>
        </div>
    )
}