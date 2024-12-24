import ScrollAnimation from "../assets/ScrollAnimation.json";
import Lottie from "lottie-react";
import { Link } from "react-scroll";


const ScrollIndicator = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <Link
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}>
                <Lottie 
                animationData={ScrollAnimation} 
                loop={true} 
                style={{ width: "100px", height: "100px" }} 
                className="text-neutral-400 cursor-pointer"/>
            </Link>
        </div>
    );
};

export default ScrollIndicator;
