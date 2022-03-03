import Image from "next/image"
import about_us_img from "../../../public/images/illustrator/undraw_medicine_b-1-ol.svg"
export default function About_details(){
    return(
        <div>
            <div className="m-7 w-full max-w-lg max-w-7xl mx-auto px-4 sm:px-6">
                <div className="w-1/2">
                    <Image src={about_us_img}>
                        
                    </Image>

                </div>
                <div className="w-1/2"></div>
            </div>
            
        </div>
    )
}