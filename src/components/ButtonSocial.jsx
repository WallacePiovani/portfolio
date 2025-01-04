import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const ButtonSocial = ({icons, link}) => {
    
    const getIcons = () => {
        switch (icons) {
            case 'github':
                return <FaGithub size={20} />
            case 'x':
                return <FaXTwitter size={20}/>
            case 'linkedin':
                return <FaLinkedin size={20}/>
            default:
                return null   
        }
    }

    return (
        <div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-neutral-500 p-3 rounded-full hover:bg-neutral-500 transition-colors text-center flex items-center gap-2">
                {getIcons()}
            </a>
        </div>
    )
}

export default ButtonSocial