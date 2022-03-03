import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Why from "../Why_us/Why";
import Get_Started from "../CTA/Get_Started"
import Notifier from "../CTA/Notifier"
import Footer from "../Footer/Footer"
// import Testimonial from "../testimonial/testimonial";
import GetInTouch from "../Contact_Us/GetinTouch";
export default function Layout(){
    return(
        <div>
            <Header></Header>
            <Notifier></Notifier>
            <Hero></Hero>
            <Why></Why>
            {/* <Testimonial></Testimonial> */}
            <GetInTouch></GetInTouch>
            <Get_Started></Get_Started>
            <Footer></Footer>        
</div>
    )
}