import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

const ParticleRing = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Canvas
        camera={{ position: [10, 10, 10] }} // Adjusted camera position for a good view
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <a href="/Portfolio" style={{ backgroundColor: '#10B981', color: 'white', padding: '12px 24px', borderRadius: '9999px', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>
          See My Work
        </a>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.x = clock.getElapsedTime() * -0.05; // Rotate around the Y-axis
      ref.current.rotation.z = clock.getElapsedTime() * -0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} value={point.binaryValue} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} value={point.binaryValue} />
      ))}
    </group>
  );
};

const Point = ({ position, value }) => {
  return (
    <Text
      position={position}
      fontSize={0.5} // Smaller font size
      color="white"
      anchorX="center"
      anchorY="middle"
      rotation={[0, 1, 0]}
    >
      {value}
    </Text>
  );
};

export default ParticleRing;
