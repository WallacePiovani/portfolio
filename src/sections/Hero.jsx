import Typing from "../components/Typing";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import Button from "../components/Button";
import ButtonSocial from "../components/ButtonSocial";
import ScrollIndicator from "../components/ScrollIndicator";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-5 px-5 sm:px-10 w-full max-w-screen-sm sm:max-w-screen-md">
                <p className="sm:text-4xl text-2xl font-medium text-white text-center font-generalSans">Olá, meu nome é Wallace </p>
                <Typing />
                <div className="flex flex-col justify-center items-center gap-5 mt-5 sm:flex-row">
                    <Button />
                    <div className="flex justify-center items-center gap-5">
                        <ButtonSocial icons="github" link="https://github.com/wallacepiovani" />
                        <ButtonSocial icons="instagram" link="https://www.instagram.com/" />
                        <ButtonSocial icons="x" link="https://twitter.com/" />
                    </div>
                </div>
            </div>
                <div className="w-full h-full absolute inset-0 z-0">
                    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 75 }} >
                        <Suspense fallback={<CanvasLoader />}>
                            <StarsBackground />
                        </Suspense>
                        <OrbitControls 
                            minDistance={1}
                            maxDistance={5}
                            enablePan={false}
                            enableZoom={true}
                            enableRotate={true}
                        />
                    </Canvas>
                </div>
                <div className="absolute bottom-0 w-full flex justify-center mb-10 z-20">
                    <ScrollIndicator /> 
                </div>
        </section>
        )
    }
    function StarsBackground() {
        const ref = useRef();
        const [stars] = useState(() => random.inSphere(new Float32Array(6000), { radius: 4.2 }));
    
        useFrame((state, delta) => {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        });
    
        return (
            <group ref={ref}>
                <Points positions={stars} stride={3} frustumCulled={false}>
                    <PointMaterial
                        transparent
                        color="white"
                        size={0.01}
                        sizeAttenuation={true}
                        depthWrite={false}
                    />
                </Points>
            </group>
        );
    }
    export default Hero