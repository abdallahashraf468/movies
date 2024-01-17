import { aboutcover } from "../../assets/index"
import { useNavigate } from 'react-router-dom';
import Home from "../Home/Home"
const About = () => {
    const navigate = useNavigate()
    return (
        <div className=" ">
            <p className=" text-center font-bold text-xl "  onClick={() => navigate(`/list`)}>
                Welcome.
                Millions of movies, TV shows and people to discover. Explore now.</p>
            <img className="mx-12 mt-4 mb-20" src={aboutcover} alt="" />

<Home/>
        </div>
    );
}

export default About;
