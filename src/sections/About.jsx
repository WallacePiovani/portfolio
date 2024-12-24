import Globe from 'react-globe.gl';
import Button from  '../components/Button';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section className='sm:px-10 px-5 mt-24' id="about">
            <div className="grid xl:grid-cols-3 xsl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="" alt=""></img>
                        <div>
                            <p className="grid-header_text">Olá, eu sou o Wallace</p>
                            <p className="grid-secondary_text">Sou desenvolvedor Full-Stack e trabalho com diversas tecnologias, possibilitando a criação de sites dinâmicos e responsivos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="" alt="" />
                        <div>
                            <p className="grid-header_text">Tech Stack</p>
                            <p className="grid-secondary_text">Sou especializados em linguagens e Frameworks que possibilitam a criação de sites dinâmicos e responsivos. </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className='grid-header_text'>Trabalho remotamente em qualquer lugar</p>
                            <p className='grid-secondary_text'>Estou morando no Brasil, com disponibilidade para trabalho remoto em qualquer fuso horário.</p>
                            <Link 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}>
                                <Button name="Entrar em contato" isBeam containerClass="w-full mt-10" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
