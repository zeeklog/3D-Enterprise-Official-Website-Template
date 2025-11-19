import { Canvas } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[3, 0, -5]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          emissive="#3b82f6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[-3, -1, -3]}>
        <torusGeometry args={[1.2, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[0, 2, -4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// 增强的3D粒子系统
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  const colors = useMemo(() => {
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const color = new THREE.Color();
      const hue = Math.random() * 0.3 + 0.5; // 蓝色到紫色范围
      color.setHSL(hue, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return colors;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.001;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// 摩天大楼轮毂组件
function SkyscraperWithRotatingGears() {
  const buildingRef = useRef<THREE.Group>(null);
  const gear1Ref = useRef<THREE.Mesh>(null);
  const gear2Ref = useRef<THREE.Mesh>(null);
  const gear3Ref = useRef<THREE.Mesh>(null);
  const gear4Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // 轮毂旋转动画
    if (gear1Ref.current) {
      gear1Ref.current.rotation.z = time * 0.5;
    }
    if (gear2Ref.current) {
      gear2Ref.current.rotation.z = -time * 0.5;
    }
    if (gear3Ref.current) {
      gear3Ref.current.rotation.z = time * 0.3;
    }
    if (gear4Ref.current) {
      gear4Ref.current.rotation.z = -time * 0.3;
    }

    // 大楼轻微浮动
    if (buildingRef.current) {
      buildingRef.current.position.y = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group ref={buildingRef} position={[0, -2, -8]}>
      {/* 摩天大楼主体 */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[1.5, 6, 1.5]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.2}
          emissive="#0f172a"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 大楼顶部装饰 */}
      <mesh position={[0, 5.5, 0]}>
        <coneGeometry args={[1.2, 0.8, 8]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.9}
          roughness={0.1}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* 窗户效果 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, 2 - i * 0.7, 0.76]}>
          <planeGeometry args={[1.2, 0.4]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#fbbf24" : "#1e293b"}
            emissive={i % 2 === 0 ? "#fbbf24" : "#000000"}
            emissiveIntensity={i % 2 === 0 ? 0.5 : 0}
          />
        </mesh>
      ))}

      {/* 旋转轮毂1 - 左侧大轮毂 */}
      <group position={[-1.2, 1, 0]}>
        <mesh ref={gear1Ref}>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.9}
            roughness={0.1}
            emissive="#8b5cf6"
            emissiveIntensity={0.6}
          />
        </mesh>
        {/* 轮毂齿 */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.4, Math.sin(angle) * 0.4, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.1, 0.2, 0.15]} />
              <meshStandardMaterial
                color="#a78bfa"
                metalness={0.9}
                roughness={0.1}
                emissive="#a78bfa"
                emissiveIntensity={0.4}
              />
            </mesh>
          );
        })}
      </group>

      {/* 旋转轮毂2 - 右侧大轮毂 */}
      <group position={[1.2, 1, 0]}>
        <mesh ref={gear2Ref}>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.9}
            roughness={0.1}
            emissive="#06b6d4"
            emissiveIntensity={0.6}
          />
        </mesh>
        {/* 轮毂齿 */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.4, Math.sin(angle) * 0.4, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.1, 0.2, 0.15]} />
              <meshStandardMaterial
                color="#22d3ee"
                metalness={0.9}
                roughness={0.1}
                emissive="#22d3ee"
                emissiveIntensity={0.4}
              />
            </mesh>
          );
        })}
      </group>

      {/* 旋转轮毂3 - 顶部小轮毂 */}
      <group position={[-0.6, 3.5, 0.8]}>
        <mesh ref={gear3Ref}>
          <torusGeometry args={[0.25, 0.1, 12, 24]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.9}
            roughness={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.6}
          />
        </mesh>
        {/* 轮毂齿 */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.25, Math.sin(angle) * 0.25, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.08, 0.15, 0.1]} />
              <meshStandardMaterial
                color="#60a5fa"
                metalness={0.9}
                roughness={0.1}
                emissive="#60a5fa"
                emissiveIntensity={0.4}
              />
            </mesh>
          );
        })}
      </group>

      {/* 旋转轮毂4 - 顶部小轮毂 */}
      <group position={[0.6, 3.5, 0.8]}>
        <mesh ref={gear4Ref}>
          <torusGeometry args={[0.25, 0.1, 12, 24]} />
          <meshStandardMaterial
            color="#f59e0b"
            metalness={0.9}
            roughness={0.1}
            emissive="#f59e0b"
            emissiveIntensity={0.6}
          />
        </mesh>
        {/* 轮毂齿 */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.25, Math.sin(angle) * 0.25, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.08, 0.15, 0.1]} />
              <meshStandardMaterial
                color="#fbbf24"
                metalness={0.9}
                roughness={0.1}
                emissive="#fbbf24"
                emissiveIntensity={0.4}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <Sparkles
        count={100}
        scale={10}
        size={2}
        speed={0.4}
        opacity={0.6}
        color="#3b82f6"
      />
      
      <AnimatedSphere />
      <AnimatedTorus />
      <AnimatedBox />
    </>
  );
}

const Hero3DBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
