import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { meshBounds, OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Computers = () => {
  const computer=useGLTF('./desktop_pc/scene.gltf') //from sketchfab
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={4} position={[0, -1, 1]} />
      <pointLight intensity={3} distance={10} decay={0.5}  position={[1, -2.5, 2.5]} />
      <pointLight intensity={2} distance={10} decay={0.7} position={[2,-3,-2.7]}/>

      <primitive
         object={computer.scene}  
         scale={0.70}
         position={[0,-3.25,-1.2]} 
         rotation={[-0.01,-0.2,-0.1]}   
      />
    </mesh>
  )
}

const ComputersCanvas=()=>{
  return(
    <Canvas frameloop="demand" shadows camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>    
        <OrbitControls  enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}     
         />  
         <Computers/>                                                                                                                                                                                                                                                                                                                                                                                                                                                   

      </Suspense>

      <Preload all/>

    </Canvas>
  )
}

export default ComputersCanvas