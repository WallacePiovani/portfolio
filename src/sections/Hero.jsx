    import Typing from "../components/Typing"
    import { Points, PointMaterial } from "@react-three/drei";
    import { Canvas, useFrame } from "@react-three/fiber";
    import { Suspense } from "react";
    import CanvasLoader from "../components/CanvasLoader"
    import { useRef, useState } from "react";
    import * as random from "maath/random/dist/maath-random.esm";
;
    const Hero = () => {
        return (
            <section className="min-h-screen w-full flex flex-col relative">
                <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-1 z-10">
                    <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalSans">Olá, meu nome é Wallace </p>
                    <Typing />
                </div>
                <div className="w-full h-full absolute inset-0 z-0">
                    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 75 }} >
                        <Suspense fallback={<CanvasLoader />}>
                            <StarsBackground />
                        </Suspense>
                    </Canvas>
                </div>
            </section>
        )
    }
    function StarsBackground() {
        const ref = useRef();
        // Gerando posições aleatórias para as estrelas dentro de uma esfera
        const [stars] = useState(() => random.inSphere(new Float32Array(5000), { radius: 4.2 }));
    
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