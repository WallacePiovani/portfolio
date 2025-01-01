/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import { myProjects } from "../constants"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const projectsCount = myProjects.length

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(0);

    const currentProject = myProjects[selectedProject];
    const handleNavigation = (direction) => {
        setSelectedProject ((prevIndex) =>{
            if(direction === 'previous') {
                return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
            }
        }) 
    }

    return (
        <section className="sm:px-10 px-5 my-24">
            <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient">Meus Trabalhos</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="Spotlight" className="w-full h-96 object-cover rounded-xl"/>
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src="assets/react.svg" alt="logo" className="w-10 h-10 shadow-sm" /> {/* {currentProject.logo} */}
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold">{currentProject.title}</p>
                        <p className="">{currentProject.desc}</p>
                        <p className="">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.nome} className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                        <a className="flex items-center gap-2 cursor-pointer text-white-600 " href={currentProject.href} target="_blank" rel="noopener noreferrer">
                            <p>Acessar projeto</p>
                            <img src="assets/arrow-up.png" alt="Arrow up" className="w-3 h-3" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() =>{
                            handleNavigation('previous')
                        }}>
                            <img src="assets/left-arrow.png" alt="Left arrow" className="w-4 h-4"/>
                        </button>
                        <button className="arrow-btn" onClick={() =>{
                            handleNavigation('next')
                        }}>
                            <img src="assets/right-arrow.png" alt="Right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[6, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}> 
                            <group scale={2} position={[0, -2.9, -0.4]} rotation={[0, -0.1, 0]}>
                                <DemoComputer texture={currentProject.texture}/>
                            </group>
                            </Suspense>
                        </Center>
                        <OrbitControls 
                            maxPolarAngle={Math.PI / 2}
                            enableZoom={false}
                            enablePan={false}
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects