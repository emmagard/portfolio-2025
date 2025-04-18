import React from 'react';
import { Canvas } from '@react-three/fiber';
import Banana from "./Banana";

const Contact = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute">
        <h2 className="text-6xl font-semibold pb-[40px] mt-[30px]">Contact</h2>

        <dl>
          <dt className="text-4xl font-semibold mb-2 text-black">Email: </dt>
          <dd className="text-4xl mb-[40px]">emmagard@gmail.com</dd>

          <dt className="text-4xl font-semibold mb-5 text-black">GitHub: </dt>
          <dd className="text-4xl mb-[40px]">https://github.com/emmagard</dd>

          <dt className="text-4xl font-semibold mb-5 text-black">LinkedIn: </dt>
          <dd className="text-4xl mb-[40px]"><a href="">https://www.linkedin.com/in/emmagard/</a></dd>
        </dl>
      </div>

      <Canvas>
        <ambientLight intensity={0.7} />
        <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
        <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.1}/>
        <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
        <Banana position={[1.5,-1.75,1]} rotation={[0, 0, 7]}/>
      </Canvas>
    </section>
  );
}

export default Contact;