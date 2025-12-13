import { Canvas } from "@react-three/fiber";
import React from "react";
import Nav from "./components/Nav";
import Buttons from "./components/Buttons";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

import Cyl from "./Cyl";

const App = () => {

  return (
    <>
   
    
    <Canvas flat camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>

      <Bloom
      mipmapBlur

        intensity={20.0} // The bloom intensity.
        luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
       
      />
       
    </EffectComposer>
    
    </Canvas >

 
    </>
  );
};

export default App;
