import ScrollAnimation from "../assets/ScrollAnimation.json";
import Lottie from "lottie-react";

const ScrollIndicator = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <Lottie animationData={ScrollAnimation} loop={true} style={{ width: "100px", height: "100px" }} className="text-neutral-400"/>
        </div>
    );
};

export default ScrollIndicator;
