import { FaDownload } from "react-icons/fa6";

const Button = () => {
    return (
        <a className="text-white border-2 border-neutral-500 px-6 py-3 rounded-md hover:bg-neutral-500 transition-colors text-center flex items-center gap-2">
            Download CV
            <FaDownload />
        </a>
    )
}

export default Button