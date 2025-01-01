import Globe from 'react-globe.gl';
import Button from  '../components/Button';
import { Link } from 'react-scroll';
import { useState } from 'react';
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () =>{
        navigator.clipboard.writeText("whspiovani@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        },2000);
    }
    
    return (
        <section className='sm:px-10 px-5 mt-24' id="about">
            <div className="grid xl:grid-cols-3 xsl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="First grid image with a icon of a person" className='w-full sm:h-[276px] h-fit object-contain'></img>
                        <div>
                            <p className="grid-header_text">Olá, eu sou o Wallace</p>
                            <p className="grid-secondary_text">Sou desenvolvedor Full-Stack e trabalho com diversas tecnologias, possibilitando a criação de sites dinâmicos e responsivos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="" className='w-full sm:h-[276px] h-fit object-contain'/>
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
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="" className='w-full sm:h-[266px] h-fit object-contain'/>
                        <div>
                            <p className="grid-header_text">Meu Trabalho</p>
                            <p className="grid-secondary_text ">Desenvolvo aplicações funcionais e intuitivas, buscando conectar pessoas e soluções através da tecnologia. Gosto de transformar ideias em soluções práticas através de código.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                        <div className="space-y-2">
                            <p className="grid-secondary_text text-center">Entre em contato</p>
                            <div className="cursor-pointer flex justify-center items-center align-center gap-2" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="Copiar e-mail" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">whspiovani@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
