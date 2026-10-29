import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function Chrome({ children, ...p }: { children: React.ReactNode } & Record<string, unknown>) {
  return <group {...p}>{children}</group>;
}

function Objects() {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  useFrame((s, dt) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, s.pointer.x * 0.5, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -s.pointer.y * 0.3, 0.05);
    if (knot.current) {
      knot.current.rotation.x += dt * 0.25;
      knot.current.rotation.y += dt * 0.35;
    }
  });
  const chrome = { metalness: 1, roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.6 } as const;
  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={knot} scale={1.15}>
          <torusKnotGeometry args={[0.85, 0.3, 280, 40, 2, 3]} />
          <meshPhysicalMaterial color="#d9dbe1" {...chrome} />
        </mesh>
      </Float>
      <Float speed={2.2} floatIntensity={2}>
        <Chrome position={[-2.1, 1.3, -0.6]}>
          <mesh><sphereGeometry args={[0.38, 64, 64]} /><meshPhysicalMaterial color="#ffffff" {...chrome} roughness={0.02} /></mesh>
        </Chrome>
      </Float>
      <Float speed={1.8} floatIntensity={2.4}>
        <Chrome position={[2.2, -1.2, -0.3]}>
          <mesh><sphereGeometry args={[0.55, 64, 64]} /><meshPhysicalMaterial color="#0a0a0d" metalness={1} roughness={0.12} clearcoat={1} envMapIntensity={1.8} /></mesh>
        </Chrome>
      </Float>
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh position={[1.9, 1.6, -1]} rotation={[1.1, 0.4, 0]}>
          <torusGeometry args={[0.45, 0.12, 32, 80]} />
          <meshPhysicalMaterial color="#c9ccd4" {...chrome} />
        </mesh>
      </Float>
      <Float speed={1.9} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[-1.9, -1.4, -0.2]} rotation={[0.6, 0.8, 0.2]}>
          <octahedronGeometry args={[0.42]} />
          <meshPhysicalMaterial color="#eef0f5" {...chrome} roughness={0.15} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas dpr={[1, 1.8]} camera={{ position: [0, 0, 7], fov: 40 }} gl={{ alpha: true, antialias: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <Objects />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={5} position={[0, 5, -4]} scale={[14, 3, 1]} />
          <Lightformer form="rect" intensity={3} position={[-6, 0, 2]} scale={[2, 8, 1]} />
          <Lightformer form="rect" intensity={3} position={[6, 1, 3]} scale={[2, 8, 1]} />
          <Lightformer form="ring" intensity={4} position={[0, 0, 6]} scale={4} color="#cfd8ff" />
          <Lightformer form="rect" intensity={1.5} position={[0, -5, 0]} scale={[12, 2, 1]} />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
