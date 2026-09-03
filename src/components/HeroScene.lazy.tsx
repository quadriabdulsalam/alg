import { Float, Line, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

const nodes: [number, number, number][] = [
  [-1.7, .9, 0], [-.9, 1.65, .2], [0, 1.05, -.2], [1.1, 1.55, .1], [1.75, .65, 0],
  [-1.55, -.35, .2], [-.55, .15, -.1], [.55, -.45, .25], [1.55, -.3, -.1],
  [-1.1, -1.35, 0], [0, -1.55, .2], [1.15, -1.3, 0],
];

function Network() {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * .08;
    group.current.rotation.x = state.pointer.y * .08;
    group.current.rotation.z = -state.pointer.x * .06;
  });
  return (
    <Float speed={1.1} rotationIntensity={.15} floatIntensity={.35}>
      <group ref={group}>
        <Line points={nodes} color="#268cff" lineWidth={1.2} transparent opacity={.72} />
        {nodes.map((node, index) => (
          <Sphere key={index} args={[index % 3 === 0 ? .11 : .065, 16, 16]} position={node}>
            <meshStandardMaterial color={index < 6 ? "#7448ff" : "#18d8f2"} emissive={index < 6 ? "#5531ca" : "#0babc7"} emissiveIntensity={1.2} />
          </Sphere>
        ))}
        <mesh>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#5e55e8" wireframe transparent opacity={.13} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 48 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={.7} />
      <pointLight color="#20d9f3" intensity={18} position={[3, 2, 4]} />
      <pointLight color="#6a42e9" intensity={14} position={[-3, -2, 2]} />
      <Network />
    </Canvas>
  );
}