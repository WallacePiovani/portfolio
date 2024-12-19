import { TypeAnimation } from "react-type-animation"
const Typing = () => {
    return (
        <>
        {/* Added a "type" class to the TypeAnimation component and adjusted the css to style the cursor and make it work on other browsers
            obs: visibility: hidden; worked, before it was opacity: 0;.
        */}
            <TypeAnimation
                className="type text-gray_gradient text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalSans font-black"
                sequence={[
                    'Dev Full-stack',2000
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
            />
            <style global jsx>{`
                .type::after {
                    content: '|';
                    animation: cursor 1.1s infinite step-start;
                }
                @keyframes cursor {
                    50% {
                        visibility: hidden;
                    }
                }
            `}</style>
        </>
    )
}

export default Typing