import ButtonSocial from "../components/ButtonSocial"

const Footer = () => {
    return (
        <section className="sm:px-10 px-5 pt-4 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="flex gap-3">
                <ButtonSocial icons="github" link="https://github.com/wallacepiovani" />
                <ButtonSocial icons="linkedin" link="https://linkedin.com/in/wallacepiovani/" />
                <ButtonSocial icons="x" link="https://x.com/wallacepiovani" />
            </div>
            <p className="text-white-500">&copy;  2025 - Wallace Piovani.</p>
        </section>
    )
}

export default Footer