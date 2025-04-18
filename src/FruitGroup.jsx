import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Apple from './Apple';
import Banana from './Banana';
import Orange from './Orange';
import Melon from './Melon';

const FruitGroup = () => {

  const fruitGroupRef = useRef();
  
  useFrame(({clock}) => {
    fruitGroupRef.current.rotation.z = clock.elapsedTime / 5;
  });

  return (
    <group ref={fruitGroupRef} position={[6.5, 3.25, -1]}>
      <group position={[1,1,0]} rotation={[0, 0, 2.5]}>
        <Apple />
        <Banana />
        <Melon />
        <Orange />
      </group>
  
      <group position={[0,1,0]} rotation={[0, 0, 5]}>
        <Apple />
        <Banana />
        <Melon />
        <Orange />
      </group>
  
      <group position={[-1,1,0]} rotation={[0, 0, 6.5]}>
        <Apple />
        <Banana />
        <Melon />
        <Orange />
      </group>
    </group>
  );
};

export default FruitGroup;