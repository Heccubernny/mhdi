import { useRouter } from "next/router";
import FAQ from '../../components/FAQ/FAQ'

const About = () =>{
    const router = useRouter()
    // const {} = router.query
    return(
        <div>
            <FAQ></FAQ>
        </div>
    )
}

export default About;