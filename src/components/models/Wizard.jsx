"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization

  const { nodes, materials } = useGLTF('models15/19.glb')

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.rotation.y =
      -0.1 + Math.sin(state.clock.elapsedTime) * 0.25;
  });


  return (
    <group {...props} dispose={null}>
          <group ref={modelRef}>
      <group rotation={[Math.PI / -2.3, 0.01, -0.6]}>
        <group scale={-0.93}>
          <group scale={0.0075}>
            <group rotation={[Math.PI, 0, 0]} scale={110.41}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench_BenchConcreteBase_0.geometry}
                material={materials.BenchConcreteBase}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench_BenchWood_0.geometry}
                material={materials.BenchWood}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0001.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0002.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0003.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0004.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0005.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CeillingWire_CeillingWire_0006.geometry}
                material={materials.CeillingWire}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lamp_Emissive_0.geometry}
                material={materials.Emissive}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lamp_Lamp_0.geometry}
                material={materials.Lamp}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LampBase_CeillingWire_0.geometry}
                material={materials.CeillingWire}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LampBase_Emissive_0.geometry}
                material={materials.Emissive}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PaitingsInside_001_Painting_0.geometry}
              material={materials.Painting}
              rotation={[-Math.PI / 2, 0.099, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PaitingsOutside_Painting_0.geometry}
              material={materials.Painting}
              rotation={[-Math.PI / 2, 0.099, 0]}
              scale={100}
            />
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Ceilling_0.geometry}
                material={materials.Ceilling}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Emissive_0.geometry}
                material={materials.Emissive}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Floor_0.geometry}
                material={materials.Floor}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls_Walls_0.geometry}
                material={materials.Walls}
              />
 
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d5d7a45d-0f3d-443e-a721-a52008c88198'].geometry}
        material={materials['tripo_mat_d5d7a45d-0f3d-443e-a721-a52008c88198']}
        position={[-7.5, 7.71, 1.095]}
        rotation={[-0.008, -0.046, 0.05]}
        scale={[6.91, 21.253, 7.332]}
      />
    </group>
            </group>
          </group>
        </group>
      </group>
</group>
  );
})
export default Wizard;
useGLTF.preload("/models15/19.glb");