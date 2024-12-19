import { TypeAnimation } from "react-type-animation"
const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
                'Dev Full-stack',1000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-gray_gradient text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black"
        />
    )
}

export default Typing