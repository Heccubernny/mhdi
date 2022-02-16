import fourofour from "../../public/images/404.svg"
import Image from "next/image"
import Link from "next/link"
export default function Fourofour(){
    return(
        <div>
            <div className="items-center justify-center pl-6 pr-6 flex-col h-auto flex ml-auto mr-auto bg-opacity-100">
                <div className="max-w-lg block bg-opacity-100">
                    <Image 
                    className="h-auto max-w-full block align-middle border-solid"
                    src = {fourofour}
                    alt = "404 Image"
                    />
                </div>

                <div className="text-center">
                    <h1 className="sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-3 text-center">Page Not Found!!!</h1>
                    <p className="mb-5 font-normal md:text-lg text-opacity-100 bg-gray-500 text-center">Oops! Looks like you followed a bad link.</p>
                    <Link href = {"/"} className="text-center font-medium text-opacity-100 text-sm px-5 py-3 rounded-lg items-center inline-flex mr-3">Go To Home</Link>
                </div>

            </div>
        </div>
    )
}